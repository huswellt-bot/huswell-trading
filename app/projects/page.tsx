import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { PROJECTS, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Custom Packaging Projects and Services",
  description:
    "Browse custom rigid boxes, PR kit packaging, printed cartons, corrugated mailers, and paper filler projects produced by Huswell Trading.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/projects",
    title: "Custom Packaging Projects and Services | Huswell Trading",
    description:
      "Browse custom rigid boxes, PR kit packaging, printed cartons, corrugated mailers, and paper filler projects produced by Huswell Trading.",
    siteName: "Huswell Trading",
    images: [
      {
        url: "/assets/img/hero/hero.jpg",
        width: 1600,
        height: 900,
        alt: "Custom packaging by Huswell Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Projects and Services | Huswell Trading",
    description:
      "Browse custom rigid boxes, PR kit packaging, printed cartons, corrugated mailers, and paper filler projects produced by Huswell Trading.",
    images: ["/assets/img/hero/hero.jpg"],
  },
};

const CATEGORY_BY_SLUG: Record<string, string> = {
  "premium-packaging": "premium",
  "regular-packaging": "regular",
  "offset-digital-packaging": "offset",
  "corrugated-box-packaging": "corrugated",
};

export default function Page() {
  const tiles = SERVICES.map((s) => {
    const cat = CATEGORY_BY_SLUG[s.slug];
    const projects = cat ? PROJECTS.filter((p) => p.categorySlug === cat) : [];
    const cover = projects.length
      ? projects[0].imgs[0]
      : s.img;
    return { ...s, cat, count: projects.length, cover };
  });

  return (
    <>
      <PageHero
        overline="Services"
        title="Pick a line, see everything off it."
        body="Every project below was printed, assembled, and finished at 72 Adrian St., North Fairview. Choose a line to browse its full set of work."
      />
      <section className="bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-mute">Project lines</p>
          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
            Where to look.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="group"
              >
                <div className="border border-line bg-surface transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:border-ink/40">
                  <Image
                    src={t.cover}
                    alt={t.label}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-ink">{t.label}</h3>
                    {t.count > 0 ? (
                      <p className="mt-1 text-sm text-mute">
                        {t.count} projects in this line
                      </p>
                    ) : null}
                  </div>
                  <span className="mt-0.5 text-accent-hover transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
