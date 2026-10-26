import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/cookie-policy")({
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title={<>Cookie policy.</>}
      updated="May 30, 2026"
      sections={[
        { h: "What cookies are", body: <p>Cookies are small text files stored on your device that help websites work and provide analytics about how they are used.</p> },
        { h: "What we use", body: <p>This website uses only essential cookies (to remember your theme and preferences) and a privacy-respecting analytics cookie that does not track you across sites or build advertising profiles.</p> },
        { h: "Third parties", body: <p>We do not use third-party advertising, social-media tracking or session-replay cookies. Embedded content (e.g. video) from third parties may set their own cookies — we link to their policies where applicable.</p> },
        { h: "Your choices", body: <p>You can block or delete cookies in your browser settings. The site remains usable without analytics cookies.</p> },
        { h: "Contact", body: <p>Questions? Write to <a className="underline" href="mailto:gokulslabs@gmail.com">gokulslabs@gmail.com</a>.</p> },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Cookie policy — Gokul Labs" },
      { name: "description", content: "How Gokul Labs uses cookies." },
    ],
    links: [{ rel: "canonical", href: canonical("/cookie-policy") }],
  }),
});
