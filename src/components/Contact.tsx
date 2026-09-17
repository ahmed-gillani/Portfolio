import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 border-t border-[var(--color-line)]">
      <p className="font-mono text-xs sm:text-sm text-[var(--color-signal)]">05 — contact</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-4">
        Let's build something that ships.
      </h2>
      <p className="text-sm sm:text-base text-[var(--color-ink-soft)] mt-4 sm:mt-6 leading-relaxed max-w-2xl">
        Open to frontend roles and freelance work. Reach out directly or find
        me on GitHub and LinkedIn.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-lg w-fit break-all"
        >
          <Mail size={18} className="text-[var(--color-signal)] flex-shrink-0" />
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            {profile.email}
          </span>
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="group flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-lg w-fit"
        >
          <Phone size={18} className="text-[var(--color-signal)] flex-shrink-0" />
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            {profile.phone}
          </span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-lg w-fit break-all"
        >
          <span className="text-[var(--color-signal)] flex-shrink-0"><GithubIcon size={18} /></span>
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            github.com/ahmed-gillani
          </span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-lg w-fit break-all"
        >
          <span className="text-[var(--color-signal)] flex-shrink-0"><LinkedinIcon size={18} /></span>
          <span className="border-b border-transparent group-hover:border-[var(--color-ink)] transition-colors">
            https://www.linkedin.com/in/syed-ahmed-gillani-505824202/
          </span>
        </a>
      </div>
    </section>
  );
}
