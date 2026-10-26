import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/terms-of-service")({
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title={<>Terms of service.</>}
      updated="May 30, 2026"
      sections={[
        { h: "Acceptance", body: <p>By accessing this website or engaging Gokul Labs for services, you agree to these terms. If you don't agree, please don't use the site or engage us.</p> },
        { h: "Services", body: <p>Specific deliverables, timelines and fees for any engagement are governed by a separate Statement of Work or Master Services Agreement signed by both parties.</p> },
        { h: "Intellectual property", body: <p>The content of this website (excluding third-party trademarks) belongs to Gokul Labs. Engagement deliverables transfer to the client per the relevant SOW.</p> },
        { h: "Acceptable use", body: <p>You agree not to use the site to violate laws, infringe rights, transmit malware or interfere with normal operation.</p> },
        { h: "Disclaimer", body: <p>The site is provided "as is". To the maximum extent permitted by law, we disclaim implied warranties of merchantability and fitness for a particular purpose.</p> },
        { h: "Liability", body: <p>Except for liability that cannot be excluded by law, our aggregate liability arising from your use of this site is limited to EUR 100. Engagement-specific liability is governed by the relevant SOW.</p> },
        { h: "Governing law", body: <p>These terms are governed by the laws of India, and the courts of India have exclusive jurisdiction over any dispute arising from them.</p> },
        { h: "Contact", body: <p>Questions about these terms? Write to <a className="underline" href="mailto:gokulslabs@gmail.com">gokulslabs@gmail.com</a>.</p> },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Terms of service — Gokul Labs" },
      { name: "description", content: "Terms governing the use of the Gokul Labs website and services." },
    ],
    links: [{ rel: "canonical", href: canonical("/terms-of-service") }],
  }),
});
