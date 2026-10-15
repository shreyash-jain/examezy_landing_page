import { CalendarCheck, FileText, MessageCircle, Presentation } from "lucide-react";
import { pageMetadata } from "@/components/PageShell";
import { Breadcrumbs } from "@/components/ui";
import { DemoForm } from "@/components/DemoForm";
import { ClientMarquee } from "@/components/ClientLogos";
import { SALES_EMAIL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata("/demo/");

const WHAT = [
  { icon: Presentation, t: "A 30-minute walkthrough", b: "The exam screen, proctoring, evaluation and reports, shaped to your exams." },
  { icon: FileText, t: "Your paper, as a test", b: "Send a past paper; we'll set it up so you see your own questions running." },
  { icon: CalendarCheck, t: "A pilot with one batch", b: "Run a real exam with one group before you decide." },
];

export default function Demo() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="omr fade-mask pointer-events-none absolute inset-0" />
        <div className="wrap relative grid gap-12 pb-16 pt-10 md:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Breadcrumbs items={[{ label: "Book a demo" }]} />
            <p className="eyebrow mt-8">Book a demo</p>
            <h1 className="h-display mt-3 text-[2.4rem] text-ink md:text-[3.3rem]">See your next exam running on Examezy.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Tell us a little about your exams and we&apos;ll set up a demo around them. We usually reply within one working day.</p>
            <div className="mt-10 space-y-4">
              {WHAT.map((w) => (
                <div key={w.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cobalt-50 text-cobalt-700"><w.icon className="h-5 w-5" /></span>
                  <span><span className="block font-bold text-ink">{w.t}</span><span className="text-slate-600">{w.b}</span></span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-line bg-white p-5 text-sm text-slate-600">
              Prefer to talk now?{" "}
              <a href={whatsappHref()} className="inline-flex items-center gap-1 font-bold text-ok" data-track="whatsapp" target="_blank" rel="noopener"><MessageCircle className="h-4 w-4" /> WhatsApp {WHATSAPP_DISPLAY}</a>{" "}
              or email <a href={`mailto:${SALES_EMAIL}`} className="font-bold text-ink">{SALES_EMAIL}</a>.
            </div>
          </div>
          <DemoForm origin="demo-page" />
        </div>
      </section>
      <section className="border-t border-line bg-white py-12"><ClientMarquee /></section>
    </main>
  );
}
