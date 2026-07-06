import type { MetadataRoute } from "next";
import { person } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: person.siteUrl, lastModified: new Date(), priority: 1 }];
}
