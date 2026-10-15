import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BarChart3, BookOpenCheck, Briefcase, Building2, Camera, ClipboardList, Code2, FileStack,
  GraduationCap, Landmark, Layers, Library, ListChecks, Medal, Megaphone, MessageSquareText, MonitorCheck, PenLine,
  Printer, ScanLine, School, Search, ShieldCheck, Sigma, Sparkles, Timer, Trophy, Users, Webhook, Wifi, Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Faq, IconName } from "@/content/types";
import { SITE, bookHref, whatsappHref } from "@/lib/site";
import { JsonLd } from "./JsonLd";

const ICONS: Record<IconName, LucideIcon> = {
  School, GraduationCap, BookOpenCheck, Landmark, Building2, Code2, PenLine, Users, FileStack, ScanLine, ClipboardList,
  ShieldCheck, Timer, Sigma, Search, BadgeCheck, MessageSquareText, Webhook, Camera, BarChart3, Printer, Sparkles,
  Library, Briefcase, Trophy, ListChecks, MonitorCheck, Wifi, Megaphone, Layers, Workflow, Medal,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = ICONS[name] ?? BadgeCheck;
  return <C className={className} aria-hidden />;
}

export function Breadcrumbs({ items, dark = false }: { items: { label: string; href?: string }[]; dark?: boolean }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden className={dark ? "text-slate-600" : "text-slate-300"}>/</span>}
              {c.href && i < all.length - 1 ? (
                <Link href={c.href} className={dark ? "hover:text-white" : "hover:text-ink"}>{c.label}</Link>
              ) : (
                <span className={dark ? "text-slate-200" : "text-slate-700"} aria-current={i === all.length - 1 ? "page" : undefined}>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE}${c.href}` } : {}),
          })),
        }}
      />
    </>
  );
}

export function SectionHeading({
  eyebrow, title, lede, dark, center, id, className = "",
}: { eyebrow?: string; title: React.ReactNode; lede?: React.ReactNode; dark?: boolean; center?: boolean; id?: string; className?: string }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`h-section mt-3 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lede && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{lede}</p>}
    </div>
  );
}

/** FAQ accordion + FAQPage JSON-LD (only one FAQPage per URL: pass withSchema={false} for extra lists). */
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-semibold text-ink">
              <span>{f.q}</span>
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-slate-500 transition group-open:rotate-45 group-open:border-cobalt group-open:bg-cobalt group-open:text-white">+</span>
            </summary>
            <p className="mt-3 pr-8 leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
      )}
    </>
  );
}

/** Closing call-to-action band used at the foot of most pages. */
export function CtaBand({
  title = "Run your next exam on Examezy.",
  body = "Book a 30-minute demo. Send us a past paper beforehand and we'll show it running as an Examezy test: proctored, auto-marked and reported.",
}: { title?: string; body?: string }) {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white md:px-14 md:py-16">
        <div className="omr-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 hidden gap-4 opacity-25 md:grid md:grid-cols-4">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className={`h-12 w-12 rounded-full border-2 ${[2, 5, 11, 12].includes(i) ? "border-gold bg-gold" : "border-white/15"}`} />
          ))}
        </div>
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="h-section text-white">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">{body}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={bookHref()} className="btn btn-gold btn-lg" data-track="book_demo">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappHref()} className="btn btn-ghost-dark btn-lg" data-track="whatsapp" target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** A small label + value pill. */
export function Stat({ value, label, dark = false }: { value: React.ReactNode; label: string; dark?: boolean }) {
  return (
    <div>
      <p className={`h-display text-3xl md:text-4xl ${dark ? "text-white" : "text-ink"}`}>{value}</p>
      <p className={`mt-1 text-sm leading-snug ${dark ? "text-slate-400" : "text-slate-500"}`}>{label}</p>
    </div>
  );
}
