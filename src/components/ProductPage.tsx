import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { findProduct, PRODUCTS } from "@/content/products";
import { POSTS, postPath } from "@/content/posts";
import { SITE, bookHref } from "@/lib/site";
import { Breadcrumbs, CtaBand, FaqList, Icon } from "./ui";
import { JsonLd } from "./JsonLd";
import { Visual } from "./Visuals";

export function productMetadata(slug: string): Metadata {
  const p = findProduct(slug);
  if (!p) throw new Error(`Unknown product ${slug}`);
  const url = `${SITE}/${slug}/`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { url, title: p.title, description: p.description },
    twitter: { title: p.title, description: p.description },
  };
}

/** Template for every platform page (src/content/products.ts). */
export function ProductPage({ slug }: { slug: string }) {
  const p = findProduct(slug);
  if (!p) throw new Error(`Unknown product ${slug}`);
  const path = `/${slug}/`;
  const related = p.related.map((r) => findProduct(r)).filter(Boolean) as typeof PRODUCTS;
  const posts = POSTS.filter((x) => x.pages?.includes(path)).slice(0, 3);
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: p.title,
          description: p.description,
          url: `${SITE}${path}`,
          inLanguage: "en-IN",
          isPartOf: { "@id": `${SITE}/#website` },
          about: { "@id": `${SITE}/#app` },
        }}
      />
      <section className="relative overflow-hidden border-b border-line">
        <div className="omr fade-mask pointer-events-none absolute inset-0 opacity-70" />
        <div className="wrap relative grid gap-12 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.02fr_1fr] lg:items-center">
          <div>
            <Breadcrumbs items={[{ label: "Platform", href: "/features/" }, { label: p.label }]} />
            <p className="eyebrow mt-8">{p.eyebrow}</p>
            <h1 className="h-display mt-3 max-w-3xl text-[2.4rem] text-ink md:text-[3.3rem]">{p.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{p.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={bookHref()} className="btn btn-primary btn-lg" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/how-it-works/" className="btn btn-outline btn-lg">See how it works</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {p.chips.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <Check className="h-3.5 w-3.5 text-ok" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-rise"><Visual k={p.hero} /></div>
        </div>
      </section>

      <section className="wrap space-y-20 py-16 md:space-y-28 md:py-24">
        {p.blocks.map((b, i) => (
          <div key={b.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={i % 2 ? "lg:order-2" : ""}>
              {b.eyebrow && <p className="eyebrow">{b.eyebrow}</p>}
              <h2 className="h-display mt-3 text-3xl text-ink md:text-[2.4rem]">{b.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
                {b.body.map((t) => <p key={t.slice(0, 40)}>{t}</p>)}
              </div>
              {b.bullets && b.visual && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-slate-700"><span className="bubble bubble-ok mt-0.5 !h-5 !w-5"><Check className="h-3 w-3" /></span>{x}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={i % 2 ? "lg:order-1" : ""}>
              {b.visual ? (
                <Visual k={b.visual} />
              ) : (
                <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-sheet md:p-9">
                  <div className="omr-dark pointer-events-none absolute inset-0" />
                  <ul className="relative grid gap-3 sm:grid-cols-2">
                    {b.bullets?.map((x, k) => (
                      <li key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-semibold">
                        <span className={`bubble !h-7 !w-7 ${k === 0 ? "!border-gold !bg-gold !text-ink" : "!border-white/40 !text-white"}`}>{"ABCDEFGH"[k]}</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap py-16 md:py-20">
          <h2 className="h-section max-w-3xl text-ink">Everything in {p.label.toLowerCase()}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.grid.map((g) => (
              <div key={g.title} className="rounded-2xl border border-line p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><Icon name={g.icon} className="h-5 w-5" /></span>
                <p className="h-card mt-4 text-lg text-ink">{g.title}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="h-section text-ink">Questions about {p.label.toLowerCase()}</h2>
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="wrap py-14">
          <h2 className="h-card text-2xl text-ink">Works hand in hand with</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/${r.slug}/`} className="card card-hover group flex gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><Icon name={r.icon} className="h-5 w-5" /></span>
                <span>
                  <span className="block font-bold text-ink group-hover:text-cobalt-700">{r.label}</span>
                  <span className="mt-1 block text-sm text-slate-600">{r.desc}</span>
                </span>
              </Link>
            ))}
          </div>
          {posts.length > 0 && (
            <>
              <h2 className="h-card mt-12 text-2xl text-ink">From the blog</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {posts.map((r) => (
                  <Link key={r.slug} href={postPath(r.slug)} className="card card-hover p-5">
                    <p className="eyebrow">{r.category}</p>
                    <p className="mt-2 font-bold leading-snug text-ink">{r.title}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
