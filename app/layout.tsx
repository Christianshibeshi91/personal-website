import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import { person, seoKeywords } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl),
  title: {
    default: `${person.name} — Power Platform SME & Copilot Studio Agentic Developer`,
    template: `%s — ${person.name}`,
  },
  description:
    "Senior Microsoft Power Platform Subject Matter Expert and Copilot Studio agentic developer with 9+ years delivering enterprise Power Apps, Power Automate, SharePoint, Dataverse, and AI agent solutions across banking, aerospace, telecom, and insurance.",
  keywords: seoKeywords,
  authors: [{ name: person.name, url: person.siteUrl }],
  creator: person.name,
  openGraph: {
    type: "profile",
    url: person.siteUrl,
    title: `${person.name} — Power Platform SME & Copilot Studio Agentic Developer`,
    description:
      "Enterprise Power Platform architecture, Copilot Studio AI agents, and governed low-code delivery. 9+ years across AT&T, Boeing, WSECU, and City National Bank.",
    siteName: person.name,
    images: [{ url: "/portrait.png", width: 1024, height: 1536, alt: person.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Power Platform SME`,
    description:
      "Copilot Studio agentic development and enterprise Power Platform architecture.",
    images: ["/portrait.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: person.siteUrl,
  image: `${person.siteUrl}/portrait.png`,
  jobTitle: "Power Platform Subject Matter Expert",
  address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA" },
  sameAs: [person.linkedin],
  knowsAbout: seoKeywords,
  worksFor: { "@type": "Organization", name: "Independent Consulting" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ScrollProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
