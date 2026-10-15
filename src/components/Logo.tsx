/**
 * The Examezy mark: four answer bubbles on an ink tile, one filled in marigold with a tick.
 * The wordmark is set in Space Grotesk (the site's display font). Static files with the text outlined to paths
 * live in public/ (logo.svg, logo-white.svg, logo-mark.svg, favicon.svg).
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#0A1024" />
      <circle cx="13.5" cy="13.5" r="5.2" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="2.2" />
      <circle cx="26.5" cy="13.5" r="5.2" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="2.2" />
      <circle cx="13.5" cy="26.5" r="5.2" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="2.2" />
      <circle cx="26.5" cy="26.5" r="6.3" fill="#FFB31A" />
      <path d="M23.4 26.6l2.2 2.2 4.1-4.6" fill="none" stroke="#0A1024" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className = "h-8 w-auto", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-full w-auto" />
      <span
        className={`font-display text-[1.45em] font-bold leading-none tracking-[-0.04em] ${dark ? "text-white" : "text-ink"}`}
        style={{ fontSize: "inherit" }}
      >
        <span className="sr-only">Examezy</span>
        <span aria-hidden className="text-[1.5rem] md:text-[1.6rem]">
          exam<span className={dark ? "text-cobalt-300" : "text-cobalt"}>ezy</span>
        </span>
      </span>
    </span>
  );
}
