export type ServiceSlug =
  | "web-development"
  | "ecommerce"
  | "saas-development"
  | "admin-systems"
  | "mobile-apps"
  | "ai-automation"
  | "ui-ux-design"
  | "maintenance-support";

export type ServiceDetail = {
  slug: ServiceSlug;
  num: string;
  name: string;
  tagline: string;
  intro: string;
  problems: { t: string; d: string }[];
  benefits: { t: string; d: string }[];
  features: string[];
  process: { k: string; t: string; d: string }[];
  stack: string[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "web-development",
    num: "01",
    name: "Web development",
    tagline: "Type-safe web platforms engineered to scale.",
    intro:
      "Marketing sites, portals and product surfaces built with React, Next.js, TypeScript and edge-deployed APIs — fast, accessible, observable.",
    problems: [
      { t: "Legacy sites that slow you down", d: "Slow page loads, brittle CMS plumbing and missed SEO opportunities are costing real revenue every quarter." },
      { t: "Disconnected marketing & product", d: "Your landing pages and your product live in different stacks, languages and deploy pipelines." },
      { t: "Engineering bottlenecks", d: "Every copy change requires a Jira ticket, a sprint and a release window." },
    ],
    benefits: [
      { t: "Core Web Vitals in the green", d: "LCP under 1.5s, CLS near zero, TBT minimised — measured in production, not on a laptop." },
      { t: "Composable content model", d: "Editors ship changes without engineers. Engineers ship features without breaking content." },
      { t: "Edge-first delivery", d: "Cloudflare, Vercel or your cloud of choice. Sub-50ms responses globally." },
    ],
    features: [
      "Server components & streaming SSR",
      "Headless CMS integration",
      "Design system & component library",
      "A/B testing harness",
      "Sitemaps, OG, JSON-LD, robots",
      "Analytics & event tracking",
      "WCAG 2.2 AA accessibility",
      "CI / preview deployments",
    ],
    process: [
      { k: "01", t: "Discovery", d: "Audience, conversion goals, content audit, technical constraints." },
      { k: "02", t: "Design system", d: "Tokens, components, motion, page templates — ready to extend." },
      { k: "03", t: "Build", d: "Sprintly delivery with preview URLs and weekly review calls." },
      { k: "04", t: "Launch & iterate", d: "Analytics, experimentation and a 30-day post-launch hardening." },
    ],
    stack: ["TypeScript", "React", "Next.js", "TanStack Start", "Tailwind", "tRPC", "Vercel", "Cloudflare"],
    faqs: [
      { q: "Do you work with our existing CMS?", a: "Yes — we integrate with Sanity, Contentful, Storyblok, Payload, Strapi, Wagtail and headless WordPress. We'll also recommend a switch if the current one is the bottleneck." },
      { q: "Can you keep our existing brand?", a: "Absolutely. We can extend an existing design system or build a new one from scratch — your call." },
      { q: "How fast can you ship a marketing site?", a: "Standalone landing pages: 2–3 weeks. Full marketing sites with CMS: 5–8 weeks." },
    ],
    ctaLine: "Ready to ship a web platform that compounds?",
  },
  {
    slug: "ecommerce",
    num: "02",
    name: "E-commerce",
    tagline: "Storefronts engineered to convert.",
    intro:
      "Headless commerce built on Shopify, Medusa or Commerce Layer. PDPs that load instantly, checkout flows that don't leak, ops dashboards that scale.",
    problems: [
      { t: "Conversion stuck below benchmark", d: "Slow PDPs, clumsy mobile checkout and broken email flows quietly eat into LTV." },
      { t: "Theme limits hitting growth", d: "Out-of-the-box themes can't keep up with merchandising, personalisation or A/B testing." },
      { t: "Ops drowning in plugins", d: "Twenty-plus apps wired together, each one a tax on performance and reliability." },
    ],
    benefits: [
      { t: "Headless, type-safe storefront", d: "Custom React frontend, decoupled from the commerce backend — change either side independently." },
      { t: "Sub-second product pages", d: "Image pipelines, edge caching and prefetching tuned for the Vitals that drive ranking and revenue." },
      { t: "Checkout you actually control", d: "Custom funnels, upsells, A/B tests and analytics built into the stack." },
    ],
    features: [
      "Headless storefront (React / Next.js)",
      "Shopify Hydrogen / Medusa / custom",
      "PIM & ERP integrations",
      "Personalisation & A/B testing",
      "Subscriptions & memberships",
      "Multi-currency & tax",
      "Order management dashboards",
      "Loyalty & referral systems",
    ],
    process: [
      { k: "01", t: "Audit", d: "Funnel analytics, performance, plugin sprawl, brand and merchandising review." },
      { k: "02", t: "Architecture", d: "Headless storefront, data model, integrations, deployment topology." },
      { k: "03", t: "Build & migrate", d: "Phased migration with zero downtime, SEO redirects locked in." },
      { k: "04", t: "Optimise", d: "Quarterly CRO sprints — landing pages, checkout, retention." },
    ],
    stack: ["Shopify", "Hydrogen", "Medusa", "Stripe", "Algolia", "Klaviyo", "Sanity", "Cloudflare"],
    faqs: [
      { q: "Do we have to leave Shopify?", a: "No. We build headless storefronts on top of Shopify, keeping admin, payments, fulfilment — and gaining a custom frontend." },
      { q: "How do you handle migrations?", a: "Phased: redirects mapped first, parallel run, then traffic cutover — so search rankings and existing orders aren't disrupted." },
      { q: "Subscriptions?", a: "Yes — native Shopify Subscriptions, Recharge, or fully custom on Stripe Billing." },
    ],
    ctaLine: "Let's rebuild your store around conversion.",
  },
  {
    slug: "saas-development",
    num: "03",
    name: "SaaS development",
    tagline: "Multi-tenant products, built right the first time.",
    intro:
      "End-to-end SaaS development — from architecture and auth to billing, dashboards and admin tooling. Built on the same foundations we ship for funded scale-ups.",
    problems: [
      { t: "MVP debt blocking growth", d: "The prototype that got you to PMF is now the thing that's slowing every release." },
      { t: "No tenant isolation strategy", d: "Single-tenant assumptions baked into the schema, the auth layer and the billing." },
      { t: "Brittle billing & permissions", d: "Pricing changes require code. Roles are hardcoded. Enterprise deals stall on SSO and audit logs." },
    ],
    benefits: [
      { t: "Multi-tenant from day one", d: "Row-level security, per-tenant config, tenant-aware analytics and isolation tested under load." },
      { t: "Billing that flexes", d: "Stripe, Paddle or LemonSqueezy wired into a pricing model you can change without a migration." },
      { t: "Enterprise-ready", d: "SSO/SAML, audit logs, SCIM, RBAC, regional data residency — the things that close ARR." },
    ],
    features: [
      "Auth, SSO, SCIM, MFA",
      "Stripe / Paddle billing",
      "Role-based access control",
      "Webhooks & public API",
      "Admin & impersonation tooling",
      "In-app analytics & dashboards",
      "Email & in-app notifications",
      "Background jobs & queues",
    ],
    process: [
      { k: "01", t: "Product architecture", d: "Domain modelling, tenant model, auth & billing topology, data flows." },
      { k: "02", t: "Foundation sprint", d: "Auth, billing, admin and CI in the first 3 weeks — every feature builds on this." },
      { k: "03", t: "Feature delivery", d: "Weekly releases against a shared roadmap with measurable acceptance criteria." },
      { k: "04", t: "Scale & enterprise", d: "Observability, SOC2-ready logging, SLAs and on-call." },
    ],
    stack: ["TypeScript", "Next.js", "Postgres", "Prisma", "Redis", "Stripe", "Clerk", "Vercel"],
    faqs: [
      { q: "Will we own the code?", a: "Yes — everything ships into your GitHub org under your licence. No black boxes." },
      { q: "Can you join an existing codebase?", a: "Yes. We do an architecture audit first, then propose either a hardening plan or a strangler-pattern rebuild." },
      { q: "Do you stay on after launch?", a: "Most clients keep us on a retainer for new features and on-call. Optional — never required." },
    ],
    ctaLine: "Build the SaaS your roadmap deserves.",
  },
  {
    slug: "admin-systems",
    num: "04",
    name: "Admin systems & internal tools",
    tagline: "Operations software that pays for itself.",
    intro:
      "Internal dashboards, back-office tools, ops consoles and B2B portals that replace spreadsheets, no-code stacks and tribal knowledge.",
    problems: [
      { t: "Spreadsheet sprawl", d: "Critical workflows live in Google Sheets passed between five teams with no audit trail." },
      { t: "Retool & no-code ceiling", d: "Hit the limits of low-code? Performance, permissions and customisation start fighting back." },
      { t: "Slow ops, costly mistakes", d: "Manual processes mean longer cycle times and expensive errors at scale." },
    ],
    benefits: [
      { t: "10× faster ops", d: "Bulk actions, keyboard-first workflows, real-time data and search that just works." },
      { t: "Tightly scoped permissions", d: "Role and resource-level access, with audit logs that satisfy compliance." },
      { t: "Integrates with your stack", d: "Direct database, API and warehouse access. No ETL detours required." },
    ],
    features: [
      "Custom CRUD & workflows",
      "Bulk actions & approvals",
      "Audit logs & soft delete",
      "Permissioned views & exports",
      "Embedded analytics",
      "Search (Algolia / Meilisearch)",
      "SSO & impersonation",
      "Mobile-friendly ops UI",
    ],
    process: [
      { k: "01", t: "Process mapping", d: "Shadow your ops team. Catalogue every workflow, owner and pain point." },
      { k: "02", t: "Prioritised roadmap", d: "Ship the highest-ROI workflow first — measurable in hours saved per week." },
      { k: "03", t: "Build", d: "Two-week increments. Real users in the loop from week two." },
      { k: "04", t: "Adoption & handoff", d: "Training, docs and an optional support retainer." },
    ],
    stack: ["TypeScript", "Next.js", "Postgres", "TanStack Table", "Tailwind", "Clerk", "Inngest"],
    faqs: [
      { q: "Why not Retool / Internal?", a: "Great for v0. Past 50 active users or complex permissions, custom usually wins on cost, speed and DX." },
      { q: "Can you build on top of our data warehouse?", a: "Yes — Snowflake, BigQuery, Redshift, ClickHouse. Read replicas or warehouse-native, your call." },
      { q: "Is it secure enough for finance/health?", a: "Yes — SOC2-aligned logging, encryption at rest and in transit, row-level security, audit trails." },
    ],
    ctaLine: "Stop scaling humans where software should scale.",
  },
  {
    slug: "mobile-apps",
    num: "05",
    name: "Mobile apps",
    tagline: "Native-grade Android & iOS, on time.",
    intro:
      "Kotlin and Jetpack Compose for Android, Swift for iOS, React Native and Flutter for cross-platform. Modular, instrumented, App Store and Play Store ready.",
    problems: [
      { t: "Apps that ship late", d: "Six-month roadmaps that become eighteen, with crashing builds and disappointed users." },
      { t: "Web teams shipping mobile", d: "Your web team is doing their best, but mobile requires native-grade craft." },
      { t: "Store rejections & ratings", d: "Slow approvals, surprise rejections and 3-star ratings dragging acquisition." },
    ],
    benefits: [
      { t: "Modular & testable", d: "Feature-modular code, dependency injection, instrumentation tests — refactor without fear." },
      { t: "Crash reporting from day one", d: "Crash analytics, performance monitoring and release gating set up before launch, not after the first bad review." },
      { t: "Store-ready releases", d: "Play Console / App Store Connect configured, CI building signed artifacts, phased rollouts wired up." },
    ],
    features: [
      "Kotlin · Jetpack Compose · Coroutines",
      "Swift · SwiftUI",
      "React Native / Flutter",
      "Offline-first sync",
      "Push notifications & deep links",
      "In-app purchases",
      "Analytics & A/B testing",
      "CI, signing & phased rollouts",
    ],
    process: [
      { k: "01", t: "Product & UX", d: "Native patterns, design system, prototyping with real device flows." },
      { k: "02", t: "Architecture", d: "Modules, navigation, state, networking, offline strategy." },
      { k: "03", t: "Build", d: "Two-week sprints. TestFlight & internal track from week two." },
      { k: "04", t: "Launch", d: "Store submission, phased rollout, crash & perf hardening." },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "React Native", "Flutter", "Firebase", "Bitrise"],
    faqs: [
      { q: "Native or cross-platform?", a: "Depends on team, roadmap and performance targets. We'll recommend honestly — we've shipped both in production." },
      { q: "Can you publish to the stores for us?", a: "Yes — Play Console, App Store Connect, signing certs and review responses." },
      { q: "What about existing apps?", a: "We audit, then either harden in place or migrate module-by-module. No big-bang rewrites." },
    ],
    ctaLine: "Ship a mobile app users actually keep installed.",
  },
  {
    slug: "ai-automation",
    num: "06",
    name: "AI & automation",
    tagline: "LLM features that earn their keep.",
    intro:
      "RAG, agents and LLM features wired into your product — with evals, observability, cost controls and a clear ROI story.",
    problems: [
      { t: "AI demos that don't ship", d: "Impressive prototypes that fall apart on real data, edge cases or production load." },
      { t: "Hallucinations & PII risk", d: "No evals, no guardrails, no audit trail. One incident from a Twitter thread." },
      { t: "Runaway token costs", d: "No caching, no model routing, no per-tenant limits — bills outpacing revenue." },
    ],
    benefits: [
      { t: "Eval-driven development", d: "Golden datasets and CI evals so quality is measurable, not vibes." },
      { t: "Cost & latency controls", d: "Smart routing, caching, batching and per-tenant quotas — predictable margins." },
      { t: "Compliance-aware design", d: "PII redaction, audit logs, regional residency and BYO-key for enterprise customers." },
    ],
    features: [
      "RAG over your data",
      "Agents & tool use",
      "Voice & multimodal",
      "Workflow automation (Inngest / Temporal)",
      "Evals & observability (Braintrust / Langfuse)",
      "PII redaction & guardrails",
      "Multi-model routing",
      "BYO-key & data residency",
    ],
    process: [
      { k: "01", t: "Use-case framing", d: "Pick the 1–3 features with measurable ROI. Define success metrics." },
      { k: "02", t: "Evals & data", d: "Build the golden dataset and eval harness before the feature." },
      { k: "03", t: "Ship behind a flag", d: "Roll out to internal, then beta, then GA with monitoring." },
      { k: "04", t: "Iterate", d: "Weekly eval scores, cost reviews and prompt / model upgrades." },
    ],
    stack: ["OpenAI", "Anthropic", "Vercel AI SDK", "LangGraph", "pgvector", "Braintrust", "Inngest", "Modal"],
    faqs: [
      { q: "Do we send data to OpenAI?", a: "Only if you choose to. We support self-hosted models, Bedrock, Vertex and zero-retention enterprise plans." },
      { q: "How do you measure quality?", a: "Eval datasets, scored by rubrics or LLM judges, run in CI. Regressions block merges." },
      { q: "Can you integrate with our existing app?", a: "Yes — REST/SDK, embeds, or co-located in your codebase. Your stack, your conventions." },
    ],
    ctaLine: "Turn the AI demo into a feature with a P&L.",
  },
  {
    slug: "ui-ux-design",
    num: "07",
    name: "UI/UX design",
    tagline: "Product design that engineers love to build.",
    intro:
      "Product design, design systems and brand identity — researched, prototyped and shipped with the team that's going to build it.",
    problems: [
      { t: "Beautiful Figma, broken product", d: "Designs that don't survive contact with components, states and real data." },
      { t: "No design system", d: "Every screen reinvents spacing, colour and components. Consistency rots." },
      { t: "Slow design → dev handoff", d: "Tickets bounce back and forth. Edge cases discovered in QA. Velocity drops." },
    ],
    benefits: [
      { t: "Designed for the code", d: "Designers and engineers in the same room from week one. Components, not pages." },
      { t: "Tokens & primitives", d: "A real design system — tokens, primitives, recipes — shipped as code, not screenshots." },
      { t: "Faster shipping", d: "Engineers compose existing primitives instead of pixel-pushing every release." },
    ],
    features: [
      "Product strategy & UX research",
      "Information architecture",
      "Wireframes & interactive prototypes",
      "Design system (Figma + code)",
      "Brand identity & guidelines",
      "Marketing & landing pages",
      "Mobile-first responsive",
      "Motion & micro-interactions",
    ],
    process: [
      { k: "01", t: "Discovery & research", d: "Interviews, competitive teardown, jobs-to-be-done, success metrics." },
      { k: "02", t: "Concepts", d: "Two or three directions. Tested with real users before pixel polishing." },
      { k: "03", t: "System & screens", d: "Design system in parallel with screens — both shipping into code." },
      { k: "04", t: "Build with engineering", d: "Daily sync with builders. Edge cases caught in design, not QA." },
    ],
    stack: ["Figma", "Framer", "Storybook", "Tailwind", "Radix", "Motion", "Lottie"],
    faqs: [
      { q: "Design only?", a: "Yes — many clients keep their own engineering team and just hire our design. We hand off in whatever fidelity works." },
      { q: "Can you brand a startup from zero?", a: "Yes — logo, identity system, voice, brand guidelines, plus a marketing site." },
      { q: "Do you do user research?", a: "Yes — interviews, usability tests, surveys. We staff a researcher for projects that need one." },
    ],
    ctaLine: "Design a product worth building twice.",
  },
  {
    slug: "maintenance-support",
    num: "08",
    name: "Maintenance & support",
    tagline: "Keep the lights on. And the dashboards green.",
    intro:
      "Ongoing engineering, on-call, security patches, performance work and roadmap continuity for apps you depend on.",
    problems: [
      { t: "Original team is gone", d: "The agency vanished. The contractor moved on. Nobody knows how it works." },
      { t: "Drowning in tech debt", d: "Dependencies a year out of date, no tests, deploys feel like roulette." },
      { t: "Outages with no answer", d: "Things break, no one's on-call, customers find out before you do." },
    ],
    benefits: [
      { t: "A team that owns it", d: "Engineers who learn the codebase and stay with it — the same people from the first incident to the next release." },
      { t: "Proactive, not reactive", d: "Monthly dependency updates, perf audits, security patching — before they become incidents." },
      { t: "On-call you can call", d: "PagerDuty rotation, defined SLAs, runbooks and post-mortems." },
    ],
    features: [
      "Dedicated engineering pod",
      "24/7 on-call (optional)",
      "Monthly patch & dep updates",
      "Quarterly performance audits",
      "Security & penetration support",
      "Backups & DR drills",
      "Roadmap & feature work",
      "Incident response & postmortems",
    ],
    process: [
      { k: "01", t: "Codebase audit", d: "Architecture, deps, infra, security, observability — written report in 2 weeks." },
      { k: "02", t: "Stabilise", d: "Fix the cliffs. Patch deps, add monitoring, set up CI, write the missing tests." },
      { k: "03", t: "Operate", d: "Defined SLAs, monthly reports, quarterly business reviews." },
      { k: "04", t: "Evolve", d: "Roadmap delivery alongside maintenance — same team, no context switch." },
    ],
    stack: ["Sentry", "Datadog", "PagerDuty", "GitHub Actions", "Terraform", "Renovate", "Snyk"],
    faqs: [
      { q: "Do you take over from another agency?", a: "Yes — every month. We do a structured handover and codebase audit in the first 2 weeks." },
      { q: "What's the minimum commitment?", a: "3 months on a retainer, then month-to-month. We'd rather you stay because we're good, not because of a contract." },
      { q: "Do you do on-call?", a: "Yes — business hours included by default, 24/7 on-call as an add-on with defined response SLAs." },
    ],
    ctaLine: "Hand the keys to a team that wants them.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
