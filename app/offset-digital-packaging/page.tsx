import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Offset and Digital Printed Box Packaging",
  description:
    "Offset and digital printed boxes, folding cartons, and product packaging for cosmetics, retail, food, and promotional campaigns in the Philippines.",
  path: "/offset-digital-packaging",
});

export default function Page() {
  const service = SERVICES[2];
  const projects = PROJECTS.filter((p) => p.categorySlug === "offset");
  return <ServicePage index={2} service={service} projects={projects} />;
}
