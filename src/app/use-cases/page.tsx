import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { USECASES } from "@/content/usecases";
import { SITE } from "@/lib/site";
import { Breadcrumbs, CtaBand, Icon } from "@/components/ui";

const title = "Online Exam Use Cases: Mock Tests, Scholarship Tests, Hiring and More";
const description = "Step-by-step setups for the exams institutes run most: mock test series, scholarship and entrance tests, school and college exams, hiring tests, olympiads, practice, training and surveys.";
export const metadata: Metadata = { title, description, alternates: { canonical: `${SITE}/use-cases/` }, openGraph: { url: `${SITE}/use-cases/`, title, description } };

export default function UseCasesIndex() {
  return (
    <main>
      <section className="wrap pb-6 pt-10 md:pt-14">
        <Breadcrumbs items={[{ label: "Use cases" }]} />
        <p className="eyebrow mt-8">Use cases</p>
        <h1 className="h-display mt-3 max-w-4xl text-[2.4rem] text-ink md:text-[3.3rem]">Recipes for the exams you actually run.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </section>
      <section className="wrap grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
        {USECASES.map((u) => (
          <Link key={u.slug} href={`/use-cases/${u.slug}/`} className="card card-hover group flex flex-col p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-50 text-gold-700"><Icon name={u.icon} className="h-6 w-6" /></span>
            <h2 className="h-card mt-5 text-xl text-ink group-hover:text-cobalt-700">{u.label}</h2>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">{u.h1}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-cobalt-700">See the setup <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
