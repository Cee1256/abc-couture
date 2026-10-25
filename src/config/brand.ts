/**
 * Single place to change the storefront identity.
 * Replace `name`, `wordmark`, `tagline`, phone fields, announcement, and `logo`
 * here. Pages and components read from this file.
 *
 * Set NEXT_PUBLIC_SITE_URL when a production domain exists. Canonical URLs
 * and the sitemap use it. Leave it unset locally.
 *
 * Social profiles stay empty until real accounts are supplied.
 */
export const brand = {
  name: "Maison Noir",
  wordmark: "Maison Noir",
  tagline: "Objects of Desire",
  announcement: "Complimentary shipping on orders over $250",
  description: "Considered pieces. Lasting presence. Discover modern wardrobe essentials at Maison Noir.",
  market: "Ghana",
  currency: "GHS",
  locale: "en-GH",
  language: "en",
  phoneDisplay: "0232203037",
  phoneTel: "+233232203037",
  whatsappUrl: "https://wa.me/233232203037",
  logo: "/brand/logo.jpg",
  logoAlt: "Maison Noir wordmark",
  cartStorageKey: "maison-noir-bag",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  social: [] as { label: string; href: string }[],
} as const;
