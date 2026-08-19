import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatButtons from "@/components/chat-buttons";
import SplashLoader from "@/components/splash-loader";
import {
  businessSchema,
  DEFAULT_SOCIAL_IMAGE,
  DEFAULT_SOCIAL_IMAGE_ALT,
  DEFAULT_SOCIAL_IMAGE_HEIGHT,
  DEFAULT_SOCIAL_IMAGE_WIDTH,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Custom Packaging Supplier in the Philippines",
    template: "%s | Huswell Trading",
  },
  description:
    "Custom packaging, rigid boxes, PR kits, printed cartons, corrugated boxes, corporate gift packaging, and paper fillers. Designed and produced in Quezon City, delivered nationwide.",
  keywords: [
    "rigid boxes Philippines",
    "premium box packaging",
    "custom boxes Quezon City",
    "offset printing boxes",
    "corrugated boxes",
    "shredded paper fillers",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "KTfBZrMeLrMoC3s7FqKUgqbMrzWbGKi9WMEPbdojmMg",
  },
  openGraph: {
    title: "Custom Packaging Supplier in the Philippines | Huswell Trading",
    description:
      "Custom boxes, PR kits, printed packaging, corporate gift boxes, and corrugated solutions for brands across the Philippines.",
    url: SITE_URL,
    siteName: "Huswell Trading",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: DEFAULT_SOCIAL_IMAGE_WIDTH,
        height: DEFAULT_SOCIAL_IMAGE_HEIGHT,
        alt: DEFAULT_SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Supplier in the Philippines | Huswell Trading",
    description:
      "Custom boxes, PR kits, printed packaging, corporate gift boxes, and corrugated solutions for brands across the Philippines.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-full bg-canvas-dark antialiased">
        <SplashLoader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        {children}
        <Footer />
        <ChatButtons />
      </body>
    </html>
  );
}
