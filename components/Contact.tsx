import { Linkedin, Github, Mail, Download, CalendarClock } from "lucide-react";
import Reveal from "./Reveal";
import { person } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <div className="glass relative overflow-hidden p-10 text-center md:p-14">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-violet/15 via-transparent to-cyan/15"
          />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              Let&apos;s talk about your <span className="grad-text">next initiative</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed md:text-lg">
              Open to Senior, Lead, Principal, and Architect roles — and consulting
              engagements for Power Platform and Copilot Studio initiatives.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${person.email}`} className="btn-primary">
                <Mail size={16} /> Email me
              </a>
              <a href={person.calendly} className="btn-ghost" rel="noopener noreferrer" target="_blank">
                <CalendarClock size={16} /> Book a call
              </a>
              <a href={person.resumeUrl} className="btn-ghost">
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-5">
              <a
                href={person.linkedin}
                aria-label="LinkedIn profile"
                rel="noopener noreferrer"
                target="_blank"
                className="text-body transition-colors hover:text-bright"
              >
                <Linkedin />
              </a>
              <a
                href={person.github}
                aria-label="GitHub profile"
                rel="noopener noreferrer"
                target="_blank"
                className="text-body transition-colors hover:text-bright"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
