import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <div className="flex justify-center gap-2" aria-hidden>
          {"ABCD".split("").map((c, i) => <span key={c} className={`bubble !h-10 !w-10 !text-base ${i === 3 ? "bubble-bad" : ""}`}>{c}</span>)}
        </div>
        <h1 className="h-display mt-8 text-5xl text-ink">404: not in the answer key.</h1>
        <p className="mt-4 text-lg text-slate-600">That page doesn&apos;t exist. No negative marking for trying.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn btn-primary">Go home</Link>
          <Link href="/features/" className="btn btn-outline">All features</Link>
        </div>
      </div>
    </main>
  );
}
