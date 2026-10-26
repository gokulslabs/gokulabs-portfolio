import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { SiteShell, PageHero, SectionLabel } from "@/components/SiteShell";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/book-consultation")({
  component: BookConsultationPage,
  head: () => ({
    meta: [
      { title: "Book a consultation — Gokul Labs" },
      { name: "description", content: "Book a free 30-minute architecture call with a Gokul Labs partner. We'll tell you what we'd do — even if it isn't us doing it." },
      { property: "og:title", content: "Book a consultation — Gokul Labs" },
      { property: "og:description", content: "A free 30-minute architecture call with a partner." },
    ],
    links: [{ rel: "canonical", href: canonical("/book-consultation") }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  role: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(120),
  size: z.string().min(1),
  stage: z.string().min(1),
  goal: z.string().trim().min(20).max(2000),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  slot: z.string().min(1),
});

function BookConsultationPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fe[String(i.path[0])] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nRole: ${parsed.data.role} @ ${parsed.data.company}\nTeam size: ${parsed.data.size}\nStage: ${parsed.data.stage}\nBudget: ${parsed.data.budget}\nTimeline: ${parsed.data.timeline}\nPreferred slot: ${parsed.data.slot}\n\nGoal:\n${parsed.data.goal}`
    );
    window.location.href = `mailto:gokulslabs@gmail.com?subject=${encodeURIComponent("Consultation request — " + parsed.data.company)}&body=${body}`;
    setDone(true);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Consultation"
        title={<>A 30-minute call. <em className="not-italic italic text-gradient">No pitch.</em></>}
        intro="A partner-level architecture call to understand your goals and tell you what we'd actually do. If we're not the right fit, we'll say so — and recommend who is."
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-32 grid gap-10 md:gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <SectionLabel kicker="What you get" title={<>Honest answers, <em className="not-italic italic text-gradient">no slides.</em></>} />
          <ul className="space-y-4 text-sm md:text-base">
            {[
              "A 30-minute call with a Gokul Labs partner (not a salesperson)",
              "A written architecture sketch sent before the call",
              "A frank assessment of the riskiest decisions ahead of you",
              "Two or three options — including doing it without us",
              "A follow-up email with relevant case studies and references",
            ].map((x) => (
              <li key={x} className="flex gap-3"><span className="text-accent">◆</span><span className="text-muted-foreground">{x}</span></li>
            ))}
          </ul>
          <div className="rounded-2xl glass p-5 text-sm text-muted-foreground">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">No-pitch promise</div>
            <p className="mt-2">If we're not the right partner, we'll say so on the call. No follow-up sequence, no chase emails.</p>
          </div>
        </div>

        <form noValidate onSubmit={onSubmit} className="md:col-span-7 rounded-2xl md:rounded-3xl glass p-6 md:p-10 space-y-5">
          {done ? (
            <div className="py-12 text-center">
              <div className="font-display text-4xl text-gradient">Request received.</div>
              <p className="mt-3 text-muted-foreground">We'll confirm a slot within one working day.</p>
            </div>
          ) : (
            <>
              <FieldsetTitle k="01" t="About you" />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" required error={errors.name} />
                <Field label="Work e-mail" name="email" type="email" required error={errors.email} />
                <Field label="Role" name="role" required error={errors.role} />
                <Field label="Company" name="company" required error={errors.company} />
              </div>

              <FieldsetTitle k="02" t="Your project" />
              <div className="grid gap-4 md:grid-cols-2">
                <SelectField label="Team size" name="size" required error={errors.size} options={["Just me", "2–10", "11–50", "51–250", "250+"]} />
                <SelectField label="Stage" name="stage" required error={errors.stage} options={["Pre-product", "MVP live", "Product-market fit", "Scaling", "Enterprise"]} />
                <SelectField label="Budget" name="budget" required error={errors.budget} options={["< $50k", "$50k – $150k", "$150k – $400k", "$400k – $1M", "$1M+"]} />
                <SelectField label="Timeline" name="timeline" required error={errors.timeline} options={["ASAP (4 weeks)", "1–3 months", "3–6 months", "6–12 months", "Exploring"]} />
              </div>
              <TextArea label="Business goal — what does success look like?" name="goal" required rows={5} error={errors.goal} />

              <FieldsetTitle k="03" t="Schedule" />
              <SelectField label="Preferred slot" name="slot" required error={errors.slot} options={["This week — AM (IST/CET)", "This week — PM (IST/CET)", "Next week — AM", "Next week — PM", "Flexible"]} />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">Treated confidentially. We'll only use this to prepare for the call.</p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:scale-105 hover:shadow-glow transition-all">
                  Request consultation <span>↗</span>
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </SiteShell>
  );
}

function FieldsetTitle({ k, t }: { k: string; t: string }) {
  return (
    <div className="flex items-baseline gap-3 border-t border-border pt-5 first:border-0 first:pt-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{k}</span>
      <span className="font-display text-2xl tracking-tight">{t}</span>
    </div>
  );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} aria-invalid={!!error} className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors" />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, required, error, options }: { label: string; name: string; required?: boolean; error?: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <select name={name} required={required} defaultValue="" aria-invalid={!!error} className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function TextArea({ label, name, rows = 4, required, error }: { label: string; name: string; rows?: number; required?: boolean; error?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <textarea name={name} rows={rows} required={required} aria-invalid={!!error} className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors resize-y" />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
