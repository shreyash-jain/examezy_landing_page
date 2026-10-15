import { PageShell, pageMetadata } from "@/components/PageShell";
import { LifecycleExplorer, ModeSwitcher } from "@/components/Interactive";
import { Visual } from "@/components/Visuals";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata("/how-it-works/");

const STEPS = [
  { t: "Create the assessment", b: "A four-step wizard: basic info (type, window, duration, result release), sections and questions, participants and notifications, and access control. It stays a draft until you publish." },
  { t: "Add questions", b: "Pick from the question bank, import a Word file, digitise a printed paper, or generate with AI from your material. Set marks, negative marking, cutoffs and order per section." },
  { t: "Choose who takes it", b: "Assign batches or individuals, or open a public registration page with your own form, a registration window and OTP verification." },
  { t: "Set the rules", b: "Timers per test, section or question; auto-submit; section switching; full screen and tab-switch limits; camera proctoring with your violation limit." },
  { t: "Run the exam", b: "Candidates write in the browser with autosave. You watch Attempted, Ongoing and Pending live, send reminders and grant reattempts." },
  { t: "Evaluate", b: "Objective answers are marked on submit. Teachers check long answers and uploaded sheets on screen, or review AI-drafted marks." },
  { t: "Release and analyse", b: "Release on submit, at the end of the window or manually. Students get rank, percentile and a detailed report; you get insights, exports and the dashboard." },
];

export default function HowItWorks() {
  return (
    <PageShell
      path="/how-it-works/"
      eyebrow="How it works"
      h1="How an exam runs on Examezy, start to finish."
      lede="Seven steps, one platform. Here's exactly what happens from the moment you start a paper to the moment a student opens their report."
      visual={<Visual k="wizard" />}
      secondary={{ href: "/features/", label: "See every feature", track: "features" }}
    >
      <JsonLd data={{ "@context": "https://schema.org", "@type": "HowTo", name: "How to run an exam on Examezy", step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.b })) }} />
      <section className="wrap py-16 md:py-24">
        <LifecycleExplorer />
      </section>
      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Step by step</p>
            <h2 className="h-section mt-3 text-ink">The detail behind each step</h2>
            <p className="mt-4 text-lg text-slate-600">Every setting below is configurable per assessment, so a weekly quiz and a scholarship test can live side by side with different rules.</p>
          </div>
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-2xl border border-line p-5">
                <span className="bubble bubble-on !h-9 !w-9 !text-sm">{i + 1}</span>
                <span>
                  <span className="block font-display text-lg font-bold text-ink">{s.t}</span>
                  <span className="mt-1 block leading-relaxed text-slate-600">{s.b}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Online, paper or both</p>
          <h2 className="h-section mt-3 text-ink">The same flow, wherever the exam is written</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">Paper exams follow the same seven steps; the only difference is that answer sheets arrive as scanned PDFs and are checked on screen or by AI.</p>
        </div>
        <ModeSwitcher />
      </section>
    </PageShell>
  );
}
