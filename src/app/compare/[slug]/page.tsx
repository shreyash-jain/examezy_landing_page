import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { COMPARISONS, findComparison } from "@/content/comparisons";
import { SITE, bookHref } from "@/lib/site";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = findComparison((await params).slug);
  if (!c) return {};
  const url = `${SITE}/compare/${c.slug}/`;
  return { title: c.title, description: c.description, alternates: { canonical: url }, openGraph: { url, title: c.title, description: c.description }, twitter: { title: c.title, description: c.description } };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = findComparison((await params).slug);
  if (!c) notFound();
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: c.title, description: c.description, url: `${SITE}/compare/${c.slug}/`, isPartOf: { "@id": `${SITE}/#website` } }} />
      <section className="relative overflow-hidden border-b border-line">
        <div className="omr fade-mask pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative pb-14 pt-10 md:pb-16 md:pt-14">
          <Breadcrumbs items={[{ label: "Compare", href: "/compare/" }, { label: c.label }]} />
          <p className="eyebrow mt-8">Compare</p>
          <h1 className="h-display mt-3 max-w-4xl text-[2.4rem] text-ink md:text-[3.2rem]">{c.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{c.lede}</p>
        </div>
      </section>

      <section className="wrap py-14 md:py-20">
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[40rem] text-left text-[0.95rem]">
            <thead>
              <tr className="border-b border-line bg-paper">
                <th className="px-5 py-4 font-semibold text-slate-500">What matters</th>
                <th className="px-5 py-4 font-display text-lg font-bold text-cobalt-700">Examezy</th>
                <th className="px-5 py-4 font-display text-lg font-bold text-ink">{c.them}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {c.rows.map((r) => (
                <tr key={r.aspect}>
                  <th className="px-5 py-4 font-semibold text-ink">{r.aspect}</th>
                  <td className="px-5 py-4 text-slate-700">{r.us}</td>
                  <td className="px-5 py-4 text-slate-600">{r.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">Based on publicly documented features as of October 2026. Tell us if something has changed.</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="h-card text-lg text-ink">Stick with {c.them} when…</p>
            <ul className="mt-4 space-y-2 text-slate-700">{c.whenThem.map((w) => <li key={w} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />{w}</li>)}</ul>
          </div>
          <div className="rounded-2xl bg-ink p-6 text-white">
            <p className="h-card text-lg">Move to Examezy when…</p>
            <ul className="mt-4 space-y-2 text-slate-200">{c.whenUs.map((w) => <li key={w} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{w}</li>)}</ul>
            <Link href={bookHref()} className="btn btn-gold mt-6" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="prose-ex mt-14 max-w-3xl">
          {c.body.map((b) => (
            <div key={b.heading}>
              <h2>{b.heading}</h2>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="h-section text-ink">Questions</h2>
          <FaqList faqs={c.faqs} />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
