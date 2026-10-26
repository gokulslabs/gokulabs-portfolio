import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Journal — Gokul Labs · Engineering notes & essays" },
      { name: "description", content: "Essays on software engineering, architecture, design and shipping production-grade products — from the Gokul Labs team." },
      { property: "og:title", content: "Journal — Gokul Labs" },
      { property: "og:description", content: "Essays on engineering, architecture and shipping production-grade products." },
    ],
    links: [{ rel: "canonical", href: canonical("/blog") }],
  }),
});

export const posts = [
  { slug: "shipping-android-in-eight-weeks", title: "Shipping a production Android app in eight weeks", category: "Mobile", date: "May 2026", read: "8 min", excerpt: "How we structured a Compose project for an eight-week clinician app — module boundaries, offline-first data and a CI pipeline that gates on crashes.", author: "Arjun Menon" },
  { slug: "type-safe-saas-architecture", title: "Type-safe SaaS architecture, end to end", category: "Web", date: "April 2026", read: "12 min", excerpt: "TypeScript from the database to the button. Why we pick tRPC, Prisma, and a single source of truth — and the trade-offs we've learned to manage.", author: "Lea Hoffmann" },
  { slug: "evals-before-features", title: "Evals before features: shipping AI without the vibes", category: "AI", date: "April 2026", read: "9 min", excerpt: "A practical playbook for golden datasets, LLM judges and CI evals that catch regressions before they hit your users.", author: "Priya Iyer" },
  { slug: "boring-tech-wielded-well", title: "Boring tech, wielded well", category: "Engineering", date: "March 2026", read: "6 min", excerpt: "Why we still reach for Postgres, Kotlin and React when there's a flashier tool — and the cost calculus behind it.", author: "Daichi Tanaka" },
  { slug: "incident-postmortem-template", title: "A post-mortem template you'll actually fill in", category: "Operations", date: "March 2026", read: "5 min", excerpt: "Most templates ask too much. Here's the four-section format we use after every P1 — and the rules that make it stick." , author: "Marcus Brandt" },
  { slug: "from-retool-to-real", title: "From Retool to real: when to graduate your internal tools", category: "Admin", date: "February 2026", read: "10 min", excerpt: "The four signals that say it's time to leave low-code — and a migration pattern that doesn't break ops." , author: "Mira Okafor" },
];

function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <SiteShell>
      <PageHero
        eyebrow="Journal"
        title={<>Engineering notes &amp; <em className="not-italic italic text-gradient">essays.</em></>}
        intro="What we're learning, building and debating. No SEO listicles, no thought-leadership filler — just notes from the work."
      />

      {/* Featured */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <Link to="/blog/$slug" params={{ slug: feature.slug }} className="group block overflow-hidden rounded-2xl md:rounded-3xl glass">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto bg-gradient-to-br from-[oklch(0.65_0.22_285)] to-[oklch(0.82_0.16_320)]">
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80">Featured · {feature.date}</div>
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{feature.category} · {feature.read}</div>
                <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1]">{feature.title}</h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{feature.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">By {feature.author}</div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors">Read →</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-foreground/5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.category} · {p.date} · {p.read}</div>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{p.author}</span>
                <span className="text-muted-foreground group-hover:text-accent">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection title={<>Subscribe via <em className="not-italic italic text-gradient">RSS</em> or e-mail.</>} primary={{ label: "gokulslabs@gmail.com", href: "mailto:gokulslabs@gmail.com?subject=Subscribe to Gokul Labs journal" }} secondary={{ label: "Browse resources", to: "/resources" }} />
    </SiteShell>
  );
}
