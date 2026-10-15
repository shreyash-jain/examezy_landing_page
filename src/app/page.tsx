import Link from "next/link";
import { ArrowRight, Camera, Check, CircleSlash, Sparkles, Trophy } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { AUDIENCES } from "@/content/audiences";
import { HOME_FAQS } from "@/content/faqs";
import { bookHref, EVALEZY_URL } from "@/lib/site";
import { CtaBand, FaqList, Icon, SectionHeading } from "@/components/ui";
import { Visual } from "@/components/Visuals";
import { ClientMarquee } from "@/components/ClientLogos";
import { CheckingCalculator, LifecycleExplorer, MarkingPlayground, ModeSwitcher } from "@/components/Interactive";
import { DemoForm } from "@/components/DemoForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const EXAM_KINDS = [
  { label: "Online exams", href: "/online-exams/" },
  { label: "Paper exams", href: "/paper-exams/" },
  { label: "Mock test series", href: "/use-cases/mock-test-series/" },
  { label: "Scholarship tests", href: "/use-cases/scholarship-entrance-tests/" },
  { label: "Hiring tests", href: "/use-cases/campus-hiring-tests/" },
  { label: "Coding rounds", href: "/coding-tests/" },
  { label: "Practice & homework", href: "/use-cases/practice-homework/" },
  { label: "Surveys", href: "/use-cases/surveys-feedback/" },
];

const BENTO = [
  { slug: "proctoring", span: "md:col-span-2", tone: "bg-ink text-white", visual: "proctor" as const, blurb: "Full screen, tab-switch auto-submit and copy blocking on every online test. Camera checks run on the candidate's device, so nothing is streamed." },
  { slug: "question-types", span: "", tone: "bg-white", visual: null, blurb: "MCQ, multi-correct, true/false, numeric, one word, long answer, coding and passage-based questions in one paper." },
  { slug: "ai-question-paper-generator", span: "", tone: "bg-white", visual: null, blurb: "Plan by chapter weightage, generate from your own books, and see the source page behind every question." },
  { slug: "results-analytics", span: "", tone: "bg-white", visual: null, blurb: "Rank, percentile, question insights, AI diagnostics and every student's report PDF in one ZIP." },
  { slug: "coding-tests", span: "", tone: "bg-white", visual: null, blurb: "An editor inside the exam, six languages, and marks from hidden test cases." },
  { slug: "registration", span: "md:col-span-2 lg:col-span-3", tone: "bg-gold-50", visual: "register" as const, blurb: "Scholarship and entrance tests with a public page, your own form fields, OTP-verified candidates and automated reminders. Every test-taker becomes a lead." },
];

const NUMBERS = [
  { v: "1,000", l: "simultaneous test-takers in our production load test, zero errors" },
  { v: "7", l: "question types, plus passage-based versions" },
  { v: "200", l: "answer-sheet PDFs per bulk upload, matched to students by AI" },
  { v: "6", l: "coding languages, marked on hidden test cases" },
];

const NOT_YET = [
  "OMR bubble-sheet scanning",
  "Lockdown browsers or ID matching against a photo",
  "Psychometric or personality tests",
  "Collecting exam fees on the registration page",
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Examezy: Online Exam Software with AI Proctoring and Evaluation",
          url: SITE,
          inLanguage: "en-IN",
          isPartOf: { "@id": `${SITE}/#website` },
          about: { "@id": `${SITE}/#app` },
        }}
      />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative overflow-hidden">
        <div className="omr fade-mask pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cobalt/10 blur-3xl" />
        <div className="wrap relative grid gap-14 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="bubble bubble-on !h-4 !w-4 !border-gold !bg-gold" aria-hidden />
              Exams &amp; assessments, from the team behind Vacademy
            </p>
            <h1 className="h-display mt-6 text-[2.75rem] text-ink sm:text-6xl lg:text-[4.4rem]">
              Every exam,{" "}
              <span className="relative whitespace-nowrap text-cobalt">
                online or on paper
                <svg viewBox="0 0 300 14" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 10 C 80 2, 200 2, 298 8" fill="none" stroke="#FFB31A" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              , run and reported in one place.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Create the paper, proctor the exam, mark it automatically, on screen or with AI, and give every student their rank, percentile and a report worth reading.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={bookHref()} className="btn btn-primary btn-lg" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
              <a href="#try" className="btn btn-outline btn-lg">Try marking a question</a>
            </div>
            <ul className="mt-9 grid gap-2.5 text-sm text-slate-600 sm:grid-cols-2">
              {["Tested with 1,000 simultaneous test-takers", "Camera proctoring without video streaming", "Teachers approve every AI mark", "Paper exams supported, not just online"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="bubble bubble-ok mt-0.5 !h-4 !w-4"><Check className="h-2.5 w-2.5" /></span>{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative animate-rise [animation-delay:120ms] sm:px-4 sm:pb-12 sm:pt-12">
            <Visual k="question" />
            <div className="absolute left-8 top-0 hidden animate-float items-center gap-2.5 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-sheet sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-bad-50 text-bad-700"><Camera className="h-4 w-4" /></span>
              <span className="text-xs"><span className="block font-bold text-ink">2 faces detected</span><span className="text-slate-500">Flag 2 of 5 · snapshot saved</span></span>
            </div>
            <div className="absolute right-0 top-0 hidden animate-float items-center gap-2 rounded-2xl border border-violet/20 bg-white px-3.5 py-2.5 shadow-sheet [animation-delay:3s] md:flex">
              <Sparkles className="h-4 w-4 text-violet" />
              <span className="text-xs"><span className="block font-bold text-ink">38 copies AI-checked</span><span className="text-slate-500">Waiting for teacher review</span></span>
            </div>
            <div className="absolute bottom-0 right-8 hidden animate-float items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-sheet [animation-delay:1.5s] sm:flex">
              <Trophy className="h-6 w-6 text-gold" />
              <span className="text-xs"><span className="block text-slate-300">Released 2 min after the window</span><span className="font-display text-lg font-bold">Rank 14 · 98.9 %ile</span></span>
            </div>
          </div>
        </div>

        <div className="wrap relative pb-10">
          <ul className="flex flex-wrap justify-center gap-2" data-llms-skip>
            {EXAM_KINDS.map((k) => (
              <li key={k.href}>
                <Link href={k.href} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-semibold text-ink backdrop-blur transition hover:border-ink">
                  <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink-4" aria-hidden />
                  {k.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ logos */}
      <section className="border-y border-line bg-white py-12">
        <ClientMarquee />
      </section>

      {/* ------------------------------------------------------------ lifecycle */}
      <section className="wrap py-20 md:py-28">
        <SectionHeading
          center
          eyebrow="The whole exam, one platform"
          title={<>From blank paper to <span className="marker">report card</span>, in seven steps.</>}
          lede="Most institutes stitch together a form tool, a spreadsheet, a WhatsApp group and a weekend of checking. Click through the exam lifecycle on Examezy instead."
        />
        <div className="mt-12"><LifecycleExplorer /></div>
      </section>

      {/* ------------------------------------------------------------ bento */}
      <section className="border-y border-line bg-paper-2/60">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Platform" title="Built for the exams that matter." lede="Every part of the exam, done properly, so nothing needs a workaround." />
            <Link href="/features/" className="btn btn-outline shrink-0">See every feature <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BENTO.map((b) => {
              const p = PRODUCTS.find((x) => x.slug === b.slug)!;
              const dark = b.tone.includes("bg-ink");
              return (
                <Link key={b.slug} href={`/${p.slug}/`} className={`group relative overflow-hidden rounded-3xl border ${dark ? "border-ink" : "border-line"} p-7 transition hover:-translate-y-0.5 hover:shadow-sheet ${b.tone} ${b.span}`}>
                  <div className={b.visual ? "grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : ""}>
                    <div>
                      <span className={`grid h-11 w-11 place-items-center rounded-xl ${dark ? "bg-white/10 text-gold" : "bg-cobalt-50 text-cobalt-700"}`}><Icon name={p.icon} className="h-5 w-5" /></span>
                      <h3 className={`h-card mt-5 text-2xl ${dark ? "text-white" : "text-ink"}`}>{p.label}</h3>
                      <p className={`mt-2 leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{b.blurb}</p>
                      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-bold ${dark ? "text-gold" : "text-cobalt-700"}`}>Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                    </div>
                    {b.visual && <div className="hidden sm:block"><Visual k={b.visual} /></div>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ playground */}
      <section id="try" className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Try it</p>
          <h2 className="h-section mt-3 text-ink">Go on, answer one.</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This is how marking feels for your candidates: submit, and the mark appears with the section&apos;s negative marking already applied and the explanation right there. For a whole paper, that means results the second the window closes.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            {["MCQ, numeric, true/false, one word and coding mark themselves", "Long answers go to teachers, or to AI as a draft", "Fix a wrong key later and re-evaluate in one click"].map((t) => (
              <li key={t} className="flex gap-2.5"><span className="bubble bubble-ok mt-0.5 !h-5 !w-5"><Check className="h-3 w-3" /></span>{t}</li>
            ))}
          </ul>
        </div>
        <MarkingPlayground />
      </section>

      {/* ------------------------------------------------------------ online / paper */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="omr-dark pointer-events-none absolute inset-0" />
        <div className="wrap relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-dark">Online, paper or both</p>
            <h2 className="h-section mt-3 text-white">Your exam hall doesn&apos;t have to change.</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Plenty of exams should still be written by hand. Examezy prints them in shuffled sets, collects the answer sheets as PDFs and checks them on screen, so paper and online results sit in the same reports.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/paper-exams/" className="btn btn-gold">Paper exams <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/online-exams/" className="btn btn-ghost-dark">Online exams</Link>
            </div>
          </div>
          <ModeSwitcher />
        </div>
      </section>

      {/* ------------------------------------------------------------ AI */}
      <section className="wrap py-20 md:py-28">
        <SectionHeading
          center
          eyebrow="AI where it saves hours"
          title="AI that drafts. People who decide."
          lede="Examezy uses AI for the slow parts of an exam: writing the paper, checking the copies, explaining the results. Every AI output is a draft your team can see, edit and approve."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {[
            { slug: "ai-question-paper-generator", k: "generator" as const, t: "Write the paper", b: "A balanced paper from your own books, planned by chapter weightage, with the source page cited for each question." },
            { slug: "ai-answer-sheet-checking", k: "aiCheck" as const, t: "Check the copies", b: "Handwritten and typed answers marked against a rubric, returned in red pen, released only after a teacher reviews." },
            { slug: "results-analytics", k: "insights" as const, t: "Explain the results", b: "Misconceptions, Bloom's levels and a learning path for each student; the class's weak spots for each teacher." },
          ].map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-sheet">
              <div className="border-b border-line bg-paper p-4 [&>*]:!shadow-none"><Visual k={c.k} /></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="h-card text-xl text-ink">{c.t}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600">{c.b}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cobalt-700">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Only need AI copy checking, or an API? See <a href={EVALEZY_URL} className="font-semibold text-cobalt-700 underline-offset-4 hover:underline">Evalezy</a>, our standalone checking product.
        </p>
      </section>

      {/* ------------------------------------------------------------ numbers */}
      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.v} className="flex gap-4">
              <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gold ring-4 ring-gold-50" aria-hidden />
              <div>
                <p className="h-display text-5xl text-ink">{n.v}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ results */}
      <section className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1"><Visual k="report" /></div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow">Results &amp; analytics</p>
          <h2 className="h-section mt-3 text-ink">A report card that tells students what to do next.</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Rank and percentile, how they compare with the class and the topper, time and accuracy per section, and a question-by-question review with explanations and the class&apos;s answer spread. You get every report as a PDF, in one ZIP.
          </p>
          <Link href="/results-analytics/" className="btn btn-outline mt-8">Explore reports <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* ------------------------------------------------------------ audiences */}
      <section className="border-y border-line bg-paper-2/60">
        <div className="wrap py-20 md:py-28">
          <SectionHeading eyebrow="Who it's for" title="Shaped to the way you test." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <Link key={a.slug} href={`/for/${a.slug}/`} className="card card-hover group flex gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cobalt-50 text-cobalt-700"><Icon name={a.icon} className="h-6 w-6" /></span>
                <span>
                  <span className="block font-display text-lg font-bold text-ink group-hover:text-cobalt-700">{a.label}</span>
                  <span className="mt-1 block text-[0.95rem] leading-relaxed text-slate-600">{a.h1}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ calculator */}
      <section className="wrap py-20 md:py-28">
        <SectionHeading
          eyebrow="Do the maths"
          title="How many hours does checking cost you?"
          lede="Move the sliders to your own numbers. Then compare checking by hand with reviewing AI-drafted marks."
        />
        <div className="mt-12"><CheckingCalculator /></div>
      </section>

      {/* ------------------------------------------------------------ honest box */}
      <section className="wrap pb-20 md:pb-28">
        <div className="grid gap-8 rounded-3xl border border-dashed border-ink-4/40 bg-white p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
          <div>
            <p className="eyebrow">Straight talk</p>
            <h2 className="h-card mt-3 text-3xl text-ink">What Examezy doesn&apos;t do (yet)</h2>
            <p className="mt-3 leading-relaxed text-slate-600">We&apos;d rather lose a deal than win one on a feature we don&apos;t have. If you need any of these, tell us in the demo and we&apos;ll be honest about fit.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {NOT_YET.map((n) => (
              <li key={n} className="flex items-start gap-2.5 rounded-2xl bg-paper p-4 text-sm font-semibold text-ink"><CircleSlash className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ FAQ */}
      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-10 py-20 md:py-24 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="h-section text-ink">Questions, answered</h2>
            <Link href="/faq/" className="mt-6 inline-flex items-center gap-1 font-bold text-cobalt-700">All FAQs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      {/* ------------------------------------------------------------ form */}
      <section id="demo" className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Book a demo</p>
          <h2 className="h-section mt-3 text-ink">See your own exam running on Examezy.</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">In 30 minutes we&apos;ll walk through the exam screen, proctoring, evaluation and reports. Send us a past paper and we&apos;ll set it up as a test, so you can run a pilot with one batch.</p>
          <ul className="mt-8 space-y-3">
            {["A live walkthrough shaped to your exams", "Your past paper set up as a test", "A quote sized to your candidates and exam calendar"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700"><span className="bubble bubble-on !h-6 !w-6 !border-gold !bg-gold !text-ink"><Check className="h-3.5 w-3.5" /></span>{t}</li>
            ))}
          </ul>
        </div>
        <DemoForm origin="home" />
      </section>

      <CtaBand />
    </main>
  );
}
