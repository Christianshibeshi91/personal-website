import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { whyHireMe } from "@/lib/data";

export default function WhyHireMe() {
  return (
    <section id="why" className="relative py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(34,211,238,0.06),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why companies hire me"
          title="Senior judgment, not just senior skills"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="glass glass-hover h-full p-5">
                <h3 className="font-display text-sm font-bold text-bright">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
