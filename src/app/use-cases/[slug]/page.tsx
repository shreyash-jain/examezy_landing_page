import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Lightbulb } from "lucide-react";
import { USECASES, findUseCase } from "@/content/usecases";
import { findAudience } from "@/content/audiences";
import { SITE, bookHref } from "@/lib/site";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Visual } from "@/components/Visuals";

export const dynamicParams = false;
export function generateStaticParams() {
  return USECASES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const u = findUseCase((await params).slug);
  if (!u) return {};
  const url = `${SITE}/use-cases/${u.slug}/`;
  return { title: u.title, description: u.description, alternates: { canonical: url }, openGraph: { url, title: u.title, description: u.description }, twitter: { title: u.title, description: u.description } };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const u = findUseCase((await params).slug);
  if (!u) notFound();
  const url = `${SITE}/use-cases/${u.slug}/`;
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: u.title,
          description: u.description,
          url,
          step: u.setup.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
        }}
      />
      <section className="relative overflow-hidden border-b border-line">
        <div className="omr fade-mask pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative grid gap-12 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.02fr_1fr] lg:items-center">
          <div>
            <Breadcrumbs items={[{ label: "Use cases", href: "/use-cases/" }, { label: u.label }]} />
            <p className="eyebrow mt-8">Use case · {u.label}</p>
            <h1 className="h-display mt-3 max-w-3xl text-[2.4rem] text-ink md:text-[3.2rem]">{u.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{u.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={bookHref()} className="btn btn-primary btn-lg" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
              <a href="#setup" className="btn btn-outline btn-lg">Jump to the setup</a>
            </div>
          </div>
          <div className="animate-rise"><Visual k={u.hero} /></div>
        </div>
      </section>

      <section id="setup" className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">The recipe</p>
          <h2 className="h-section mt-3 text-ink">How to set it up on Examezy</h2>
          <ol className="mt-8 space-y-4">
            {u.setup.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="bubble bubble-on !h-9 !w-9 !text-sm">{i + 1}</span>
                <span>
                  <span className="block font-bold text-ink">{s.title}</span>
                  <span className="mt-1 block leading-relaxed text-slate-600">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <p className="border-b border-line bg-paper px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Sample configuration</p>
            <dl className="divide-y divide-line">
              {u.config.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8.5rem_1fr] gap-3 px-5 py-3 text-sm">
                  <dt className="font-semibold text-slate-500">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-gold/50 bg-gold-50 p-5">
            <p className="flex items-center gap-2 font-bold text-ink"><Lightbulb className="h-4 w-4 text-gold-700" /> Tips from the field</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-slate-700">
              {u.tips.map((t) => <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />{t}</li>)}
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="h-section text-ink">Questions</h2>
            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-500">Popular with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {u.audiences.map((s) => {
                const a = findAudience(s);
                return a ? <Link key={s} href={`/for/${s}/`} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-ink">{a.label}</Link> : null;
              })}
            </div>
          </div>
          <FaqList faqs={u.faqs} />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
