import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroWide from "@/public/hero/huswell-hero-wide.webp";
import ContactSection from "@/components/contact-section";
import StatsBar from "@/components/stats-bar";
import TestimonialSlider from "@/components/testimonials";
import { CONTACT, FAQS } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Packaging Supplier in the Philippines | Huswell Trading",
  description:
    "Custom packaging, rigid boxes, PR kits, printed cartons, corrugated boxes, corporate gift packaging, and paper fillers for brands across the Philippines.",
  path: "/",
});

const REASONS = [
  {
    title: "Customized to your brand",
    body: "We develop packaging around your size, structure, materials, colors, artwork, finishing, and presentation requirements.",
  },
  {
    title: "One partner for packaging and printing",
    body: "Coordinate your packaging and print requirements under one project instead of splitting them between multiple suppliers.",
  },
  {
    title: "Built for corporate requirements",
    body: "Clear quotations, approved specifications, production schedules, quality checks, and dependable communication for procurement and marketing teams.",
  },
  {
    title: "Flexible packaging solutions",
    body: "Choose premium presentation boxes, practical corrugated packaging, printed cartons, PR kits, handcrafted boxes, or a combination suited to the job.",
  },
  {
    title: "Attention to presentation",
    body: "Structure, material, color, printing, finishing, product placement, and the unboxing experience are considered as one system.",
  },
  {
    title: "Designed around your requirements",
    body: "Share your product dimensions, quantity, budget, branding, target market, delivery needs, and preferred presentation. We recommend the right approach.",
  },
];

const INDUSTRIES = [
  ["Beauty and cosmetics", "Premium packaging for skincare, cosmetics, fragrances, beauty kits, influencer campaigns, and product launches."],
  ["Food and beverage", "Custom printed packaging, gift boxes, promotional kits, beverage packaging, and presentation boxes."],
  ["Retail and e-commerce", "Branded packaging designed to improve product presentation and customer unboxing experiences."],
  ["Fashion and lifestyle", "Custom boxes for apparel, accessories, shoes, watches, jewelry, lifestyle products, and merchandise."],
  ["Corporate and professional services", "Packaging for client gifts, employee kits, executive giveaways, company anniversaries, and corporate events."],
  ["Advertising, PR, and marketing agencies", "Custom PR kits, influencer boxes, media kits, event packaging, brand activations, and campaign materials."],
  ["Technology and electronics", "Custom packaging and presentation boxes for gadgets, accessories, corporate technology gifts, and promotional products."],
  ["Real estate and property development", "Premium turnover kits, broker kits, welcome packages, property presentation kits, and client gifts."],
  ["Events and activations", "Customized event boxes, launch kits, conference packages, media kits, promotional materials, and branded giveaways."],
  ["Startups and growing brands", "Packaging solutions for businesses launching products, developing their branding, or upgrading from generic packaging."],
] as const;

const FEATURED_SOLUTIONS = [
  ["Rigid boxes", "Premium presentation packaging for luxury products, corporate gifts, and high-value merchandise.", "/premium-packaging", "/assets/img/services/premium.jpg"],
  ["PR boxes", "Customized campaign packaging designed for influencers, media, and product launches.", "/premium-packaging", "/assets/img/projects/premium/02-smart-parenting-8211-premium-canister-top-bottom/01.jpg"],
  ["Corrugated boxes", "Durable packaging for shipping, e-commerce, product protection, and branded kits.", "/corrugated-box-packaging", "/assets/img/services/corrugated.jpg"],
  ["Printed boxes", "Custom offset printed cartons for retail and consumer products.", "/offset-digital-packaging", "/assets/img/services/offset.jpg"],
  ["Corporate packaging", "Professionally designed boxes for client gifts, employee kits, events, and giveaways.", "/premium-packaging", "/assets/img/projects/premium/04-shangri-la-8211-premium-basket-style-pr-kit-with/01.jpg"],
  ["Handcrafted boxes", "Custom specialty packaging for unique presentation requirements.", "/projects", "/assets/img/about/cover.webp"],
] as const;

const GALLERY_ASPECTS = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square"] as const;

const STATS = [
  { value: 11, suffix: "", label: "Years of experience" },
  { value: 10000, suffix: "+", label: "Projects completed" },
  { value: 1, suffix: "M+", label: "Boxes produced" },
  { value: 100, suffix: "%", label: "Customized solutions" },
] as const;

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-canvas-dark">
        <Image
          src={heroWide}
          alt="Philippine-themed custom presentation boxes made by Huswell Trading"
          fill
          preload
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-center md:px-8 md:pb-16 md:pt-24 2xl:pb-24 2xl:pt-32">
          <p className="micro-label mb-6 text-white/80">Designed &amp; Made in the Philippines</p>
          <h1 className="mx-auto max-w-4xl text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-white">
            Custom Box Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl">
            Free Website Landing Page on Qualified Packaging Orders
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:max-w-3xl">
            Request your free packaging quotation today. Landing-page eligibility and scope are
            confirmed after quotation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
              Get Free Quotation
            </Link>
            <Link href="#capabilities" className="btn-line-dark w-full sm:w-auto">
              Manufacturing capabilities
            </Link>
          </div>
        </div>
      </section>

      <StatsBar stats={STATS} />

      <section id="about" className="split-panel split-panel--canvas bg-canvas py-20 md:py-28">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="micro-label mb-6 text-accent-hover">Company overview</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Packaging made for growing Philippine brands.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Established in 2015, Huswell Trading creates custom box solutions for small and
                medium enterprises nationwide. Our Quezon City production team handles rigid boxes
                and PR kit boxes in-house.
              </p>
              <p>
                We also supply custom corrugated boxes and offset-printed folding cartons, giving
                brands one practical partner for premium presentation, shipping, storage, and
                retail packaging.
              </p>
            </div>
            <Link href="/company-profile" className="btn-line-light mt-10 w-full sm:w-auto">
              Company overview
            </Link>
          </div>
          <div className="split-panel-media relative mt-12 aspect-[4/3] w-full overflow-hidden border border-line bg-surface md:hidden">
            <Image
              src="/images/watch.jpg"
              alt="Custom Philippine heritage presentation box for a watch"
              width={1448}
              height={1086}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="split-panel-media absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src="/images/watch.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="capabilities" className="split-panel split-panel--canvas-alt border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="micro-label mb-6 text-accent-hover">Manufacturing</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Products &amp; Manufacturing Capabilities
            </h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">In-House Manufacturing</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  Rigid Boxes and PR Kit Boxes for premium gifting, launches, and branded campaigns.
                </p>
              </article>
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">Custom Corrugated Boxes</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  Plain or custom-printed boxes for shipping, storage, and product packaging.
                </p>
                <p className="micro-label mt-4 text-accent-hover">MOQ: 1,000 pcs</p>
              </article>
              <article className="py-6">
                <h3 className="text-xl font-medium tracking-tight text-ink">Offset-Printed Folding Cartons</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">
                  High-quality printed cartons for retail products and branded packaging.
                </p>
                <p className="micro-label mt-4 text-accent-hover">MOQ: 1,000 pcs</p>
              </article>
            </div>
          </div>
          <div className="split-panel-media relative mt-12 aspect-[4/5] w-full overflow-hidden border border-line bg-surface md:hidden">
            <Image
              src="/images/tumbler.jpg"
              alt="Custom Philippine heritage gift box with tumbler and accessories"
              width={1122}
              height={1402}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="split-panel-media absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src="/images/tumbler.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="why-huswell" className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Why choose Huswell Trading</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Your packaging partner from idea to finished product.
            </h2>
          </div>
          <div className="divide-y divide-line md:col-span-8">
            {REASONS.map((reason, index) => (
              <article key={reason.title} className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-6">
                <p className="micro-label text-accent-hover sm:col-span-2">0{index + 1}</p>
                <div className="sm:col-span-10">
                  <h3 className="text-xl font-medium tracking-tight text-ink">{reason.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">{reason.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="micro-label mb-6 text-accent-hover">Industries we serve</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
            Custom packaging for businesses across different industries.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Huswell Trading works with businesses, organizations, agencies, and brands that need
            packaging built around the product, campaign, customer, and delivery requirement.
          </p>
          <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map(([industry, description]) => (
              <div key={industry} className="border-b border-line px-0 py-5 sm:px-5 lg:px-6">
                <p className="text-base font-medium leading-snug tracking-tight text-ink">{industry}</p>
                <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Featured packaging solutions</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Packaging built around your product.
              </h2>
            </div>
            <Link href="/projects" className="btn-line-light w-full sm:w-auto">
              View all projects
            </Link>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {FEATURED_SOLUTIONS.map(([title, body, href, image], index) => (
              <Link
                key={title}
                href={href}
                className="group mb-4 block break-inside-avoid overflow-hidden border border-line bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className={`relative overflow-hidden ${GALLERY_ASPECTS[index]}`}>
                  <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-canvas-dark/0 p-5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-canvas-dark/70 group-hover:opacity-100 group-focus-visible:bg-canvas-dark/70 group-focus-visible:opacity-100">
                    <h3 className="text-xl font-medium tracking-tight text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{body}</p>
                    <span className="micro-label mt-5 text-white">Explore solution →</span>
                  </div>
                </div>
                <div className="p-5 sm:hidden">
                  <h3 className="text-xl font-medium tracking-tight text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <p className="micro-label mb-6 text-accent-hover">Custom packaging supplier in the Philippines</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Packaging that reflects your brand identity.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Huswell Trading provides customized packaging and printing solutions for brands,
                companies, agencies, and organizations that need professional packaging tailored to
                their products and campaigns.
              </p>
              <p>
                We work on projects involving custom boxes, premium rigid boxes, corrugated boxes,
                PR boxes, printed packaging, corporate gift boxes, folding cartons, handcrafted
                boxes, product packaging, and promotional packaging.
              </p>
              <p>
                Instead of settling for generic packaging, businesses can develop packaging that
                reflects their brand identity and improves how customers experience their products.
              </p>
              <p>
                Whether you are preparing a product launch, corporate event, marketing campaign,
                seasonal promotion, or ongoing packaging requirement, our team can help turn your
                specifications into a practical production plan.
              </p>
            </div>
          </div>
          <aside className="border-l-0 border-t border-line pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="micro-label text-mute">Talk to our packaging team</p>
            <p className="mt-6 text-xl font-medium leading-snug tracking-tight text-ink">
              Share the product, box style, dimensions, quantity, artwork or logo, reference
              photo, and target completion date.
            </p>
            <p className="mt-5 text-base leading-relaxed text-mute">
              If you do not have complete specifications yet, send the initial concept. We will
              help determine the right packaging solution.
            </p>
            <Link href="/#contact" className="btn-solid-light mt-8">
              Tell us about your project
            </Link>
          </aside>
        </div>
      </section>

      <section id="faqs" className="border-t border-line bg-canvas-alt py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-8">
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-accent-hover">Frequently asked questions</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-4xl">
              Frequently asked questions about custom packaging.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mute">
              Still need to discuss a requirement? Call {" "}
              <a href={CONTACT.phoneHref} className="text-ink underline decoration-accent underline-offset-4 hover:text-accent-hover">
                {CONTACT.phoneLabel}
              </a>{" "}
              or request a custom quote.
            </p>
          </div>
          <div className="divide-y divide-line md:col-span-8">
            {FAQS.map(([question, answer], index) => (
              <details key={question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors duration-300 hover:text-accent-hover">
                  <span className="text-lg font-medium leading-snug tracking-tight text-ink group-open:text-accent-hover">
                    {question}
                  </span>
                  <span className="relative mt-1 h-3 w-3 shrink-0 text-ink transition-transform duration-300 group-open:rotate-45">
                    <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
                  </span>
                </summary>
                <p className="max-w-3xl pb-7 text-base leading-relaxed text-mute">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-12">
            <div>
              <p className="micro-label mb-6 text-accent-hover">Client feedback</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Packaging partnerships built to last.
              </h2>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <ContactSection />

      <section className="relative overflow-hidden border-t border-line-dark bg-canvas-dark py-24 md:py-28">
        <Image
          src="/assets/img/hero/campaign-1.webp"
          alt="Custom branded packaging campaign by Huswell Trading"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="micro-label mb-6 text-white/70">Start your project</p>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-grease md:text-5xl">
              Ready to create packaging that represents your brand?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Your packaging is often the first physical interaction customers have with your
              product. Make it count. Whether you need custom boxes, PR kits, corporate gift packaging,
              corrugated boxes, rigid boxes, or printed packaging, Huswell Trading can help turn
              your requirements into a professionally crafted solution.
            </p>
            <div className="mt-8 max-w-2xl border-t border-line-dark pt-6">
              <p className="micro-label text-white/70">Tell us about your project</p>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Send your product or packaging requirement, preferred box style, dimensions,
                quantity, artwork or logo, reference photo, and target completion date.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/#contact" className="btn-solid-dark w-full sm:w-auto">
                Request a custom quote
              </Link>
              <Link href="/#contact" className="btn-line-dark w-full sm:w-auto">
                Send your packaging requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
