import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, CTASection } from "@/components/SiteShell";
import { caseStudies } from "@/data/portfolio";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "References — Gokul Labs · Talk to the people we've built for" },
      { name: "description", content: "We don't publish invented quotes. Ask us and we'll introduce you to a client whose project resembles yours — and every product we've shipped is live to inspect." },
      { property: "og:title", content: "References — Gokul Labs" },
      { property: "og:description", content: "No invented quotes. Live products you can open, and real references on request." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/testimonials") }],
  }),
});

const points = [
  {
    t: "We don't publish quotes we wrote ourselves",
    d: "Most agency testimonial pages are copywriting. Ours will fill up as clients choose to go on record — and not before.",
  },
  {
    t: "References on request",
    d: "Tell us the kind of project you're planning and we'll put you in touch with someone we've built something similar for.",
  },
  {
    t: "The work is public",
    d: "Every product below is live. Open it on your phone, click through the flows, judge the craft directly.",
  },
];

function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="References"
        title={<>Judge us on the <em className="not-italic italic text-gradient">work itself.</em></>}
        intro="The products are live. Open them. If you want a person to talk to, we will introduce you to someone we have built for — not a quote we wrote ourselves."
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-4 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="bg-background p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl tracking-tight">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Work you can inspect
        </div>
        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <div key={c.slug} className="rounded-2xl glass p-6 md:p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.industry}</div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{c.summary}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                    Visit live site ↗
                  </a>
                )}
                <Link to="/portfolio/$slug" params={{ slug: c.slug }} className="text-muted-foreground hover:text-foreground transition-colors">
                  Case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        kicker="References available"
        title={<>Want to speak to a <em className="not-italic italic text-gradient">past client?</em></>}
        lead="Ask, and we'll arrange an introduction with someone whose project looked like yours."
        secondary={{ label: "See case studies", to: "/portfolio" }}
      />
    </SiteShell>
  );
}
