import type { Metadata } from "next";
import { CONTACT } from "@/lib/site-data";

export const SITE_URL = "https://www.huswelltrading.com";

const DEFAULT_IMAGE = "/assets/img/hero/hero.jpg";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const socialTitle = title.endsWith("| Huswell Trading") ? title : `${title} | Huswell Trading`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PH",
      url,
      title: socialTitle,
      description,
      siteName: "Huswell Trading",
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1600,
          height: 900,
          alt: "Custom packaging by Huswell Trading",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_IMAGE],
    },
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Huswell Trading",
  description:
    "Custom packaging supplier in the Philippines for rigid boxes, PR kits, printed packaging, corrugated boxes, corporate gift boxes, and paper fillers.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/huswell-logo.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  foundingDate: "2015",
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address[0],
    addressLocality: "Quezon City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  sameAs: [CONTACT.facebook, CONTACT.instagram, CONTACT.tiktok],
  knowsAbout: [
    "Custom packaging",
    "Rigid boxes",
    "PR kits",
    "Corrugated boxes",
    "Offset printing",
    "Corporate gift packaging",
    "Custom packaging inserts",
  ],
};
