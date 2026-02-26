"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Calendar,
  Award,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TICKER_ITEMS = [
  "100% Confidential",
  "Evidence-Based Approach",
  "Dual-Qualified: Psychologist & Coach",
  "AHPRA Registered",
  "Registered Clinical Psychologist",
  "Sydney & Online",
  "Same-Week Availability",
  "Professional Ethical Standards",
];

function MarqueeTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-y border-border/40 bg-card/50 py-3 select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-primary inline-block shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { value: "2×", label: "Qualified: Psychologist & Coach" },
  { value: "8+", label: "Years Clinical Practice" },
  { value: "M.Psych", label: "Masters in Clinical Psychology" },
  { value: "AHPRA", label: "Registered & Regulated" },
];

const SYMPTOMS = [
  {
    title: "Exhausted but can't sleep",
    body: "Your mind replays work scenarios on repeat. You wake at 3am solving problems that don't exist yet.",
  },
  {
    title: "Sharp temper with people you love",
    body: "Small things trigger disproportionate reactions. You know it's not you—but you can't seem to stop it.",
  },
  {
    title: "Mental clarity you once had is gone",
    body: "High-stakes decisions that once felt instinctive now feel paralysing. The fog won't lift.",
  },
  {
    title: "Always on, never ahead",
    body: "Twelve-hour days don't produce twelve hours of output anymore. You're running harder, going nowhere.",
  },
  {
    title: "You've stopped enjoying the win",
    body: "Achievements feel hollow. The drive that got you here has quietly disappeared.",
  },
  {
    title: "Everything rests on your shoulders",
    body: "You can't delegate, can't switch off, and you're terrified to admit any of this to anyone.",
  },
];

const FAQS = [
  {
    q: "What's the investment?",
    a: "The Executive Clarity Session is $395 for 60 minutes. This includes a structured burnout assessment, a personalised written recovery plan delivered within 24 hours, and an ongoing stress audit framework.",
  },
  {
    q: "Is everything confidential?",
    a: "Absolutely. All sessions are protected by professional confidentiality standards. Your information remains 100% private—no corporate reporting, no judgment, no exceptions.",
  },
  {
    q: "In-person or online?",
    a: "Both. In-person sessions in Sydney CBD, or secure encrypted video consultations anywhere in Australia. You choose what works for your schedule.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most professionals see significant improvement within 4–6 sessions. We'll create a personalised plan based on your specific situation and goals.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                DS
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm leading-none tracking-tight truncate">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">Clinical Psychology for Executives</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground shrink-0">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#session" className="hover:text-foreground transition-colors">Session</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 shrink-0">
              <Link href="/booking">Book Session</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-12 pb-0 md:py-24 px-4 md:px-6 relative overflow-hidden">
        {/* Background grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: copy */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 pb-8 lg:pb-0">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold tracking-wide uppercase text-xs px-4 py-1.5">
                Clinical Psychology for High-Performers
              </Badge>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
                Burned Out?<br />
                <em className="not-italic text-primary">Get Your<br />Edge Back.</em>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Evidence-based strategies to overcome work stress, reclaim mental clarity, and sustain peak performance—without sacrificing your career or your health.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
                  <Link href="/quiz">
                    Take Free Stress Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent border-border hover:bg-foreground/5 font-semibold w-full sm:w-auto" asChild>
                  <Link href="/booking">Book Session — $395</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" />100% Confidential</span>
                <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-primary" />Private Sessions</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-primary" />AHPRA Registered</span>
              </div>
            </div>

            {/* Right: photo */}
            <div className="relative order-1 lg:order-2 w-full">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden border border-border/40">
                <Image
                  src="/images/david.png"
                  alt="David Lui - Clinical Psychologist and Executive Coach"
                  fill
                  priority
                  loading="eager"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating credential card — hidden on small phones */}
              <div className="hidden sm:flex absolute -bottom-5 left-4 lg:-left-6 bg-card border border-border/60 rounded-xl p-4 shadow-2xl items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">David Lui</p>
                  <p className="text-xs text-muted-foreground mt-1">Registered Clinical Psychologist</p>
                </div>
              </div>

              {/* Floating stat card — hidden on small phones */}
              <div className="hidden sm:block absolute top-4 right-4 lg:-top-6 lg:-right-6 bg-card border border-border/60 rounded-xl p-4 shadow-2xl text-center min-w-[110px]">
                <p className="font-serif text-3xl font-bold text-primary">8+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Clinical Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker />

      {/* Stats strip */}
      <section className="py-12 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center space-y-2 px-2">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary break-words">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms — "Do any of these sound familiar?" */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* sticky label column — only sticky on desktop */}
            <div className="lg:sticky lg:top-28 space-y-6">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">The Warning Signs</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                Do any of these sound familiar?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                You're not broken. You're burned out. These are recognised clinical indicators—and every one of them is reversible with the right support.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8" asChild>
                <Link href="/quiz">
                  Check Your Stress Level
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* symptoms list */}
            <div className="space-y-0 divide-y divide-border/40">
              {SYMPTOMS.map((s, i) => (
                <div key={i} className="py-6 flex items-start gap-5 group">
                  <span className="text-xs font-bold text-primary/40 mt-1 w-6 shrink-0 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{s.title}</p>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quiz promo */}
      <section className="py-10 md:py-14 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-card p-8 md:p-12">
            {/* Faint background accent */}
            <div className="pointer-events-none absolute inset-0 bg-primary/5" />
            <div className="relative text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-4 py-1.5">
                Free Assessment
              </Badge>
              <h3 className="font-serif text-3xl md:text-4xl font-bold">The 3-Minute Stress Scorecard</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Answer 10 questions. Get a precise picture of where you stand—and immediate action steps tailored to your level.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 text-sm">
                {[
                  { icon: Clock, label: "3 Minutes", sub: "Focused questions" },
                  { icon: CheckCircle2, label: "Instant Results", sub: "Personalised score" },
                  { icon: Shield, label: "100% Private", sub: "Full confidentiality" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-2 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-semibold text-xs sm:text-sm text-center leading-snug">{label}</p>
                    <p className="text-muted-foreground text-xs text-center leading-snug hidden sm:block">{sub}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-10 text-base" asChild>
                <Link href="/quiz">
                  Start Your Stress Scorecard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Session offer */}
      <section id="session" className="py-16 md:py-24 px-4 md:px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">The Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              The Executive Clarity Session
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              60 minutes to diagnose exactly what's draining you—and walk away with a personalised roadmap to fix it.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
            {/* What's included — wider column */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  title: "60-Minute Diagnostic Deep-Dive",
                  body: "Identify your exact burnout triggers and the precise mental resource leaks draining your performance.",
                },
                {
                  title: "Personalised Recovery Plan",
                  body: "A written action plan delivered within 24 hours—specific to your role, pressures, and goals.",
                },
                {
                  title: "Executive Stress Audit Tool",
                  body: "An ongoing self-monitoring framework so you can catch warning signs before they escalate.",
                },
                {
                  title: "Bonus Resources",
                  body: "15-minute audio reset, high-stakes conflict scripts, and full resource library access.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border/50 hover:border-primary/40 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing card — narrower column */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border-2 border-primary/40 bg-card p-8 space-y-6 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-4 py-1">Best Value</Badge>
                </div>
                <div className="pt-2 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <p className="font-serif text-5xl font-bold text-primary">$395</p>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time session fee</p>
                </div>

                <div className="border-t border-border/50 pt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
  <p className="font-semibold text-sm">Strict Professional Confidentiality</p>
  <p className="text-xs text-muted-foreground">Bound by AHPRA and the APS Code of Ethics. What you share remains completely private.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">100% Confidential</p>
                      <p className="text-xs text-muted-foreground">Protected by professional confidentiality standards.</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-13 text-base" asChild>
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Session
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">Only 3 first-session slots available this month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Without vs With — editorial contrast strip */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-y border-border/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14 space-y-4">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">The Fork in the Road</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Two very different trajectories from here
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border border-border/50 rounded-2xl overflow-hidden">
            {/* Without */}
            <div className="p-8 md:p-10 bg-card/50 space-y-5 border-b md:border-b-0 md:border-r border-border/50">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-red-500 font-bold text-sm">✕</span>
                </div>
                <h3 className="font-bold text-lg">Without Support</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Symptoms worsen progressively over 3–6 months",
                  "Work performance continues to decline",
                  "Relationships become increasingly strained",
                  "Recovery takes 12–18 months once burnout hits",
                  "Potential career impact or forced time away",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-red-500/60 shrink-0 mt-0.5 font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* With */}
            <div className="p-8 md:p-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold text-lg">With Structured Support</h3>
              </div>
              <ul className="space-y-3 text-foreground/90">
                {[
                  "Immediate strategies to stop and reverse the decline",
                  "Performance stabilises within 2–4 weeks",
                  "Sustainable boundaries established within 6 weeks",
                  "Long-term resilience tools for future high-pressure periods",
                  "Career trajectory protected and enhanced",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About David */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">Your Clinician</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Meet David Lui</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Registered Clinical Psychologist and Executive Coach specialising in burnout recovery for high-performing professionals. David understands the world you operate in���and speaks the same language.
              </p>

              <div className="space-y-5 pt-2">
                {[
                  { icon: Award, title: "Registered Clinical Psychologist", sub: "AHPRA registered. Licensed in New South Wales, Australia." },
                  { icon: Shield, title: "Psychologist & Executive Coach", sub: "Rare dual qualification bridging clinical science with real-world leadership demands." },
                  { icon: CheckCircle2, title: "Evidence-Based Approach", sub: "Clinical interventions grounded in peer-reviewed research—not generic self-help." },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2" asChild>
                <Link href="/quiz">
                  Start Your Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Authority badges grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, label: "AHPRA Registered", sub: "Nationally recognised" },
                { icon: Award, label: "8+ Years Practice", sub: "Clinical psychology" },
                { icon: Lock, label: "Confidential", sub: "Professional standards" },
                { icon: CheckCircle2, label: "Evidence-Based", sub: "Peer-reviewed method" },
                { icon: Clock, label: "Same-Week Access", sub: "Fast availability" },
                { icon: Award, label: "Dual-Qualified", sub: "Psych & Coach" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-start gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors min-w-0">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <p className="font-semibold text-sm leading-snug break-words w-full">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container mx-auto max-w-3xl text-center space-y-8 relative">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">Take the First Step</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance leading-tight">
            You don't have to navigate this alone.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start with the free 3-minute assessment, or book your strategy session directly. Either way—you're closer to clarity than you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25" asChild>
              <Link href="/quiz">
                Take Free Stress Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-10 bg-transparent border-border hover:bg-foreground/5 font-semibold" asChild>
              <Link href="/booking">Book Strategy Session</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">100% confidential &bull; AHPRA registered &bull; Sydney or online</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-4 md:px-6 border-t border-border/40 bg-card/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-3">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Common Questions</h2>
          </div>
          <div className="divide-y divide-border/50">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-6 space-y-3">
                <p className="font-semibold text-lg text-foreground">{faq.q}</p>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                DS
              </div>
              <div>
                <p className="font-bold text-sm leading-none">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground mt-0.5">David Lui · Clinical Psychologist · Sydney, Australia</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 DayStar Strategies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border/40 p-4">
        <div className="flex gap-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12" asChild>
            <Link href="/quiz">Free Assessment</Link>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent h-12 font-semibold" asChild>
                  <Link href="/booking">Book — $395</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
