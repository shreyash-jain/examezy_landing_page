import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AUDIENCES } from "@/content/audiences";
import { SITE } from "@/lib/site";
import { Breadcrumbs, CtaBand, Icon } from "@/components/ui";

const title = "Who Uses Examezy: Coaching, Schools, Colleges, Hiring Teams";
const description = "How coaching institutes, schools, colleges, hiring teams, training and certification bodies and edtech companies run their exams on Examezy.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE}/for/` }, openGraph: { url: `${SITE}/for/`, title, description } };

export default function ForIndex() {
  return (
    <main>
      <section className="wrap pb-6 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: "Who it's for" }]} />
        <p className="eyebrow mt-8">Solutions</p>
        <h1 className="h-display mt-3 max-w-4xl text-[2.4rem] text-ink md:text-[3.3rem]">One exam platform, shaped to the way you test.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </section>
      <section className="wrap grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
        {AUDIENCES.map((a) => (
          <Link key={a.slug} href={`/for/${a.slug}/`} className="card card-hover group flex flex-col p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cobalt-50 text-cobalt-700"><Icon name={a.icon} className="h-6 w-6" /></span>
            <h2 className="h-card mt-5 text-xl text-ink group-hover:text-cobalt-700">{a.label}</h2>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">{a.h1}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-cobalt-700">See how <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
