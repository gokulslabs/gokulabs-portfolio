import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell, PageHero, SectionLabel } from "@/components/SiteShell";
import { canonical } from "@/lib/site";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Gokul Labs · Start a build" },
      { name: "description", content: "Tell us about your project — budget, timeline and what you're trying to ship. Two-day response on every brief." },
      { property: "og:title", content: "Contact — Gokul Labs" },
      { property: "og:description", content: "Tell us about your project. Two-day response on every brief." },
    ],
    links: [{ rel: "canonical", href: canonical("/contact") }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid e-mail").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().min(1, "Pick a budget"),
  timeline: z.string().min(1, "Pick a timeline"),
  type: z.string().min(1, "Pick a project type"),
  message: z.string().trim().min(20, "A little more detail helps").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fieldErrors[String(i.path[0])] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nCompany: ${parsed.data.company || "-"}\nProject: ${parsed.data.type}\nBudget: ${parsed.data.budget}\nTimeline: ${parsed.data.timeline}\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:gokulslabs@gmail.com?subject=${encodeURIComponent("New brief — " + parsed.data.name)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title={<>Start a <em className="not-italic italic text-gradient">build.</em></>}
        intro="Tell us what you're working on. We reply to every brief within two working days — usually with an architecture sketch attached."
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-32 grid gap-10 md:gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Direct</div>
            <a href="mailto:gokulslabs@gmail.com" className="mt-3 block font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors break-all">
              gokulslabs@gmail.com
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Replies in under 24 hours, weekdays.</p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Where we are</div>
            <div className="mt-3 grid gap-4">
              <div className="rounded-2xl glass p-5">
                <div className="font-display text-xl">India · Remote</div>
                <p className="mt-1 text-sm text-muted-foreground">IST · Mon–Fri, with overlap hours arranged for other timezones.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Prefer a call?</div>
            <Link to="/book-consultation" className="mt-3 inline-flex items-center gap-2 glass rounded-full px-5 py-3 text-sm hover:bg-foreground/10">
              Book a consultation <span>→</span>
            </Link>
          </div>
        </div>

        <form noValidate onSubmit={onSubmit} className="md:col-span-7 rounded-2xl md:rounded-3xl glass p-6 md:p-10 space-y-5">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="font-display text-4xl text-gradient">Brief sent.</div>
              <p className="mt-3 text-muted-foreground">We'll come back within two working days.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required error={errors.name} />
                <Field label="Work e-mail" name="email" type="email" required error={errors.email} />
                <Field label="Company" name="company" placeholder="Optional" error={errors.company} />
                <SelectField label="Project type" name="type" required error={errors.type} options={["Web platform", "SaaS product", "Mobile app", "E-commerce", "AI / automation", "Maintenance", "Other"]} />
                <SelectField label="Budget" name="budget" required error={errors.budget} options={["< $50k", "$50k – $150k", "$150k – $400k", "$400k – $1M", "$1M+"]} />
                <SelectField label="Timeline" name="timeline" required error={errors.timeline} options={["ASAP (4 weeks)", "1–3 months", "3–6 months", "6–12 months", "Exploring"]} />
              </div>
              <TextArea label="What are you building?" name="message" rows={6} placeholder="A few sentences about the product, users and what success looks like." required error={errors.message} />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">We'll only use this to reply. Read our <Link to="/privacy-policy" className="underline">privacy policy</Link>.</p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:scale-105 hover:shadow-glow transition-all">
                  Send brief <span>↗</span>
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required, error, placeholder }: { label: string; name: string; type?: string; required?: boolean; error?: string; placeholder?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, required, error, options }: { label: string; name: string; required?: boolean; error?: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function TextArea({ label, name, rows = 4, required, error, placeholder }: { label: string; name: string; rows?: number; required?: boolean; error?: string; placeholder?: string }) {
  return (
    <label className="block text-sm">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 outline-none focus:border-accent transition-colors resize-y"
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
