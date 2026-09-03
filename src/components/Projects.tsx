import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-sm text-[var(--color-signal)]">04 — projects</p>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold mt-4">
        Things I've shipped
      </h2>

      <div className="mt-12 flex flex-col">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid lg:grid-cols-[80px_1fr_auto] gap-4 lg:gap-8 items-start py-8 border-t border-[var(--color-line)] last:border-b hover:bg-[var(--color-paper-dim)] transition-colors -mx-4 px-4"
          >
            <span className="font-mono text-sm text-[var(--color-ink-soft)]">
              {project.index}
            </span>

            <div>
              {project.image && (
                <div className="mb-5 rounded-sm overflow-hidden border border-[var(--color-line)]">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-auto object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                <span className="font-mono text-xs text-[var(--color-ink-soft)]">
                  {project.company}
                </span>
              </div>
              <p className="font-mono text-sm text-[var(--color-signal)] mt-1">
                {project.tagline}
              </p>
              <p className="text-[var(--color-ink-soft)] leading-relaxed mt-4 max-w-2xl">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-[var(--color-ink-soft)] pl-5 relative">
                    <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-[var(--color-flag)]" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs border border-[var(--color-line)] px-2.5 py-1 rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex lg:justify-end items-start">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[var(--color-line)] group-hover:border-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
