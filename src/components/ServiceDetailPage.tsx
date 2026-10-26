import { Link } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, FaqList, CTASection } from "./SiteShell";
import { services, serviceBySlug, type ServiceSlug } from "@/data/services";

export function ServiceDetailPage({ slug }: { slug: ServiceSlug }) {
  const s = serviceBySlug(slug)!;
  const others = services.filter((x) => x.slug !== slug).slice(0, 4);
  return (
    <SiteShell>
      <PageHero
        eyebrow={`Services / ${s.num}`}
        title={
          <>
            {s.name.split(" ")[0]}{" "}
            <em className="not-italic italic text-gradient">
              {s.name.split(" ").slice(1).join(" ") || s.name}
            </em>
            .
          </>
        }
        intro={s.intro}
        breadcrumb={[{ label: s.name }]}
      />

      {/* Tagline marquee */}
      <section className="relative z-10 border-y border-border py-5 md:py-6 overflow-hidden">
        <div className="marquee flex shrink-0 gap-8 md:gap-12 whitespace-nowrap font-display text-3xl md:text-6xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-12">
              <span className={i % 2 === 1 ? "text-gradient" : ""}>{s.tagline}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Problems */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-10">
              <SectionLabel
                kicker="Problems we solve"
                title={<>Why teams call <em className="not-italic italic text-gradient">us in.</em></>}
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 md:space-y-6">
            {s.problems.map((p, i) => (
              <div key={p.t} className="rounded-2xl glass p-6 md:p-8">
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">{p.t}</h3>
                </div>
                <p className="mt-3 ml-8 md:ml-10 text-sm md:text-base text-muted-foreground max-w-xl">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel
          kicker="Benefits"
          title={<>What you actually <em className="not-italic italic text-gradient">get.</em></>}
        />
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-3">
          {s.benefits.map((b) => (
            <div key={b.t} className="bg-background p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Included" title={<>Features &amp; capabilities.</>} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {s.features.map((f) => (
            <div key={f} className="bg-background p-5 text-sm md:text-base">
              <span className="text-accent mr-2">◆</span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <SectionLabel kicker="How we work" title="Four phases. No surprises." />
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {s.process.map((p) => (
            <div key={p.k} className="bg-background p-5 md:p-8">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.k}</div>
              <h3 className="mt-2 md:mt-3 font-display text-xl md:text-3xl tracking-tight">{p.t}</h3>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="The stack" title={<>Tools of the <em className="not-italic italic text-gradient">trade.</em></>} />
        <div className="flex flex-wrap gap-2 md:gap-3">
          {s.stack.map((x) => (
            <span key={x} className="glass rounded-full px-4 py-2 md:px-5 md:py-2.5 font-mono text-xs md:text-sm">
              {x}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel kicker="FAQ" title={<>Common <em className="not-italic italic text-gradient">questions.</em></>} />
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <SectionLabel kicker="Also from the studio" title="Other services." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$slug"
              params={{ slug: o.slug }}
              className="group rounded-2xl glass p-5 md:p-6 transition-all hover:bg-foreground/5"
            >
              <div className="font-mono text-xs text-muted-foreground">{o.num}</div>
              <div className="mt-2 font-display text-xl md:text-2xl tracking-tight">{o.name}</div>
              <div className="mt-3 text-xs text-muted-foreground line-clamp-2">{o.tagline}</div>
              <div className="mt-4 text-xs text-muted-foreground group-hover:text-accent transition-colors">Read more →</div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title={<>{s.ctaLine}</>}
        lead="Tell us about your product. We respond to every brief within two working days — usually with an architecture sketch attached."
        secondary={{ label: "Book a consultation", to: "/book-consultation" }}
      />
    </SiteShell>
  );
}
