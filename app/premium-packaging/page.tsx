import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Premium Rigid Boxes and PR Kit Packaging",
  description:
    "Custom premium rigid boxes, PR kits, corporate gift boxes, magnetic closures, inserts, and specialty finishes for brands in the Philippines.",
  path: "/premium-packaging",
});

export default function Page() {
  const service = SERVICES[0];
  const projects = PROJECTS.filter((p) => p.categorySlug === "premium");
  return <ServicePage index={0} service={service} projects={projects} />;
}
