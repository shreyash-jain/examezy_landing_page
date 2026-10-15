import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell, pageMetadata } from "@/components/PageShell";
import { ClientGrid } from "@/components/ClientLogos";
import { CLIENTS_LINE } from "@/content/clients";

export const metadata = pageMetadata("/about/");

const FAMILY = [
  { n: "Vacademy", d: "The learning platform: courses, live classes, community.", u: "https://vacademy.io/" },
  { n: "Evalezy", d: "AI checking of handwritten answer sheets, with an API.", u: "https://evalezy.com/" },
  { n: "Tutezy", d: "A personalised AI tutor for every student.", u: "https://tutezy.ai/" },
  { n: "Telleo", d: "AI calling for admissions and follow-ups.", u: "https://telleo.ai/" },
  { n: "VoomSales", d: "An admissions CRM built for institutes.", u: "https://voomsales.com/" },
];

export default function About() {
  return (
    <PageShell path="/about/" eyebrow="About" h1="Exams made easy, for the people who run them." lede="Examezy is the exams and assessments platform from the team behind Vacademy. We built it for exam heads, coaching owners, teachers and HR teams who are tired of stitching an exam together from five tools.">
      <section className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div className="prose-ex">
          <h2>Why we built it</h2>
          <p>Every institute we work with runs exams. Most were doing it with a form tool for online tests, Word for papers, a weekend of checking, Excel for rank lists and WhatsApp for results. Each tool is fine; together they cost teachers their evenings and students their feedback.</p>
          <p>Examezy puts the whole exam in one place, online or on paper, and uses AI where it saves real hours (writing papers, checking copies, explaining results) while keeping a person in charge of every mark.</p>
          <h2>How we work</h2>
          <ul>
            <li>We only claim what the product does today. Our home page lists what we don&apos;t do yet.</li>
            <li>AI drafts; teachers decide.</li>
            <li>Candidates&apos; privacy is part of fairness: no video streaming, ever.</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">The family</p>
          <div className="mt-4 space-y-3">
            {FAMILY.map((f) => (
              <a key={f.n} href={f.u} className="card card-hover group flex items-center justify-between gap-4 p-5">
                <span><span className="block font-display text-lg font-bold text-ink">{f.n}</span><span className="text-sm text-slate-600">{f.d}</span></span>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-ink" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-white">
        <div className="wrap py-16">
          <p className="mx-auto max-w-2xl text-center text-slate-600">{CLIENTS_LINE}</p>
          <div className="mt-10"><ClientGrid /></div>
          <div className="mt-10 text-center"><Link href="/demo/" className="btn btn-primary btn-lg">Book a demo <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </PageShell>
  );
}
