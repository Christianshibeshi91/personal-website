import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed md:text-lg">{lead}</p> : null}
    </Reveal>
  );
}
