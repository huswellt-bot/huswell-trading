import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import ProjectCard from "@/components/project-card";
import { SERVICES, type Project } from "@/lib/site-data";

export default function ServicePage({
  index,
  service,
  projects,
}: {
  index: number;
  service: (typeof SERVICES)[number];
  projects: Project[];
}) {
  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <>
      <PageHero
        overline="Services"
        title={service.label}
        body={service.blurb}
      />
      <section className="bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-4 text-mute">
                {projects.length} projects in this line
              </p>
              <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
                From the line.
              </h2>
            </div>
            {service.moq && (
              <p className="border border-line bg-surface px-4 py-2 text-sm font-medium text-ink">
                {service.moq}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.imgs[0]} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas-dark">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="border border-line bg-surface-dark">
              <Image
                src={service.img}
                alt={service.label}
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <p className="micro-label mb-5 text-mute">Next line</p>
              <h2 className="text-2xl font-medium leading-tight tracking-tight text-grease md:text-3xl">
                {next.label}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-mute-dark">
                {next.short}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href={`/${next.slug}`} className="btn-line-dark w-full sm:w-auto">
                  Explore {next.label}
                </Link>
                <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
