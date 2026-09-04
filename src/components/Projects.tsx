import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  const location = useLocation();
  const state = location.state as { scrollToProjectId?: string } | null;

  useEffect(() => {
    // If we have a scrollToProjectId in state, scroll to that project
    if (state?.scrollToProjectId) {
      const element = document.getElementById(`project-${state.scrollToProjectId}`);
      if (element) {
        // Small delay to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Highlight the project briefly
          element.classList.add("highlight-project");
          setTimeout(() => {
            element.classList.remove("highlight-project");
          }, 2000);
        }, 100);
      }
    }
  }, [state?.scrollToProjectId]);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-xs sm:text-sm text-[var(--color-signal)]">04 — projects</p>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
        Things I've shipped
      </h2>

      <div className="mt-12 flex flex-col">
        {projects.map((project) => (
          <div
            key={project.name}
            id={`project-${project.id}`}
            className="grid grid-cols-1 md:grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_auto] gap-4 lg:gap-8 items-start py-6 sm:py-8 border-t border-[var(--color-line)] last:border-b -mx-4 px-4 transition-colors duration-500"
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
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={`/projects/${project.id}`}
                  state={{ fromProjectId: project.id }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-line)] rounded-md text-sm font-medium hover:bg-[var(--color-paper-dim)] hover:border-[var(--color-ink)] transition-colors"
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-line)] rounded-md text-sm font-medium hover:bg-[var(--color-paper-dim)] hover:border-[var(--color-ink)] transition-colors"
                  >
                    Visit Live
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-end items-start">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[var(--color-line)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
