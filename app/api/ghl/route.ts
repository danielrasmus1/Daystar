import { NextRequest, NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY!;

interface GHLPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  source: "quiz" | "booking";
  quizScore?: number;
  quizResult?: string;
  message?: string;
  tags?: string[];
}

async function upsertContact(payload: GHLPayload) {
  const nameParts = payload.firstName.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || payload.lastName || "";

  const body: Record<string, unknown> = {
    firstName,
    lastName,
    email: payload.email,
    source: "public api",
    tags: payload.tags ?? [],
    customFields: [] as { key: string; field_value: string }[],
  };

  if (payload.phone) body.phone = payload.phone;

  if (payload.quizScore !== undefined) {
    (body.customFields as { key: string; field_value: string }[]).push(
      { key: "quiz_score", field_value: String(payload.quizScore) },
      { key: "quiz_result", field_value: payload.quizResult ?? "" }
    );
  }

  if (payload.message) {
    (body.customFields as { key: string; field_value: string }[]).push(
      { key: "booking_message", field_value: payload.message }
    );
  }

  const res = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GHL upsert failed: ${res.status} ${err}`);
  }

  return res.json();
}

async function triggerWorkflow(contactId: string, workflowId: string) {
  const res = await fetch(
    `${GHL_API_BASE}/contacts/${contactId}/workflow/${workflowId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({}),
    }
  );

  // Non-fatal if workflow trigger fails — contact was already created
  if (!res.ok) {
    console.error(`[v0] GHL workflow trigger failed: ${res.status} ${await res.text()}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload: GHLPayload = await req.json();

    if (!payload.email || !payload.firstName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const tags =
      payload.source === "quiz"
        ? ["quiz-lead", `quiz-score-${payload.quizScore ?? "unknown"}`]
        : ["booking-request"];

    const contact = await upsertContact({ ...payload, tags });
    const contactId: string = contact?.contact?.id;

    // Trigger the relevant workflow if a contact ID was returned
    // Workflow IDs can be set as separate env vars per source if needed
    const workflowId =
      payload.source === "quiz"
        ? process.env.GHL_QUIZ_WORKFLOW_ID
        : process.env.GHL_BOOKING_WORKFLOW_ID;

    if (contactId && workflowId) {
      await triggerWorkflow(contactId, workflowId);
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("[v0] GHL API error:", err);
    return NextResponse.json({ error: "Failed to sync with CRM" }, { status: 500 });
  }
}
