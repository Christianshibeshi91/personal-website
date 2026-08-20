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
      <div className="mx-auto max-w-3xl space-y-5">
        {aboutParagraphs.map((p, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <p className="text-base leading-relaxed md:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
