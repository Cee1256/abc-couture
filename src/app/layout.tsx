import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { brand } from "@/config/brand";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
    images: [
      {
        url: "/images/library/1618244972963-dbee1a7edc95.jpg",
        width: 1400,
        height: 1867,
        alt: "Campaign photograph of an olive column dress and camel coat",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={brand.language} data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-ivory focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <CartProvider>
          <div className="sticky top-0 z-40">
            <AnnouncementBar />
            <Header />
          </div>
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
