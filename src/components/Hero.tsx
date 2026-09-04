import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-14 w-14 sm:h-20 sm:w-20 rounded-full object-contain border border-[var(--color-line)] flex-shrink-0 bg-[var(--color-paper-dim)]"
        />
        <p className="font-mono text-xs sm:text-sm text-[var(--color-signal)]">
          01 — building for the web since 2024
        </p>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-semibold mt-6 sm:mt-8 text-[var(--color-ink)]">
        Interfaces that hold up in production, not just in Figma.
      </h1>
      <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-2xl">
        {profile.summary}
      </p>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-2.5 sm:py-3 font-mono text-sm rounded-sm hover:bg-[var(--color-signal)] transition-colors"
        >
          view projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center sm:justify-start gap-2 border border-[var(--color-line)] px-6 py-2.5 sm:py-3 font-mono text-sm rounded-sm hover:border-[var(--color-ink)] transition-colors"
        >
          get in touch
        </a>
      </div>

      <dl className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-[var(--color-line)] pt-8">
        <div>
          <dt className="font-mono text-xs text-[var(--color-ink-soft)]">experience</dt>
          <dd className="font-display text-2xl mt-1">1+ yrs</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-[var(--color-ink-soft)]">shipped</dt>
          <dd className="font-display text-2xl mt-1">5 platforms</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-[var(--color-ink-soft)]">based in</dt>
          <dd className="font-display text-2xl mt-1">Lahore, PK</dd>
        </div>
      </dl>
    </section>
  );
}
