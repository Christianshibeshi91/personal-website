"use client";

export default function CalendlyEmbed({ url }: { url: string }) {
  const embedUrl = `${url}?hide_gdpr_banner=1&background_color=060810&text_color=E9EDF6&primary_color=8B5CF6`;

  return (
    <div className="glass overflow-hidden rounded-2xl">
      <iframe
        src={embedUrl}
        title="Schedule a meeting with Christian Shibeshi"
        width="100%"
        height="700"
        frameBorder="0"
        className="block"
        loading="lazy"
      />
    </div>
  );
}
