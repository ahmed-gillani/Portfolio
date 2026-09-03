import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="flex items-center gap-4">
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-16 w-16 rounded-full object-cover border border-[var(--color-line)]"
        />
        <p className="font-mono text-sm text-[var(--color-signal)]">
          01 — building for the web since 2024
        </p>
      </div>
      <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl lg:text-7xl font-semibold mt-6 max-w-3xl text-[var(--color-ink)]">
        Interfaces that hold up in production, not just in Figma.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-[var(--color-ink-soft)] leading-relaxed">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-paper)] px-6 py-3 font-mono text-sm rounded-sm hover:bg-[var(--color-signal)] transition-colors"
        >
          view projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[var(--color-line)] px-6 py-3 font-mono text-sm rounded-sm hover:border-[var(--color-ink)] transition-colors"
        >
          get in touch
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-[var(--color-line)] pt-8">
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
