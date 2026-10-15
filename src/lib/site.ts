/**
 * Site constants and the registry of hand-written pages. Data-driven pages (products, audiences, use cases,
 * comparisons, glossary, blog) live in src/content and are merged in src/lib/routes.ts, which feeds the sitemap
 * and llms-full.txt. Every claim must be in docs/PRODUCT_FACTS.md.
 */
export const SITE = "https://examezy.com";
export const SITE_NAME = "Examezy";
export const COMPANY = "Vidyayatan Technologies LLP";
export const TAGLINE = "Online, paper and proctored exams, checked and reported in one place.";

export const WHATSAPP_NUMBER = "919993336616";
export const WHATSAPP_DISPLAY = "+91 99933 36616";
/** Mailbox must exist before launch (README → Before launch). */
export const SALES_EMAIL = "hello@examezy.com";
/** Booking page for "Book a demo". Empty = every CTA goes to the /demo/ form. */
export const BOOKING_URL = "";
/** Where existing customers sign in (Examezy runs inside the Vacademy admin dashboard). */
export const LOGIN_URL = "https://dash.vacademy.io/";
export const EVALEZY_URL = "https://evalezy.com/";

export const bookHref = () => BOOKING_URL || "/demo/";
export const whatsappHref = (text = "Hi, I'd like a demo of Examezy for our exams.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const PRIVACY_URL = "https://vacademy.io/privacy-policy";
export const TERMS_URL = "https://vacademy.io/terms-of-service";

export type PageGroup = "product" | "resource" | "company";

export interface SitePage {
  path: string;
  /** Short label for nav/footer/breadcrumbs. */
  label: string;
  /** <title> without the site suffix. */
  title: string;
  description: string;
  group: PageGroup;
}

export const PAGES: SitePage[] = [
  { path: "/how-it-works/", label: "How it works", group: "product", title: "How Online Exams Work on Examezy, Step by Step", description: "From question paper to report card: create, schedule, invite, proctor, evaluate and publish results on Examezy. The full exam lifecycle in one platform." },
  { path: "/features/", label: "All features", group: "product", title: "Online Exam Software Features: The Complete List", description: "Every Examezy feature in one place: question types, timers, sections, proctoring, paper exams, auto, teacher and AI evaluation, reports, question bank and automations." },
  { path: "/pricing/", label: "Pricing", group: "product", title: "Examezy Pricing: Plans Built Around Your Exams", description: "How Examezy pricing works: plans sized to your candidates and exams, AI checking paid per copy with the cost shown first, and a free pilot exam to start." },
  { path: "/faq/", label: "FAQ", group: "resource", title: "Online Exam Software FAQ: Proctoring, Evaluation, Results", description: "Straight answers about running exams on Examezy: question types, proctoring, internet drops, paper exams, AI checking, results, scale, languages and pricing." },
  { path: "/glossary/", label: "Exam glossary", group: "resource", title: "Online Exam & Assessment Glossary: 40 Terms Explained", description: "Plain-English definitions of online exam terms: proctoring, negative marking, percentile, question bank, cutoff, mock test, on-screen marking, rubric and more." },
  { path: "/blog/", label: "Blog", group: "resource", title: "The Examezy Blog: Guides to Running Better Exams", description: "Practical guides for exam heads, coaching owners and HR teams: online exams, proctoring, mock test series, question papers, evaluation and result analysis." },
  { path: "/security/", label: "Security & privacy", group: "resource", title: "Exam Integrity, Security and Privacy on Examezy", description: "How Examezy keeps exams fair and data private: browser restrictions, on-device camera checks without video streaming, access control, result holds and what we do not claim." },
  { path: "/about/", label: "About", group: "company", title: "About Examezy", description: "Examezy is the exams and assessments platform from the team behind Vacademy, built for institutes that want every exam, online or on paper, run and reported in one place." },
  { path: "/demo/", label: "Book a demo", group: "company", title: "Book an Examezy Demo", description: "See Examezy run an exam like yours in a 30-minute demo: question types, proctoring, evaluation and reports. Bring a past paper and we'll set it up as a test." },
];

export const byGroup = (g: PageGroup) => PAGES.filter((p) => p.group === g);
export const findPage = (path: string) => PAGES.find((p) => p.path === path);
