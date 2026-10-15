import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPARISONS } from "@/content/comparisons";
import { SITE } from "@/lib/site";
import { Breadcrumbs, CtaBand } from "@/components/ui";

const title = "Compare Examezy with Google Forms, Paper Exams and LMS Quizzes";
const description = "Honest comparisons of Examezy with the tools institutes usually start with: Google Forms, paper exams with Excel mark sheets, and LMS quiz modules.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE}/compare/` }, openGraph: { url: `${SITE}/compare/`, title, description } };

export default function CompareIndex() {
  return (
    <main>
      <section className="wrap pb-6 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: "Compare" }]} />
        <p className="eyebrow mt-8">Compare</p>
        <h1 className="h-display mt-3 max-w-4xl text-[2.4rem] text-ink md:text-[3.3rem]">Honest comparisons, including when not to switch.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </section>
      <section className="wrap grid gap-5 py-10 md:grid-cols-3">
        {COMPARISONS.map((c) => (
          <Link key={c.slug} href={`/compare/${c.slug}/`} className="card card-hover group flex flex-col p-7">
            <h2 className="h-card text-xl text-ink group-hover:text-cobalt-700">{c.label}</h2>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">{c.description}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-cobalt-700">Read the comparison <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
