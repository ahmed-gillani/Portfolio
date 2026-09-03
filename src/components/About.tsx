import { skills } from "../data";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-xs sm:text-sm text-[var(--color-signal)]">02 — stack</p>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
        What I build with
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-12 gap-y-8 sm:gap-y-10 mt-10 sm:mt-12">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="font-mono text-xs text-[var(--color-ink-soft)] uppercase tracking-normal">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm border border-[var(--color-line)] px-3 py-1.5 rounded-sm text-[var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
