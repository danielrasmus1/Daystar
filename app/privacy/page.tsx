import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Privacy Policy | DayStar Strategies",
  description: "Privacy Policy for DayStar Strategies — how we collect, use, and protect your personal information in accordance with Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              DS
            </div>
            <div>
              <p className="font-bold text-sm leading-none">DayStar Strategies</p>
              <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">David Lui · Clinical Psychologist · Sydney</p>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
            <p className="text-muted-foreground leading-relaxed">
              DayStar Strategies (ABN: [Your ABN]), operated by David Lui, is committed to protecting your privacy in accordance with the <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles (APPs).
            </p>
          </div>

          {[
            {
              heading: "1. Information We Collect",
              body: `We collect personal information you provide directly to us, including your name, email address, phone number, and responses to our online stress assessment. We may also collect information about how you use our website through cookies and analytics tools.`,
            },
            {
              heading: "2. How We Use Your Information",
              body: `We use the information collected to: (a) provide and improve our services; (b) contact you regarding your assessment results and related services; (c) respond to your enquiries and booking requests; (d) comply with our legal and professional obligations as a registered health practitioner. We will only contact you in ways you have consented to.`,
            },
            {
              heading: "3. Disclosure of Information",
              body: `We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information may be disclosed: (a) to service providers who assist us in operating our website and practice (such as CRM software), bound by confidentiality; (b) as required by law or professional obligations; (c) with your explicit consent. All information shared with third-party service providers is subject to contractual data protection obligations.`,
            },
            {
              heading: "4. Clinical Confidentiality",
              body: `Information disclosed in clinical sessions is subject to professional confidentiality obligations under the Australian Psychological Society Code of Ethics and AHPRA standards. Confidentiality may only be broken in limited circumstances prescribed by law (e.g., serious risk of harm). Your employer has no access to any information about your engagement with DayStar Strategies.`,
            },
            {
              heading: "5. Assessment Results",
              body: `The online stress assessment is informational only and does not constitute a clinical diagnosis, psychological assessment, or medical advice. Results are generated algorithmically based on your responses and are intended to provide general guidance only.`,
            },
            {
              heading: "6. Data Security",
              body: `We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access. Our website uses HTTPS encryption. Electronic records are stored securely with access restricted to authorised personnel only.`,
            },
            {
              heading: "7. Data Retention",
              body: `We retain personal information for as long as necessary to provide our services and meet our legal obligations. Clinical records are retained in accordance with the requirements of the Health Records Act and applicable professional standards.`,
            },
            {
              heading: "8. Your Rights",
              body: `You have the right to access the personal information we hold about you and to request corrections if the information is inaccurate. You may also request that we delete your information, subject to our legal and professional obligations. To make such a request, please contact us directly.`,
            },
            {
              heading: "9. Cookies",
              body: `Our website may use cookies to improve your browsing experience and collect analytics data. You can disable cookies in your browser settings, though this may affect the functionality of certain parts of the site.`,
            },
            {
              heading: "10. Contact & Complaints",
              body: `If you have a question or complaint about how we handle your personal information, please contact us at: hello@daystarstrategies.com.au. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
            },
          ].map(({ heading, body }) => (
            <div key={heading} className="space-y-2">
              <h2 className="text-lg font-semibold">{heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}

          <div className="pt-4 border-t border-border/40">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
