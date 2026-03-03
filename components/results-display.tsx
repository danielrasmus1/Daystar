import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Download,
  Calendar,
  AlertCircle,
  TrendingDown,
  Award,
  Shield,
  X,
  ArrowRight,
  BookOpen,
  Clock,
  Lightbulb,
  Heart,
} from "lucide-react";
import type { QuizResult } from "@/lib/quiz-data";
import Link from "next/link";

interface ResultsDisplayProps {
  result: QuizResult;
  totalScore: number;
}

export function ResultsDisplay({ result, totalScore }: ResultsDisplayProps) {
  const getResultBadge = (type: string) => {
    switch (type) {
      case "controlled":
        return { color: "bg-primary/10 text-primary border-primary/20", icon: CheckCircle2 };
      case "risk":
        return { color: "bg-amber-500/10 text-amber-500 border-amber-500/20", icon: AlertCircle };
      case "overload":
        return { color: "bg-red-500/10 text-red-500 border-red-500/20", icon: TrendingDown };
      default:
        return { color: "bg-muted text-muted-foreground border-border", icon: AlertCircle };
    }
  };

  const badgeInfo = getResultBadge(result.type);
  const BadgeIcon = badgeInfo.icon;

  const consequences =
    result.type === "overload"
      ? [
          "Your cognitive capacity is being depleted faster than it can recover",
          "Decision quality is compromised — you may already be seeing the effects",
          "The people around you are absorbing what the job is producing",
          "Full burnout recovery at this level typically takes 12–18 months minimum",
        ]
      : result.type === "risk"
      ? [
          "Performance will continue to erode without a structural change",
          "The gap between effort and output will keep widening",
          "What looks like a rough patch is a measurable clinical trajectory",
          "Early intervention now is dramatically more effective than late intervention",
        ]
      : [
          "The current pace is not fully sustainable — the data is already showing it",
          "Without attention, warning signs at this level tend to escalate within 6 months",
          "Small adjustments now protect your performance long-term",
          "This is the window where prevention is still cheaper than recovery",
        ];

  // Score-adaptive urgency label
  const urgencyLabel =
    result.type === "overload"
      ? "Immediate action recommended"
      : result.type === "risk"
      ? "Action recommended within 2–4 weeks"
      : "Worth addressing now, before it escalates";

  return (
    <div className="w-full max-w-4xl mx-auto space-y-14">

      {/* ── 1. RESULT HEADER ── */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className={`text-base px-5 py-2.5 ${badgeInfo.color} font-semibold`}>
          <BadgeIcon className="h-4 w-4 mr-2" />
          Your Score: {totalScore}/35
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight font-serif">
          {result.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {result.description}
        </p>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{urgencyLabel}</p>

        {/* Primary CTA — above fold */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Burnout Coaching Session
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent font-semibold" asChild>
            <a href="/rest-up-guide.pdf" download="Rest-Up-Guide-David-Lui.pdf">
              <Download className="mr-2 h-4 w-4" />
              Free Recovery Guide
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Confidential · No employer reporting · Darlington, Sydney or secure online
        </p>
      </div>

      {/* ── 2. WHAT THIS SCORE MEANS ── */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl">What this score typically leads to</CardTitle>
          <CardDescription>Patterns seen at this level when nothing changes:</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {consequences.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ── 3. FREE PDF DOWNLOAD — value before the ask ── */}
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-7 md:p-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Free Download — David Lui</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">Achieve Work-Life Balance in 4 Weeks</h2>
            <p className="text-muted-foreground">A step-by-step clinical guide by David Lui — the same framework used in his burnout coaching sessions.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: Clock, label: "Week 1: Establish the Framework", sub: "Time audit, goal-setting, and your ideal schedule" },
            { icon: Lightbulb, label: "Week 2: Productivity & Time Management", sub: "Eisenhower Matrix, priority windows, task batching" },
            { icon: Shield, label: "Week 3: Boundary-Setting", sub: "With managers, family, and your workspace environment" },
            { icon: Heart, label: "Week 4: The 7 Types of Rest", sub: "Physical, mental, emotional, sensory, social, creative, spiritual" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3 bg-background/60 rounded-lg p-3 border border-border/40">
              <Icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Button size="lg" className="w-full h-13 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <a href="/rest-up-guide.pdf" download="Rest-Up-Guide-David-Lui.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download the Free Guide (PDF)
            </a>
          </Button>
          <p className="text-xs text-center text-muted-foreground">No email required · Instant download · Written by David Lui</p>
        </div>
      </div>

      {/* ── 4. QUICK WINS — immediate value ── */}
      <div className="space-y-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Start Here — Right Now</p>
          <h2 className="text-2xl md:text-3xl font-bold">Three things you can do today</h2>
          <p className="text-muted-foreground mt-1">From David's clinical toolkit — no session required.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "The 3-minute morning boundary",
              body: "Before you open your phone or laptop, write down the one thing that actually needs your best thinking today. Everything else is a small rock — fill in gaps after the big one is done.",
            },
            {
              step: "02",
              title: "Audit your Eisenhower quadrants",
              body: "Take 10 minutes at the end of today and categorise every task on your list into: urgent + important / important but not urgent / urgent but not important / neither. Most people are drowning in Q3 tasks that should be delegated or dropped.",
            },
            {
              step: "03",
              title: "Pick one type of rest tonight",
              body: "Not Netflix as avoidance. Choose one: physical rest (sleep earlier), mental rest (no screens after 9pm), sensory rest (quiet, no notifications), or social rest (alone time, no social obligations). Notice what happens to your output tomorrow.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 md:gap-6 p-5 rounded-xl border border-border/50 bg-card/50">
              <span className="text-3xl font-bold text-primary/20 font-mono shrink-0 leading-none mt-1">{item.step}</span>
              <div className="space-y-1">
                <p className="font-semibold text-base">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-muted/40 border border-border/40 px-5 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">From David:</span> These work — but they're surface-level. The reason most professionals can't make changes like this stick is that the underlying pressure pattern hasn't been diagnosed. That's what the burnout coaching session is for.
          </p>
        </div>
      </div>

      {/* ── 5. TWO PATHS ── */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Two directions from here.</h2>
          <p className="text-muted-foreground text-lg">One gets harder. One gets clearer.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-500/20 bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <CardTitle className="text-lg">If nothing changes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2.5 text-sm text-muted-foreground">
              <p>— Cognitive decline compounds quietly, then visibly</p>
              <p>— Errors and missed cues accumulate at work</p>
              <p>— Relationships absorb the overflow</p>
              <p>— Full recovery from burnout takes 12–18 months</p>
              <p>— Sydney's professional circles have long memories</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">With one burnout coaching session</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2.5 text-sm text-foreground/90">
              <p>✓ A clinical diagnosis of what's actually driving this</p>
              <p>✓ A written plan in your hands within 24 hours</p>
              <p>✓ Boundaries that hold without burning relationships</p>
              <p>✓ Tools built for real professional pressure</p>
              <p>✓ Back in control of your output and your life</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── 6. NOT THERAPY — objection removal ── */}
      <div className="rounded-xl bg-muted/40 border border-border/50 p-6 md:p-8 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">This is not therapy.</h2>
        <ul className="space-y-2">
          {[
            "Not open-ended weekly sessions with no clear direction",
            "Not a long-term commitment before you see any value",
            "Not a space to process your feelings with a stranger",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-medium pt-2 leading-relaxed">
          It's a single, structured 60-minute burnout coaching session with a registered clinical psychologist. You leave with a specific written plan. One session, tangible output, no ongoing obligation.
        </p>
      </div>

      {/* ── 7. SESSION BREAKDOWN ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold">What happens in the session</h2>
          <p className="text-muted-foreground">A structured clinical process — not a generic conversation.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              time: "0–15 min",
              title: "Pressure Mapping",
              detail:
                "David identifies the specific stressors, patterns, and triggers driving your current state — using a structured clinical framework, not open-ended chat.",
            },
            {
              time: "15–35 min",
              title: "Cognitive Load Audit",
              detail:
                "You'll work through where your mental bandwidth is being spent vs. where it needs to go. This surfaces hidden resource drains most people don't see.",
            },
            {
              time: "35–50 min",
              title: "Reset Strategy",
              detail:
                "David builds a prioritised action plan with you — specific to your role, schedule, and stress profile. Practical. Implementable immediately.",
            },
            {
              time: "50–60 min",
              title: "Forward Structure",
              detail:
                "You leave with clarity on your next 30 days: what to stop, what to protect, and what to address first.",
            },
          ].map((step, i) => (
            <div key={step.time} className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                {i < 3 && <div className="w-px flex-1 bg-border/50 mt-2" />}
              </div>
              <div className="pb-6 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{step.time}</span>
                  <p className="font-semibold">{step.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-primary/5 border border-primary/20 px-5 py-4">
          <p className="text-sm font-medium">
            Within 24 hours you receive a written recovery plan summarising your audit findings and prioritised action steps.
          </p>
        </div>
      </div>

      {/* ── 8. SESSION OFFER CARD ── */}
      <Card className="border-2 border-primary/30 bg-card" id="book">
        <CardHeader className="text-center pb-4">
          <Badge className="bg-primary text-primary-foreground font-bold mb-4 mx-auto">RECOMMENDED NEXT STEP</Badge>
          <CardTitle className="text-3xl font-bold">The Executive Burnout Coaching Session</CardTitle>
          <CardDescription className="text-lg pt-2">
            60 minutes. A written plan delivered in 24 hours. One session — no ongoing commitment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What's included:</h3>
              <ul className="space-y-3">
                {[
                  { title: "Clinical Burnout Diagnostic", sub: "Identify exact triggers and cognitive leaks" },
                  { title: "Written Recovery Plan", sub: "Delivered within 24 hours of your session" },
                  { title: "Stress Audit Framework", sub: "An ongoing self-monitoring tool you keep" },
                  { title: "Regulation Resources", sub: "15-min audio reset, conflict scripts, full library" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-muted rounded-lg p-6 space-y-1">
                <p className="text-5xl font-bold text-primary">$395</p>
                <p className="text-sm text-muted-foreground">One-time session fee · No ongoing commitment</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Strict Professional Confidentiality</p>
                  <p className="text-xs text-muted-foreground">Bound by AHPRA and APS Code of Ethics. Nothing leaves the session.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">AHPRA Registered Clinical Psychologist</p>
                  <p className="text-xs text-muted-foreground">Licensed in NSW · Dual-qualified Psychologist & Coach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-1 pt-2 pb-2 border-t border-border/40">
            <p className="text-foreground font-semibold">You've done the assessment. You have the data.</p>
            <p className="text-muted-foreground">The only thing left is to decide what to do with it.</p>
          </div>

          <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <Link href="/booking">
              Book Your Burnout Coaching Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Private · Confidential · No employer reporting · Darlington, Sydney or online
          </p>
        </CardContent>
      </Card>

      {/* ── 9. AUTHORITY STRIP ── */}
      <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/50">
        <div className="text-center space-y-2">
          <Award className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">Registered Clinical Psychologist</p>
          <p className="text-xs text-muted-foreground">Licensed NSW, Australia</p>
        </div>
        <div className="text-center space-y-2">
          <CheckCircle2 className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">Evidence-Based Approach</p>
          <p className="text-xs text-muted-foreground">Peer-reviewed clinical methods</p>
        </div>
        <div className="text-center space-y-2">
          <Shield className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">100% Confidential</p>
          <p className="text-xs text-muted-foreground">No records, no reporting</p>
        </div>
      </div>

      {/* ── 10. FINAL CLOSE ── */}
      <div className="rounded-xl bg-card border border-primary/20 p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">You already know something needs to change.</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Book a private burnout coaching session with David. One hour. A written plan in 24 hours. No ongoing obligation. Sydney-based, AHPRA registered, built for professionals under real pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book the Session — $395
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent font-semibold" asChild>
            <a href="/rest-up-guide.pdf" download="Rest-Up-Guide-David-Lui.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download the Free Guide
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Same-week availability · Darlington, Sydney · 100% confidential · AHPRA registered
        </p>
      </div>

    </div>
  );
}
