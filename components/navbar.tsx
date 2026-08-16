"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, SERVICES } from "@/lib/site-data";

const PAGES = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;
  const transparent = !scrolled;
  const lightText = transparent && pathname === "/";

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          transparent ? "border-transparent bg-transparent" : "border-line bg-canvas/95 backdrop-blur-md"
        }`}
      >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="block" aria-label="Huswell Trading — home">
          <Image
            src="/logo/huswell-logo.png"
            alt="Huswell Trading logo"
            width={1536}
            height={739}
            className={`h-14 w-auto ${lightText ? "" : "contrast-125 saturate-150"}`}
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <NavDropdown
            label="Services"
            active={SERVICES.some((s) => pathname === `/${s.slug}`)}
            lightText={lightText}
            pathname={pathname}
            items={SERVICES.map((s) => ({ href: `/${s.slug}`, label: s.label }))}
          />
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                isActive(p.href)
                  ? "text-accent-hover"
                  : lightText
                    ? "text-white hover:text-white/75"
                    : "text-ink hover:text-accent-hover"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-full ${lightText ? "bg-white" : "bg-ink"} transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 ${lightText ? "bg-white" : "bg-ink"} transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full ${lightText ? "bg-white" : "bg-ink"} transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      </header>

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-canvas px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 transition-opacity duration-300 md:px-8 lg:hidden ${
          open ? "opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <p className="micro-label mb-4 text-mute">Services</p>
        <div className="flex flex-col">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-base font-medium text-ink"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <p className="micro-label mb-4 mt-8 text-mute">Pages</p>
        <div className="flex flex-col">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-base font-medium text-ink"
            >
              {p.label}
            </Link>
          ))}
        </div>
        <p className="mt-10 pb-8 text-sm text-mute">
          {CONTACT.email}
          <br />
          {CONTACT.phoneLabel}
        </p>
      </div>
    </>
  );
}

function NavDropdown({
  label,
  active,
  lightText,
  pathname,
  items,
}: {
  label: string;
  active: boolean;
  lightText: boolean;
  pathname: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
          active || open
            ? "text-accent-hover"
            : lightText
              ? "text-white hover:text-white/75"
              : "text-ink hover:text-accent-hover"
        }`}
      >
        {label}
        <span
          className={`inline-block text-[9px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-4">
          <div className="w-72 border border-line bg-surface py-2 shadow-sm">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`block px-5 py-3 text-sm transition-colors duration-300 hover:bg-canvas ${
                  pathname === it.href ? "text-accent-hover" : "text-ink"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
