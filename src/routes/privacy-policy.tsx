import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title={<>Privacy policy.</>}
      updated="May 30, 2026"
      sections={[
        { h: "Who we are", body: <p>Gokul Labs ("we", "us") is an independent software studio based in India. You can reach us at <a className="underline" href="mailto:gokulslabs@gmail.com">gokulslabs@gmail.com</a>.</p> },
        { h: "What we collect", body: <p>We collect information you give us directly — your name, e-mail, company and project details — when you fill in a form on this site or e-mail us. We also collect anonymous analytics about page visits to understand how the site is used.</p> },
        { h: "How we use it", body: <p>We use your information only to respond to your enquiry, prepare for a call, or send follow-up materials you've requested. We never sell or rent personal data. We do not run targeted advertising.</p> },
        { h: "Legal basis (GDPR)", body: <p>For form submissions, the legal basis is your consent and our legitimate interest in responding. For analytics, the legal basis is legitimate interest.</p> },
        { h: "Sharing", body: <p>We use a small set of trusted processors — including our e-mail provider and analytics tooling. Each is contractually bound to protect your data. We do not share data with anyone else without your consent.</p> },
        { h: "Retention", body: <p>We keep enquiry e-mails for up to 24 months. Analytics data is retained for 14 months. You can ask us to delete your data at any time.</p> },
        { h: "Your rights", body: <p>You may request access, correction or deletion of your personal data, or object to processing. Write to <a className="underline" href="mailto:gokulslabs@gmail.com">gokulslabs@gmail.com</a>.</p> },
        { h: "Changes", body: <p>If we materially change this policy, we'll update the date above and, where reasonable, notify you directly.</p> },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Privacy policy — Gokul Labs" },
      { name: "description", content: "How Gokul Labs collects, uses and protects your information." },
    ],
    links: [{ rel: "canonical", href: canonical("/privacy-policy") }],
  }),
});
