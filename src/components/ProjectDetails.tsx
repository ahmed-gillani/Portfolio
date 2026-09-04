import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects } from "../data";

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { fromProjectId?: string } | null;

  const project = projects.find((p) => p.id === projectId);

  // Scroll to top when project details page loads or when projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleBackClick = () => {
    // If we have the fromProjectId in state, scroll to that project on return
    if (state?.fromProjectId) {
      navigate("/#projects", {
        state: { scrollToProjectId: state.fromProjectId },
        replace: false,
      });
    } else {
      navigate("/#projects", { replace: false });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">Project not found</h1>
          <p className="text-[var(--color-ink-soft)] mb-4">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-[var(--color-signal)] hover:text-[var(--color-ink)] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      {/* Header with back button */}
      <div className="border-b border-[var(--color-line)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          <button
            onClick={() => navigate("/#projects")}
            className="inline-flex items-center gap-2 text-[var(--color-signal)] hover:text-[var(--color-ink)] transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span className="font-mono text-sm">Back to Projects</span>
          </button>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="font-mono text-xs text-[var(--color-signal)] mb-2">
                {project.index} — {project.company}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-2">
                {project.name}
              </h1>
              <p className="font-mono text-sm text-[var(--color-ink-soft)]">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured image */}
      {project.image && (
        <div className="border-b border-[var(--color-line)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="rounded-lg overflow-hidden border border-[var(--color-line)]">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[var(--color-line)]">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-line)] rounded-md hover:bg-[var(--color-paper-dim)] hover:border-[var(--color-ink)] transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Visit Project</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-line)] rounded-md hover:bg-[var(--color-paper-dim)] hover:border-[var(--color-ink)] transition-colors"
            >
              <Code2 size={16} />
              <span className="text-sm font-medium">View Code</span>
            </a>
          )}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4">
            {project.overview}
          </p>
          <p className="text-[var(--color-ink-soft)] leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Problem & Solution */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Problem & Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[var(--color-flag)] mb-2">
                Problem
              </h3>
              <p className="text-[var(--color-ink-soft)] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-flag)] mb-2">
                Solution
              </h3>
              <p className="text-[var(--color-ink-soft)] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Key Features
          </h2>
          <ul className="grid gap-3">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-[var(--color-ink-soft)]"
              >
                <span className="text-[var(--color-flag)] mt-1 flex-shrink-0">
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Role & Responsibilities */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-4">
            My Role
          </h2>
          <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4">
            {project.myRole}
          </p>
          <h3 className="font-semibold text-[var(--color-ink)] mb-3">
            Key Responsibilities
          </h3>
          <ul className="space-y-2">
            {project.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-3 text-[var(--color-ink-soft)]"
              >
                <span className="text-[var(--color-flag)] mt-1 flex-shrink-0">
                  →
                </span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Technical Implementation
          </h2>
          <ul className="space-y-2 mb-6">
            {project.technicalImplementations.map((impl) => (
              <li
                key={impl}
                className="flex gap-3 text-[var(--color-ink-soft)]"
              >
                <span className="text-[var(--color-flag)] mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>{impl}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-6">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div key={challenge}>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[var(--color-line)] text-xs font-mono text-[var(--color-flag)]">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--color-ink)] mb-1">
                      Challenge
                    </h3>
                    <p className="text-[var(--color-ink-soft)] mb-3">
                      {challenge}
                    </p>
                    <h4 className="font-semibold text-[var(--color-flag)] text-sm mb-1">
                      Solution
                    </h4>
                    <p className="text-[var(--color-ink-soft)] text-sm">
                      {project.solutions[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="mb-12 pb-8 border-b border-[var(--color-line)]">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Outcomes & Impact
          </h2>
          <ul className="space-y-2">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-3 text-[var(--color-ink-soft)]"
              >
                <span className="text-[var(--color-flag)] mt-1 flex-shrink-0">
                  ★
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs border border-[var(--color-line)] px-3 py-1.5 rounded-sm hover:bg-[var(--color-paper-dim)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Back Button */}
        <div className="pt-8 border-t border-[var(--color-line)]">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-[var(--color-signal)] hover:text-[var(--color-ink)] transition-colors font-mono text-sm"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </button>
        </div>
      </div>
    </article>
  );
}
