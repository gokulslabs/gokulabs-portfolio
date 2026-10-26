import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, FaqList, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Gokul Labs · Engagements, pricing, process, ownership" },
      { name: "description", content: "Common questions about how Gokul Labs engages, prices, ships and supports software — from discovery through long-term maintenance." },
      { property: "og:title", content: "FAQ — Gokul Labs" },
      { property: "og:description", content: "Common questions about working with Gokul Labs." },
    ],
    links: [{ rel: "canonical", href: canonical("/faq") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: groups.flatMap((g) => g.faqs).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

const groups = [
  {
    name: "Engagements",
    faqs: [
      { q: "What sizes of project do you take on?", a: "From 4-week design or architecture sprints to 12-month embedded pods. Below 4 weeks, we recommend a freelancer. Above 18 months, we'll discuss splitting into phases." },
      { q: "Where are you based?", a: "India. We work remotely with clients in other countries and keep overlap hours that suit your timezone." },
      { q: "Do you sign NDAs?", a: "Yes — happy to use yours or ours. We sign before any specifics about your business are shared." },
      { q: "Will we own the code?", a: "Yes, in full. Everything lands in your GitHub org under your licence. No black boxes, no escrow." },
    ],
  },
  {
    name: "Pricing",
    faqs: [
      { q: "How do you price?", a: "Discovery and architecture are usually fixed-fee. Build is typically time-and-materials with a budget cap and weekly burn-down. Retainers are monthly hours." },
      { q: "What's a typical project budget?", a: "Greenfield apps: $80k–$400k. SaaS platforms: $150k–$800k. Maintenance retainers: from $12k/month. We'll tell you honestly if your budget needs to be different." },
      { q: "Do you do equity-only or rev-share?", a: "No. We've found cash engagements set better incentives for both sides." },
    ],
  },
  {
    name: "Process",
    faqs: [
      { q: "How fast can you start?", a: "Discovery typically starts 1–3 weeks from a signed SOW. Build kicks off 2 weeks after a signed architecture proposal." },
      { q: "Who'll I work with day to day?", a: "A staff engineer from our side is your point of contact. Two to four senior engineers do the work. No account managers." },
      { q: "How do you handle scope creep?", a: "Written change request, impact estimate, signed off in writing. We'd rather pause to align than ship a worse version of what you asked for." },
      { q: "What if it's not working out?", a: "Every engagement has a 30-day exit clause after the first 60 days. We've never had to use it." },
    ],
  },
  {
    name: "After launch",
    faqs: [
      { q: "Do you stay on after launch?", a: "Most clients do. Same engineers, same Slack, monthly retainer with defined SLAs. Optional, never required." },
      { q: "What about on-call?", a: "Business-hours response is included on retainer. 24/7 on-call is an add-on with a defined response SLA." },
      { q: "Can you hand off to our team?", a: "Yes — every project ships with ADRs, runbooks, an onboarding doc and a knowledge transfer session. We aim for self-sufficiency, not lock-in." },
    ],
  },
];

function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title={<>Common <em className="not-italic italic text-gradient">questions.</em></>}
        intro="Everything we get asked on intro calls, written down. If something isn't here — write to us, and we'll add it."
      />
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16 space-y-16">
        {groups.map((g) => (
          <div key={g.name} className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel kicker={g.name} title={<>{g.name}.</>} />
            </div>
            <div className="md:col-span-8">
              <FaqList faqs={g.faqs} />
            </div>
          </div>
        ))}
      </section>
      <CTASection title={<>Still got a <em className="not-italic italic text-gradient">question?</em></>} secondary={{ label: "Contact us", to: "/contact" }} />
    </SiteShell>
  );
}
