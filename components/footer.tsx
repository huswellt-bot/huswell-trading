import Image from "next/image";
import Link from "next/link";
import { CONTACT, SERVICES } from "@/lib/site-data";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/#contact", label: "Get a Free Quote" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logo/huswell-logo.png"
              alt="Huswell Trading logo"
              width={1536}
              height={739}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              Premium box packaging, rigid boxes, offset &amp; digital printing, corrugated
              cartons, and 20 colors of shredded paper fillers — designed, printed, and
              finished in Quezon City since 2015.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mute">
              Packaging that protects your product. Presentation that builds your brand.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm sm:gap-x-8">
              <a
                className="text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-hover"
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-hover"
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-hover"
                href={CONTACT.tiktok}
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="micro-label mb-6 text-mute">Services</p>
            <ul className="space-y-3 text-sm text-ink">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link className="transition-colors hover:text-accent-hover" href={`/${s.slug}`}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="micro-label mb-6 text-mute">Explore &amp; contact</p>
            <ul className="space-y-3 text-sm text-ink">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="transition-colors hover:text-accent-hover" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <a className="transition-colors hover:text-accent-hover" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-accent-hover" href={CONTACT.phoneHref}>
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li className="text-mute">{CONTACT.address.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-mute md:flex-row md:items-center md:justify-between">
          <p>© 2015 Huswell Trading. All rights reserved.</p>
          <p>Made in Quezon City, Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
