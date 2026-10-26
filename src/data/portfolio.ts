export type CaseStudy = {
  slug: string;
  num: string;
  title: string;
  client: string;
  category: "Web" | "Mobile" | "SaaS" | "E-commerce" | "AI" | "Admin";
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  impact: { n: string; l: string }[];
  lessons: string[];
  color: string;
  url?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "heal-laban",
    num: "01",
    title: "Heal Laban",
    client: "Heal Laban",
    category: "Web",
    industry: "F&B · Middle Eastern sweets",
    year: "2026",
    summary: "A boutique ordering experience for a Middle Eastern sweets brand — built on a fast reservation/ordering stack with a warm, editorial visual identity.",
    challenge: "Heal Laban needed a storefront that felt as crafted as their sweets — not another generic ordering page. Customers were dropping off at checkout on the legacy form, and the brand had no consistent visual language online.",
    solution: "We shipped a focused ordering site with curated product storytelling, a frictionless slot/reservation flow, and a brand system tuned for warmth, heritage and appetite appeal.",
    features: [
      "Curated product catalogue with story-led PDPs",
      "Reservation & order-ahead flow",
      "Mobile-first, thumb-friendly checkout",
      "Brand-aligned typography & motion",
      "SEO + Open Graph for sharable menu pages",
      "Analytics on funnel drop-off",
    ],
    stack: ["React", "TypeScript", "Tailwind", "ReserveASlot", "Vercel"],
    impact: [
      { n: "Live", l: "Shipped to production" },
      { n: "Mobile-first", l: "Optimised for in-store scans" },
      { n: "1 brand", l: "End-to-end visual system" },
      { n: "Fast", l: "Sub-second LCP on 4G" },
    ],
    lessons: [
      "Food brands convert on appetite + trust, not feature lists",
      "Reservation/order flows belong one tap from the hero",
      "A consistent type + photo system does more than another CTA",
    ],
    color: "from-[oklch(0.25_0.08_260)] to-[oklch(0.35_0.10_240)]",
    url: "https://www.reserveaslot.com/heallaban",
  },
  {
    slug: "pookie-jail",
    num: "02",
    title: "Pookie Jail",
    client: "Pookie",
    category: "Web",
    industry: "F&B · Themed café",
    year: "2026",
    summary: "An ordering and reservations site for a jail-themed café — playful concept, serious conversion engineering.",
    challenge: "Pookie's jail-themed café concept needed a digital home that captured the playful, photo-worthy vibe customers were sharing on socials — without losing the practical job of taking bookings and orders.",
    solution: "We built a concept-led microsite with a slot reservation flow, a tight menu surface and a visual language that leans into the theme (typography, motion, micro-interactions) while staying fast and easy to book on a phone in a queue.",
    features: [
      "Themed brand & motion system",
      "Slot-based reservations",
      "Menu surface tuned for sharing",
      "Mobile-first booking flow",
      "Photo-led hero & social hooks",
      "Lightweight, edge-cached pages",
    ],
    stack: ["React", "TypeScript", "Tailwind", "ReserveASlot", "Vercel"],
    impact: [
      { n: "Live", l: "Production launch" },
      { n: "Concept-led", l: "Brand-first storefront" },
      { n: "1-tap", l: "Reservation from hero" },
      { n: "Shareable", l: "Built for social discovery" },
    ],
    lessons: [
      "A strong concept earns the right to break a few UI conventions",
      "Themed brands still need ruthless checkout discipline",
      "Motion should reward attention, not block the booking",
    ],
    color: "from-[oklch(0.75_0.14_340)] to-[oklch(0.85_0.12_350)]",
    url: "https://www.reserveaslot.com/pookie",
  },
  {
    slug: "dentara",
    num: "03",
    title: "Dentara",
    client: "Dentara",
    category: "SaaS",
    industry: "Healthcare · Dental",
    year: "2026",
    summary: "A dental practice SaaS — appointments, patient records and a clinic-friendly UI built for the front desk and the chair.",
    challenge: "Dental clinics juggle scheduling, patient history, treatment plans and billing across disconnected tools. Dentara needed a single product that front-desk staff could learn in an afternoon and clinicians would actually use chair-side.",
    solution: "We designed and built a focused SaaS — calendar-first scheduling, patient records with treatment timelines, and a clean clinician UI that works on a tablet next to the chair.",
    features: [
      "Calendar-first appointment scheduling",
      "Patient records & treatment timelines",
      "Chair-side tablet UI",
      "Role-based access for staff & clinicians",
      "Reminders & no-show workflows",
      "Reports for the practice owner",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Postgres"],
    impact: [
      { n: "1 product", l: "Replaces 3+ tools per clinic" },
      { n: "Tablet-ready", l: "Chair-side workflows" },
      { n: "RBAC", l: "Staff vs clinician scoping" },
      { n: "Shipped", l: "Case study" },
    ],
    lessons: [
      "Vertical SaaS wins on workflow fit, not feature count",
      "Calendar is the front door of every clinic product",
      "Front-desk usability decides whether clinicians ever see your app",
    ],
    color: "from-[oklch(0.7_0.16_200)] to-[oklch(0.78_0.14_170)]",
  },
  {
    slug: "survey-king",
    num: "04",
    title: "Survey King",
    client: "Survey King",
    category: "SaaS",
    industry: "Research · Survey platform",
    year: "2026",
    summary: "A modern survey and form builder — drag-and-drop questionnaires, real-time analytics, and shareable response dashboards.",
    challenge: "Existing survey tools were either too rigid for custom branding or too complex for small teams. Users needed a fast, beautiful way to create forms, collect responses and visualise results without exporting to spreadsheets.",
    solution: "We built Survey King as a focused SaaS: a visual form builder, conditional logic, real-time response analytics, and embeddable share links — all wrapped in a clean, conversion-friendly UI.",
    features: [
      "Drag-and-drop form builder",
      "Conditional logic & branching",
      "Real-time response analytics",
      "Embeddable share links & QR codes",
      "Custom themes and branding",
      "Export to CSV and PDF reports",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Postgres"],
    impact: [
      { n: "Live", l: "Shipped to production" },
      { n: "Fast", l: "Builder loads in < 1s" },
      { n: "Flexible", l: "20+ question types" },
      { n: "Shareable", l: "Links + embeds ready" },
    ],
    lessons: [
      "Form builders compete on speed of creation, not feature count",
      "Real-time analytics keep users inside the product",
      "Embeddable widgets turn creators into distribution channels",
    ],
    color: "from-[oklch(0.42_0.20_300)] to-[oklch(0.55_0.16_280)]",
  },
  {
    slug: "fleetos",
    num: "05",
    title: "FleetOS",
    client: "FleetOS",
    category: "SaaS",
    industry: "Logistics · Fleet operations",
    year: "2026",
    summary: "A real-time fleet operations dashboard — route planning, vehicle health, driver scheduling and cost analytics in one lightweight SaaS.",
    challenge: "Dispatchers were juggling spreadsheets, WhatsApp groups and GPS apps to manage vehicles. Maintenance was missed, fuel spend was untracked and idle downtime was bleeding revenue every week.",
    solution: "We shipped FleetOS as a central operations surface: live fleet map, automated maintenance alerts, route optimisation, driver scheduling and a cost dashboard that turns operational noise into clear decisions.",
    features: [
      "Live fleet map with vehicle status",
      "Route optimisation & ETA sharing",
      "Automated maintenance & service alerts",
      "Driver scheduling & shift tracking",
      "Fuel, mileage & cost analytics",
      "Lightweight, mobile-friendly dispatcher UI",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Mapbox", "Node.js", "Postgres", "Vercel"],
    impact: [
      { n: "Live", l: "Shipped to production" },
      { n: "Real-time", l: "GPS + status sync" },
      { n: "1 dashboard", l: "Replaces 4+ tools" },
      { n: "Fast", l: "Sub-second route loads" },
    ],
    lessons: [
      "Fleet software lives or dies on map performance — tile loading is a feature",
      "Dispatchers need fewer dashboards, not more data",
      "Maintenance alerts should predict, not just react",
    ],
    color: "from-[oklch(0.75_0.14_230)] to-[oklch(0.88_0.10_200)]",
    url: "https://fleet-oss.vercel.app/",
  },
  {
    slug: "pdf-ninja",
    num: "06",
    title: "PDF Ninja",
    client: "PDF Ninja",
    category: "Web",
    industry: "Productivity · Document tools",
    year: "2026",
    summary: "A fast, privacy-first PDF toolkit — merge, split, compress and convert documents right in the browser, no uploads to mystery servers.",
    challenge: "Most online PDF tools are slow, ad-riddled or quietly upload your files. PDF Ninja needed to feel instant, trustworthy and dead-simple on any device.",
    solution: "We built a lightweight, client-side PDF toolkit with a focused tool surface, drag-and-drop flows, and a clean UI that makes every action feel fast and safe.",
    features: [
      "Merge, split, compress & convert PDFs",
      "Client-side processing — files stay on device",
      "Drag-and-drop, mobile-friendly UI",
      "No sign-up, no watermark",
      "Edge-cached, instant loads",
      "Clear, single-purpose tool pages",
    ],
    stack: ["React", "TypeScript", "Tailwind", "pdf-lib", "Vercel"],
    impact: [
      { n: "Live", l: "Shipped to production" },
      { n: "Private", l: "Client-side processing" },
      { n: "Fast", l: "Instant tool loads" },
      { n: "Free", l: "No sign-up required" },
    ],
    lessons: [
      "Utility tools win on speed and trust, not features",
      "Client-side processing is a feature worth marketing",
      "One tool per page beats a cluttered mega-app",
    ],
    color: "from-[oklch(0.55_0.22_22)] to-[oklch(0.70_0.20_28)]",
    url: "https://pdfninja-five.vercel.app/",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
