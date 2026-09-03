import { certifications, education, experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-sm text-[var(--color-signal)]">03 — experience</p>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold mt-4">
        Where I've worked
      </h2>

      <div className="mt-12 flex flex-col gap-14">
        {experience.map((job) => (
          <div key={job.company} className="grid lg:grid-cols-[200px_1fr] gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold">{job.company}</h3>
              <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">
                {job.period}
              </p>
              <p className="text-sm text-[var(--color-ink-soft)] mt-1">{job.role}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {job.points.map((point) => (
                <li key={point} className="text-[var(--color-ink-soft)] leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-[var(--color-signal)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-12 border-t border-[var(--color-line)] pt-12">
        <div>
          <h3 className="font-mono text-xs text-[var(--color-ink-soft)] uppercase">Education</h3>
          <p className="font-display text-lg font-semibold mt-3">{education.degree}</p>
          <p className="text-sm text-[var(--color-ink-soft)] mt-1">{education.school}</p>
          <p className="font-mono text-xs text-[var(--color-ink-soft)] mt-1">{education.period}</p>
        </div>
        <div>
          <h3 className="font-mono text-xs text-[var(--color-ink-soft)] uppercase">Certifications</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm text-[var(--color-ink-soft)]">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
