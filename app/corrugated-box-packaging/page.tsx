import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Corrugated Boxes and Mailer Packaging",
  description:
    "Custom corrugated boxes, mailers, clamshells, and heavy-duty product packaging with printing and finishes for shipping, retail, and corporate kits.",
  path: "/corrugated-box-packaging",
});

export default function Page() {
  const service = SERVICES[3];
  const projects = PROJECTS.filter((p) => p.categorySlug === "corrugated");
  return <ServicePage index={3} service={service} projects={projects} />;
}
