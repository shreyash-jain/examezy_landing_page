import Link from "next/link";
import { Logo } from "./Logo";
import { AUDIENCE_NAV, COMPARE_NAV, PRODUCT_NAV, USECASE_NAV } from "@/lib/nav";
import { COMPANY, PRIVACY_URL, SALES_EMAIL, TERMS_URL, WHATSAPP_DISPLAY, bookHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const cols: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Platform",
      links: [
        { href: "/how-it-works/", label: "How it works" },
        ...PRODUCT_NAV.map((p) => ({ href: p.href, label: p.label })),
        { href: "/features/", label: "All features" },
        { href: "/pricing/", label: "Pricing" },
      ],
    },
    {
      title: "Who it's for",
      links: AUDIENCE_NAV.map((a) => ({ href: `/for/${a.slug}/`, label: a.label })),
    },
    {
      title: "Use cases",
      links: USECASE_NAV.map((u) => ({ href: `/use-cases/${u.slug}/`, label: u.label })),
    },
    {
      title: "Compare & learn",
      links: [
        ...COMPARE_NAV.map((c) => ({ href: `/compare/${c.slug}/`, label: c.label })),
        { href: "/blog/", label: "Blog" },
        { href: "/glossary/", label: "Exam glossary" },
        { href: "/faq/", label: "FAQ" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about/", label: "About" },
        { href: "/security/", label: "Security & privacy" },
        { href: bookHref(), label: "Book a demo" },
        { href: "https://vacademy.io/", label: "Vacademy" },
        { href: "https://evalezy.com/", label: "Evalezy (AI copy checking)" },
      ],
    },
  ];
  return (
    <footer className="border-t border-line bg-white">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-[1fr_3fr]">
        <div>
          <Logo className="h-8" />
          <p className="mt-4 max-w-xs leading-relaxed text-slate-600">
            Online, offline and proctored exams with automatic and teacher evaluation and instant reports. Built by the team behind{" "}
            <a href="https://vacademy.io/" className="font-semibold text-ink underline-offset-4 hover:underline">Vacademy</a>.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>
              <a href={`mailto:${SALES_EMAIL}`} className="font-semibold text-ink hover:text-cobalt-700">{SALES_EMAIL}</a>
            </li>
            <li>
              <a href={whatsappHref()} className="hover:text-ink" data-track="whatsapp" rel="noopener" target="_blank">WhatsApp {WHATSAPP_DISPLAY}</a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold text-ink">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href + l.label}>
                    {/^https?:/.test(l.href) ? (
                      <a href={l.href} className="text-sm text-slate-600 hover:text-ink">{l.label}</a>
                    ) : (
                      <Link href={l.href} className="text-sm text-slate-600 hover:text-ink">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY}. Examezy is a{" "}
            <a href="https://vacademy.io/" className="hover:text-ink">Vacademy</a> product.
          </p>
          <div className="flex gap-5">
            <a href={PRIVACY_URL} className="hover:text-ink">Privacy</a>
            <a href={TERMS_URL} className="hover:text-ink">Terms</a>
            <a href="/sitemap.xml" className="hover:text-ink">Sitemap</a>
            <a href="/llms.txt" className="hover:text-ink">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
