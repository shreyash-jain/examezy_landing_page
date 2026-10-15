import { notFound } from "next/navigation";
import { POSTS, findPost } from "@/content/posts";
import { BlogShell, Table, WhereExamezyFits, postMetadata } from "@/components/BlogShell";

export const dynamicParams = false;
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return postMetadata((await params).slug);
}

const Html = ({ s }: { s: string }) => <span dangerouslySetInnerHTML={{ __html: s }} />;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = findPost((await params).slug);
  if (!p) notFound();
  return (
    <BlogShell slug={p.slug} takeaways={p.takeaways} toc={p.sections.map((s) => ({ id: s.id, label: s.h }))} faqs={p.faqs}>
      {p.sections.map((s) => (
        <section key={s.id}>
          <h2 id={s.id}>{s.h}</h2>
          {s.paras?.map((t, i) => <p key={i}><Html s={t} /></p>)}
          {s.list && (s.ordered ? <ol>{s.list.map((l, i) => <li key={i}><Html s={l} /></li>)}</ol> : <ul>{s.list.map((l, i) => <li key={i}><Html s={l} /></li>)}</ul>)}
          {s.table && <Table head={s.table.head} rows={s.table.rows} caption={s.table.caption} />}
          {s.after?.map((t, i) => <p key={`a${i}`}><Html s={t} /></p>)}
        </section>
      ))}
      <WhereExamezyFits>
        {p.fits.map((t, i) => <p key={i}><Html s={t} /></p>)}
      </WhereExamezyFits>
    </BlogShell>
  );
}
