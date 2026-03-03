'use client';

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card">
      {/* Legal Disclaimers */}
      <div className="border-b border-border/30 py-8 px-6">
        <div className="container mx-auto max-w-5xl space-y-4 text-xs text-muted-foreground leading-relaxed">

          {/* Clinical Disclaimer */}
          <p>
            <strong className="text-foreground/70">Crisis Support:</strong> This service provides psychological support and executive coaching. It is not an emergency service. If you are experiencing a mental health crisis, please contact{" "}
            <a href="tel:131114" className="underline underline-offset-2 hover:text-foreground">Lifeline on 13 11 14</a>{" "}
            or call <a href="tel:000" className="underline underline-offset-2 hover:text-foreground">000</a> for emergency services.
          </p>

          {/* Medicare Disclosure */}
          <p>
            <strong className="text-foreground/70">Medicare Rebates:</strong> Medicare rebates may be available with a valid referral from a GP under a Mental Health Treatment Plan. Eligibility criteria apply. Please consult your GP for further information.
          </p>

          {/* AHPRA / Advertising Compliance */}
          <p>
            <strong className="text-foreground/70">Advertising Compliance:</strong> DayStar Strategies operates in accordance with{" "}
            <a href="https://www.ahpra.gov.au/Resources/Advertising-hub.aspx" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              AHPRA advertising guidelines
            </a>
            . All content on this website is for general informational purposes only and does not guarantee specific outcomes. Individual results will vary.
          </p>

          {/* Quiz / Assessment Disclaimer */}
          <p>
            <strong className="text-foreground/70">Assessment Disclaimer:</strong> The stress assessment on this website is informational only and does not constitute a clinical diagnosis, psychological assessment, or medical advice. If you have concerns about your mental health, please consult a qualified health professional.
          </p>

          {/* Privacy */}
          <p>
            <strong className="text-foreground/70">Privacy:</strong> Personal information collected via this website is handled in accordance with the{" "}
            <a href="https://www.oaic.gov.au/privacy/the-privacy-act" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              Australian Privacy Principles
            </a>{" "}
            under the Privacy Act 1988 (Cth). Your information is kept strictly confidential and will not be shared without your consent except as required by law or professional obligations.
            View our <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</Link>.
          </p>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                DS
              </div>
              <div>
                <p className="font-bold text-sm leading-none">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground mt-0.5">David Lui · Registered Clinical Psychologist · Sydney, NSW</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <span>AHPRA Registered</span>
                <span>ABN: [Your ABN]</span>
              </div>
              <p className="text-xs text-muted-foreground">© 2025 DayStar Strategies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
