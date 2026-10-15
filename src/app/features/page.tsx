import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import { PageShell, pageMetadata } from "@/components/PageShell";
import { Icon } from "@/components/ui";
import { Visual } from "@/components/Visuals";

export const metadata = pageMetadata("/features/");

const EXTRA: { title: string; items: string[] }[] = [
  { title: "Assessment types", items: ["Exam (fixed live window)", "Mock (always open, fixed duration)", "Practice (untimed)", "Survey (no right answers)", "Paper exam with uploaded answer sheet", "Homework", "Tests inside Vacademy courses"] },
  { title: "Settings", items: ["Duration per test, section or question", "Reading time before the clock starts", "Auto-submit at time-out", "Lock or allow section switching", "Negative marking and cutoffs per section", "Random question order", "Release on submit, at window end or manually", "Public or private", "Reattempts granted per learner"] },
  { title: "Admin & access", items: ["Who edits, gets alerts, sees reports and evaluates, per test", "Batches and individual learners", "Public registration with custom fields and OTP", "Monitoring console: Attempted, Ongoing, Pending", "Reminders, close submissions, remove participants", "Reattempt request inbox", "White-label portal with your domain"] },
  { title: "Automations", items: ["Triggers: created, published, starting soon, started, ended", "Registration and result-released triggers", "Reattempt requested / granted", "AI evaluation completed", "WhatsApp, email and push messages", "Result emails with the report PDF"] },
];

export default function Features() {
  return (
    <PageShell
      path="/features/"
      eyebrow="All features"
      h1="Every feature, listed. Nothing we don't have."
      lede="The complete Examezy feature list, grouped the way you'll use it. Click any group for the detail."
      visual={<Visual k="types" />}
    >
      <section className="wrap py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div key={p.slug} className="rounded-3xl border border-line bg-white p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><Icon name={p.icon} className="h-5 w-5" /></span>
                  <h2 className="h-card text-xl text-ink">{p.label}</h2>
                </div>
                <Link href={`/${p.slug}/`} className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-cobalt-700">Details <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <ul className="mt-5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                {p.grid.map((g) => (
                  <li key={g.title} className="flex gap-2 text-[0.93rem] text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" /><span><b className="font-semibold text-ink">{g.title}.</b> {g.body}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-white">
        <div className="wrap py-16 md:py-20">
          <h2 className="h-section text-ink">And everything around the exam</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {EXTRA.map((g) => (
              <div key={g.title}>
                <p className="font-display text-lg font-bold text-ink">{g.title}</p>
                <ul className="mt-4 space-y-2">
                  {g.items.map((i) => <li key={i} className="flex gap-2 text-[0.93rem] text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
