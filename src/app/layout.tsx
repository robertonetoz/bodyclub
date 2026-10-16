import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Academia em Araguari`,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "academia Araguari",
    "Body Club",
    "musculação Araguari",
    "circuito funcional",
    "personal trainer Araguari",
    "Wellhub Araguari",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  telephone: "+55 34 99881-1315",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 05:00-22:00", "Sa 08:00-13:00", "Su 09:00-12:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: site.rating.google.count,
  },
  sameAs: [site.links.instagram, site.links.youtube],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bigShoulders.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
