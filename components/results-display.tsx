import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Download, Calendar, AlertCircle, TrendingDown, Award, Shield, X, ArrowRight } from "lucide-react";
import type { QuizResult } from "@/lib/quiz-data";
import Link from "next/link";

interface ResultsDisplayProps {
  result: QuizResult;
  totalScore: number;
}

export function ResultsDisplay({ result, totalScore }: ResultsDisplayProps) {
  const getResultBadge = (type: string) => {
    switch (type) {
      case 'controlled':
        return { color: 'bg-primary/10 text-primary border-primary/20', icon: CheckCircle2 };
      case 'risk':
        return { color: 'bg-amber-500/10 text-amber-500 border-amber-500/20', icon: AlertCircle };
      case 'overload':
        return { color: 'bg-red-500/10 text-red-500 border-red-500/20', icon: TrendingDown };
      default:
        return { color: 'bg-muted text-muted-foreground border-border', icon: AlertCircle };
    }
  };

  const badgeInfo = getResultBadge(result.type);
  const BadgeIcon = badgeInfo.icon;

  const consequences = result.type === 'overload' ? [
    "Your cognitive capacity is being depleted faster than it can recover",
    "Decision quality is compromised — you may already be seeing the effects",
    "The people around you are absorbing what the job is producing",
    "Full burnout recovery at this level typically takes 12–18 months minimum",
  ] : result.type === 'risk' ? [
    "Performance will continue to erode without a structural change",
    "The gap between effort and output will keep widening",
    "What looks like a rough patch is a measurable clinical trajectory",
    "Early intervention now is dramatically more effective than late intervention",
  ] : [
    "The current pace is not fully sustainable — the data is already showing it",
    "Without attention, warning signs at this level tend to escalate within 6 months",
    "Small adjustments now protect your performance long-term",
    "This is the window where prevention is still cheaper than recovery",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Above-the-fold Result Block */}
      <div className="text-center space-y-6">
        <Badge variant="outline" className={`text-lg px-6 py-3 ${badgeInfo.color} font-semibold`}>
          <BadgeIcon className="h-5 w-5 mr-2" />
          Your Score: {totalScore}/35
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
          {result.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {result.description}
        </p>

        {/* Primary CTA */}
        <div className="pt-4">
          <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Private Session with David
            </Link>
          </Button>
        <p className="text-sm text-muted-foreground mt-3">
          Confidential · No employer reporting · Darlington, Sydney or secure online
        </p>
        </div>
      </div>

      {/* Identity Reinforcement */}
      <div className="border-l-4 border-primary pl-6 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Why This Matters at Your Level</h2>
        <p className="text-muted-foreground leading-relaxed">
          Driven professionals in Sydney don't burn out overnight. They lose cognitive margin quietly — sharper edges, slower thinking, less tolerance for ambiguity.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When you're performing under real pressure, even a 10% reduction in clarity affects decisions, team dynamics, and reputation. The professional circles here are tight. The cost of mismanaging this is real.
        </p>
      </div>

      {/* Consequence Section */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
        <CardTitle className="text-2xl">What This Score Typically Leads To</CardTitle>
        <CardDescription>Patterns we see at this level when nothing changes:</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {consequences.map((consequence, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90">{consequence}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Without vs With Support */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Two directions from here.</h2>
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
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>— Cognitive decline compounds quietly, then visibly</p>
              <p>— Errors and missed cues accumulate at work</p>
              <p>— Relationships absorb the overflow</p>
              <p>— Full recovery from burnout takes 12–18 months</p>
              <p>— Sydney's professional networks have long memories</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">With one session</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/90">
              <p>✓ A clinical diagnosis of what's actually driving this</p>
              <p>✓ A written plan in your hands within 24 hours</p>
              <p>✓ Boundaries that hold without burning relationships</p>
              <p>✓ Tools built for real professional pressure</p>
              <p>✓ Back in control of your output and your life</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Objection Removal */}
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
          It's a single, structured 60-minute session with a registered clinical psychologist. You leave with a specific written plan. One session, tangible output, no ongoing obligation.
        </p>
      </div>

      {/* Session Breakdown */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">What Happens in the 60-Minute Session?</h2>
          <p className="text-muted-foreground">A structured clinical process — not a generic conversation.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              time: "0–15 min",
              title: "Pressure Mapping",
              detail: "David identifies the specific stressors, patterns, and triggers driving your current state — using a structured clinical framework, not open-ended chat.",
            },
            {
              time: "15–35 min",
              title: "Cognitive Load Audit",
              detail: "You'll work through where your mental bandwidth is being spent vs. where it needs to go. This surfaces hidden resource drains most people don't see.",
            },
            {
              time: "35–50 min",
              title: "Reset Strategy",
              detail: "David builds a prioritised action plan with you — specific to your role, schedule, and stress profile. Practical. Implementable immediately.",
            },
            {
              time: "50–60 min",
              title: "Forward Structure",
              detail: "You leave with clarity on your next 30 days: what to stop, what to protect, and what to address first.",
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
          <p className="text-sm font-medium">Within 24 hours you receive a written recovery plan summarising your audit findings and prioritised action steps.</p>
        </div>
      </div>

      {/* Strategy Session Offer */}
      <Card className="border-2 border-primary/30 bg-card">
        <CardHeader className="text-center pb-4">
          <Badge className="bg-primary text-primary-foreground font-bold mb-4 mx-auto">RECOMMENDED NEXT STEP</Badge>
          <CardTitle className="text-3xl font-bold">The Executive Clarity Session</CardTitle>
          <CardDescription className="text-lg pt-2">
            60-minute diagnostic deep-dive to identify what's draining you—and get a personalized roadmap to fix it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Structured Burnout Assessment</p>
                    <p className="text-sm text-muted-foreground">Identify exact triggers and mental resource leaks</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Personalized Recovery Plan</p>
                    <p className="text-sm text-muted-foreground">Written action plan delivered within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Executive Stress Audit Tool</p>
                    <p className="text-sm text-muted-foreground">Ongoing framework to monitor mental load</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Regulation Resources</p>
                    <p className="text-sm text-muted-foreground">15-min audio reset, conflict scripts, library access</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6 space-y-3">
                <p className="text-5xl font-bold text-primary">$395</p>
                <p className="text-sm text-muted-foreground">One-time session fee</p>
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Strict Professional Confidentiality</p>
                    <p className="text-xs text-muted-foreground">Bound by AHPRA and the APS Code of Ethics. Nothing you share leaves the session.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decision Close */}
          <div className="text-center space-y-1 pt-2 pb-4 border-t border-border/40">
            <p className="text-foreground font-semibold">You've done the assessment. You have the data.</p>
            <p className="text-muted-foreground">The only thing left is to decide what to do with it.</p>
          </div>

          <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
            <Link href="/booking">
              Book Your Executive Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-xs text-center text-muted-foreground">Private · Confidential · No employer reporting · Darlington, Sydney or online</p>
        </CardContent>
      </Card>

      {/* Authority Strip */}
      <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/50">
        <div className="text-center space-y-2">
          <Award className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">Registered Clinical Psychologist</p>
          <p className="text-xs text-muted-foreground">Licensed NSW, Australia</p>
        </div>
        <div className="text-center space-y-2">
          <CheckCircle2 className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">Evidence-Based Approach</p>
          <p className="text-xs text-muted-foreground">Clinical strategies that work</p>
        </div>
        <div className="text-center space-y-2">
          <Shield className="h-8 w-8 text-primary mx-auto" />
          <p className="font-semibold text-sm">100% Confidential</p>
          <p className="text-xs text-muted-foreground">Private, judgment-free</p>
        </div>
      </div>

      {/* Lead Magnet - Secondary CTA */}
      <Card className="border-border/50 bg-card/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Download className="h-5 w-5 text-primary" />
            Free Resource: Executive Reset Action Plan
          </CardTitle>
          <CardDescription>
            Immediate strategies you can implement today while you consider next steps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Evidence-based stress reduction techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Boundary-setting frameworks for executives</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">3-minute daily regulation practices</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">Recovery techniques from clinical psychology</span>
            </li>
          </ul>
          <Button variant="outline" className="w-full bg-transparent" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Your Action Plan (PDF)
          </Button>
        </CardContent>
      </Card>

      {/* Final Conversion Section */}
      <div className="bg-gradient-to-br from-card to-card/50 rounded-xl p-8 md:p-12 text-center space-y-6 border border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold">You already know something needs to change.</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Book a private session with David. One hour. A written plan in 24 hours. No ongoing obligation. Sydney-based, AHPRA registered, and built for people who perform under real pressure.
        </p>
        <Button size="lg" className="h-16 px-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
          <Link href="/booking">
            <Calendar className="mr-2 h-5 w-5" />
            Book the Session — $395
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground pt-2">
          Same-week availability · Darlington, Sydney · 100% confidential · AHPRA registered
        </p>
      </div>
    </div>
  );
}
