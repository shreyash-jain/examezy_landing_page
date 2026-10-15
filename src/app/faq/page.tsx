import { FAQ_GROUPS, ALL_FAQS } from "@/content/faqs";
import { PageShell, pageMetadata } from "@/components/PageShell";
import { FaqList } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata("/faq/");

export default function Faq() {
  return (
    <PageShell path="/faq/" eyebrow="FAQ" h1="Straight answers about running exams on Examezy." lede="Proctoring, internet drops, paper exams, AI checking, results, scale and pricing. If your question isn't here, ask us on WhatsApp.">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: ALL_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <section className="wrap py-16 md:py-20">
        <div className="space-y-14">
          {FAQ_GROUPS.map((g) => (
            <div key={g.title} className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr]">
              <h2 className="h-card text-2xl text-ink">{g.title}</h2>
              <FaqList faqs={g.faqs} withSchema={false} />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
