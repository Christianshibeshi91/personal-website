import Image from "next/image";
import { Linkedin, Mail, Download } from "lucide-react";
import Reveal from "./Reveal";
import CalendlyEmbed from "./CalendlyEmbed";
import { person } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="eyebrow text-center">Contact</p>
        <h2 className="section-title mt-3 text-center">
          Let&apos;s build something{" "}
          <span className="grad-text">great together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed md:text-lg">
          Open to Senior, Lead, Principal, and Architect roles in Power Platform
          and enterprise AI. Based in Seattle, available for remote and hybrid positions.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left, portrait + contact details */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="glass overflow-hidden rounded-2xl">
              <Image
                src="/portrait-profile1.png"
                alt="Christian Shibeshi"
                width={900}
                height={1100}
                quality={95}
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 480px"
                className="h-auto w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-3">
              <a href={`mailto:${person.email}`} className="btn-primary justify-center">
                <Mail size={16} /> Email me
              </a>
              <a href={person.resumeUrl} className="btn-ghost justify-center">
                <Download size={16} /> Download resume
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
