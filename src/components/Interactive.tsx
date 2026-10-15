"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Monitor, Printer, Shuffle, X } from "lucide-react";
import { Visual } from "./Visuals";
import type { VisualKey } from "@/content/types";
import { track } from "@/lib/track";

/* ---------------------------------------------------------------- lifecycle explorer */
const STAGES: { key: string; label: string; title: string; body: string; points: string[]; visual: VisualKey; href: string }[] = [
  { key: "create", label: "Create", title: "Build the paper in minutes", body: "Pick from your question bank, import a Word file, or let AI draft a balanced paper from your own books.", points: ["7 question types + passages", "Sections, marks, negative marking", "AI generation with source pages"], visual: "wizard", href: "/question-bank/" },
  { key: "schedule", label: "Schedule", title: "Set the window and the rules", body: "A live window for exams, always-open mocks with a fixed duration, untimed practice. Timers per test, section or question.", points: ["Live, mock, practice, survey", "Auto-submit at time-out", "Optional reading time"], visual: "question", href: "/online-exams/" },
  { key: "invite", label: "Invite", title: "Batches, or anyone with a link", body: "Assign to batches and individuals, or open a public registration page with your own form and an OTP check.", points: ["Custom registration fields", "Separate registration window", "WhatsApp & email reminders"], visual: "register", href: "/registration/" },
  { key: "proctor", label: "Proctor", title: "Fair conditions, light footprint", body: "Full screen, tab-switch auto-submit and copy blocking on every online test. Camera checks run on the candidate's device.", points: ["No video streamed", "Snapshot timeline", "Your violation limit"], visual: "proctor", href: "/proctoring/" },
  { key: "evaluate", label: "Evaluate", title: "Auto, teacher or AI, all in one place", body: "Objective answers mark themselves. Teachers check copies on screen; AI drafts marks on handwritten and typed answers for them to approve.", points: ["Instant objective marks", "On-screen pen tools", "AI drafts, teachers release"], visual: "marking", href: "/evaluation/" },
  { key: "publish", label: "Publish", title: "Results when you say so", body: "Release on submit, at the end of the window, or after review. Result messages go out with rank and percentile.", points: ["Report PDF per student", "Bulk report ZIP", "WhatsApp via automations"], visual: "report", href: "/results-analytics/" },
  { key: "analyse", label: "Analyse", title: "Teach from the data", body: "Question insights, AI class diagnostics, batch and evaluator statistics, and a list of learners to follow up.", points: ["Misconceptions by question", "Score distribution", "Follow-up list"], visual: "insights", href: "/results-analytics/" },
];

export function LifecycleExplorer() {
  const [i, setI] = useState(0);
  const s = STAGES[i];
  return (
    <div>
      <div role="tablist" aria-label="Exam lifecycle" className="relative flex gap-1 overflow-x-auto rounded-2xl border border-line bg-white p-1.5 [scrollbar-width:none]">
        {STAGES.map((st, k) => (
          <button
            key={st.key}
            role="tab"
            type="button"
            aria-selected={k === i}
            aria-controls="lifecycle-panel"
            onClick={() => setI(k)}
            className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition md:flex-1 md:justify-center ${k === i ? "bg-ink text-white" : "text-slate-600 hover:bg-paper"}`}
          >
            <span className={`grid h-5 w-5 place-items-center rounded-full text-[0.65rem] font-bold ${k === i ? "bg-gold text-ink" : k < i ? "bg-ok text-white" : "border border-slate-300 text-slate-500"}`}>
              {k < i ? <Check className="h-3 w-3" /> : k + 1}
            </span>
            {st.label}
          </button>
        ))}
      </div>
      <div id="lifecycle-panel" role="tabpanel" className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div key={s.key} className="animate-rise">
          <p className="eyebrow">Step {i + 1} of 7 · {s.label}</p>
          <h3 className="h-display mt-3 text-3xl text-ink md:text-4xl">{s.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.body}</p>
          <ul className="mt-5 space-y-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-slate-700"><span className="bubble bubble-ok !h-5 !w-5"><Check className="h-3 w-3" /></span>{p}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={s.href} className="btn btn-outline">Learn more <ArrowRight className="h-4 w-4" /></Link>
            {i < STAGES.length - 1 && (
              <button type="button" onClick={() => setI(i + 1)} className="btn btn-ink">Next: {STAGES[i + 1].label} <ArrowRight className="h-4 w-4" /></button>
            )}
          </div>
        </div>
        <div key={`${s.key}-v`} className="animate-rise">
          <Visual k={s.visual} />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- marking playground */
type PlayQ =
  | { kind: "single"; label: string; text: string; options: string[]; correct: number; plus: number; minus: number; why: string }
  | { kind: "numeric"; label: string; text: string; correct: number[]; plus: number; minus: number; why: string };

const PLAY: PlayQ[] = [
  { kind: "single", label: "MCQ", text: "Which gas do plants mainly release during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1, plus: 4, minus: 1, why: "Photosynthesis splits water and releases oxygen." },
  { kind: "numeric", label: "Numeric", text: "A car covers 150 km in 2.5 hours. What is its average speed in km/h?", correct: [60], plus: 4, minus: 0, why: "150 ÷ 2.5 = 60 km/h." },
  { kind: "single", label: "True / false", text: "True or false: the sum of angles in a triangle is 180°.", options: ["True", "False"], correct: 0, plus: 1, minus: 0, why: "Interior angles of any triangle add up to 180°." },
];

export function MarkingPlayground() {
  const [qi, setQi] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [num, setNum] = useState("");
  const [done, setDone] = useState(false);
  const q = PLAY[qi];

  const result = useMemo(() => {
    if (!done) return null;
    if (q.kind === "single") {
      if (pick === null) return { score: 0, ok: null as boolean | null };
      return pick === q.correct ? { score: q.plus, ok: true } : { score: -q.minus, ok: false };
    }
    if (!num.trim()) return { score: 0, ok: null as boolean | null };
    return q.correct.includes(Number(num)) ? { score: q.plus, ok: true } : { score: -q.minus, ok: false };
  }, [done, pick, num, q]);

  const switchTo = (k: number) => {
    setQi(k);
    setPick(null);
    setNum("");
    setDone(false);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-sheet">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-paper/60 px-5 py-3">
        <div className="flex gap-1" role="tablist" aria-label="Question type">
          {PLAY.map((p, k) => (
            <button key={p.label} type="button" role="tab" aria-selected={k === qi} onClick={() => switchTo(k)} className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${k === qi ? "bg-ink text-white" : "text-slate-500 hover:text-ink"}`}>
              {p.label}
            </button>
          ))}
        </div>
        <span className="text-xs font-semibold text-slate-500">+{q.plus} / −{q.minus}</span>
      </div>
      <div className="p-5 md:p-6">
        <p className="font-semibold leading-relaxed text-ink">{q.text}</p>
        {q.kind === "single" ? (
          <ul className="mt-4 space-y-2">
            {q.options.map((o, k) => {
              const state = done ? (k === q.correct ? "ok" : k === pick ? "bad" : "") : k === pick ? "on" : "";
              return (
                <li key={o}>
                  <button
                    type="button"
                    disabled={done}
                    onClick={() => setPick(k)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${state === "ok" ? "border-ok bg-ok-50" : state === "bad" ? "border-bad bg-bad-50" : state === "on" ? "border-ink bg-paper" : "border-line hover:border-ink"}`}
                  >
                    <span className={`bubble ${state === "ok" ? "bubble-ok" : state === "bad" ? "bubble-bad" : state === "on" ? "bubble-on" : ""}`}>{"ABCD"[k]}</span>
                    {o}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-slate-500">Your answer</span>
            <input
              value={num}
              disabled={done}
              onChange={(e) => setNum(e.target.value.replace(/[^\d.-]/g, ""))}
              inputMode="decimal"
              className="mt-1.5 w-40 rounded-xl border border-line px-3.5 py-2.5 font-mono text-lg text-ink outline-none focus:border-cobalt"
              placeholder="0"
            />
          </label>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {!done ? (
            <button type="button" onClick={() => { setDone(true); track("playground_submit", { type: q.label }); }} className="btn btn-primary">
              Submit &amp; auto-mark
            </button>
          ) : (
            <button type="button" onClick={() => switchTo((qi + 1) % PLAY.length)} className="btn btn-ink">
              Try the next type <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {result && (
            <div className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold ${result.ok ? "bg-ok-50 text-ok" : result.ok === false ? "bg-bad-50 text-bad-700" : "bg-paper-2 text-slate-600"}`} role="status">
              {result.ok ? <Check className="h-4 w-4" /> : result.ok === false ? <X className="h-4 w-4" /> : null}
              {result.ok === null ? "Skipped: 0 marks" : `${result.score > 0 ? "+" : ""}${result.score} mark${Math.abs(result.score) === 1 ? "" : "s"}`}
            </div>
          )}
        </div>
        {done && <p className="mt-3 text-sm text-slate-600"><span className="font-semibold text-ink">Explanation:</span> {q.why} Students see this in their review.</p>}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- online / paper / hybrid */
const MODES = {
  online: {
    icon: Monitor,
    label: "Online",
    title: "Written in the browser, marked on submit",
    steps: ["Candidates write on laptop, tablet or phone", "Answers autosave; proctoring rules apply", "Objective answers marked instantly", "Long answers checked on screen or by AI", "Report with rank and percentile"],
  },
  paper: {
    icon: Printer,
    label: "Paper",
    title: "Written on paper, checked on screen",
    steps: ["Print the paper in shuffled sets with an answer key", "Students write in your hall", "Scan and bulk upload; AI matches copies to students", "Teachers check on screen, or approve AI-drafted marks", "Same reports as an online test"],
  },
  hybrid: {
    icon: Shuffle,
    label: "Hybrid",
    title: "Online for some, paper for others, one platform",
    steps: ["One question set, run online for remote students", "The same paper printed in shuffled sets for your centre", "Online answers marked the moment they submit", "Paper copies scanned and checked on screen or by AI", "Both results in the same dashboard and reports"],
  },
} as const;

export function ModeSwitcher() {
  const [m, setM] = useState<keyof typeof MODES>("online");
  const mode = MODES[m];
  return (
    <div className="rounded-3xl border border-ink-3 bg-ink-2 p-5 text-white md:p-7">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Exam mode">
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((k) => {
          const M = MODES[k];
          return (
            <button key={k} type="button" role="tab" aria-selected={k === m} onClick={() => setM(k)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${k === m ? "bg-gold text-ink" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}>
              <M.icon className="h-4 w-4" /> {M.label}
            </button>
          );
        })}
      </div>
      <p className="h-card mt-6 text-2xl">{mode.title}</p>
      <ol className="mt-5 space-y-3">
        {mode.steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 animate-rise" style={{ animationDelay: `${i * 70}ms` }}>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/25 text-xs font-bold text-gold">{i + 1}</span>
            <span className="text-slate-200">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------------------------------------------------------- checking-time calculator */
function Slider({ label, value, set, min, max, step = 1, suffix = "" }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step?: number; suffix?: string }) {
  return (
    <label className="block">
      <span className="flex justify-between text-sm"><span className="font-semibold text-ink">{label}</span><span className="font-mono font-bold text-cobalt-700">{value.toLocaleString("en-IN")}{suffix}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="mt-2 w-full accent-[#2b50ff]" />
    </label>
  );
}

export function CheckingCalculator() {
  const [students, setStudents] = useState(400);
  const [answers, setAnswers] = useState(8);
  const [mins, setMins] = useState(3);
  const [exams, setExams] = useState(4);
  const [review, setReview] = useState(1);
  const manual = (students * answers * mins * exams) / 60;
  const withAi = (students * answers * review * exams) / 60;
  const saved = Math.max(0, manual - withAi);
  const fmt = (n: number) => Math.round(n).toLocaleString("en-IN");
  return (
    <div className="grid gap-6 rounded-3xl border border-line bg-white p-5 shadow-sheet md:grid-cols-[1.1fr_0.9fr] md:p-7">
      <div className="space-y-5">
        <Slider label="Students" value={students} set={setStudents} min={30} max={5000} step={10} />
        <Slider label="Written answers per paper" value={answers} set={setAnswers} min={1} max={30} />
        <Slider label="Minutes to check one answer by hand" value={mins} set={setMins} min={1} max={10} suffix=" min" />
        <Slider label="Minutes to review one AI-checked answer" value={review} set={setReview} min={0.5} max={5} step={0.5} suffix=" min" />
        <Slider label="Written exams per term" value={exams} set={setExams} min={1} max={12} />
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white">
        <div>
          <p className="text-sm text-slate-300">Teacher hours spent checking, per term</p>
          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-sm"><span>By hand</span><span className="font-mono font-bold">{fmt(manual)} h</span></div>
              <div className="mt-1 h-2.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-bad" style={{ width: "100%" }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Reviewing AI drafts</span><span className="font-mono font-bold">{fmt(withAi)} h</span></div>
              <div className="mt-1 h-2.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-ok" style={{ width: `${manual ? Math.max(2, (withAi / manual) * 100) : 0}%` }} /></div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm text-slate-300">Hours back for teaching</p>
          <p className="h-display mt-1 text-5xl text-gold">{fmt(saved)}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">An estimate from your own numbers, not a promise. Review time depends on your subject and how closely teachers check each AI draft.</p>
        </div>
      </div>
    </div>
  );
}
