import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, CTASection } from "@/components/SiteShell";
import { posts } from "./blog";

type Post = (typeof posts)[number];

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — Gokul Labs journal` : "Journal — Gokul Labs";
    const description = p?.excerpt ?? "Notes from the Gokul Labs engineering team.";
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

const toc = [
  { id: "context", label: "Context" },
  { id: "approach", label: "The approach" },
  { id: "details", label: "Implementation details" },
  { id: "trade-offs", label: "Trade-offs" },
  { id: "what-we'd-change", label: "What we'd change" },
];

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 pb-10 md:px-10 md:pt-20 md:pb-12">
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/blog" className="hover:text-foreground">Journal</Link>
          <span> / </span>
          <span className="text-foreground">{post.category}</span>
        </div>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,7vw,6rem)] leading-[0.98] tracking-tight max-w-[20ch]">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By {post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read} read</span>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 grid gap-10 md:grid-cols-12">
        {/* TOC */}
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-10 rounded-2xl glass p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">On this page</div>
            <ul className="mt-4 space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`} className="text-muted-foreground hover:text-foreground transition-colors">{t.label}</a></li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="md:col-span-9 max-w-[68ch] space-y-8 text-base md:text-lg leading-[1.75] text-foreground/90">
          <p className="text-xl md:text-2xl text-foreground leading-snug font-display">{post.excerpt}</p>

          <section id="context">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">Context</h2>
            <p className="mt-4 text-muted-foreground">Every essay on the Gokul Labs journal starts from a real project. This one is a deeper dive into a pattern we keep returning to — written so the next engineer who picks it up doesn't have to relearn what we did.</p>
          </section>

          <section id="approach">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">The approach</h2>
            <p className="mt-4 text-muted-foreground">We split the work into three phases — discovery, build and hardening — each with measurable exit criteria. The crucial decision was made in week one: the system would be modular by feature, not by layer.</p>
          </section>

          <section id="details">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">Implementation details</h2>
            <p className="mt-4 text-muted-foreground">Source code, configuration and infra all live in a single monorepo. We use Turborepo for caching, GitHub Actions for CI, and a custom release script for safe production deploys. Tests run on every PR; deploys gate on regression-free evals.</p>
            <pre className="mt-6 rounded-2xl glass p-5 font-mono text-xs overflow-x-auto leading-relaxed">{`// architecture decision record
ADR-007: Use a feature-modular layout
Status: Accepted (2026-04-12)
Decision:
  - Each feature owns its UI, state, data and tests
  - Cross-cutting concerns live in /core
  - No feature imports another feature directly`}</pre>
          </section>

          <section id="trade-offs">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">Trade-offs</h2>
            <p className="mt-4 text-muted-foreground">Every architectural choice is a trade. We accepted a slightly higher initial cost for module wiring in exchange for parallel development and faster onboarding. After six months, the team is shipping 3–4 features in parallel without merge conflicts.</p>
          </section>

          <section id="what-we'd-change">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">What we'd change</h2>
            <p className="mt-4 text-muted-foreground">If we did this again, we'd invest in a module-template generator from day one — and skip the early debate about folder names. The right answer was "pick one and move on".</p>
          </section>
        </article>
      </section>

      {/* Related */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Related</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight">Keep reading.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.category} · {p.read}</div>
              <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
              <div className="mt-5 text-xs text-muted-foreground group-hover:text-accent">Read →</div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection title={<>Want us to <em className="not-italic italic text-gradient">build it</em> for you?</>} secondary={{ label: "See services", to: "/services" }} />
    </SiteShell>
  );
}
