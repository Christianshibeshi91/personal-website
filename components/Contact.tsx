import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import CalendlyEmbed from "./CalendlyEmbed";
import { person } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mt-0 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left, contact details */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <a href={`mailto:${person.email}`} className="btn-primary justify-center">
                <Mail size={16} /> Email me
              </a>
            </div>

            <div className="flex items-center justify-center gap-5">
              <a
                href={person.linkedin}
                aria-label="LinkedIn profile"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer text-body transition-colors hover:text-bright"
              >
                <Linkedin />
              </a>
              <a
                href={person.github}
                aria-label="GitHub profile"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer text-body transition-colors hover:text-bright"
              >
                <Github />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right, inline Calendly */}
        <Reveal delay={0.1}>
          <p className="mb-4 text-sm font-semibold text-body">
            Pick a time, 30-minute intro call
          </p>
          <CalendlyEmbed url={person.calendly} />
        </Reveal>
      </div>
    </section>
  );
}
