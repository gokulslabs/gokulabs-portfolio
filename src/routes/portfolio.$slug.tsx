import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, SectionLabel, CTASection } from "@/components/SiteShell";
import { caseStudies, caseStudyBySlug } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  component: CaseStudyPage,
  loader: ({ params }) => {
    const study = caseStudyBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    const title = s ? `${s.title} — Case study · Gokul Labs` : "Case study — Gokul Labs";
    const description = s?.summary ?? "A Gokul Labs case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
});

function CaseStudyPage() {
  const { study: c } = Route.useLoaderData() as { study: import("@/data/portfolio").CaseStudy };
  const next = caseStudies[(caseStudies.findIndex((x) => x.slug === c.slug) + 1) % caseStudies.length];
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 pb-12 md:px-10 md:pt-20 md:pb-16">
        <div className="reveal flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/portfolio" className="hover:text-foreground">Portfolio</Link>
          <span>/</span>
          <span className="text-foreground">{c.title}</span>
        </div>
        <div className="reveal mt-6 md:mt-8 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.25em]">
          <span className="glass rounded-full px-3 py-1">{c.category}</span>
          <span className="glass rounded-full px-3 py-1">{c.industry}</span>
          <span className="glass rounded-full px-3 py-1">{c.year}</span>
        </div>
        <h1 className="reveal mt-6 font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight max-w-[16ch]">
          {c.title}
        </h1>
        <p className="reveal mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">{c.summary}</p>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Visit live site →
          </a>
        )}
      </section>

      {/* Cover */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className={`relative aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-elegant bg-gradient-to-br ${c.color}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex items-end justify-between gap-4">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/80">{c.client} · {c.year}</div>
            <div className="hidden md:block font-mono text-xs text-muted-foreground">Case study {c.num}</div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 border-y border-border py-10 md:py-12">
          {c.impact.map((i) => (
            <div key={i.l}>
              <div className="font-display text-3xl md:text-6xl text-gradient">{i.n}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{i.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl glass p-6 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Challenge</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">The problem.</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">{c.challenge}</p>
          </div>
          <div className="rounded-2xl glass p-6 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Solution</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">What we built.</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">{c.solution}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Features shipped" title={<>What's in <em className="not-italic italic text-gradient">production.</em></>} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border grid-cols-1 md:grid-cols-2">
          {c.features.map((f) => (
            <div key={f} className="bg-background p-5 text-sm md:text-base">
              <span className="text-accent mr-2">◆</span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Screens" title="Inside the product." />
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-br ${c.color} overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                Screen {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Tech stack" title="What it's built on." />
        <div className="flex flex-wrap gap-2 md:gap-3">
          {c.stack.map((s) => (
            <span key={s} className="glass rounded-full px-4 py-2 font-mono text-xs md:text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Lessons */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Lessons learned" title="What we'd tell ourselves." />
        <div className="grid gap-5 md:grid-cols-3">
          {c.lessons.map((l, i) => (
            <div key={i} className="rounded-2xl glass p-6">
              <div className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-3 font-display text-xl md:text-2xl leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next case study */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="group block overflow-hidden rounded-2xl md:rounded-3xl glass p-8 md:p-12 transition-all hover:bg-foreground/5">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Next case study</div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl md:text-6xl tracking-tight">{next.title}</h2>
            <span className="text-2xl text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0">→</span>
          </div>
          <p className="mt-3 max-w-xl text-sm md:text-base text-muted-foreground">{next.summary}</p>
        </Link>
      </section>

      <CTASection
        title={<>Build the next <em className="not-italic italic text-gradient">case study.</em></>}
        secondary={{ label: "Book consultation", to: "/book-consultation" }}
      />
    </SiteShell>
  );
}
