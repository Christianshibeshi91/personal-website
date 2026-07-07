import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Trusted with mission-critical applications"
      />
      <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <Image
              src="/portrait-about.png"
              alt="Christian Shibeshi"
              width={900}
              height={1100}
              quality={95}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 480px"
              className="h-auto w-full rounded-[1.6rem] object-cover object-top"
            />
          </div>
        </Reveal>
        <div className="space-y-5">
          {aboutParagraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <p className="text-base leading-relaxed md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
