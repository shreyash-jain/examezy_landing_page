/** An outside source cited in a blog post; `checked` = YYYY-MM-DD the page was read. */
export interface Source {
  label: string;
  url: string;
  checked: string;
}

export interface Faq {
  q: string;
  a: string;
}

export type IconName =
  | "School"
  | "GraduationCap"
  | "BookOpenCheck"
  | "Landmark"
  | "Building2"
  | "Code2"
  | "PenLine"
  | "Users"
  | "FileStack"
  | "ScanLine"
  | "ClipboardList"
  | "ShieldCheck"
  | "Timer"
  | "Sigma"
  | "Search"
  | "BadgeCheck"
  | "MessageSquareText"
  | "Webhook"
  | "Camera"
  | "BarChart3"
  | "Printer"
  | "Sparkles"
  | "Library"
  | "Briefcase"
  | "Trophy"
  | "ListChecks"
  | "MonitorCheck"
  | "Wifi"
  | "Megaphone"
  | "Layers"
  | "Workflow"
  | "Medal";

/** Keys of the mock product visuals in src/components/Visuals.tsx. */
export type VisualKey =
  | "console"
  | "question"
  | "proctor"
  | "marking"
  | "aiCheck"
  | "report"
  | "insights"
  | "paper"
  | "register"
  | "coding"
  | "bank"
  | "generator"
  | "dashboard"
  | "wizard"
  | "types"
  | "autosave"
  | "automation"
  | "leaderboard"
  | "checkin"
  | "upload"
  | "exports"
  | "aiReport";

/** A block on a product page: copy on one side, a visual on the other. */
export interface Block {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  /** Omit to show the bullets as a card instead of a mock-up. */
  visual?: VisualKey;
}

/** A platform page at /<slug>/ (src/content/products.ts). */
export interface Product {
  slug: string;
  label: string;
  /** One-line description for menus. */
  desc: string;
  icon: IconName;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  hero: VisualKey;
  /** Short proof chips under the hero. */
  chips: string[];
  blocks: Block[];
  /** A compact grid of smaller capabilities. */
  grid: { title: string; body: string; icon: IconName }[];
  faqs: Faq[];
  /** Other product slugs to link at the foot. */
  related: string[];
}

/** A "who it's for" page: /for/<slug>/. */
export interface Audience {
  slug: string;
  label: string;
  icon: IconName;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  hero: VisualKey;
  pains: { title: string; body: string }[];
  /** How Examezy fits their exam calendar, in order. */
  workflow: { title: string; body: string }[];
  /** Features that matter most to them: product slug + why. */
  picks: { slug: string; why: string }[];
  outcomes: string[];
  usecases: string[];
  faqs: Faq[];
}

/** A use-case page: /use-cases/<slug>/. */
export interface UseCase {
  slug: string;
  label: string;
  icon: IconName;
  title: string;
  description: string;
  h1: string;
  lede: string;
  hero: VisualKey;
  /** The recipe: which settings to use, in order. */
  setup: { title: string; body: string }[];
  /** A sample configuration table. */
  config: [string, string][];
  tips: string[];
  audiences: string[];
  faqs: Faq[];
}

/** A comparison page: /compare/<slug>/. */
export interface Comparison {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  them: string;
  rows: { aspect: string; us: string; them: string }[];
  whenThem: string[];
  whenUs: string[];
  body: { heading: string; text: string }[];
  faqs: Faq[];
}
