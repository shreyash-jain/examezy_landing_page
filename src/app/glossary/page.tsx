import Link from "next/link";
import { TERMS, termId } from "@/content/glossary";
import { PageShell, pageMetadata } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata("/glossary/");

export default function Glossary() {
  const letters = [...new Set(TERMS.map((t) => t.term[0].toUpperCase()))];
  return (
    <PageShell path="/glossary/" eyebrow="Exam glossary" h1="Online exam terms, in plain English." lede="Forty terms exam heads, teachers and HR teams run into, from answer keys to tab switching, each with a one-line definition.">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Online exam and assessment glossary",
          url: `${SITE}/glossary/`,
          hasDefinedTerm: TERMS.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: t.def, url: `${SITE}/glossary/#${termId(t.term)}` })),
        }}
      />
      <section className="wrap py-14 md:py-20">
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-1.5">
          {letters.map((l) => <a key={l} href={`#letter-${l}`} className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-sm font-bold text-ink hover:border-ink">{l}</a>)}
        </nav>
        <div className="mt-10 space-y-10">
          {letters.map((l) => (
            <div key={l} id={`letter-${l}`} className="grid gap-4 md:grid-cols-[4rem_1fr]">
              <p className="font-display text-4xl font-bold text-cobalt">{l}</p>
              <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
                {TERMS.filter((t) => t.term[0].toUpperCase() === l).map((t) => (
                  <div key={t.term} id={termId(t.term)} className="grid gap-1 p-5 md:grid-cols-[14rem_1fr] md:gap-6">
                    <dt className="font-bold text-ink">{t.term}</dt>
                    <dd className="leading-relaxed text-slate-600">
                      {t.def}
                      {t.link && <> <Link href={t.link.href} className="font-semibold text-cobalt-700 underline-offset-4 hover:underline">{t.link.label} →</Link></>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
