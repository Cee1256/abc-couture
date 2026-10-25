import type { Metadata } from "next";
import { DM_Mono, Manrope, Oswald } from "next/font/google";
import { MaisonFooter } from "@/components/maison/Footer";
import { MaisonHeader } from "@/components/maison/Header";
import { CartProvider } from "@/components/cart/CartProvider";
import { brand } from "@/config/brand";
import "./globals.css";
import "../styles/maison.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  ...(brand.siteUrl ? { metadataBase: new URL(brand.siteUrl) } : {}),
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    locale: "en_GH",
    type: "website",
    siteName: brand.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={brand.language} data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable} ${mono.variable} h-full`}>
      <body>
        <a href="#content" className="sr-only">
          Skip to content
        </a>
        <CartProvider>
          <MaisonHeader />
          <main id="content">{children}</main>
          <MaisonFooter />
        </CartProvider>
      </body>
    </html>
  );
}
