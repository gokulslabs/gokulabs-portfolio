import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources — Gokul Labs · Guides, checklists & playbooks" },
      { name: "description", content: "Free guides and checklists for shipping software — project planning, website launches, SaaS architecture, mobile release readiness and more." },
      { property: "og:title", content: "Resources — Gokul Labs" },
      { property: "og:description", content: "Free guides, checklists and playbooks." },
    ],
    links: [{ rel: "canonical", href: canonical("/resources") }],
  }),
});

const resources = [
  { type: "Guide", name: "The software project planning guide", pages: "32 pages", brief: "Scope a project so it ships on time — without padding, without panic. Templates for briefs, risk registers and milestone plans." },
  { type: "Checklist", name: "Website launch checklist", pages: "60 items", brief: "Performance, SEO, accessibility, analytics, legal — everything we tick off before a marketing site goes live." },
  { type: "Playbook", name: "Modern SaaS architecture playbook", pages: "44 pages", brief: "Multi-tenancy, auth, billing, RBAC, observability — patterns we reach for on every SaaS engagement." },
  { type: "Checklist", name: "Mobile release readiness", pages: "48 items", brief: "Play Store, App Store, signing, phased rollouts, crash gating — the launch list we run for every Android/iOS release." },
  { type: "Guide", name: "An honest guide to working with an agency", pages: "20 pages", brief: "What to look for, what to avoid, and how to write an RFP that surfaces signal — not pitch decks." },
  { type: "Playbook", name: "AI evals playbook", pages: "28 pages", brief: "Golden datasets, LLM judges, CI evals, regression gates — how to ship LLM features without the vibes." },
];

function ResourcesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Resources"
        title={<>Guides, checklists, <em className="not-italic italic text-gradient">playbooks.</em></>}
        intro="Free. No e-mail wall. The same internal documents we use on engagements — written so you can use them on yours."
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a key={r.name} href="mailto:gokulslabs@gmail.com?subject=Send me — Gokul Labs resource" className="group block rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-foreground/5">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{r.type}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{r.pages}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">{r.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.brief}</p>
              <div className="mt-5 text-xs text-muted-foreground group-hover:text-accent transition-colors">Request PDF ↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="Custom request" title="Need something we haven't written?" lead="Email us with the topic. If three other teams have asked, we'll write it. If you're the only one, we'll usually still help." />
      </section>

      <CTASection title={<>Hand the project to a team that <em className="not-italic italic text-gradient">already shipped it.</em></>} secondary={{ label: "Book consultation", to: "/book-consultation" }} />
    </SiteShell>
  );
}
