import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type ServicePageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  accentWord: string;
  heroStats: { n: string; l: string }[];
  deliverables: { k: string; t: string; d: string }[];
  stack: string[];
  process: { k: string; t: string; d: string }[];
  faqs: { q: string; a: string }[];
  ctaLine: ReactNode;
};

export function ServicePage(props: ServicePageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grain">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-aurora opacity-30 blur-[120px] float-slower" aria-hidden />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-aurora opacity-20 blur-[140px] float-slow" aria-hidden />

      {/* Nav */}
      <header className="relative z-50 mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 py-5 md:px-10 md:py-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl md:text-2xl tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-aurora shadow-glow" />
          Gokul<span className="text-accent"> Labs</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/services/android" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Android</Link>
          <Link to="/services/web" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Web</Link>
          <Link to="/services/backend" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Backend</Link>
          <Link to="/services/ai" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>AI</Link>
        </nav>
        <Link to="/" hash="contact" className="glass rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium whitespace-nowrap hover:bg-foreground hover:text-background transition-all">
          Start a build <span className="hidden sm:inline">→</span>
        </Link>
      </header>

      {/* Mobile service tabs */}
      <div className="md:hidden relative z-40 -mt-2 mb-2 overflow-x-auto px-5">
        <nav className="flex gap-2 text-xs font-mono whitespace-nowrap pb-2">
          <Link to="/services/android" className="glass rounded-full px-4 py-1.5" activeProps={{ className: "bg-foreground text-background" }}>Android</Link>
          <Link to="/services/web" className="glass rounded-full px-4 py-1.5" activeProps={{ className: "bg-foreground text-background" }}>Web</Link>
          <Link to="/services/backend" className="glass rounded-full px-4 py-1.5" activeProps={{ className: "bg-foreground text-background" }}>Backend</Link>
          <Link to="/services/ai" className="glass rounded-full px-4 py-1.5" activeProps={{ className: "bg-foreground text-background" }}>AI</Link>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 pb-16 md:px-10 md:pt-20 md:pb-24">
        <div className="reveal flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Gokul Labs</Link>
          <span>/</span>
          <span className="text-foreground">{props.eyebrow}</span>
        </div>

        <h1 className="reveal mt-6 md:mt-8 font-display text-[clamp(2.5rem,9vw,9rem)] leading-[0.95] md:leading-[0.92] tracking-tight max-w-[14ch]">
          {props.title}
        </h1>

        <div className="reveal mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-12">
          <p className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {props.intro}
          </p>
          <div className="md:col-span-5 md:col-start-8 grid grid-cols-3 gap-4 md:gap-6">
            {props.heroStats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-4xl text-gradient">{s.n}</div>
                <div className="mt-2 text-[10px] md:text-xs text-muted-foreground leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee accent */}
      <section className="relative z-10 border-y border-border py-5 md:py-6 overflow-hidden">
        <div className="marquee flex shrink-0 gap-8 md:gap-12 whitespace-nowrap font-display text-3xl md:text-6xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-12">
              <span className={i % 2 === 1 ? "text-gradient" : ""}>{props.accentWord}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-10">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">What you get</div>
              <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Deliverables,
                <br />
                <span className="text-gradient">not deliverables-shaped slides.</span>
              </h2>
              <p className="mt-5 md:mt-6 text-muted-foreground max-w-md leading-relaxed">
                Every engagement ends with shipping artifacts — code, infra, docs, dashboards — not a 60-page deck.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 md:space-y-6">
            {props.deliverables.map((s) => (
              <div key={s.k} className="group relative rounded-2xl glass p-6 md:p-8 transition-all hover:bg-foreground/5">
                <div className="flex items-baseline justify-between gap-4 md:gap-6">
                  <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{s.k}</span>
                    <h3 className="font-display text-2xl md:text-4xl tracking-tight">{s.t}</h3>
                  </div>
                  <span className="text-2xl text-muted-foreground transition-all group-hover:text-accent group-hover:rotate-45 shrink-0">+</span>
                </div>
                <p className="mt-3 ml-8 md:ml-10 text-sm md:text-base text-muted-foreground max-w-lg">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-8 md:mb-10">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">Tools of the trade</div>
          <h2 className="mt-3 md:mt-4 font-display text-3xl md:text-6xl tracking-tight">
            The <em className="not-italic italic text-gradient">stack</em>.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {props.stack.map((s) => (
            <span key={s} className="glass rounded-full px-4 py-2 md:px-5 md:py-2.5 font-mono text-xs md:text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="mb-10 md:mb-16">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">How we work</div>
          <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-7xl tracking-tight">Four phases.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {props.process.map((p) => (
            <div key={p.k} className="bg-background p-5 md:p-8">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">{p.k}</div>
              <h3 className="mt-2 md:mt-3 font-display text-xl md:text-3xl tracking-tight">{p.t}</h3>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">FAQ</div>
            <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-6xl tracking-tight">
              Common <em className="not-italic italic text-gradient">questions.</em>
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {props.faqs.map((f) => (
              <details key={f.q} className="group py-5 md:py-6">
                <summary className="flex cursor-pointer items-baseline justify-between gap-4 md:gap-6 list-none">
                  <span className="font-display text-xl md:text-3xl tracking-tight">{f.q}</span>
                  <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] glass p-8 md:p-20 text-center">
          <div className="absolute inset-0 bg-aurora opacity-20" />
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora blur-[100px] opacity-60" />
          <div className="relative">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-foreground/80">Currently booking · Q3 2026</div>
            <h2 className="mt-5 md:mt-6 font-display text-3xl md:text-7xl leading-[0.95] md:leading-[0.9] tracking-tight max-w-[18ch] mx-auto">
              {props.ctaLine}
            </h2>
            <a href="mailto:gokulslabs@gmail.com" className="mt-8 md:mt-10 inline-flex items-center gap-2 md:gap-3 rounded-full bg-foreground text-background px-5 py-3.5 md:px-8 md:py-5 text-sm md:text-base font-medium transition-all hover:scale-105 hover:shadow-glow break-all">
              <span>gokulslabs@gmail.com</span> <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-12 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6 text-sm text-muted-foreground">
          <Link to="/" className="font-display text-xl text-foreground">Gokul Labs</Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:gap-6">
            <Link to="/services/android" className="hover:text-foreground">Android</Link>
            <Link to="/services/web" className="hover:text-foreground">Web</Link>
            <Link to="/services/backend" className="hover:text-foreground">Backend</Link>
            <Link to="/services/ai" className="hover:text-foreground">AI</Link>
          </div>
          <div className="font-mono text-xs">© 2026 — India</div>
        </div>
      </footer>
    </div>
  );
}
