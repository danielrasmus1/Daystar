"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Calendar,
  Award,
  Lock,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TICKER_ITEMS = [
  "Based in Sydney, NSW",
  "Evidence-Based Clinical Psychology",
  "Dual-Qualified: Psychologist & Coach",
  "AHPRA Registered",
  "Darlington Clinic & Secure Online",
  "Same-Week Availability",
  "Professional Ethical Standards",
  "Trusted by Sydney Professionals",
];

function MarqueeTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-y border-border/40 bg-card/50 py-3 select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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
    title: "You're earning well — but running on fumes",
    body: "The income reflects the pressure. But somewhere between the promotions and the deadlines, the machine stopped switching off.",
  },
  {
    title: "You snap at the people who had nothing to do with it",
    body: "Your partner. Your kids. The barista. The pressure has to go somewhere — and it's landing at home.",
  },
  {
    title: "The sharpness that built your career has gone blunt",
    body: "Decisions that once came fast now feel heavy. You're slower, second-guessing yourself, sitting on emails.",
  },
  {
    title: "More hours. Less to show for it.",
    body: "You used to get more done in less time. Now the day disappears and the list barely moves.",
  },
  {
    title: "You hit the goal. You felt nothing.",
    body: "The raise came through. The deal closed. You expected to feel something and didn't. That's a clinical signal.",
  },
  {
    title: "You can't say any of this out loud at work",
    body: "Sydney's professional networks are small. Admitting you're struggling isn't an option — so you keep performing.",
  },
];

const FAQS = [
  {
    q: "What does it cost?",
    a: "The Executive Burnout Coaching Session is $395 for 60 minutes. That includes a structured clinical burnout assessment, a written personalised recovery plan delivered within 24 hours, and a stress audit framework you keep. One session. Tangible output.",
  },
  {
    q: "Is this completely confidential?",
    a: "Yes. Sessions are protected by professional confidentiality obligations under AHPRA and the Australian Psychological Society Code of Ethics. Nothing is reported to Medicare, your employer, or your insurer unless you specifically request it in writing. There is no paper trail.",
  },
  {
    q: "In-person in Sydney or online — does it matter?",
    a: "Both deliver the same clinical outcome. The Darlington clinic is a 10-minute drive from the Sydney CBD. Online sessions run on secure encrypted video. If you're not sure, start in person — most clients find the dedicated space helps them shift out of work mode faster.",
  },
  {
    q: "Do I have to commit to ongoing sessions?",
    a: "No. Start with a free 15-minute call. There's no commitment, no credit card, and no obligation. If it makes sense to work together, that conversation happens on the call — never before.",
  },
  {
    q: "What does it cost?",
    a: "The free 15-minute burnout assessment call costs nothing. If you and David decide to proceed, the Executive Burnout Coaching Session is $395 for 60 minutes — including a written recovery plan delivered within 24 hours.",
  },
  {
    q: "Will this show up anywhere — health records, insurance, HR?",
    a: "No. This is private, self-funded clinical psychology. It is not reported to Medicare or private health funds unless you choose to claim. Your employer has no access to any information. Nothing enters any shared system.",
  },
  {
    q: "I've tried things before and they didn't stick.",
    a: "Generic stress management advice doesn't work for people under real professional pressure — because it wasn't designed for that context. David's approach is diagnostic first. Before any strategy is suggested, he maps exactly what's driving your specific situation. The plan you leave with is built for your role, your pressure pattern, and your schedule.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-base text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="text-muted-foreground leading-relaxed pb-5 text-sm">{a}</p>
      )}
    </div>
  );
}

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
                <p className="font-bold text-sm leading-none tracking-tight">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">Clinical Psychology · Sydney, NSW</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#session" className="hover:text-foreground transition-colors">Session</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 shrink-0">
              <Link href="/booking">Book Free Call</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-8 pb-0 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* Copy — always first on mobile */}
            <div className="space-y-5 order-1 pb-2 lg:pb-0">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold tracking-wide uppercase text-xs px-3 py-1">
                For Sydney Professionals Who Can't Afford to Slow Down
              </Badge>

              <h1 className="font-serif text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
                Something's Off.<br />
                <em className="not-italic text-primary">You Already Know It.</em>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                You're still performing. But the sharpness has dulled, the patience has thinned, and the drive that got you here is running quiet. David Lui is a Registered Clinical Psychologist based in Sydney.
              </p>

              {/* Primary CTA — full width on mobile, dominant */}
              <div className="flex flex-col gap-3 pt-1">
                <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 w-full" asChild>
                  <Link href="/quiz">
                    Take the Free 3-Minute Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-sm h-11 px-6 bg-transparent border-border hover:bg-foreground/5 font-medium w-full" asChild>
                  <Link href="/booking">Book Free 15-Min Call</Link>
                </Button>
              </div>

              {/* Trust badges — compact row on mobile */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" />Confidential</span>
                <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-primary" />No employer reporting</span>
                <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-primary" />Darlington, Sydney</span>
              </div>
            </div>

            {/* Photo — below copy on mobile, right column on desktop */}
            <div className="relative order-2 w-full">
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[560px] rounded-2xl overflow-hidden border border-border/40">
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

              {/* Floating cards — hidden on small phones to reduce clutter */}
              <div className="hidden sm:flex absolute -bottom-5 left-4 lg:-left-6 bg-card border border-border/60 rounded-xl p-3 shadow-2xl items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">David Lui</p>
                  <p className="text-xs text-muted-foreground mt-1">Registered Clinical Psychologist</p>
                </div>
              </div>

              <div className="hidden sm:block absolute top-4 right-4 lg:-top-6 lg:-right-6 bg-card border border-border/60 rounded-xl p-3 shadow-2xl text-center min-w-[100px]">
                <p className="font-serif text-3xl font-bold text-primary">8+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker />

      {/* Stats strip */}
      <section className="py-8 md:py-12 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center space-y-1.5 px-2">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Mobile: headline + CTA above list */}
          <div className="mb-8 space-y-4 lg:hidden">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs">Sound Familiar?</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-balance">
              The warning signs are easy to explain away.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Until they're not. These are recognised clinical patterns — not character flaws, not weakness — and every one of them is reversible with the right diagnosis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Sticky label column — desktop only */}
            <div className="hidden lg:block lg:sticky lg:top-28 space-y-6">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm">Sound Familiar?</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                The warning signs are easy to explain away.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Until they're not. These are recognised clinical patterns — not character flaws, not weakness — and every one of them is reversible with the right diagnosis.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8" asChild>
                <Link href="/quiz">
                  Find Out Where You Stand — Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Symptoms list */}
            <div className="space-y-0 divide-y divide-border/40">
              {SYMPTOMS.map((s, i) => (
                <div key={i} className="py-5 flex items-start gap-4 group">
                  <span className="text-xs font-bold text-primary/40 mt-0.5 w-5 shrink-0 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1 min-w-0">
                    <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors leading-snug">{s.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}

              {/* CTA after list — mobile only */}
              <div className="pt-6 lg:hidden">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full h-14" asChild>
                  <Link href="/quiz">
                    Find Out Where You Stand — Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz promo */}
      <section className="py-8 md:py-14 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 bg-card p-6 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-primary/5" />
            <div className="relative space-y-5 md:space-y-6 md:text-center">
              <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-3 py-1">
                Free Assessment
              </Badge>
              <h3 className="font-serif text-2xl md:text-4xl font-bold leading-tight">Not sure how bad it is? Start here.</h3>
              <p className="text-muted-foreground text-sm md:text-xl max-w-2xl md:mx-auto leading-relaxed">
                Ten questions. Three minutes. A clinical read on your stress level and the specific patterns worth addressing — before you decide whether to book.
              </p>

              {/* 3-col icon row — hidden on very small, shown sm+ */}
              <div className="hidden sm:grid grid-cols-3 gap-4 text-sm">
                {[
                  { icon: Clock, label: "3 Minutes", sub: "Focused questions" },
                  { icon: CheckCircle2, label: "Instant Results", sub: "Personalised score" },
                  { icon: Shield, label: "100% Private", sub: "Full confidentiality" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-semibold text-sm text-center">{label}</p>
                    <p className="text-muted-foreground text-xs text-center">{sub}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-base w-full md:w-auto" asChild>
                <Link href="/quiz">
                  Take the Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Session offer */}
      <section id="session" className="py-12 md:py-24 px-4 md:px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 md:mb-16 space-y-3 md:text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">One Session. Real Output.</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance leading-tight">
              The Executive Burnout Coaching Session
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl max-w-3xl md:mx-auto leading-relaxed">
              Sixty minutes with a registered clinical psychologist. You leave with a written plan — specific to your situation, your pressures, and your schedule.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start max-w-5xl mx-auto">
            {/* Inclusions */}
            <div className="lg:col-span-3 space-y-3">
              {[
                {
                  title: "Clinical Burnout Diagnostic",
                  body: "A structured assessment that identifies your exact triggers, stress patterns, and the hidden cognitive leaks draining your performance.",
                },
                {
                  title: "Written Recovery Plan — Delivered in 24hrs",
                  body: "Not a generic list. A prioritised, role-specific action plan with clear steps based on what David surfaces in your session.",
                },
                {
                  title: "Stress Audit Framework",
                  body: "A self-monitoring tool you keep — so you can spot warning signs early and intervene before they compound.",
                },
                {
                  title: "Immediate-Use Resources",
                  body: "A practical reset toolkit including a 15-minute audio regulation practice and conflict management frameworks.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/40 transition-colors">
                  <div className="h-7 w-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing card */}
            <div className="lg:col-span-2 mt-4 lg:mt-0">
              <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 space-y-5 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-4 py-1 whitespace-nowrap">One Session Only</Badge>
                </div>
                <div className="pt-2 space-y-0.5">
                  <p className="font-serif text-5xl font-bold text-primary">$395</p>
                  <p className="text-sm text-muted-foreground">One-time session fee</p>
                </div>

                <div className="border-t border-border/50 pt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Strict Professional Confidentiality</p>
                      <p className="text-xs text-muted-foreground">Bound by AHPRA and APS Code of Ethics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">No Paper Trail</p>
                      <p className="text-xs text-muted-foreground">Not reported to Medicare, employer, or insurer.</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-sm" asChild>
                  <Link href="/booking">
                    Book Free 15-Min Burnout Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">Free · No commitment · Darlington, Sydney or phone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contrast strip */}
      <section className="py-12 md:py-24 px-4 md:px-6 border-y border-border/40">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 md:mb-14 space-y-3 md:text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">The Reality Check</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance leading-tight">
              The longer this goes on, the harder it is to reverse.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border border-border/50 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-10 bg-card/50 space-y-4 border-b md:border-b-0 md:border-r border-border/50">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-red-500 font-bold text-xs">✕</span>
                </div>
                <h3 className="font-bold">If nothing changes</h3>
              </div>
              <ul className="space-y-2.5 text-muted-foreground">
                {[
                  "Cognitive decline compounds — slowly, then quickly",
                  "Errors and missed cues start appearing at work",
                  "The people closest to you absorb the overflow",
                  "Full burnout recovery takes 12–18 months minimum",
                  "Sydney's professional circles have long memories",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-red-500/60 shrink-0 mt-0.5 font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold">With structured support</h3>
              </div>
              <ul className="space-y-2.5 text-foreground/90">
                {[
                  "Clarity on exactly what's driving the decline",
                  "A practical plan in your hands within 24 hours",
                  "Pressure boundaries that hold without the guilt",
                  "Tools that work under real professional conditions",
                  "Back in control of your performance and your life",
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
      <section id="about" className="py-12 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-5">
              <p className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">About David</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">He Works With People Like You.</h2>
              <p className="text-muted-foreground text-sm md:text-xl leading-relaxed">
                David Lui is a Registered Clinical Psychologist and Executive Coach based in Darlington, Sydney. He works with driven professionals — people who perform under real pressure, carry real responsibility, and can't be seen to be struggling. He doesn't deal in generic wellness advice. He deals in diagnosis and structured plans.
              </p>

              <div className="space-y-4 pt-1">
                {[
                  { icon: Award, title: "Registered Clinical Psychologist", sub: "AHPRA registered. Licensed in New South Wales, Australia." },
                  { icon: Shield, title: "Psychologist & Executive Coach", sub: "Rare dual qualification — clinical science applied to real leadership demands." },
                  { icon: CheckCircle2, title: "Based in Darlington, Sydney", sub: "In-person sessions near the CBD. Secure online for busy schedules." },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full md:w-auto" asChild>
                <Link href="/quiz">
                  Start with the Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Authority badges — 3-col on mobile, 2-col on md */}
            <div className="grid grid-cols-3 md:grid-cols-2 gap-3">
              {[
                { icon: Shield, label: "AHPRA Registered", sub: "NSW licensed" },
                { icon: Award, label: "8+ Years Practice", sub: "Driven professionals" },
                { icon: Lock, label: "No Employer Reporting", sub: "Fully private" },
                { icon: CheckCircle2, label: "Evidence-Based", sub: "Peer-reviewed" },
                { icon: Clock, label: "Same-Week Access", sub: "Darlington, Sydney" },
                { icon: Award, label: "Dual-Qualified", sub: "Psych & Coach" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-start gap-1.5 p-3 md:p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors min-w-0">
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <p className="font-semibold text-xs leading-snug break-words w-full">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug hidden md:block">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container mx-auto max-w-3xl text-center space-y-6 relative">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">Make a Decision</p>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-balance leading-tight">
            You already know something needs to change.
          </h2>
          <p className="text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
            The assessment is free and takes three minutes. Or book a free 15-minute call with David directly — no forms, no waiting, just clarity.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <Button size="lg" className="text-base h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25 w-full" asChild>
              <Link href="/quiz">
                Take the Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-sm h-11 px-8 bg-transparent border-border hover:bg-foreground/5 font-medium w-full" asChild>
              <Link href="/booking">Book a Free 15-Min Call</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">100% confidential &bull; No employer reporting &bull; Darlington, Sydney or secure online</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-24 px-4 md:px-6 border-t border-border/40 bg-card/20">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8 md:mb-12 space-y-2 md:text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">Questions</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold">Common Questions</h2>
          </div>
          {/* Accordion on mobile for scannability */}
          <div className="divide-y divide-border/50">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer — add extra bottom padding on mobile for sticky bar */}
      <div className="pb-20 md:pb-0">
        <SiteFooter />
      </div>

      {/* Sticky Mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/97 backdrop-blur-md border-t border-border/60 px-4 py-3 safe-area-bottom">
        <div className="flex gap-2.5">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-sm" asChild>
            <Link href="/quiz">
              Free Assessment
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent h-12 font-semibold text-sm border-border" asChild>
            <Link href="/booking">Free 15-Min Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
