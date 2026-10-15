import { PRODUCTS } from "@/content/products";
import { AUDIENCES } from "@/content/audiences";
import { USECASES } from "@/content/usecases";
import { COMPARISONS } from "@/content/comparisons";

export const PRODUCT_NAV = PRODUCTS.map((p) => ({ href: `/${p.slug}/`, label: p.label, desc: p.desc, icon: p.icon }));
export const AUDIENCE_NAV = AUDIENCES.map((a) => ({ slug: a.slug, label: a.label, icon: a.icon }));
export const USECASE_NAV = USECASES.map((u) => ({ slug: u.slug, label: u.label }));
export const COMPARE_NAV = COMPARISONS.map((c) => ({ slug: c.slug, label: c.label }));

export const RESOURCE_NAV = [
  { href: "/how-it-works/", label: "How it works" },
  { href: "/features/", label: "All features" },
  { href: "/blog/", label: "Blog" },
  { href: "/glossary/", label: "Exam glossary" },
  { href: "/faq/", label: "FAQ" },
  { href: "/security/", label: "Security & privacy" },
  { href: "/about/", label: "About" },
  { href: "/demo/", label: "Book a demo" },
];
