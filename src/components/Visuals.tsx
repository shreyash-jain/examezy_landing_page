/**
 * Product mock-ups drawn in HTML/SVG (no screenshots: crisp at any size, tiny, themable). Every visual shows a
 * feature that exists (docs/PRODUCT_FACTS.md); names and numbers are illustrative.
 */
import {
  AlertTriangle, BellRing, Camera, Check, CheckCircle2, ChevronRight, CircleDot, Clock, CloudOff, Code2, FileText,
  Filter, Flag, Lock, MessageCircle, MousePointer2, Pencil, Play, RefreshCw, Search, Sparkles, Square, Trophy,
  Type, Undo2, Upload, Users, X,
} from "lucide-react";
import type { VisualKey } from "@/content/types";

function Frame({ title, right, children, className = "", dark = false }: { title: string; right?: React.ReactNode; children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`@container overflow-hidden rounded-2xl border shadow-sheet ${dark ? "border-ink-3 bg-ink-2 text-white" : "border-line bg-white"} ${className}`}>
      <div className={`flex items-center justify-between gap-3 border-b px-4 py-2.5 ${dark ? "border-ink-3" : "border-line bg-paper/60"}`}>
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
          </span>
          <span className={`truncate text-xs font-semibold ${dark ? "text-slate-300" : "text-slate-500"}`}>{title}</span>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

const Pill = ({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "ok" | "bad" | "gold" | "cobalt" | "violet" }) => {
  const t = {
    slate: "bg-paper-2 text-slate-600",
    ok: "bg-ok-50 text-ok",
    bad: "bg-bad-50 text-bad-700",
    gold: "bg-gold-50 text-gold-700",
    cobalt: "bg-cobalt-50 text-cobalt-700",
    violet: "bg-violet-50 text-violet",
  }[tone];
  return <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[0.68rem] font-bold ${t}`}>{children}</span>;
};

/* ---------------------------------------------------------------- exam screen */
export function QuestionVisual() {
  const palette = ["a", "a", "r", "a", "n", "a", "c", "a", "a", "r", "n", "a", "a", "c", "n", "n", "n", "n", "n", "n"];
  const tone: Record<string, string> = {
    a: "bg-ok text-white border-ok",
    r: "bg-violet text-white border-violet",
    n: "bg-white text-slate-500 border-line",
    c: "bg-ink text-white border-ink ring-2 ring-gold ring-offset-1",
  };
  return (
    <Frame
      title="Physics Mock 07 · Section A"
      right={
        <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 font-mono text-[0.7rem] font-bold text-white">
          <Clock className="h-3 w-3 text-gold" /> 01:24:37
        </span>
      }
    >
      <div className="flex gap-1 border-b border-line px-4 pt-3 text-xs font-semibold">
        {["Physics", "Chemistry", "Maths"].map((s, i) => (
          <span key={s} className={`rounded-t-lg px-3 py-1.5 ${i === 0 ? "bg-cobalt text-white" : "text-slate-500"}`}>{s}</span>
        ))}
      </div>
      <div className="grid gap-4 p-4 @lg:grid-cols-[1fr_9.5rem]">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold text-ink">Question 14</span>
            <span>+4 / −1</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            A ball is thrown vertically upward with speed 20 m/s. Taking g = 10 m/s², the maximum height it reaches is:
          </p>
          <ul className="mt-3 space-y-2">
            {["10 m", "20 m", "40 m", "200 m"].map((o, i) => (
              <li key={o} className={`flex items-center gap-3 rounded-xl border px-3 py-2 text-sm ${i === 1 ? "border-ink bg-paper" : "border-line"}`}>
                <span className={`bubble ${i === 1 ? "bubble-on" : ""}`}>{"ABCD"[i]}</span>
                {o}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-lg border border-line px-2.5 py-1.5 font-semibold text-slate-600"><Flag className="mr-1 inline h-3 w-3 text-violet" />Mark for review</span>
            <span className="rounded-lg bg-cobalt px-2.5 py-1.5 font-semibold text-white">Save & next</span>
          </div>
        </div>
        <div className="rounded-xl bg-paper p-3">
          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">Palette</p>
          <div className="mt-2 grid grid-cols-10 gap-1.5 @lg:grid-cols-5">
            {palette.map((p, i) => (
              <span key={i} className={`grid aspect-square place-items-center rounded-md border text-[0.6rem] font-bold ${tone[p]}`}>{i + 1}</span>
            ))}
          </div>
          <div className="mt-3 space-y-1 text-[0.62rem] text-slate-500">
            <p><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-ok" />Answered 9</p>
            <p><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-violet" />For review 2</p>
            <p><span className="mr-1 inline-block h-2 w-2 rounded-sm border border-line bg-white" />Not visited 9</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- monitoring console */
export function ConsoleVisual() {
  const rows = [
    { n: "Aarav Sharma", b: "JEE-A", p: 82, s: "Q 61/75" },
    { n: "Diya Menon", b: "JEE-A", p: 64, s: "Q 48/75" },
    { n: "Kabir Singh", b: "JEE-B", p: 91, s: "Q 68/75" },
    { n: "Sara Iqbal", b: "JEE-B", p: 37, s: "Q 28/75" },
  ];
  return (
    <Frame title="Monitoring · Full Mock 12" right={<span className="flex items-center gap-1.5 text-[0.7rem] font-bold text-ok"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-ok" /><span className="relative h-2 w-2 rounded-full bg-ok" /></span>LIVE</span>}>
      <div className="grid grid-cols-3 gap-2 p-4">
        {[["Attempted", "412", "text-ok"], ["Ongoing", "188", "text-cobalt-700"], ["Pending", "23", "text-gold-700"]].map(([l, v, c]) => (
          <div key={l} className="rounded-xl border border-line p-3">
            <p className="text-[0.68rem] font-semibold text-slate-500">{l}</p>
            <p className={`h-card mt-0.5 text-2xl ${c}`}>{v}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-line border-t border-line">
        {rows.map((r) => (
          <li key={r.n} className="flex items-center gap-3 px-4 py-2.5 text-xs">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cobalt-50 font-bold text-cobalt-700">{r.n[0]}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold text-ink">{r.n}</span>
              <span className="text-slate-400">{r.b} · {r.s}</span>
            </span>
            <span className="h-1.5 w-20 overflow-hidden rounded-full bg-paper-2"><span className="block h-full rounded-full bg-cobalt" style={{ width: `${r.p}%` }} /></span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-paper/60 px-4 py-3 text-xs">
        <span className="text-slate-500">23 haven&apos;t started</span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-gold px-2.5 py-1.5 font-bold text-ink"><BellRing className="h-3 w-3" /> Remind all</span>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- proctoring */
export function ProctorVisual() {
  const events = [
    { t: "00:00", e: "Camera check-in", tone: "ok" as const, icon: Camera },
    { t: "12:41", e: "Tab switch (1 of 3)", tone: "gold" as const, icon: AlertTriangle },
    { t: "27:09", e: "No face for 6 s", tone: "bad" as const, icon: Users, snap: true },
    { t: "27:15", e: "Face back in view", tone: "ok" as const, icon: Check },
    { t: "41:52", e: "2 faces detected", tone: "bad" as const, icon: Users, snap: true },
  ];
  return (
    <Frame title="Proctoring · Riya Kapoor · attempt review" right={<Pill tone="bad">Flags 2 / 5</Pill>}>
      <div className="grid gap-4 p-4 @lg:grid-cols-[11rem_1fr]">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-ink-3 to-ink">
            <svg viewBox="0 0 160 120" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="80" cy="52" r="22" fill="#4b5785" />
              <path d="M36 120c4-26 22-40 44-40s40 14 44 40" fill="#4b5785" />
              <rect x="52" y="24" width="56" height="60" rx="8" fill="none" stroke="#FFB31A" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
            <span className="absolute left-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-bold text-white">1 face</span>
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md bg-black/50 px-1.5 py-0.5 text-[0.6rem] font-semibold text-white">
              <Lock className="h-2.5 w-2.5" /> on device
            </span>
          </div>
          <p className="mt-2 text-[0.68rem] leading-snug text-slate-500">Faces are counted on the candidate&apos;s device. Snapshot every 60 s and at each flag. No video.</p>
        </div>
        <ol className="space-y-2">
          {events.map((ev) => (
            <li key={ev.t} className="flex items-center gap-2.5 text-xs">
              <span className="w-10 shrink-0 font-mono text-slate-400">{ev.t}</span>
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${ev.tone === "ok" ? "bg-ok-50 text-ok" : ev.tone === "bad" ? "bg-bad-50 text-bad-700" : "bg-gold-50 text-gold-700"}`}>
                <ev.icon className="h-3 w-3" />
              </span>
              <span className="min-w-0 flex-1 truncate font-medium text-ink">{ev.e}</span>
              {ev.snap && <span className="h-6 w-8 shrink-0 rounded bg-gradient-to-br from-ink-4 to-ink-2" aria-label="snapshot" />}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line bg-paper/60 px-4 py-3 text-[0.7rem]">
        <Pill tone="cobalt">Full screen enforced</Pill>
        <Pill tone="cobalt">Copy & paste blocked</Pill>
        <Pill tone="gold">Auto-submit after 5 flags</Pill>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- on-screen marking */
function Handwriting({ lines, y0 = 30, gap = 22, color = "#22315c" }: { lines: number[]; y0?: number; gap?: number; color?: string }) {
  return (
    <>
      {lines.map((w, i) => {
        const y = y0 + i * gap;
        const d = Array.from({ length: Math.max(3, Math.round(w / 14)) }, (_, k) => {
          const x = 40 + (k * w) / Math.max(3, Math.round(w / 14));
          return `${k === 0 ? "M" : "Q"}${k === 0 ? `${x} ${y}` : `${x - 5} ${y - 6 + (k % 2) * 9} ${x} ${y}`}`;
        }).join(" ");
        return <path key={i} d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />;
      })}
    </>
  );
}

export function MarkingVisual() {
  const tools = [Pencil, Check, X, Type, Square, CircleDot, Undo2];
  return (
    <Frame title="Evaluate · Class 10-B · Science term 1 · Roll 23" right={<Pill tone="ok">Draft saved</Pill>}>
      <div className="grid @lg:grid-cols-[1fr_10.5rem]">
        <div className="relative border-b border-line bg-[#fffdf8] @lg:border-b-0 @lg:border-r">
          <div className="absolute left-2 top-2 z-10 flex flex-col gap-1 rounded-xl border border-line bg-white p-1 shadow-sm">
            {tools.map((T, i) => (
              <span key={i} className={`grid h-6 w-6 place-items-center rounded-md ${i === 1 ? "bg-bad text-white" : "text-slate-500"}`}><T className="h-3.5 w-3.5" /></span>
            ))}
          </div>
          <svg viewBox="0 0 320 250" className="block h-auto w-full" role="img" aria-label="A scanned answer sheet with red ticks, a cross and marks">
            {Array.from({ length: 11 }, (_, i) => <line key={i} x1="0" x2="320" y1={20 + i * 22} y2={20 + i * 22} stroke="#2b50ff" strokeOpacity="0.08" />)}
            <line x1="34" x2="34" y1="0" y2="250" stroke="#e5383b" strokeOpacity="0.3" />
            <text x="40" y="18" fontSize="9" fill="#22315c" fontWeight="700">Q3.</text>
            <Handwriting lines={[220, 240, 180, 150]} y0={36} />
            <text x="40" y="128" fontSize="9" fill="#22315c" fontWeight="700">Q4.</text>
            <Handwriting lines={[200, 120, 230]} y0={146} />
            {/* red pen */}
            <path d="M282 44 l6 7 l12 -16" fill="none" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M282 82 l6 7 l12 -16" fill="none" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M206 160 l14 14 M220 160 l-14 14" stroke="#e5383b" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="290" cy="112" rx="16" ry="11" fill="none" stroke="#e5383b" strokeWidth="2.2" />
            <text x="282" y="116" fontSize="11" fill="#e5383b" fontWeight="700">3</text>
            <text x="186" y="208" fontSize="10" fill="#e5383b" fontStyle="italic">units missing</text>
            <ellipse cx="290" cy="220" rx="16" ry="11" fill="none" stroke="#e5383b" strokeWidth="2.2" />
            <text x="279" y="224" fontSize="11" fill="#e5383b" fontWeight="700">1½</text>
          </svg>
        </div>
        <div className="p-3 text-xs">
          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500">Marks</p>
          <ul className="mt-2 space-y-1.5">
            {[["Q1", "2", "2"], ["Q2", "1", "2"], ["Q3", "3", "3"], ["Q4", "1.5", "3"], ["Q5", "—", "5"]].map(([q, m, max]) => (
              <li key={q} className="flex items-center justify-between rounded-lg border border-line px-2 py-1.5">
                <span className="font-semibold text-ink">{q}</span>
                <span className="font-mono"><span className={m === "—" ? "text-slate-400" : "font-bold text-bad-700"}>{m}</span><span className="text-slate-400"> / {max}</span></span>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex justify-between border-t border-line pt-2 font-bold text-ink"><span>Total</span><span className="font-mono">7.5 / 15</span></p>
          <span className="mt-3 block rounded-lg bg-ink py-1.5 text-center font-bold text-white">Submit & release</span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- AI checking */
export function AiCheckVisual() {
  const steps = ["Uploaded", "Matched", "Read", "Marked", "Teacher review"];
  const qs = [
    { q: "Q1", m: "2 / 2", fb: "All three points covered.", ok: true },
    { q: "Q2", m: "2.5 / 4", fb: "Correct method; final value off by a sign.", ok: false },
    { q: "Q3", m: "5 / 5", fb: "Clear diagram, labelled correctly.", ok: true },
  ];
  return (
    <Frame title="AI checking · Maths unit test · 38 copies" right={<Pill tone="violet"><Sparkles className="h-3 w-3" /> AI draft</Pill>}>
      <div className="p-4">
        <ol className="flex items-center gap-1 text-[0.62rem] font-bold @lg:text-[0.68rem]">
          {steps.map((s, i) => (
            <li key={s} className="flex min-w-0 flex-1 items-center gap-1">
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${i < 4 ? "bg-ok text-white" : "bg-gold text-ink"}`}>{i < 4 ? <Check className="h-3 w-3" /> : <span className="h-1.5 w-1.5 rounded-full bg-ink" />}</span>
              <span className={`truncate ${i < 4 ? "hidden text-slate-500 @xl:inline" : "text-ink"}`}>{s}</span>
              {i < steps.length - 1 && <ChevronRight className="hidden h-3 w-3 shrink-0 text-slate-300 @lg:block" />}
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-paper p-3">
          <FileText className="h-8 w-8 shrink-0 text-cobalt" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-ink">Ishaan Verma · Roll 17</p>
            <p className="text-xs text-slate-500">7 pages · matched by name and roll number</p>
          </div>
          <span className="h-card text-xl text-ink">9.5<span className="text-sm text-slate-400">/11</span></span>
        </div>
        <ul className="mt-3 space-y-2">
          {qs.map((q) => (
            <li key={q.q} className="flex items-start gap-3 rounded-xl border border-line p-2.5 text-xs">
              <span className={`bubble shrink-0 ${q.ok ? "bubble-ok" : "bubble-bad"}`}>{q.ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}</span>
              <span className="min-w-0 flex-1">
                <span className="font-bold text-ink">{q.q}</span> <span className="text-slate-600">{q.fb}</span>
              </span>
              <span className="shrink-0 font-mono font-bold text-ink">{q.m}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 flex items-center gap-1.5 text-[0.7rem] text-slate-500"><Lock className="h-3 w-3" /> Students see nothing until a teacher releases.</p>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- student report */
export function ReportVisual() {
  const segs = [
    { v: 54, c: "#0f9a5c", l: "Correct" },
    { v: 14, c: "#e5383b", l: "Incorrect" },
    { v: 7, c: "#c4cad8", l: "Skipped" },
  ];
  const total = segs.reduce((a, s) => a + s.v, 0);
  let acc = 0;
  return (
    <Frame title="Report · Full Mock 12 · Kabir Singh" right={<Pill tone="ok">Released</Pill>}>
      <div className="grid gap-4 p-4 @lg:grid-cols-[8.5rem_1fr]">
        <div className="relative mx-auto h-32 w-32">
          <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90" aria-hidden>
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#eef0f7" strokeWidth="5" />
            {segs.map((s) => {
              const len = (s.v / total) * 100;
              const el = <circle key={s.l} cx="21" cy="21" r="15.9" fill="none" stroke={s.c} strokeWidth="5" strokeDasharray={`${len} ${100 - len}`} strokeDashoffset={-acc} pathLength={100} />;
              acc += len;
              return el;
            })}
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="h-card text-2xl leading-none text-ink">212</p>
              <p className="text-[0.62rem] text-slate-500">of 300</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2">
            {[["Rank", "14", "of 1,208"], ["Percentile", "98.9", ""], ["Accuracy", "79%", ""]].map(([l, v, s]) => (
              <div key={l} className="rounded-xl bg-paper p-2.5">
                <p className="text-[0.62rem] font-semibold text-slate-500">{l}</p>
                <p className="h-card text-lg text-ink">{v}</p>
                {s && <p className="text-[0.6rem] text-slate-400">{s}</p>}
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-2 text-[0.7rem]">
            {[["Physics", 78, 61], ["Chemistry", 64, 58], ["Maths", 70, 52]].map(([s, me, avg]) => (
              <div key={s as string}>
                <div className="flex justify-between text-slate-500"><span className="font-semibold text-ink">{s}</span><span>you {me} · class avg {avg}</span></div>
                <div className="relative mt-1 h-2 rounded-full bg-paper-2">
                  <span className="absolute inset-y-0 left-0 rounded-full bg-cobalt" style={{ width: `${me}%` }} />
                  <span className="absolute -top-0.5 h-3 w-0.5 rounded bg-gold-600" style={{ left: `${avg}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 border-t border-line bg-paper/60 px-4 py-2.5 text-[0.68rem] text-slate-500">
        {segs.map((s) => <span key={s.l} className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: s.c }} />{s.l} {s.v}</span>)}
        <span className="inline-flex items-center gap-1"><span className="h-2.5 w-0.5 rounded bg-gold-600" />Class average</span>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- question insights */
export function InsightsVisual() {
  const qs = [
    [82, 12, 6], [41, 47, 12], [76, 18, 6], [23, 58, 19], [67, 21, 12], [88, 9, 3], [35, 40, 25], [71, 22, 7],
  ];
  return (
    <Frame title="Question insights · Chemistry Unit 4" right={<Pill tone="cobalt">218 attempts</Pill>}>
      <div className="p-4">
        <div className="flex h-40 items-end gap-2">
          {qs.map(([c, w, s], i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end">
              <div className={`flex flex-col overflow-hidden rounded-md ${i === 3 ? "ring-2 ring-gold ring-offset-2" : ""}`} style={{ height: "100%" }}>
                <span className="bg-paper-3" style={{ height: `${s}%` }} />
                <span className="bg-bad/85" style={{ height: `${w}%` }} />
                <span className="bg-ok" style={{ height: `${c}%` }} />
              </div>
              <span className="mt-1 text-center text-[0.6rem] font-bold text-slate-500">Q{i + 1}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-gold/50 bg-gold-50 p-3 text-xs text-ink">
          <p className="font-bold">Q4 needs a re-teach</p>
          <p className="mt-0.5 text-slate-600">58% chose option B: most confused molarity with molality.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 border-t border-line bg-paper/60 px-4 py-2.5 text-[0.68rem] text-slate-500">
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-ok" />Correct</span>
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-bad" />Incorrect</span>
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-paper-3" />Skipped</span>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- printed paper sets */
export function PaperVisual() {
  const Sheet = ({ set, rot, z, offset }: { set: string; rot: string; z: string; offset: string }) => (
    <div className={`absolute w-[64%] rounded-lg border border-line bg-white p-4 shadow-sheet ${rot} ${z} ${offset}`}>
      <div className="flex items-start justify-between border-b border-ink pb-2">
        <div>
          <p className="h-card text-[0.8rem] text-ink">Half-yearly Examination</p>
          <p className="text-[0.58rem] text-slate-500">Class IX · Mathematics · 80 marks · 3 h</p>
        </div>
        <span className="rounded bg-ink px-1.5 py-0.5 text-[0.6rem] font-bold text-white">SET {set}</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-[0.55rem] text-slate-500">
        <span className="border-b border-dashed border-slate-300 pb-1">Roll no.</span>
        <span className="border-b border-dashed border-slate-300 pb-1">Invigilator&apos;s sign</span>
      </div>
      <div className="mt-3 space-y-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex gap-1.5">
            <span className="text-[0.55rem] font-bold text-ink">{n}.</span>
            <span className="flex-1 space-y-1">
              <span className="block h-1 w-full rounded bg-paper-3" />
              <span className="block h-1 rounded bg-paper-3" style={{ width: `${55 + ((n * 17) % 35)}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-line bg-paper-2">
      <div className="omr absolute inset-0 opacity-70" />
      <Sheet set="B" rot="rotate-[5deg]" z="z-0" offset="right-[6%] top-[16%]" />
      <Sheet set="A" rot="-rotate-[4deg]" z="z-10" offset="left-[6%] top-[10%]" />
      <div className="absolute bottom-4 right-4 z-20 rounded-xl bg-ink px-3 py-2 text-[0.7rem] text-white shadow-sheet">
        <p className="font-bold">Export ready</p>
        <p className="text-slate-300">2 sets · shuffled · answer key</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- registration */
export function RegisterVisual() {
  return (
    <Frame title="learn.yourinstitute.com/register?code=STAR-2026" right={<Pill tone="ok">Open · 1,946 registered</Pill>}>
      <div className="grid gap-4 p-4 @lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="h-card text-lg leading-tight text-ink">Star Scholarship Test 2026</p>
          <p className="mt-1 text-xs text-slate-500">Sunday 9 Nov · 10:00–13:00 · Classes 8–12</p>
          <div className="mt-3 space-y-2 text-xs">
            {[["Full name", "Meera Joshi"], ["Class", "Class 10"], ["School", "St. Xavier's, Pune"], ["Target exam", "JEE"]].map(([l, v]) => (
              <div key={l}>
                <p className="font-semibold text-slate-500">{l}</p>
                <p className="mt-0.5 rounded-lg border border-line px-2.5 py-1.5 text-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 rounded-xl bg-paper p-3">
          <div>
            <p className="text-xs font-bold text-ink">Verify your phone</p>
            <p className="text-[0.68rem] text-slate-500">OTP sent to +91 98•••• 4410</p>
            <div className="mt-2 flex gap-1.5">
              {["4", "8", "1", "9", "", ""].map((d, i) => (
                <span key={i} className={`grid h-8 w-7 place-items-center rounded-lg border text-sm font-bold ${d ? "border-ink bg-white text-ink" : "border-line bg-white"}`}>{d}</span>
              ))}
            </div>
          </div>
          <ul className="space-y-1.5 text-[0.68rem] text-slate-600">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-ok" /> Registration closes 8 Nov</li>
            <li className="flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5 text-ok" /> Reminder on WhatsApp</li>
            <li className="flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5 text-gold-600" /> Rank list after the test</li>
          </ul>
          <span className="rounded-lg bg-cobalt py-2 text-center text-xs font-bold text-white">Register</span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- coding */
export function CodingVisual() {
  const code = [
    ["def", " two_sum(nums, target):"],
    ["", "    seen = {}"],
    ["for", " i, n in enumerate(nums):"],
    ["", "        if target - n in seen:"],
    ["return", " [seen[target - n], i]"],
    ["", "        seen[n] = i"],
  ];
  const cases = [1, 1, 1, 1, 1, 1, 1, 0, 1, 0];
  return (
    <Frame dark title="Coding · Q2 · Two Sum · Python" right={<span className="inline-flex items-center gap-1 rounded-md bg-ok px-2 py-1 text-[0.68rem] font-bold text-white"><Play className="h-3 w-3" /> Run</span>}>
      <div className="grid @lg:grid-cols-[1fr_11rem]">
        <pre className="code overflow-x-auto p-4 text-[0.74rem] text-slate-200">
          {code.map(([kw, rest], i) => (
            <div key={i} className="flex">
              <span className="w-6 shrink-0 select-none text-slate-500">{i + 1}</span>
              <span>
                {i === 4 ? "        " : i === 2 ? "    " : ""}
                {kw && <span className="text-[#c792ea]">{kw}</span>}
                <span>{rest}</span>
              </span>
            </div>
          ))}
          <div className="flex"><span className="w-6 shrink-0 select-none text-slate-500">7</span><span className="inline-block h-4 w-1.5 animate-blink bg-gold" /></div>
        </pre>
        <div className="border-t border-ink-3 p-4 @lg:border-l @lg:border-t-0">
          <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Hidden tests</p>
          <div className="mt-2 grid grid-cols-5 gap-1.5">
            {cases.map((c, i) => (
              <span key={i} className={`grid aspect-square place-items-center rounded-md ${c ? "bg-ok/90" : "bg-bad/90"}`}>{c ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}</span>
            ))}
          </div>
          <p className="h-card mt-3 text-2xl text-white">8<span className="text-sm text-slate-400"> / 10 marks</span></p>
          <p className="mt-1 text-[0.68rem] text-slate-400">8 of 10 test cases passed</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {["Python", "JS", "C", "C++", "Java", "Go"].map((l) => <span key={l} className="rounded bg-ink-3 px-1.5 py-0.5 text-[0.6rem] text-slate-300">{l}</span>)}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- question bank */
export function BankVisual() {
  const rows = [
    ["Projectile motion: max height", "MCQ", "Easy", "AI"],
    ["Mole concept: molarity vs molality", "MCQ multi", "Medium", "Upload"],
    ["Integrate x·eˣ dx", "Numeric", "Medium", "Manual"],
    ["Explain photosynthesis with a diagram", "Long answer", "Hard", "Knowledge base"],
    ["Reverse a linked list", "Coding", "Hard", "AI"],
  ];
  const tone: Record<string, string> = { Easy: "ok", Medium: "gold", Hard: "bad" };
  return (
    <Frame title="Question bank · 12,480 questions">
      <div className="flex flex-wrap items-center gap-2 border-b border-line p-3 text-xs">
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-line px-2.5 py-1.5 text-slate-400"><Search className="h-3.5 w-3.5" /> Search questions…</span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-ink px-2.5 py-1.5 font-semibold text-white"><Filter className="h-3 w-3" /> Physics · Class 11</span>
        <span className="rounded-lg border border-line px-2.5 py-1.5 font-semibold text-slate-600">Medium</span>
      </div>
      <ul className="divide-y divide-line">
        {rows.map(([q, t, d, s]) => (
          <li key={q} className="flex items-center gap-3 px-3 py-2.5 text-xs">
            <span className="h-3.5 w-3.5 shrink-0 rounded border border-slate-300" />
            <span className="min-w-0 flex-1 truncate font-medium text-ink">{q}</span>
            <span className="hidden @lg:inline"><Pill tone="cobalt">{t}</Pill></span>
            <Pill tone={tone[d] as "ok" | "gold" | "bad"}>{d}</Pill>
            <span className="hidden w-20 shrink-0 text-right text-[0.66rem] text-slate-400 md:inline">{s}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-line bg-paper/60 px-3 py-2.5 text-xs">
        <span className="text-slate-500">2 selected</span>
        <span className="rounded-lg bg-cobalt px-2.5 py-1.5 font-bold text-white">Add to test</span>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- AI generator */
export function GeneratorVisual() {
  return (
    <Frame title="AI paper generator" right={<Pill tone="violet"><Sparkles className="h-3 w-3" /> Generating</Pill>}>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 font-semibold text-ink"><FileText className="h-3.5 w-3.5 text-bad" /> NCERT_Physics_Ch3.pdf</span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 font-semibold text-ink"><Upload className="h-3.5 w-3.5 text-cobalt" /> class-notes.pptx</span>
        </div>
        <table className="mt-3 w-full text-left text-xs">
          <thead className="text-[0.66rem] text-slate-500">
            <tr><th className="py-1 font-semibold">Chapter</th><th className="py-1 font-semibold">Marks</th><th className="py-1 font-semibold">Mix</th></tr>
          </thead>
          <tbody className="text-ink">
            {[["Motion in a plane", "12", "MCQ · numeric"], ["Laws of motion", "16", "MCQ · long"], ["Work & energy", "12", "numeric · long"]].map(([c, m, x]) => (
              <tr key={c} className="border-t border-line"><td className="py-1.5 font-medium">{c}</td><td className="py-1.5 font-mono">{m}</td><td className="py-1.5 text-slate-500">{x}</td></tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 space-y-2">
          {[["A projectile is fired at 30° with speed 40 m/s. Find the time of flight.", "p. 71"], ["State Newton's second law and derive F = ma.", "p. 94"]].map(([q, p], i) => (
            <div key={i} className="flex items-start gap-2 rounded-xl bg-paper p-2.5 text-xs">
              <span className="font-bold text-cobalt-700">Q{i + 1}</span>
              <span className="min-w-0 flex-1 text-ink">{q}</span>
              <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[0.6rem] font-bold text-slate-500 ring-1 ring-line">{p}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 rounded-xl border border-dashed border-cobalt-200 p-2.5 text-xs text-cobalt-700">
            <RefreshCw className="h-3.5 w-3.5 animate-spin [animation-duration:2.5s]" /> Writing Q3 of 24…
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- institute dashboard */
export function DashboardVisual() {
  const heat = Array.from({ length: 7 * 12 }, (_, i) => {
    const h = i % 12;
    const d = Math.floor(i / 12);
    const v = (Math.sin(h / 2 + d) + 1) / 2 * (h > 2 && h < 10 ? 1 : 0.35);
    return v;
  });
  return (
    <Frame title="Assessment dashboard · This month">
      <div className="grid grid-cols-2 gap-2 p-4 @lg:grid-cols-4">
        {[["Live now", "3", "text-ok"], ["Attempts", "8,214", "text-ink"], ["Avg score", "61%", "text-ink"], ["To check", "146", "text-gold-700"]].map(([l, v, c]) => (
          <div key={l} className="rounded-xl border border-line p-2.5">
            <p className="text-[0.62rem] font-semibold text-slate-500">{l}</p>
            <p className={`h-card text-xl ${c}`}>{v}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 px-4 pb-4 @lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">Submissions heatmap</p>
          <div className="mt-2 grid grid-cols-12 gap-[3px]">
            {heat.map((v, i) => <span key={i} className="aspect-square rounded-[3px] bg-cobalt" style={{ opacity: 0.08 + v * 0.85 }} />)}
          </div>
        </div>
        <div>
          <p className="text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">Follow up</p>
          <ul className="mt-2 space-y-1.5 text-xs">
            {[["Ananya R.", "3 tests missed"], ["Vivek P.", "Score down 22%"], ["Zoya K.", "Not started"]].map(([n, r]) => (
              <li key={n} className="flex items-center gap-2 rounded-lg bg-paper px-2 py-1.5">
                <span className="min-w-0 flex-1 truncate"><span className="font-semibold text-ink">{n}</span> <span className="text-slate-500">{r}</span></span>
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-ok" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- creation wizard */
export function WizardVisual() {
  const steps = ["Basic info", "Sections & questions", "Participants", "Access"];
  const Toggle = ({ on }: { on: boolean }) => (
    <span className={`relative inline-block h-4 w-7 shrink-0 rounded-full ${on ? "bg-cobalt" : "bg-paper-3"}`}><span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow ${on ? "left-3.5" : "left-0.5"}`} /></span>
  );
  return (
    <Frame title="Create assessment · Half-yearly Physics">
      <ol className="flex border-b border-line text-[0.62rem] font-bold @lg:text-[0.7rem]">
        {steps.map((s, i) => (
          <li key={s} className={`flex flex-1 items-center gap-1.5 px-2 py-2.5 @lg:px-3 ${i === 1 ? "border-b-2 border-cobalt text-ink" : "text-slate-400"}`}>
            <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full text-[0.55rem] ${i === 0 ? "bg-ok text-white" : i === 1 ? "bg-cobalt text-white" : "bg-paper-2"}`}>{i === 0 ? <Check className="h-2.5 w-2.5" /> : i + 1}</span>
            <span className="truncate">{s}</span>
          </li>
        ))}
      </ol>
      <div className="space-y-2.5 p-4 text-xs">
        {[
          ["Section A · Objective", "40 min · 20 Q · +2 / −0.5", true],
          ["Section B · Long answer", "80 min · 6 Q · AI checking on", false],
        ].map(([t, s, open]) => (
          <div key={t as string} className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-ink">{t}</span>
              <span className="text-slate-500">{s}</span>
            </div>
            {open && (
              <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-2.5 text-slate-600">
                <span className="flex items-center justify-between gap-2">Negative marking <Toggle on /></span>
                <span className="flex items-center justify-between gap-2">Random order <Toggle on /></span>
                <span className="flex items-center justify-between gap-2">Section timer <Toggle on /></span>
                <span className="flex items-center justify-between gap-2">Cutoff marks <Toggle on={false} /></span>
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-paper px-3 py-2">
          <span className="text-slate-600">Duration per <b className="text-ink">section</b> · auto-submit at time-out</span>
          <Clock className="h-3.5 w-3.5 text-cobalt" />
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- question types */
export function TypesVisual() {
  const types = [
    { n: "MCQ · single", d: <span className="flex gap-1">{"ABCD".split("").map((c, i) => <span key={c} className={`bubble !h-5 !w-5 !text-[0.6rem] ${i === 2 ? "bubble-on" : ""}`}>{c}</span>)}</span> },
    { n: "MCQ · multiple", d: <span className="flex gap-1">{"ABCD".split("").map((c, i) => <span key={c} className={`grid h-5 w-5 place-items-center rounded border-[1.5px] text-[0.6rem] font-bold ${i === 0 || i === 3 ? "border-ink bg-ink text-white" : "border-ink-4 text-ink-4"}`}>{c}</span>)}</span> },
    { n: "True / false", d: <span className="flex gap-1 text-[0.62rem] font-bold"><span className="rounded bg-ink px-1.5 py-0.5 text-white">True</span><span className="rounded border border-line px-1.5 py-0.5 text-slate-500">False</span></span> },
    { n: "Numeric", d: <span className="rounded border border-ink px-2 py-0.5 font-mono text-[0.7rem] text-ink">12.5</span> },
    { n: "One word", d: <span className="rounded border border-ink px-2 py-0.5 text-[0.7rem] text-ink">mitochondria</span> },
    { n: "Long answer", d: <span className="block w-full space-y-1"><span className="block h-1 rounded bg-paper-3" /><span className="block h-1 w-4/5 rounded bg-paper-3" /><span className="block h-1 w-3/5 rounded bg-paper-3" /></span> },
    { n: "Coding", d: <span className="inline-flex items-center gap-1 rounded bg-ink px-1.5 py-0.5 font-mono text-[0.62rem] text-gold"><Code2 className="h-3 w-3" />def f(x):</span> },
    { n: "Passage-based", d: <span className="inline-flex items-center gap-1 text-[0.62rem] font-semibold text-slate-500"><FileText className="h-3 w-3" /> Passage → 4 Q</span> },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {types.map((t, i) => (
        <div key={t.n} className={`flex min-h-[5.2rem] flex-col justify-between gap-2 rounded-2xl border border-line bg-white p-3 shadow-sm ${i % 3 === 0 ? "animate-float" : ""}`} style={{ animationDelay: `${i * 0.4}s` }}>
          <span className="text-xs font-bold text-ink">{t.n}</span>
          <span className="flex min-h-5 items-center">{t.d}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- autosave / offline */
export function AutosaveVisual() {
  return (
    <Frame title="Live test · Biology · Q 37 of 60">
      <div className="space-y-3 p-4">
        <div className="flex items-start gap-3 rounded-xl border border-gold/60 bg-gold-50 p-3 text-xs">
          <CloudOff className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />
          <div>
            <p className="font-bold text-ink">You&apos;re offline. Keep going.</p>
            <p className="mt-0.5 text-slate-600">Your answers are saved on this device and will be sent when you&apos;re back online.</p>
          </div>
        </div>
        <ul className="space-y-1.5 text-xs">
          {[["Q 34", "saved · synced"], ["Q 35", "saved · synced"], ["Q 36", "saved on device"], ["Q 37", "saved on device"]].map(([q, s], i) => (
            <li key={q} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
              <span className="font-semibold text-ink">{q}</span>
              <span className={`inline-flex items-center gap-1 ${i < 2 ? "text-ok" : "text-gold-700"}`}>{i < 2 ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}{s}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 rounded-xl bg-ok-50 px-3 py-2 text-xs font-semibold text-ok">
          <RefreshCw className="h-3.5 w-3.5" /> Back online · 2 answers synced
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- automations */
export function AutomationVisual() {
  return (
    <div className="@container"><div className="grid gap-3 @lg:grid-cols-[1fr_auto_1fr] @lg:items-center">
      <div className="rounded-2xl border border-line bg-white p-4 shadow-sheet">
        <p className="text-[0.66rem] font-bold uppercase tracking-wider text-cobalt-700">When</p>
        <p className="h-card mt-1 text-base text-ink">Result released</p>
        <p className="mt-2 text-[0.68rem] text-slate-500">Also: registered · starting soon · started · ended · reattempt granted</p>
      </div>
      <ChevronRight className="mx-auto hidden h-6 w-6 text-slate-300 @lg:block" />
      <div className="rounded-2xl bg-[#e6ddd4] p-3 shadow-sheet">
        <div className="ml-auto max-w-[15rem] rounded-xl rounded-tr-sm bg-[#d9fdd3] p-3 text-xs text-ink shadow-sm">
          <p className="font-bold">Star Scholarship Test 🎉</p>
          <p className="mt-1">Hi Meera, your result is out: <b>142/180</b>, rank <b>37</b>, percentile <b>98.1</b>. View your full report:</p>
          <p className="mt-1 text-cobalt-700 underline">learn.yourinstitute.com/…</p>
          <p className="mt-1 text-right text-[0.6rem] text-slate-500">10:42 ✓✓</p>
        </div>
      </div>
    </div></div>
  );
}

/* ---------------------------------------------------------------- leaderboard */
export function LeaderboardVisual() {
  const rows = [
    ["1", "Kabir Singh", "286", "99.9"],
    ["2", "Ananya Rao", "281", "99.8"],
    ["3", "Mohd. Faiz", "279", "99.8"],
    ["4", "Ishita Das", "274", "99.7"],
    ["5", "Rohan Gupta", "270", "99.6"],
  ];
  const medal = ["bg-gold text-ink", "bg-slate-300 text-ink", "bg-[#d99a5b] text-white"];
  return (
    <Frame title="Leaderboard · All-India Mock 3 · 1,208 students" right={<span className="text-[0.68rem] font-bold text-cobalt-700">CSV · PDF</span>}>
      <ul className="divide-y divide-line">
        {rows.map(([r, n, m, p], i) => (
          <li key={r} className="flex items-center gap-3 px-4 py-2.5 text-xs">
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-bold ${medal[i] ?? "bg-paper-2 text-slate-600"}`}>{r}</span>
            <span className="min-w-0 flex-1 truncate font-semibold text-ink">{n}</span>
            <span className="font-mono text-ink">{m}<span className="text-slate-400">/300</span></span>
            <span className="w-14 text-right font-mono text-slate-500">{p}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-line bg-paper/60 px-4 py-2.5 text-xs">
        <span className="inline-flex items-center gap-1 text-slate-500"><MousePointer2 className="h-3 w-3" /> Percentile shown per student</span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-ink px-2.5 py-1.5 font-bold text-white"><FileText className="h-3 w-3" /> Report ZIP</span>
      </div>
    </Frame>
  );
}


/* ---------------------------------------------------------------- camera check-in */
export function CheckinVisual() {
  return (
    <Frame title="Before you start · Camera check-in" right={<Pill tone="cobalt">Camera required</Pill>}>
      <div className="grid gap-4 p-4 @lg:grid-cols-[1fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-ink-3 to-ink">
          <svg viewBox="0 0 160 120" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="80" cy="50" r="24" fill="#4b5785" />
            <path d="M32 120c4-28 24-42 48-42s44 14 48 42" fill="#4b5785" />
            <ellipse cx="80" cy="52" rx="34" ry="42" fill="none" stroke="#0f9a5c" strokeWidth="2.5" />
          </svg>
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-md bg-ok px-1.5 py-0.5 text-[0.6rem] font-bold text-white"><Check className="h-3 w-3" /> Face in frame</span>
        </div>
        <div className="flex flex-col justify-between gap-3 text-xs">
          <ul className="space-y-2">
            {["Camera allowed", "Selfie captured", "One face detected"].map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-lg bg-paper px-2.5 py-2 font-semibold text-ink"><CheckCircle2 className="h-4 w-4 text-ok" />{t}</li>
            ))}
          </ul>
          <p className="leading-snug text-slate-500">Snapshots every 60 s and at each flag. Nothing is streamed.</p>
          <span className="rounded-lg bg-cobalt py-2 text-center font-bold text-white">Start exam</span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- bulk upload + matching */
export function UploadVisual() {
  const rows = [
    { f: "scan_0412.pdf", n: "Aarav Sharma", r: "Roll 4", st: "ok" },
    { f: "scan_0413.pdf", n: "Diya Menon", r: "Roll 11", st: "ok" },
    { f: "scan_0414.pdf", n: "Name unclear", r: "Roll 1?", st: "ask" },
    { f: "scan_0415.pdf", n: "Kabir Singh", r: "Roll 17", st: "ok" },
  ];
  return (
    <Frame title="Bulk upload · Class 9-A · Maths half-yearly" right={<Pill tone="ok">37 of 38 matched</Pill>}>
      <div className="flex items-center gap-3 border-b border-dashed border-cobalt-200 bg-cobalt-50/50 px-4 py-3 text-xs">
        <Upload className="h-5 w-5 shrink-0 text-cobalt" />
        <span className="min-w-0 flex-1 text-slate-600"><b className="text-ink">38 PDFs</b> uploaded · up to 200 at a time</span>
      </div>
      <ul className="divide-y divide-line">
        {rows.map((r) => (
          <li key={r.f} className="flex items-center gap-3 px-4 py-2.5 text-xs">
            <FileText className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="hidden w-24 shrink-0 font-mono text-slate-500 @md:inline">{r.f}</span>
            <ChevronRight className="hidden h-3.5 w-3.5 shrink-0 text-slate-300 @md:block" />
            <span className="min-w-0 flex-1 truncate"><span className="font-semibold text-ink">{r.n}</span> <span className="text-slate-400">{r.r}</span></span>
            {r.st === "ok" ? <Pill tone="ok"><Check className="h-3 w-3" /> Matched</Pill> : <Pill tone="gold">Teacher picks</Pill>}
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-1.5 border-t border-line bg-paper/60 px-4 py-2.5 text-[0.7rem] text-slate-500"><Search className="h-3 w-3" /> Read from the name and roll number on each copy. Never guessed.</p>
    </Frame>
  );
}

/* ---------------------------------------------------------------- exports */
export function ExportsVisual() {
  const files = [
    { n: "reports_full-mock-12.zip", d: "1,208 student PDFs + index.csv", t: "ZIP", c: "bg-violet-50 text-violet" },
    { n: "leaderboard.pdf", d: "Rank, marks, time, percentile", t: "PDF", c: "bg-bad-50 text-bad-700" },
    { n: "participants.csv", d: "With your registration fields", t: "CSV", c: "bg-ok-50 text-ok" },
    { n: "question-insights.pdf", d: "Correct, incorrect, skipped per question", t: "PDF", c: "bg-bad-50 text-bad-700" },
  ];
  return (
    <Frame title="Exports · Full Mock 12">
      <ul className="space-y-2 p-4">
        {files.map((f) => (
          <li key={f.n} className="flex items-center gap-3 rounded-xl border border-line p-3 text-xs">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[0.62rem] font-bold ${f.c}`}>{f.t}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-semibold text-ink">{f.n}</span>
              <span className="block truncate text-slate-500">{f.d}</span>
            </span>
            <span className="shrink-0 rounded-lg border border-line px-2 py-1 font-semibold text-slate-600">Download</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ---------------------------------------------------------------- AI student report */
export function AiReportVisual() {
  const bloom = [["Remember", 92], ["Understand", 78], ["Apply", 54], ["Analyse", 38]] as const;
  return (
    <Frame title="AI report · Diya Menon · Chemistry" right={<Pill tone="violet"><Sparkles className="h-3 w-3" /> AI insights</Pill>}>
      <div className="grid gap-4 p-4 @lg:grid-cols-2">
        <div className="space-y-2 text-xs">
          <div className="rounded-xl bg-ok-50 p-3"><p className="font-bold text-ok">Strength</p><p className="mt-0.5 text-slate-700">Balancing equations: 9 of 9 right, fastest in class.</p></div>
          <div className="rounded-xl bg-bad-50 p-3"><p className="font-bold text-bad-700">Misconception</p><p className="mt-0.5 text-slate-700">Treats molality like molarity: uses volume of solution, not mass of solvent.</p></div>
          <div className="rounded-xl bg-gold-50 p-3"><p className="font-bold text-gold-700">Next step</p><p className="mt-0.5 text-slate-700">12 flashcards + 1 practice set on concentration terms.</p></div>
        </div>
        <div>
          <p className="text-[0.66rem] font-bold uppercase tracking-wider text-slate-500">Bloom&apos;s levels</p>
          <div className="mt-2 space-y-2.5 text-[0.7rem]">
            {bloom.map(([l, v]) => (
              <div key={l}>
                <div className="flex justify-between"><span className="font-semibold text-ink">{l}</span><span className="font-mono text-slate-500">{v}%</span></div>
                <div className="mt-1 h-2 rounded-full bg-paper-2"><div className="h-full rounded-full bg-violet" style={{ width: `${v}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-[0.68rem] text-slate-500"><Clock className="h-3 w-3" /> Spent 41% of time on 6 hardest questions</p>
        </div>
      </div>
    </Frame>
  );
}

export const VISUALS: Record<VisualKey, () => React.ReactElement> = {
  console: ConsoleVisual,
  question: QuestionVisual,
  proctor: ProctorVisual,
  marking: MarkingVisual,
  aiCheck: AiCheckVisual,
  report: ReportVisual,
  insights: InsightsVisual,
  paper: PaperVisual,
  register: RegisterVisual,
  coding: CodingVisual,
  bank: BankVisual,
  generator: GeneratorVisual,
  dashboard: DashboardVisual,
  wizard: WizardVisual,
  types: TypesVisual,
  autosave: AutosaveVisual,
  automation: AutomationVisual,
  leaderboard: LeaderboardVisual,
  checkin: CheckinVisual,
  upload: UploadVisual,
  exports: ExportsVisual,
  aiReport: AiReportVisual,
};

export function Visual({ k }: { k: VisualKey }) {
  const V = VISUALS[k];
  return <V />;
}
