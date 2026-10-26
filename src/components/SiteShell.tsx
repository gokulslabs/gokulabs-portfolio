import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Mark } from "@/components/Mark";
import { usePageReveal } from "@/components/usePageReveal";

const navLinks = [
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/services" as const, label: "Services" },
];

const studioLinks = [
  { to: "/about" as const, label: "About" },
  { to: "/process" as const, label: "Process" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const studioRef = useRef<HTMLDivElement>(null);
  usePageReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!studioOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!studioRef.current?.contains(e.target as Node)) setStudioOpen(false);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [studioOpen]);

  useEffect(() => {
    if (!open && !studioOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setStudioOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, studioOpen]);

  return (
    <div className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <header
        className={`mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 md:px-10 ${scrolled || open ? "py-3" : "py-4"}`}
      >
        <Link to="/" className={`flex items-center gap-2.5 font-display font-normal tracking-tight text-foreground transition-all ${scrolled ? "text-lg" : "text-xl md:text-2xl"}`}>
          <Mark className={`transition-all ${scrolled ? "h-8 w-8" : "h-10 w-10 md:h-11 md:w-11"}`} />
          Gokul Labs
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              activeProps={{ className: "rounded-full px-3.5 py-2 text-sm text-foreground bg-foreground/5" }}
            >
              {l.label}
            </Link>
          ))}
          <div
            ref={studioRef}
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setStudioOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={studioOpen}
              aria-haspopup="true"
              onClick={() => setStudioOpen((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Studio
              <span aria-hidden className={`text-[10px] transition-transform ${studioOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {studioOpen && (
              <div className="absolute left-0 top-full z-20 pt-2">
                <div className="min-w-44 rounded-2xl border border-white/10 bg-background/95 p-1.5 shadow-elegant backdrop-blur-xl">
                  {studioLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                      onClick={() => setStudioOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className={`hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground font-medium text-background whitespace-nowrap transition-all hover:shadow-glow md:text-sm ${scrolled ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-xs"}`}>
            Start a project <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass rounded-full p-2.5 lg:hidden"
          >
            {open ? (
              <span className="relative block h-4 w-4" aria-hidden>
                <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 rotate-45 bg-foreground" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-foreground" />
              </span>
            ) : (
              <span className="block" aria-hidden>
                <span className="mb-1 block h-0.5 w-4 bg-foreground" />
                <span className="mb-1 block h-0.5 w-4 bg-foreground" />
                <span className="block h-0.5 w-4 bg-foreground" />
              </span>
            )}
          </button>
        </div>
      </header>
      {open && (
        <div className="lg:hidden mx-5 mb-4 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-4 shadow-2xl">
          <nav className="grid gap-1 text-sm">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-lg px-3 py-3 hover:bg-foreground/5" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
            {studioLinks.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-lg px-3 py-3 hover:bg-foreground/5" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 rounded-lg px-3 py-3 bg-foreground text-background text-center font-medium" onClick={() => setOpen(false)}>
              Start a project →
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}


export function SiteFooter() {
  const cols: { h: string; links: { to: string; params?: { slug: string }; l: string }[] }[] = [
    {
      h: "Studio",
      links: [
        { to: "/about", l: "About" },
        { to: "/process", l: "Process" },
        { to: "/careers", l: "Careers" },
        { to: "/contact", l: "Contact" },
      ],
    },
    {
      h: "Services",
      links: [
        { to: "/services/$slug", params: { slug: "web-development" }, l: "Web development" },
        { to: "/services/$slug", params: { slug: "saas-development" }, l: "SaaS development" },
        { to: "/services/$slug", params: { slug: "mobile-apps" }, l: "Mobile apps" },
        { to: "/services/$slug", params: { slug: "ai-automation" }, l: "AI & automation" },
        { to: "/services/$slug", params: { slug: "ecommerce" }, l: "E-commerce" },
        { to: "/services/$slug", params: { slug: "admin-systems" }, l: "Admin systems" },
        { to: "/services/$slug", params: { slug: "ui-ux-design" }, l: "UI/UX design" },
        { to: "/services/$slug", params: { slug: "maintenance-support" }, l: "Maintenance" },
      ],
    },
    {
      h: "Portfolio",
      links: [
        { to: "/portfolio", l: "Case studies" },
        { to: "/industries", l: "Industries" },
        { to: "/faq", l: "FAQ" },
      ],
    },
    {
      h: "Resources",
      links: [
        { to: "/blog", l: "Journal" },
        { to: "/resources", l: "Guides" },
        { to: "/book-consultation", l: "Book consultation" },
      ],
    },
  ];
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="font-display text-2xl md:text-3xl font-normal tracking-tight text-foreground inline-flex items-center gap-2.5">
              <Mark className="h-10 w-10" />
              Gokul Labs
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Web, mobile, SaaS, and AI products, built to a standard you can open and judge. Based in India, working with teams everywhere.
            </p>

            <a href="mailto:gokulslabs@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors break-all">
              gokulslabs@gmail.com <span aria-hidden>↗</span>
            </a>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.h}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={`${l.to}-${l.params?.slug ?? l.l}`}>
                    <Link to={l.to} params={l.params} className="text-muted-foreground hover:text-foreground transition-colors">
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col-reverse gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-xs text-muted-foreground">© 2026 Gokul Labs — India</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-foreground">Cookies</Link>
            <a href="mailto:gokulslabs@gmail.com" className="hover:text-foreground">Email</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground grain">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-aurora opacity-30 blur-[120px] float-slower" aria-hidden />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-aurora opacity-20 blur-[140px] float-slow" aria-hidden />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

// ---------- Reusable section primitives ----------

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumb?: { label: string }[];
}) {
  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 pb-16 md:px-10 md:pt-20 md:pb-24">
      <div className="reveal flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">
        <span className="h-px w-8 md:w-10 bg-foreground/40" />
        <span>{eyebrow}</span>
        {breadcrumb?.map((b) => (
          <span key={b.label} className="text-foreground/60">/ {b.label}</span>
        ))}
      </div>
      <h1 className="reveal mt-6 md:mt-8 font-display text-[clamp(2.5rem,9vw,9rem)] leading-[0.95] md:leading-[0.92] tracking-tight max-w-[15ch]">
        {title}
      </h1>
      {intro && (
        <p className="reveal mt-8 md:mt-12 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </section>
  );
}

export function SectionLabel({ kicker, title, lead }: { kicker: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">{kicker}</div>
      <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-6xl tracking-tight max-w-[20ch]">{title}</h2>
      {lead && <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5 md:py-6">
          <summary className="flex cursor-pointer items-baseline justify-between gap-4 md:gap-6 list-none">
            <span className="font-display text-xl md:text-3xl tracking-tight">{f.q}</span>
            <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45 shrink-0">+</span>
          </summary>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection({
  kicker = "Taking on new work",
  title,
  lead,
  primary = { label: "gokulslabs@gmail.com", href: "mailto:gokulslabs@gmail.com" },
  secondary,
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; to: "/contact" | "/book-consultation" | "/portfolio" | "/services" | "/process" | "/about" | "/careers" | "/faq" | "/blog" | "/resources" | "/industries" | "/testimonials" };
}) {
  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] glass p-8 md:p-20 text-center">
        <div className="absolute inset-0 bg-aurora opacity-20" />
        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora blur-[100px] opacity-60" />
        <div className="relative">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-foreground/80">{kicker}</div>
          <h2 className="mt-5 md:mt-6 font-display text-3xl md:text-7xl leading-[0.95] md:leading-[0.9] tracking-tight max-w-[18ch] mx-auto">
            {title}
          </h2>
          {lead && <p className="mx-auto mt-6 md:mt-8 max-w-lg text-sm md:text-base text-muted-foreground">{lead}</p>}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a href={primary.href} className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-foreground text-background px-5 py-3.5 md:px-8 md:py-5 text-sm md:text-base font-medium transition-all hover:scale-105 hover:shadow-glow break-all">
              <span>{primary.label}</span> <span>↗</span>
            </a>
            {secondary && (
              <Link to={secondary.to} className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 md:px-8 md:py-5 text-sm md:text-base font-medium transition-all hover:bg-foreground/10">
                {secondary.label} <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
