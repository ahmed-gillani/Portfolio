import { skills } from "../data";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-sm text-[var(--color-signal)]">02 — stack</p>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold mt-4">
        What I build with
      </h2>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mt-12">
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
