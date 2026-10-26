import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, FaqList, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Gokul Labs · Build work that has to hold up" },
      { name: "description", content: "Gokul Labs hires designers and engineers who want their name on work people can open. We read every strong application." },
      { property: "og:title", content: "Careers — Gokul Labs" },
      { property: "og:description", content: "Designers and engineers who want their name on work people can open." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/careers") }],
  }),
});

const openings: { title: string; loc: string; type: string; team: string }[] = [];

const culture = [
  { t: "Small on purpose", d: "We add someone when the work genuinely needs it — not to look bigger on a pitch deck." },
  { t: "Remote, written-first", d: "Few meetings. Clear writing, clear commits, and demos instead of status reports." },
  { t: "Craft over volume", d: "A handful of projects at a time, each finished properly rather than passed along." },
  { t: "You own your work", d: "Whoever builds a thing presents it to the client and stays with it after launch." },
  { t: "Learning is part of the job", d: "Time to read, prototype and improve the way we build is scheduled, not squeezed in." },
  { t: "Straight talk", d: "Feedback is direct, early and about the work. Nobody has to guess where they stand." },
];

const benefits = [
  "Fair, transparent pay for the region",
  "Fully remote, flexible hours",
  "Equipment you need to do the work",
  "Time set aside for learning",
  "Real ownership of projects",
  "Direct client contact, no layers",
];

const flow = [
  { k: "01", t: "Send something real", d: "A short note plus code, designs or a product you shipped. A CV alone tells us very little." },
  { k: "02", t: "Conversation", d: "A relaxed call about how you work and what you want to be building next." },
  { k: "03", t: "Paid trial task", d: "A small, realistic piece of work, paid at your rate. No unpaid take-homes." },
  { k: "04", t: "Decision", d: "A clear yes or no within a week, with the reasoning either way." },
];

const faqs = [
  { q: "Are you hiring right now?", a: "Not for a specific role. We keep open applications on file and get in touch when a project needs another pair of hands." },
  { q: "Do you work with freelancers?", a: "Yes. We regularly collaborate with freelance designers and engineers on individual projects." },
  { q: "Where are you based?", a: "India, working remotely with clients in other countries." },
  { q: "Do you take on interns or juniors?", a: "Occasionally, when there's someone senior with time to mentor properly. We'd rather not take someone on and leave them unsupported." },

];

function CareersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title={<>Work with people who <em className="not-italic italic text-gradient">care</em> about the craft.</>}
        intro="We hire people who want the product to be undeniable. Designers and engineers who would rather ship one thing at a high standard than start five and finish none."
      />

      {/* Open roles */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-10 md:mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionLabel kicker="Open roles" title={<>No listed roles <em className="not-italic italic text-gradient">right now.</em></>} />
          <p className="text-sm text-muted-foreground max-w-sm">
            We keep good open applications on file and reach out when a project needs another pair of hands.
          </p>
        </div>
        {openings.length > 0 ? (
          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-border divide-y divide-border">
            {openings.map((o) => (
              <a key={o.title} href="mailto:gokulslabs@gmail.com?subject=Application — Gokul Labs" className="group flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between md:p-7 hover:bg-foreground/5 transition-colors">
                <div className="flex items-baseline gap-4">
                  <span className="hidden md:inline font-mono text-xs text-muted-foreground w-24">{o.team}</span>
                  <h3 className="font-display text-xl md:text-3xl tracking-tight">{o.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                  <span className="glass rounded-full px-3 py-1 font-mono">{o.loc}</span>
                  <span className="glass rounded-full px-3 py-1 font-mono">{o.type}</span>
                  <span className="text-foreground group-hover:text-accent transition-colors">Apply →</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl md:rounded-3xl glass p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-4xl tracking-tight">Send an open application</h3>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
              A short note about what you like building, plus code, designs or a link to something you shipped. We read everything and reply either way.
            </p>
            <a href="mailto:gokulslabs@gmail.com?subject=Open application — Gokul Labs" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:shadow-glow">
              gokulslabs@gmail.com <span aria-hidden>↗</span>
            </a>
          </div>
        )}
      </section>


      {/* Culture */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <SectionLabel kicker="Culture" title="What it's like to work here." />
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {culture.map((c) => (
            <div key={c.t} className="rounded-2xl glass p-6">
              <h3 className="font-display text-xl md:text-2xl tracking-tight">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Benefits" title={<>The <em className="not-italic italic text-gradient">essentials.</em></>} />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b} className="bg-background p-5 text-sm">
              <span className="text-accent mr-2">◆</span>
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Application flow */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <SectionLabel kicker="Application flow" title="Five steps. Two weeks, end to end." />
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-5">
          {flow.map((p) => (
            <div key={p.k} className="bg-background p-5 md:p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.k}</div>
              <h3 className="mt-2 font-display text-xl md:text-2xl tracking-tight">{p.t}</h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel kicker="FAQ" title="Common questions." />
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        kicker="Send your work"
        title={<>Apply by <em className="not-italic italic text-gradient">email.</em></>}
        lead="Attach a CV, link to your best public work and tell us one thing you've built you're proud of. We reply to every applicant."
        primary={{ label: "gokulslabs@gmail.com", href: "mailto:gokulslabs@gmail.com?subject=Application — Gokul Labs" }}
      />
    </SiteShell>
  );
}
