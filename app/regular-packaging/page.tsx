import type { Metadata } from "next";
import ServicePage from "@/components/service-page";
import { PROJECTS, SERVICES } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Regular Rigid Box Packaging",
  description:
    "Custom regular rigid boxes for gifts, souvenirs, retail products, and personal occasions, made with durable chipboard and specialty paper wraps.",
  path: "/regular-packaging",
});

export default function Page() {
  const service = SERVICES[1];
  const projects = PROJECTS.filter((p) => p.categorySlug === "regular");
  return <ServicePage index={1} service={service} projects={projects} />;
}
