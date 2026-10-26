import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { caseStudies, type CaseStudy } from "@/data/portfolio";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Gokul Labs · Selected case studies" },
      { name: "description", content: "Selected case studies across mobile, web, SaaS, e-commerce and AI — with the challenge, solution, stack and measurable impact." },
      { property: "og:title", content: "Portfolio — Gokul Labs" },
      { property: "og:description", content: "Selected case studies across mobile, web, SaaS, e-commerce and AI." },
    ],
    links: [{ rel: "canonical", href: canonical("/portfolio") }],
  }),
});

const categories = ["All", "Web", "Mobile", "SaaS", "E-commerce", "AI", "Admin"] as const;

function PortfolioPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return caseStudies.filter((c) => {
      const matchesCat = cat === "All" || c.category === cat;
      const matchesQ =
        !term ||
        c.title.toLowerCase().includes(term) ||
        c.industry.toLowerCase().includes(term) ||
        c.summary.toLowerCase().includes(term) ||
        c.stack.some((s) => s.toLowerCase().includes(term));
      return matchesCat && matchesQ;
    });
  }, [cat, q]);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected <em className="not-italic italic text-gradient">case studies.</em></>}
        intro="Production builds across mobile, web, SaaS, e-commerce, and AI. Shipped, live, and built to be judged in the product — not in a deck."
      />

      {/* Filters */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="rounded-2xl glass p-4 md:p-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
                  cat === c ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm md:w-72">
            <span className="text-muted-foreground">⌕</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by client, stack, industry"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              aria-label="Search case studies"
            />
          </label>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        {filtered.length === 0 ? (
          <div className="rounded-2xl glass p-12 text-center">
            <div className="font-display text-3xl md:text-5xl">Nothing matches that filter.</div>
            <p className="mt-3 text-muted-foreground">Try a broader category or a different keyword.</p>
            <button onClick={() => { setCat("All"); setQ(""); }} className="mt-6 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm">
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        )}
      </section>

      <CTASection
        title={<>Want to be <em className="not-italic italic text-gradient">case study #06?</em></>}
        secondary={{ label: "See our services", to: "/services" }}
      />
    </SiteShell>
  );
}

function CaseCard({ c }: { c: CaseStudy }) {
  const className = "group block overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:shadow-glow";
  const inner = (
    <>
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${c.color}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">{c.num} · {c.year}</div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">{c.category} · {c.industry}</div>
          <h3 className="mt-1 font-display text-2xl tracking-tight">{c.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              {s}
            </span>
          ))}
          {c.stack.length > 4 && <span className="font-mono text-[10px] text-muted-foreground">+{c.stack.length - 4}</span>}
        </div>
        <div className="mt-4 text-xs text-muted-foreground group-hover:text-accent transition-colors">
          {c.url ? "Visit live site ↗" : "Read case study →"}
        </div>
      </div>
    </>
  );

  if (c.url) {
    return (
      <a href={c.url} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to="/portfolio/$slug" params={{ slug: c.slug }} className={className}>
      {inner}
    </Link>
  );
}
