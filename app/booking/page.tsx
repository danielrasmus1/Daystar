'use client';

import { ArrowLeft, Clock, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const TIDYCAL_URL = "https://tidycal.com/davidluipsychology/15-minute-meeting";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="h-4 w-px bg-border mx-1" />
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-sm">DayStar Strategies</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/40 bg-card/30 px-4 py-8 md:py-12 text-center">
          <div className="container mx-auto max-w-2xl space-y-3">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs">Free · No obligation</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-balance">
              Book Your Free 15-Minute Burnout Assessment Call
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A short, private call with David to understand what you're dealing with and whether he can help. No sales pitch. No commitment. Just clarity.
            </p>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                15 minutes
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-primary" />
                Phone or video
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                100% confidential
              </span>
            </div>
          </div>
        </section>

        {/* Calendar embed */}
        <section className="px-4 py-6 md:py-10">
          <div className="container mx-auto max-w-3xl">
            <div className="rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm">
              <iframe
                src={TIDYCAL_URL}
                className="w-full"
                style={{ minHeight: "700px", border: "none" }}
                title="Book a free 15-minute burnout assessment call with David Lui"
                loading="lazy"
                allow="camera; microphone"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
              Powered by TidyCal · Secure booking · All information is kept strictly confidential
            </p>
          </div>
        </section>

        {/* What to expect */}
        <section className="px-4 pb-12 md:pb-16">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 md:p-8 space-y-5">
              <h2 className="font-serif text-xl font-bold">What happens on the call</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "David will ask a few questions to understand your current situation and stress patterns.",
                  "You'll get an honest, clinical read on what's happening and whether it warrants further support.",
                  "If it makes sense to work together, David will outline exactly what that looks like — no pressure.",
                  "If it doesn't, he'll point you toward the most useful next step. Either way, you leave with clarity.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold shrink-0 mt-0.5">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground border-t border-border/40 pt-4">
                If you are in crisis, do not wait for a callback. Contact{" "}
                <a href="tel:131114" className="underline underline-offset-2 hover:text-foreground">Lifeline on 13 11 14</a>{" "}
                or call 000.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
