import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, SectionLabel, FaqList, CTASection } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Our process — Gokul Labs" },
      { name: "description", content: "Discovery to deployment to maintenance — a seven-phase software engagement that ships on time without surprises." },
      { property: "og:title", content: "Our process — Gokul Labs" },
      { property: "og:description", content: "A seven-phase software engagement that ships on time without surprises." },
    ],
    links: [{ rel: "canonical", href: canonical("/process") }],
  }),
});

const phases = [
  {
    k: "01",
    name: "Discovery",
    timeline: "1–2 weeks",
    summary: "Frame the problem before solving it.",
    expectations: "Stakeholder interviews, current-state audit, success metrics, risk register.",
    deliverables: ["Written discovery brief", "Architecture audit (if existing system)", "Goals, metrics, anti-goals", "First-cut roadmap"],
  },
  {
    k: "02",
    name: "Planning",
    timeline: "1 week",
    summary: "Architecture decisions you can stake the project on.",
    expectations: "Domain model, system architecture, integration map, work breakdown, milestones.",
    deliverables: ["Architecture RFC", "ER diagram & API surface", "Sprint plan & milestones", "Fixed-fee or T&M proposal"],
  },
  {
    k: "03",
    name: "Design",
    timeline: "2–4 weeks",
    summary: "Designed with the engineers who will build it.",
    expectations: "UX research, IA, interactive prototypes, design system tokens — in lockstep with engineering.",
    deliverables: ["User flows & IA", "Interactive prototypes", "Design system (Figma + code)", "Accessibility audit"],
  },
  {
    k: "04",
    name: "Development",
    timeline: "6–16 weeks (typical)",
    summary: "Two-week sprints. Working software every Friday.",
    expectations: "Trunk-based development, code review, CI from day one, weekly demos against running builds.",
    deliverables: ["Production-grade codebase", "Component library", "Public API & docs", "Preview deployments per PR"],
  },
  {
    k: "05",
    name: "Testing & QA",
    timeline: "Continuous",
    summary: "Tested in CI, not in production.",
    expectations: "Unit, integration, end-to-end, accessibility and load testing — automated in CI.",
    deliverables: ["Test coverage report", "E2E suite (Playwright / Maestro)", "Load test results", "Accessibility audit"],
  },
  {
    k: "06",
    name: "Deployment",
    timeline: "1–2 weeks",
    summary: "Ship behind a flag. Roll out by cohort.",
    expectations: "Infrastructure as code, blue/green or canary deploys, observability, on-call runbook.",
    deliverables: ["Terraform / IaC repo", "Observability stack (Sentry, Datadog)", "Incident runbook", "Phased rollout plan"],
  },
  {
    k: "07",
    name: "Maintenance",
    timeline: "Ongoing",
    summary: "We stay. Roadmap and ops, same team.",
    expectations: "Monthly patch cycle, quarterly architecture review, defined SLAs, optional 24/7 on-call.",
    deliverables: ["Monthly status report", "Dep & security patches", "Quarterly tech review", "Feature delivery on roadmap"],
  },
];

const cadence = [
  { k: "Mon", t: "Sprint planning", d: "30 minutes. Backlog grooming was already done async." },
  { k: "Wed", t: "Mid-sprint sync", d: "15 minutes. Blockers, scope check, design questions." },
  { k: "Fri", t: "Demo & retro", d: "Live demo of what shipped this week, then a 15-minute retro." },
  { k: "Async", t: "Daily Loom + GitHub", d: "Updates in PRs and a 2-minute Loom — no daily standups." },
];

const faqs = [
  { q: "Fixed-fee or time and materials?", a: "Both. Discovery + architecture is usually fixed. Build is typically T&M with weekly burn-down, capped to budget — you can cut scope, not quality." },
  { q: "Who runs the project?", a: "A staff engineer from our side is your single point of contact. You ship faster talking to the person writing the code." },
  { q: "What tools do you use?", a: "GitHub, Linear, Figma, Slack — or yours. We adapt to your stack, not the other way around." },
  { q: "How do you handle scope changes?", a: "Written change request, impact on scope and timeline, signed off in writing. No surprise invoices." },
];

function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How we work"
        title={<>Seven phases. <em className="not-italic italic text-gradient">No surprises.</em></>}
        intro="A predictable, documented engagement model — refined across forty-seven shipped builds. You know what's happening, when it ships and what you're getting."
      />

      {/* Phases */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="space-y-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border">
          {phases.map((p) => (
            <div key={p.k} className="bg-background p-6 md:p-10">
              <div className="grid gap-6 md:gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-3">
                  <div className="font-mono text-xs text-muted-foreground">{p.k}</div>
                  <h2 className="mt-2 font-display text-3xl md:text-5xl tracking-tight">{p.name}</h2>
                  <div className="mt-3 inline-flex items-center gap-2 glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                    {p.timeline}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="font-display text-xl md:text-2xl leading-snug">{p.summary}</p>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.expectations}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Deliverables</div>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="text-accent">◆</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cadence */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <SectionLabel kicker="Weekly cadence" title={<>A rhythm <em className="not-italic italic text-gradient">you can plan around.</em></>} />
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {cadence.map((c) => (
            <div key={c.t} className="bg-background p-5 md:p-8">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.k}</div>
              <h3 className="mt-2 md:mt-3 font-display text-xl md:text-3xl tracking-tight">{c.t}</h3>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expectations */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionLabel kicker="What we expect from you" title="A partnership, not a handoff." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "A decision-maker, available", d: "We need someone empowered to make calls in under 24 hours. Velocity dies on async decisions." },
            { t: "Access to your users", d: "Five real conversations with users beats fifty internal opinions. We'll set them up — you make the intro." },
            { t: "Code & infra access, week one", d: "Read access on day one, write access by the end of week one. We can't help what we can't see." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl glass p-6">
              <h3 className="font-display text-xl md:text-2xl tracking-tight">{x.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel kicker="FAQ" title={<>About our <em className="not-italic italic text-gradient">process.</em></>} />
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to <em className="not-italic italic text-gradient">kick off?</em></>}
        lead="Book a free 30-minute architecture call. We'll tell you whether we're the right fit — and what we'd do first."
        secondary={{ label: "Book consultation", to: "/book-consultation" }}
      />
    </SiteShell>
  );
}
