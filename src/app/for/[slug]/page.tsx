import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import { AUDIENCES, findAudience } from "@/content/audiences";
import { findProduct } from "@/content/products";
import { findUseCase } from "@/content/usecases";
import { SITE, bookHref } from "@/lib/site";
import { Breadcrumbs, CtaBand, FaqList, Icon } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Visual } from "@/components/Visuals";
import { DemoForm } from "@/components/DemoForm";

export const dynamicParams = false;
export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = findAudience((await params).slug);
  if (!a) return {};
  const url = `${SITE}/for/${a.slug}/`;
  return { title: a.title, description: a.description, alternates: { canonical: url }, openGraph: { url, title: a.title, description: a.description }, twitter: { title: a.title, description: a.description } };
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = findAudience((await params).slug);
  if (!a) notFound();
  const url = `${SITE}/for/${a.slug}/`;
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: a.title, description: a.description, url, inLanguage: "en-IN", isPartOf: { "@id": `${SITE}/#website` }, about: { "@id": `${SITE}/#app` }, audience: { "@type": "Audience", audienceType: a.label } }} />
      <section className="relative overflow-hidden border-b border-line">
        <div className="omr fade-mask pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative grid gap-12 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.02fr_1fr] lg:items-center">
          <div>
            <Breadcrumbs items={[{ label: "Who it's for", href: "/for/" }, { label: a.label }]} />
            <p className="eyebrow mt-8">{a.eyebrow}</p>
            <h1 className="h-display mt-3 max-w-3xl text-[2.4rem] text-ink md:text-[3.3rem]">{a.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{a.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={bookHref()} className="btn btn-primary btn-lg" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
              <a href="#plan" className="btn btn-outline btn-lg">See the workflow</a>
            </div>
          </div>
          <div className="animate-rise"><Visual k={a.hero} /></div>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <p className="eyebrow">Sound familiar?</p>
        <h2 className="h-section mt-3 max-w-3xl text-ink">What gets in the way today</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {a.pains.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="bubble bubble-bad"><X className="h-3.5 w-3.5" /></span>
              <p className="h-card mt-4 text-lg text-ink">{p.title}</p>
              <p className="mt-2 leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plan" className="relative overflow-hidden bg-ink text-white">
        <div className="omr-dark pointer-events-none absolute inset-0" />
        <div className="wrap relative grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow eyebrow-dark">How it works for you</p>
            <h2 className="h-section mt-3 text-white">Your exam cycle on Examezy</h2>
            <ul className="mt-8 space-y-3">
              {a.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-slate-200"><span className="bubble bubble-ok mt-0.5 !h-5 !w-5 shrink-0"><Check className="h-3 w-3" /></span>{o}</li>
              ))}
            </ul>
          </div>
          <ol className="space-y-4">
            {a.workflow.map((w, i) => (
              <li key={w.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-display font-bold text-ink">{i + 1}</span>
                <span>
                  <span className="block font-bold text-white">{w.title}</span>
                  <span className="mt-1 block leading-relaxed text-slate-300">{w.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <h2 className="h-section max-w-3xl text-ink">The parts {a.label.toLowerCase()} use most</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {a.picks.map((pk) => {
            const p = findProduct(pk.slug);
            if (!p) return null;
            return (
              <Link key={pk.slug} href={`/${p.slug}/`} className="card card-hover group flex gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><Icon name={p.icon} className="h-5 w-5" /></span>
                <span>
                  <span className="block font-bold text-ink group-hover:text-cobalt-700">{p.label} <ArrowRight className="inline h-4 w-4" /></span>
                  <span className="mt-1 block text-slate-600">{pk.why}</span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-12">
          <p className="eyebrow">Popular use cases</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {a.usecases.map((u) => {
              const uc = findUseCase(u);
              return uc ? <Link key={u} href={`/use-cases/${u}/`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink">{uc.label}</Link> : null;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="h-section text-ink">Questions {a.label.toLowerCase()} ask</h2>
            <p className="mt-4 text-slate-600">Can&apos;t see yours? Ask us in the demo, or <Link href="/faq/" className="font-semibold text-cobalt-700 underline-offset-4 hover:underline">read the full FAQ</Link>.</p>
          </div>
          <FaqList faqs={a.faqs} />
        </div>
      </section>

      <section className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Book a demo</p>
          <h2 className="h-section mt-3 text-ink">See it with your own paper</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">Tell us about your exams. In 30 minutes we&apos;ll show you the exam screen, proctoring, evaluation and reports, set up the way {a.label.toLowerCase()} work.</p>
        </div>
        <DemoForm origin={`for/${a.slug}`} />
      </section>
      <CtaBand />
    </main>
  );
}
