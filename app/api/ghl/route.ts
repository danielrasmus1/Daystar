import { NextRequest, NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

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
  if (!GHL_API_KEY) throw new Error("GHL_API_KEY environment variable is not set");
  if (!GHL_LOCATION_ID) throw new Error("GHL_LOCATION_ID environment variable is not set");

  const nameParts = payload.firstName.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || payload.lastName || "";

  const body: Record<string, unknown> = {
    locationId: GHL_LOCATION_ID,
    firstName,
    lastName,
    email: payload.email,
    source: "Daystar Website",
    tags: payload.tags ?? [],
  };

  if (payload.phone) body.phone = payload.phone;

  const customFields: { key: string; field_value: string }[] = [];

  if (payload.quizScore !== undefined) {
    customFields.push(
      { key: "quiz_score", field_value: String(payload.quizScore) },
      { key: "quiz_result", field_value: payload.quizResult ?? "" }
    );
  }

  if (payload.message) {
    customFields.push({ key: "booking_message", field_value: payload.message });
  }

  // Only include customFields if there are values — GHL rejects empty arrays
  if (customFields.length > 0) {
    body.customFields = customFields;
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
    console.error(`[v0] GHL upsert failed — status: ${res.status} — body:`, err);
    throw new Error(`GHL upsert failed: ${res.status} ${err}`);
  }

  return res.json();
}

async function triggerWorkflow(contactId: string, workflowId: string) {
  if (!GHL_API_KEY) return;
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

export async function GET() {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    return NextResponse.json({
      status: "misconfigured",
      GHL_API_KEY: apiKey ? "set" : "MISSING",
      GHL_LOCATION_ID: locationId ? "set" : "MISSING",
    }, { status: 500 });
  }

  // Test the connection by fetching the location details
  const res = await fetch(`${GHL_API_BASE}/locations/${locationId}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: "2021-07-28",
    },
  });

  const data = await res.text();

  return NextResponse.json({
    status: res.ok ? "connected" : "auth_failed",
    ghl_status: res.status,
    GHL_API_KEY: "set",
    GHL_LOCATION_ID: locationId,
    response: res.ok ? "GHL connection successful" : data,
  }, { status: res.ok ? 200 : 401 });
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
