import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Gokul Labs · Software for the verticals we know" },
      { name: "description", content: "Retail, healthcare, education, restaurants, real estate, logistics and manufacturing — software built with industry context." },
      { property: "og:title", content: "Industries — Gokul Labs" },
      { property: "og:description", content: "Software built with industry context." },
    ],
    links: [{ rel: "canonical", href: canonical("/industries") }],
  }),
});

const industries = [
  { name: "Retail & E-commerce", icon: "◐", brief: "Headless storefronts, POS, omnichannel inventory, loyalty.", systems: ["Shopify", "Stripe", "Algolia", "Klaviyo"] },
  { name: "Healthcare", icon: "✚", brief: "HIPAA-aligned platforms, clinician tools, patient portals.", systems: ["FHIR", "HL7", "Twilio", "AWS HealthLake"] },
  { name: "Education", icon: "◇", brief: "LMS extensions, assessment platforms, school management.", systems: ["LTI", "Canvas", "Moodle", "Postgres"] },
  { name: "Restaurants", icon: "▲", brief: "Ordering, KDS, reservations, loyalty, multi-location.", systems: ["Square", "Toast", "Stripe", "Twilio"] },
  { name: "Real estate", icon: "◰", brief: "Listings, CRM, transaction management, marketplaces.", systems: ["Mapbox", "Stripe Connect", "Algolia", "Postgres"] },
  { name: "Logistics", icon: "◭", brief: "Fleet tracking, dispatch, routing, customer portals.", systems: ["gRPC", "Kafka", "ClickHouse", "Mapbox"] },
  { name: "Manufacturing", icon: "◧", brief: "MES, IIoT dashboards, quality, ERP integrations.", systems: ["MQTT", "Timescale", "Grafana", "SAP"] },
  { name: "Finance & Fintech", icon: "◉", brief: "Onboarding, KYC, ledgers, payments, dashboards.", systems: ["Plaid", "Stripe", "Persona", "Postgres"] },
];

function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Industries"
        title={<>Software with <em className="not-italic italic text-gradient">industry context.</em></>}
        intro="We've shipped production systems across eight verticals — and we'll tell you honestly when we haven't. Context shortens the discovery, not the timeline."
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.name} className="bg-background p-6 md:p-8 group">
              <div className="font-display text-4xl text-gradient">{i.icon}</div>
              <h3 className="mt-4 font-display text-xl md:text-2xl tracking-tight">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.brief}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {i.systems.map((s) => (
                  <span key={s} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance / Standards */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Compliance" title={<>Built to the <em className="not-italic italic text-gradient">standard</em> your industry needs.</>} />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "SOC 2 / ISO 27001", d: "Audit-aligned logging, access control and incident process." },
            { t: "HIPAA / GDPR", d: "PII redaction, regional residency, BAA-ready cloud setup." },
            { t: "PCI / Fintech", d: "Tokenised payments, scoped infra, segregated environments." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl glass p-6">
              <h3 className="font-display text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection title={<>Work in a different industry?</>} lead="We learn fast. The first week of every project is industry deep dive — your domain becomes our domain." />
    </SiteShell>
  );
}
