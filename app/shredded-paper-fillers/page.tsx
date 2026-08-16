import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import FillerGallery from "@/components/filler-gallery";
import { FILLER_COLORS, FILLER_PACKS, SERVICES } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Shredded Paper Fillers for Gift Packaging",
  description:
    "Crinkled-cut shredded paper fillers in 20 colors for gift boxes, fragile products, retail presentation, and custom packaging support.",
  path: "/shredded-paper-fillers",
});

const GALLERY = [
  ...Array.from({ length: 19 }, (_, i) => `/assets/img/fillers/filler-${String(i + 3).padStart(2, "0")}.jpg`),
];

export default function Page() {
  const service = SERVICES[4];
  return (
    <>
      <PageHero overline="Services" title={service.label} body={service.blurb} />
      <section className="bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-mute">The palette — 20 colors in stock</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
            Every occasion has a color.
          </h2>
          <div className="mt-12 flex flex-wrap gap-2">
            {FILLER_COLORS.map((c) => (
              <span
                key={c}
                className="border border-line bg-surface px-4 py-2 text-sm text-ink"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="text-sm text-mute">Packs: {FILLER_PACKS}</p>
            <Link href="/#contact" className="btn-solid-light">
              Order fillers
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-canvas-alt pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <FillerGallery sources={GALLERY} />
        </div>
      </section>
    </>
  );
}
