import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { POSTS, postPath } from "@/content/posts";
import { pageMetadata } from "@/components/PageShell";
import { Breadcrumbs, CtaBand } from "@/components/ui";

export const metadata = pageMetadata("/blog/");

export default function BlogIndex() {
  const [first, ...rest] = POSTS;
  return (
    <main>
      <section className="wrap pb-6 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <p className="eyebrow mt-8">The Examezy blog</p>
        <h1 className="h-display mt-3 max-w-4xl text-[2.4rem] text-ink md:text-[3.3rem]">Guides to running better exams.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">Practical, no-fluff advice for exam heads, coaching owners, teachers and HR teams.</p>
      </section>
      <section className="wrap py-10">
        <Link href={postPath(first.slug)} className="group relative block overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-12">
          <div className="omr-dark pointer-events-none absolute inset-0" />
          <div className="relative max-w-3xl">
            <p className="eyebrow eyebrow-dark">{first.category} · Featured</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">{first.title}</h2>
            <p className="mt-4 text-lg text-slate-300">{first.description}</p>
            <span className="mt-6 inline-flex items-center gap-1 font-bold text-gold">Read the guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </div>
        </Link>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} href={postPath(p.slug)} className="card card-hover group flex flex-col p-6">
              <p className="eyebrow">{p.category}</p>
              <h2 className="h-card mt-3 text-xl leading-snug text-ink group-hover:text-cobalt-700">{p.title}</h2>
              <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs text-slate-500"><Clock className="h-3.5 w-3.5" /> {p.readMins} min read</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
