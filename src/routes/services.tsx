import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { services } from "@/data/services";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesIndexPage,
  head: () => ({
    meta: [
      { title: "Services — Gokul Labs · Web, mobile, SaaS, AI" },
      { name: "description", content: "Web, e-commerce, SaaS, mobile, AI, and the systems behind them — designed and shipped by a studio that treats the product as the proof." },
      { property: "og:title", content: "Services — Gokul Labs" },
      { property: "og:description", content: "Eight services. One senior team. Production-grade software." },
    ],
    links: [{ rel: "canonical", href: canonical("/services") }],
  }),
});

function ServicesIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title={<>Eight services. <em className="not-italic italic text-gradient">One senior team.</em></>}
        intro="From a marketing site that compounds to a SaaS platform that scales — we plan, design, build and operate the software your business depends on."
      />

      {/* Services grid */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative block bg-background p-6 md:p-10 transition-colors hover:bg-foreground/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-xs text-muted-foreground">{s.num}</div>
                  <h3 className="mt-2 font-display text-3xl md:text-5xl tracking-tight">{s.name}</h3>
                  <p className="mt-3 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">{s.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.stack.slice(0, 4).map((x) => (
                      <span key={x} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-2xl text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1 shrink-0">→</span>
              </div>
              <div className="mt-5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                Read service details ↗
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How engagements compose */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel kicker="Engagement models" title={<>Pick the <em className="not-italic italic text-gradient">shape</em> that fits.</>} />
          </div>
          <div className="md:col-span-7 space-y-4">
            {[
              { t: "Project", d: "Fixed scope, defined timeline, fixed-fee or capped T&M. Best for greenfield builds and migrations." },
              { t: "Embedded pod", d: "A 2–4 person team embedded with your team for 3–12 months. Best for scaling product velocity." },
              { t: "Retainer", d: "Monthly engineering hours, on-call and roadmap continuity. Best for keeping things running and shipping." },
              { t: "Architecture advisory", d: "Fractional staff engineer reviewing your code, architecture and team practices. Best when you don't need code, you need clarity." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl glass p-6">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">{x.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Tell us what you're <em className="not-italic italic text-gradient">building.</em></>}
        lead="Two-day response, every brief. Usually with an architecture sketch attached."
        secondary={{ label: "Book consultation", to: "/book-consultation" }}
      />
    </SiteShell>
  );
}
