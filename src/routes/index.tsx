import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, type CSSProperties } from "react";
import heroOrb from "@/assets/hero-orb.jpg";
import { LazyOnVisible } from "@/components/LazyOnVisible";
import { SiteHeader } from "@/components/SiteShell";
import { caseStudies } from "@/data/portfolio";

const HomeBelowFold = lazy(() => import("@/components/home/HomeBelowFold"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gokul Labs — Software studio for web, mobile & AI" },
      { name: "description", content: "Gokul Labs designs and ships web platforms, mobile products, and the systems behind them — work built to carry a company." },
      { property: "og:title", content: "Gokul Labs — Software built to hold up" },
      { property: "og:description", content: "Web platforms, mobile products, and the systems behind them. The work is live. Open it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroOrb, fetchpriority: "high" } as never,
    ],
  }),
});

const marqueeWords = ["Web platforms", "Mobile apps", "APIs", "Design systems", "AI features", "Maintenance"];

const capabilities = [
  { k: "01", t: "Web platforms", slug: "web-development" as const, d: "Marketing sites, portals, and product surfaces in TypeScript and React. Fast on a real phone, and built so the next release is easier than the first.", hint: "From 4 weeks", icon: "web" as const },
  { k: "02", t: "SaaS products", slug: "saas-development" as const, d: "Auth, billing, roles, dashboards, and the systems underneath. From a first version to a product you can sell.", hint: "From 8 weeks", icon: "saas" as const },
  { k: "03", t: "Mobile apps", slug: "mobile-apps" as const, d: "Android and cross-platform products, taken through store review and into the hands of real users.", hint: "From 8 weeks", icon: "mobile" as const },
  { k: "04", t: "AI & automation", slug: "ai-automation" as const, d: "Assistants, search, and workflow automation that earn their place in the product — and stay within a cost you can defend.", hint: "From 3 weeks", icon: "ai" as const },
];

function ServiceGlyph({ name }: { name: "web" | "saas" | "mobile" | "ai" }) {
  const common = "h-5 w-5 text-accent";
  if (name === "web") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 18v2M6 20h12" />
      </svg>
    );
  }
  if (name === "saas") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
      </svg>
    );
  }
  if (name === "mobile") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

function HeroForm({ src }: { src: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    let cancelled = false;
    image.onload = () => {
      if (cancelled) return;
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(image, 0, 0);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;
      for (let i = 0; i < data.length; i += 4) {
        const luma = data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;
        data[i + 3] = luma < 16 ? 0 : luma < 42 ? Math.round(((luma - 16) / 26) * 255) : 255;
      }
      ctx.putImageData(frame, 0, 0);
    };
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <canvas
      ref={ref}
      aria-label="Iridescent folded form"
      className="hero-form pointer-events-none absolute left-[46%] top-[78%] h-auto w-[170%] max-w-none md:left-[78%] md:top-[46%] md:w-[96%]"
    />
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground grain">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-aurora opacity-25 blur-[120px] float-slower" aria-hidden />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-aurora opacity-15 blur-[140px] float-slow" aria-hidden />

      <SiteHeader />

      <section className="relative z-10 mx-auto min-h-[100svh] max-w-[1400px] px-5 pt-8 pb-16 md:px-10 md:pt-14 md:pb-20">
        <HeroForm src={heroOrb} />

        <div className="relative z-10">
          <div className="reveal flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground" style={{ "--d": "0ms" } as CSSProperties}>
            <span className="h-px w-8 md:w-10 bg-foreground/40" />
            <span>Software studio · India</span>
          </div>

          <h1 className="reveal mt-6 max-w-[11ch] font-display text-[clamp(2.9rem,10vw,10rem)] leading-[0.95] tracking-tight md:mt-8 md:leading-[0.92]" style={{ "--d": "70ms" } as CSSProperties}>
            Software built
            <br />
            to <em className="text-gradient not-italic">hold up.</em>
          </h1>

          <div className="reveal mt-8 max-w-md md:mt-10" style={{ "--d": "140ms" } as CSSProperties}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Gokul Labs builds software that has to carry a company. Web platforms, mobile products, and the systems underneath — designed with intent, shipped in production, and still standing after launch.
            </p>
            <div className="mt-8 flex max-w-sm flex-col gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-between rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:bg-aurora hover:text-foreground hover:shadow-glow">
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a href="#work" className="inline-flex items-center justify-between rounded-full glass px-6 py-4 text-sm font-medium transition-all hover:bg-foreground/10">
                See what we&apos;ve shipped
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-mask relative z-10 overflow-hidden border-y border-border py-5 md:py-7" aria-hidden>
        <div className="marquee flex w-max gap-8 md:gap-12 whitespace-nowrap font-display text-2xl md:text-6xl">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 items-center gap-8 md:gap-12">
              {marqueeWords.map((w, i) => (
                <span key={`${copy}-${w}`} className="flex items-center gap-8 md:gap-12">
                  <span className={i % 3 === 1 ? "text-gradient" : "text-foreground/80"}>{w}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section id="work" className="cv-auto relative z-10 mx-auto max-w-[1400px] scroll-mt-28 px-5 py-20 md:px-10 md:py-32">
        <div className="reveal mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">Selected</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:mt-4 md:text-7xl">
              Products you can <em className="not-italic italic text-gradient">open right now.</em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Six builds, shown here. The portfolio explains how each one was made.
            </p>
          </div>
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Read the portfolio →</Link>
        </div>

        <div className="grid gap-5 pb-16 md:grid-cols-2 md:gap-6 md:pb-24 lg:grid-cols-3">
          {caseStudies.map((p, i) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className={`group relative block aspect-[4/5] overflow-hidden rounded-2xl glass transition-all hover:-translate-y-2 hover:shadow-glow md:rounded-3xl ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 transition-opacity duration-700 group-hover:opacity-90`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-5 left-5 font-mono text-xs text-foreground/70 md:top-6 md:left-6">{p.num} / 0{caseStudies.length}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 md:text-xs md:tracking-[0.25em]">{p.category} · {p.industry}</div>
                <h3 className="mt-2 font-display text-3xl tracking-tight md:text-5xl">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  Read the project <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="studio" className="cv-auto relative z-10 mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">What we do</div>
              <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                A sharp list,
                <br />
                <span className="text-gradient">built to a high bar.</span>
              </h2>
              <p className="mt-5 md:mt-6 max-w-md leading-relaxed text-muted-foreground">
                Platforms, products, and the systems behind them. The people who shape the work are the people who ship it.
              </p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                All services <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="mt-8 block max-w-sm rounded-2xl glass p-5 transition-colors hover:bg-foreground/5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Availability</div>
                <div className="mt-2 font-display text-2xl tracking-tight">Taking 2 projects for Q4</div>
                <div className="mt-3 text-sm text-muted-foreground">Start a project →</div>
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 md:space-y-5">
            {capabilities.map((s) => (
              <Link
                key={s.k}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative block rounded-2xl glass p-6 transition-colors hover:bg-foreground/5 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-foreground/5">
                      <ServiceGlyph name={s.icon} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-2xl tracking-tight md:text-4xl">{s.t}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{s.hint}</span>
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">{s.d}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-2xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LazyOnVisible minHeight={1200}>
        <Suspense fallback={null}>
          <HomeBelowFold />
        </Suspense>
      </LazyOnVisible>
    </div>
  );
}
