import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Company Profile",
    description:
      "Learn about Huswell Trading's custom packaging capabilities, business registrations, and nationwide service for Philippine SMEs.",
    path: "/company-profile",
  }),
};

const REGISTRATIONS = [
  ["DTI Registration", "Registered"],
  ["BIR Registration", "Registered — VATable, with official receipt and sales invoice issuance"],
  ["PhilGEPS", "Registered — eligible for government procurement and bidding"],
  ["Export License", "Registered — eligible for export transactions"],
] as const;

const CAPABILITIES = [
  {
    number: "01",
    title: "In-house manufacturing",
    items: [
      "Rigid boxes — premium, sturdy packaging for gift sets, corporate giveaways, and luxury retail.",
      "PR kit boxes — designed for press and media kits, influencer mailers, and product launches.",
    ],
  },
  {
    number: "02",
    title: "Custom corrugated boxes",
    items: [
      "Plain, unprinted corrugated boxes for shipping, storage, and general packing needs.",
      "Printed corrugated boxes with custom branding and design.",
      "Minimum order quantity: 1,000 pieces.",
    ],
  },
  {
    number: "03",
    title: "Offset-printed folding cartons",
    items: [
      "High-quality offset printing for product boxes, retail cartons, and branded packaging.",
      "Minimum order quantity: 1,000 pieces.",
    ],
  },
] as const;

const MARKETS = [
  "E-commerce and online sellers",
  "Food, bakery, and pastry businesses",
  "Cosmetics, skincare, and personal care brands",
  "Retail and boutique businesses",
  "Corporate and events clients for PR kits, giveaways, and launches",
] as const;

const PARTNER_REASONS = [
  "In-house production of rigid and PR kit boxes for direct quality control and no subcontracting delays.",
  "Full registration through DTI, BIR, PhilGEPS, and an Export License for private, government, and export transactions.",
  "VATable operations with official receipts and sales invoices issued for every transaction.",
  "An established track record in the packaging industry since 2015.",
  "Nationwide service for SMEs across the Philippines.",
  "Plain and printed options across corrugated and folding-carton product lines.",
] as const;

const GROWTH_STRATEGIES = [
  {
    number: "01",
    title: "B2B direct supply",
    body: "Focus on direct, repeat-order relationships with e-commerce sellers, food and bakery businesses, cosmetics and personal-care brands, and retail SMEs. The aim is a stable, recurring client base rather than one-off transactions.",
  },
  {
    number: "02",
    title: "Made-to-order custom production",
    body: "Continue offering full customization across size, design, branding, and material instead of competing on generic stock boxes alone. Custom specifications are harder to price-compare and support healthier margins.",
  },
  {
    number: "03",
    title: "MOQ-tiered pricing structure",
    body: "Price in volume tiers, such as 1,000, 5,000, and 10,000+ pieces, with a lower unit cost at higher volumes. This encourages SMEs to commit to larger, more profitable orders as their businesses grow.",
  },
] as const;

const GROWTH_LEVERS = [
  ["Subscription and retainer agreements", "Set recurring supply schedules for regular clients, such as monthly auto-reorders, to create predictable revenue."],
  ["Niche specialization", "Deepen focus on one or two sectors first, such as food packaging or PR and influencer kits, to build reputation and referrals before expanding broadly."],
  ["Bundled services", "Pair box supply with design consultation and delivery, positioning Huswell Trading as a packaging solutions partner rather than a plain supplier."],
  ["Government and export channels", "Use existing PhilGEPS and Export License registrations to pursue government procurement and export opportunities alongside the core SME market."],
] as const;

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        overline="Company Profile"
        title="A packaging partner for growing Philippine brands."
        body="Established in 2015, Huswell Trading delivers custom box solutions for small and medium enterprises nationwide."
      />

      <section className="bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Company overview</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              From stock boxes to print-ready packaging.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Huswell Trading is a Philippine-based packaging company specializing in custom box
                solutions for small and medium enterprises (SMEs) nationwide. With an in-house
                production line for rigid boxes and PR kit boxes, complemented by custom corrugated
                boxes and offset-printed folding cartons, we serve as a one-stop packaging partner.
              </p>
              <p>
                We support projects ranging from plain stock boxes to fully branded, print-ready
                packaging. Huswell Trading is fully registered and compliant with Philippine business
                and trade requirements, allowing us to serve private enterprises as well as
                government and export-related transactions.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {[
                ["Established", "2015"],
                ["Service area", "Nationwide"],
                ["Production", "In-house"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-line py-5 sm:border-b-0 sm:px-5 sm:first:pl-0">
                  <p className="micro-label text-mute">{label}</p>
                  <p className="mt-3 text-xl font-medium tracking-tight text-ink">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Business registration and compliance</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Ready for business, government, and export transactions.
            </h2>
          </div>
          <dl className="divide-y divide-line border-y border-line md:col-span-8">
            {REGISTRATIONS.map(([term, description]) => (
              <div key={term} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <dt className="text-base font-medium tracking-tight text-ink sm:col-span-4">{term}</dt>
                <dd className="text-base leading-relaxed text-mute sm:col-span-8">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-accent-hover">Products and manufacturing capabilities</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Packaging built around the job.
          </h2>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {CAPABILITIES.map((capability) => (
              <article key={capability.number} className="grid grid-cols-1 gap-5 py-8 md:grid-cols-12 md:gap-10">
                <p className="micro-label text-accent-hover md:col-span-2">{capability.number}</p>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium tracking-tight text-ink">{capability.title}</h3>
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-mute md:col-span-6">
                  {capability.items.map((item) => (
                    <li key={item} className="border-l border-line pl-4">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Target market</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Built for SMEs across the Philippines.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mute">
              Huswell Trading primarily serves small and medium enterprises while also catering to
              established local and international brands.
            </p>
          </div>
          <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2 md:col-span-8">
            {MARKETS.map((market) => (
              <li key={market} className="border-b border-line py-5 text-base font-medium leading-snug tracking-tight text-ink sm:pr-8">
                {market}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Why partner with Huswell Trading</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              A practical production partner.
            </h2>
          </div>
          <ol className="divide-y divide-line border-y border-line md:col-span-8">
            {PARTNER_REASONS.map((reason, index) => (
              <li key={reason} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <p className="micro-label text-accent-hover sm:col-span-2">{String(index + 1).padStart(2, "0")}</p>
                <p className="text-base leading-relaxed text-mute sm:col-span-10">{reason}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-accent-hover">Recommended business model and growth strategy</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Three paths to sustainable growth.
          </h2>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {GROWTH_STRATEGIES.map((strategy) => (
              <article key={strategy.number} className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-10">
                <p className="micro-label text-accent-hover md:col-span-2">{strategy.number}</p>
                <h3 className="text-xl font-medium tracking-tight text-ink md:col-span-4">{strategy.title}</h3>
                <p className="text-base leading-relaxed text-mute md:col-span-6">{strategy.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Supporting growth levers</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              More ways to deepen client relationships.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line md:col-span-8">
            {GROWTH_LEVERS.map(([title, body]) => (
              <article key={title} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <h3 className="text-base font-medium leading-snug tracking-tight text-ink sm:col-span-4">{title}</h3>
                <p className="text-base leading-relaxed text-mute sm:col-span-8">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-dark bg-canvas-dark py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-12 md:items-end md:px-8">
          <div className="md:col-span-8">
            <p className="micro-label mb-6 text-white/70">Start a packaging project</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-grease md:text-5xl">
              Tell us what your product needs.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Share your box type, dimensions, quantity, artwork, and target delivery date. Our
              team will help shape a practical production plan.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
              Free box consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
