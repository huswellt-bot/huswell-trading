import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/projects",
  "/company-profile",
  "/premium-packaging",
  "/regular-packaging",
  "/offset-digital-packaging",
  "/corrugated-box-packaging",
  "/shredded-paper-fillers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
