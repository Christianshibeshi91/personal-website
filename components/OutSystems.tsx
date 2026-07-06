import { Layers } from "lucide-react";
import Reveal from "./Reveal";

export default function OutSystems() {
  return (
    <section id="outsystems" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="glass relative overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-msblue/15 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <p className="eyebrow flex items-center gap-2">
              <Layers size={14} /> Complementary skill
            </p>
            <h2 className="section-title !text-2xl md:!text-4xl">
              OutSystems ODC, honestly positioned
            </h2>
            <p className="mt-5 leading-relaxed md:text-lg">
              Alongside my Microsoft specialization, I develop enterprise applications on
              OutSystems Developer Cloud — including registration systems with SSO and
              payment integration. I'm not positioning myself as an OutSystems expert;
              what this work gives me is fluency in modern low-code architecture beyond a
              single vendor: data modeling, REST integrations, identity, application
              lifecycle management, and governance patterns that transfer directly.
            </p>
            <p className="mt-4 leading-relaxed md:text-lg">
              For organizations running both platforms — or deciding between them — that
              cross-platform perspective is the point.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
