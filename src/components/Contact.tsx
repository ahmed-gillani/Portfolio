import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-sm text-[var(--color-signal)]">05 — contact</p>
      <h2 className="font-display text-4xl lg:text-6xl font-semibold mt-4 max-w-2xl">
        Let's build something that ships.
      </h2>
      <p className="text-[var(--color-ink-soft)] mt-6 max-w-md leading-relaxed">
        Open to frontend roles and freelance work. Reach out directly or find
        me on GitHub and LinkedIn.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center gap-3 font-mono text-lg w-fit"
        >
          <Mail size={20} className="text-[var(--color-signal)]" />
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            {profile.email}
          </span>
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="group flex items-center gap-3 font-mono text-lg w-fit"
        >
          <Phone size={20} className="text-[var(--color-signal)]" />
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            {profile.phone}
          </span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-mono text-lg w-fit"
        >
          <span className="text-[var(--color-signal)]"><GithubIcon size={20} /></span>
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            github.com/ahmed-gillani
          </span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-mono text-lg w-fit"
        >
          <span className="text-[var(--color-signal)]"><LinkedinIcon size={20} /></span>
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            linkedin.com/in/your-linkedin-handle
          </span>
        </a>
      </div>
    </section>
  );
}
