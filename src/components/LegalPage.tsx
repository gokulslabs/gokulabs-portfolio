import type { ReactNode } from "react";
import { SiteShell, PageHero, CTASection } from "@/components/SiteShell";

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  sections: { h: string; body: ReactNode }[];
}) {
  return (
    <SiteShell>
      <PageHero eyebrow={eyebrow} title={title} intro={`Last updated: ${updated}`} />
      <section className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-3">
          <nav className="md:sticky md:top-10 rounded-2xl glass p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contents</div>
            <ul className="mt-3 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.h}><a href={`#s-${i}`} className="text-muted-foreground hover:text-foreground transition-colors">{s.h}</a></li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="md:col-span-9 max-w-[72ch] space-y-12 pb-16">
          {sections.map((s, i) => (
            <section key={s.h} id={`s-${i}`}>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">{s.h}</h2>
              <div className="mt-4 space-y-4 text-base text-muted-foreground leading-relaxed">{s.body}</div>
            </section>
          ))}
        </article>
      </section>
      <CTASection title={<>Questions about this policy?</>} primary={{ label: "gokulslabs@gmail.com", href: "mailto:gokulslabs@gmail.com" }} />
    </SiteShell>
  );
}
