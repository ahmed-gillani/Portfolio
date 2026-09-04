import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectDetails = location.pathname.startsWith("/projects/");
  const projectState = location.state as { fromProjectId?: string } | null;

  useEffect(() => {
    if (isProjectDetails) return;

    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [isProjectDetails]);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur px-4 sm:px-5 py-3 sm:py-4 w-full">
        <Link to="/" className="font-mono text-xs sm:text-sm text-[var(--color-ink)]">
          ~/gillani
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-xs border border-[var(--color-line)] px-3 py-1.5 rounded hover:bg-[var(--color-paper-dim)] transition-colors"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "close" : "menu"}
        </button>
      </header>
      {open && (
        <div className="lg:hidden border-b border-[var(--color-line)] bg-[var(--color-paper)] px-4 sm:px-5 py-3 sm:py-4 flex flex-col gap-3 w-full">
          {isProjectDetails ? (
            <button
              onClick={() => {
                setOpen(false);
                navigate("/#projects", {
                  state: projectState?.fromProjectId ? { scrollToProjectId: projectState.fromProjectId } : undefined,
                  replace: false,
                });
              }}
              className="text-left font-mono text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
            >
              ./back-to-projects
            </button>
          ) : (
            links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
              >
                ./{l.label}
              </a>
            ))
          )}
        </div>
      )}

      <nav className="hidden lg:flex flex-col justify-between fixed left-0 top-0 h-screen w-64 border-r border-[var(--color-line)] px-8 py-10">
        <div>
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-14 w-14 rounded-full object-cover border border-[var(--color-line)] mb-4"
          />
          <Link to="/" className="block font-display text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-signal)] transition-colors">
            Syed Ahmed
            <br />
             Gillani
          </Link>
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-2">
            frontend-developer
          </p>

          <ul className="mt-14 flex flex-col gap-4">
            {isProjectDetails ? (
              <li>
                <button
                  onClick={() =>
                    navigate("/#projects", {
                      state: projectState?.fromProjectId ? { scrollToProjectId: projectState.fromProjectId } : undefined,
                      replace: false,
                    })
                  }
                  className="group flex items-center gap-3 font-mono text-sm text-left w-full"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-line)] group-hover:bg-[var(--color-ink-soft)]" />
                  <span className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] transition-colors">
                    ./back
                  </span>
                </button>
              </li>
            ) : (
              links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-3 font-mono text-sm"
                  >
                    <span
                      className={
                        active === l.label
                          ? "h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]"
                          : "h-1.5 w-1.5 rounded-full bg-[var(--color-line)] group-hover:bg-[var(--color-ink-soft)]"
                      }
                    />
                    <span
                      className={
                        active === l.label
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] transition-colors"
                      }
                    >
                      ./{l.label}
                    </span>
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </>
  );
}
