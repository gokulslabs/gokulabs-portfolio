import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroOrb from "@/assets/hero-orb.jpg";
import { SiteFooter } from "@/components/SiteShell";

const steps = [
  { k: "01", t: "A conversation", d: "You describe the problem. We ask the awkward questions early — budget, deadline, who owns it after launch." },
  { k: "02", t: "A written scope", d: "Screens, scope and a fixed price before anything is built. If we think the idea is too big for the budget, we say so." },
  { k: "03", t: "Weekly builds", d: "You get a working link every week, not a status report. Feedback goes into the next build." },
  { k: "04", t: "Handover and after", d: "Repository, accounts and documentation in your name. We stay reachable for changes once it's live." },
];

const stackCols = [
  { h: "Web", items: ["TypeScript", "React", "Next.js", "Tailwind", "Vite"] },
  { h: "Mobile", items: ["Kotlin", "Jetpack Compose", "React Native", "Play Console"] },
  { h: "Backend", items: ["Node", "Postgres", "Supabase", "REST APIs", "Stripe"] },
  { h: "Delivery", items: ["Vercel", "Cloudflare", "GitHub Actions", "Sentry"] },
];

const expectations = [
  { t: "You talk to the builder", d: "No account manager relaying messages. The person writing the code is on the call." },
  { t: "A price agreed up front", d: "Scope and cost are written down before work starts. Changes are quoted, not absorbed quietly." },
  { t: "Everything in your name", d: "Code, hosting, domains and third-party accounts belong to you from the first day." },
  { t: "We answer after launch", d: "Launch is the middle of the project, not the end. Small fixes don't need a new contract." },
];

function HomeInquiry() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const building = String(fd.get("building") ?? "").trim();
    if (name.length < 2 || !email.includes("@") || building.length < 12) {
      setError("Add your name, a real email, and a sentence about what you're building.");
      setSent(false);
      return;
    }
    setError("");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${building}`);
    window.location.href = `mailto:gokulslabs@gmail.com?subject=${encodeURIComponent("New brief — " + name)}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="cv-auto relative z-10 mx-auto max-w-[1400px] scroll-mt-28 px-5 py-16 md:px-10 md:py-28">
      <div className="grid gap-10 rounded-3xl glass p-6 md:grid-cols-12 md:gap-12 md:p-12">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Taking 2 projects for Q4</div>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
            Tell us what <em className="not-italic italic text-gradient">you&apos;re building.</em>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Tell us the product you want in the world. We reply personally, usually within a day, with a point of view — not a template.
          </p>
        </div>
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Name</span>
              <input name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-foreground outline-none" />
            </label>
            <label className="block text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Email</span>
              <input name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-foreground outline-none" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">What you&apos;re building</span>
            <textarea name="building" rows={4} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-foreground outline-none" />
          </label>
          {error && <p className="text-sm text-accent">{error}</p>}
          {sent && <p className="text-sm text-foreground">Your mail app should open with the brief. If it doesn&apos;t, write to gokulslabs@gmail.com.</p>}
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:shadow-glow">
            Send the brief <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function HomeBelowFold() {
  return (
    <>
      {/* How we work */}
      <section id="process" className="cv-auto relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">How it goes</div>
          <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-7xl tracking-tight">
            Four steps, <em className="not-italic italic text-gradient">then it ships.</em>
          </h2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.k} className="bg-background p-6 md:p-8">
              <div className="font-mono text-xs text-muted-foreground">{s.k}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <Link to="/process" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          The longer version of our process <span aria-hidden>→</span>
        </Link>
      </section>

      {/* Stack */}
      <section className="cv-auto relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">The stack</div>
          <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-7xl tracking-tight">
            A modern stack, <em className="not-italic italic text-gradient">used with intent.</em>
          </h2>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            The same tools serious product teams trust. Chosen so the product stays fast, and so the next engineer can take it further without starting over.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-border grid-cols-2 md:grid-cols-4">
          {stackCols.map((c) => (
            <div key={c.h} className="bg-background p-5 md:p-8">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">{c.h}</div>
              <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 font-display text-lg md:text-2xl tracking-tight">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="cv-auto relative z-10 mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">Working together</div>
            <h2 className="mt-3 md:mt-4 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              What the work
              <br />
              <em className="not-italic italic text-gradient">feels like.</em>
            </h2>
            <p className="mt-5 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
              A clear standard from the first call to a product that is already live. The work is the proof.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-4 md:gap-5 sm:grid-cols-2">
            {expectations.map((x) => (
              <div key={x.t} className="rounded-2xl glass p-6 md:p-7">
                <h3 className="font-display text-xl md:text-2xl tracking-tight">{x.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-auto relative z-10 mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img src={heroOrb} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <div className="font-display text-4xl tracking-tight">Gokul</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Founder</div>
              </div>
            </div>
          </div>
          <figure className="md:col-span-8">
            <blockquote className="font-display text-3xl leading-[1.15] tracking-tight md:text-5xl">
              “We build as if the product has to carry a company. If it will not, we say so before a line of code is written.”
            </blockquote>
            <figcaption className="mt-6 font-display text-xl text-foreground/80">
              Gokul <span className="text-muted-foreground">— Founder, Gokul Labs</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <HomeInquiry />

      <SiteFooter />
    </>
  );
}

export default HomeBelowFold;
