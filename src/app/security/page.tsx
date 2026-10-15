import { CircleSlash, Eye, Lock, ShieldCheck, UserCheck, Users } from "lucide-react";
import { PageShell, pageMetadata } from "@/components/PageShell";

export const metadata = pageMetadata("/security/");

const BLOCKS = [
  { icon: ShieldCheck, t: "Fair conditions on every test", b: "Online tests open in full screen. Tab switches are warned and the third submits the test. Copy, paste, right-click and text selection are blocked in the exam." },
  { icon: Eye, t: "Camera checks without surveillance", b: "When camera proctoring is on, faces are counted on the candidate's own device. Only small still snapshots are uploaded, at the interval you choose and when a flag is raised. No video is streamed or recorded." },
  { icon: Users, t: "Access per assessment", b: "For each test you decide who can edit it, who gets live alerts, who can see submissions and reports, and who evaluates, by role or by named person." },
  { icon: Lock, t: "Results held until you release", b: "Results go out on submit, at the end of the window, or only when you release them. AI-drafted marks stay drafts until a teacher reviews them; learners see nothing before release." },
  { icon: UserCheck, t: "Verified candidates on open tests", b: "Candidates on public registration pages create an account and verify their phone by OTP before they can take the test." },
];

const NOT_CLAIMED = [
  "ISO 27001, SOC 2 or similar certifications",
  "A data-residency guarantee",
  "A lockdown browser, ID matching against a photo, or live human invigilation",
  "Detection of phones or other people outside the camera's view",
];

export default function Security() {
  return (
    <PageShell path="/security/" eyebrow="Security & privacy" h1="Fair exams, private candidates, results you control." lede="How Examezy protects exam integrity and candidate privacy, and, just as important, what we don't claim.">
      <section className="wrap py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((b) => (
            <div key={b.t} className="rounded-2xl border border-line bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><b.icon className="h-5 w-5" /></span>
              <p className="h-card mt-4 text-lg text-ink">{b.t}</p>
              <p className="mt-2 leading-relaxed text-slate-600">{b.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 rounded-3xl border border-dashed border-ink-4/40 bg-white p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
          <div>
            <h2 className="h-card text-2xl text-ink">What we don&apos;t claim</h2>
            <p className="mt-3 leading-relaxed text-slate-600">Security pages are full of badges. Here&apos;s what you won&apos;t see on ours, so you can plan around it. If your exam needs any of these, ask us before you buy.</p>
          </div>
          <ul className="grid gap-3">
            {NOT_CLAIMED.map((n) => <li key={n} className="flex gap-2.5 rounded-2xl bg-paper p-4 text-sm font-semibold text-ink"><CircleSlash className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />{n}</li>)}
          </ul>
        </div>
        <div className="prose-ex mt-12 max-w-3xl">
          <h2>Privacy for candidates</h2>
          <p>Tell candidates what you collect and why. With camera proctoring that means a check-in selfie and occasional snapshots; without it, nothing beyond their answers and the events of the attempt (such as tab switches). Examezy is operated by Vidyayatan Technologies LLP under the <a href="https://vacademy.io/privacy-policy">Vacademy privacy policy</a>.</p>
        </div>
      </section>
    </PageShell>
  );
}
