import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageShell, pageMetadata } from "@/components/PageShell";
import { DemoForm } from "@/components/DemoForm";
import { bookHref } from "@/lib/site";

export const metadata = pageMetadata("/pricing/");

const DRIVERS = [
  { t: "Candidates", b: "How many people take tests with you in a year. This sets the size of your plan." },
  { t: "Exam calendar", b: "Weekly tests, monthly mocks or a few big events: we size for your peaks." },
  { t: "AI checking", b: "Paid per copy checked, by the number of questions, with the cost shown before you run it. Failed and unreadable copies are free." },
  { t: "Branding", b: "Your own domain and branded portal, if you want one." },
];

const INCLUDED = [
  "Online, mock, practice, survey and paper exams",
  "All 7 question types plus passage-based questions",
  "Question bank, Word import and AI question generation",
  "Full-screen, tab-switch and camera proctoring",
  "Auto-marking and on-screen teacher evaluation",
  "Reports, leaderboards, question insights, bulk report ZIP",
  "Public registration pages and automations",
  "Onboarding help to set up your first paper",
];

export default function Pricing() {
  return (
    <PageShell
      path="/pricing/"
      eyebrow="Pricing"
      h1="Priced around your exams, not around a feature list."
      lede="Every plan includes the whole platform. What changes is how many candidates you test and how much AI checking you use. Tell us your exam calendar and we'll send a quote, usually within a working day."
      secondary={{ href: "#quote", label: "Get a quote", track: "quote" }}
    >
      <section className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-2">
        <div className="rounded-3xl bg-ink p-7 text-white md:p-9">
          <p className="eyebrow eyebrow-dark">In every plan</p>
          <h2 className="h-card mt-3 text-3xl">The whole platform</h2>
          <ul className="mt-6 space-y-3">
            {INCLUDED.map((i) => <li key={i} className="flex gap-3 text-slate-200"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{i}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">What sets the price</p>
          <h2 className="h-section mt-3 text-ink">Four things decide your quote</h2>
          <div className="mt-8 space-y-4">
            {DRIVERS.map((d, i) => (
              <div key={d.t} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="bubble bubble-on !h-8 !w-8">{i + 1}</span>
                <span><span className="block font-bold text-ink">{d.t}</span><span className="mt-1 block text-slate-600">{d.b}</span></span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-gold/50 bg-gold-50 p-5">
            <p className="font-bold text-ink">Start with a pilot</p>
            <p className="mt-1 text-slate-700">Send us a past paper. We&apos;ll set it up as a test so you can run it with one batch before you decide.</p>
            <Link href={bookHref()} className="mt-4 inline-flex items-center gap-1 font-bold text-cobalt-700" data-track="book_demo">Book a demo <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <section id="quote" className="border-t border-line bg-white">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="h-section text-ink">Get a quote</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Tell us roughly how many candidates you test and what kinds of exams you run. We&apos;ll reply with a quote and a time for a short demo.</p>
          </div>
          <DemoForm origin="pricing" />
        </div>
      </section>
    </PageShell>
  );
}
