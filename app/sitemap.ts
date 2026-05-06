import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const LAST_MODIFIED = new Date();

const ROUTES: ReadonlyArray<{ path: string; priority: number }> = [
  { path: "", priority: 1.0 },
  { path: "/pousada", priority: 0.9 },
  { path: "/gastronomia", priority: 0.9 },
  { path: "/pesqueiro", priority: 0.9 },
  { path: "/eventos", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
