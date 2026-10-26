import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";
import { caseStudies } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Gokul Labs" },
      { name: "description", content: "Gokul Labs designs and ships web platforms, mobile products, and the systems behind them — built to a standard you can open." },
      { property: "og:title", content: "About — Gokul Labs" },
      { property: "og:description", content: "Products that have to hold up in the real world." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/about") }],
  }),
});

const values = [
  { k: "01", t: "Less code, fewer problems", d: "The smallest thing that solves the problem is usually the thing that still works in two years." },
  { k: "02", t: "A stack that can scale", d: "Postgres, React, Kotlin, TypeScript. The interesting part is the product. The foundation is built to carry it." },
  { k: "03", t: "Say the hard thing early", d: "If the budget doesn't fit the idea, or a feature isn't worth building, we tell you at the start." },
  { k: "04", t: "Design and engineering together", d: "The same people draw the screens and build them, so nothing gets promised that can't be made." },
  { k: "05", t: "Write it down", d: "Decisions, trade-offs and setup steps live in the repository, not in someone's memory." },
  { k: "06", t: "Show working software", d: "A link you can click beats a status update every week of the project." },
];

const philosophy = [
  "Software is judged on a phone, on a bad connection, by someone in a hurry. That's the bar we build to.",
  "The expensive decisions are the ones that are hard to reverse. We take our time on those and move quickly on everything else.",
  "A project isn't finished at launch. It's finished when someone else can pick it up without calling us.",
];

const truths = [
  { t: "You reach the builders", d: "The people who shape the product are the people in the room. Decisions move at the speed of the work, not a chain of handoffs." },
  { t: "The proof is live", d: "Every product on this site can be opened. Judge the craft on a phone, in the flows, not in a slide." },
  { t: "We choose the work", d: "We take on products that have to matter. If the brief and the product don't match, we say so before the build starts." },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="The studio"
        title={<>Work that <em className="not-italic italic text-gradient">holds up.</em></>}
        intro="Gokul Labs is a software studio for teams with something real to ship. We design and build web platforms, mobile products, and the systems underneath them — then stay close enough that the product keeps getting better after launch."
      />

      {/* Story */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel kicker="Our story" title={<>One standard, from the first build.</>} />
          </div>
          <div className="md:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Gokul Labs started with a refusal to ship anything we would not stand behind. That standard is the studio.
            </p>
            <p>
              Since then we have shipped {caseStudies.length} products — hospitality brands, dental software, survey platforms, fleet operations. All of them are live. All of them are linked from this site, because the work should speak before we do.
            </p>
            <p>
              The people who scope a product are the people who build it. That is how the work stays coherent from the first screen to the system underneath.
            </p>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-base text-foreground hover:text-accent transition-colors">
              See the work <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">What we&apos;re for</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1]">
              Software that still looks right <em className="not-italic italic text-gradient">a year later.</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Products people can run, extend, and trust. Fast on a real phone, clear to hand over, and built so the next release is easier than the first.
            </p>
          </div>
          <div className="bg-background p-8 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Where we&apos;re going</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1]">
              A studio people send their <em className="not-italic italic text-gradient">hardest product to.</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              The next brief should come because the last product held up. That is the only growth worth having.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <SectionLabel kicker="How we work" title="Six things we actually hold to." />
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-3">
          {values.map((v) => (
            <div key={v.k} className="bg-background p-6 md:p-8">
              <div className="font-mono text-xs text-muted-foreground">{v.k}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel kicker="What we believe" title={<>Opinions we&apos;ll <em className="not-italic italic text-gradient">defend.</em></>} />
          </div>
          <div className="md:col-span-7 space-y-6">
            {philosophy.map((p, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <p className="font-display text-xl md:text-2xl leading-snug text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest limits */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <SectionLabel
          kicker="The standard"
          title={<>What working with us <em className="not-italic italic text-gradient">actually means.</em></>}
        />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {truths.map((x) => (
            <div key={x.t} className="rounded-2xl glass p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight">{x.t}</h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        kicker="Taking on new work"
        title={<>Tell us what you&apos;re <em className="not-italic italic text-gradient">building.</em></>}
        lead="A paragraph is enough to start a conversation."
        secondary={{ label: "See our process", to: "/process" }}
      />
    </SiteShell>
  );
}
