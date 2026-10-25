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
  name: "ABC Couture",
  wordmark: "ABC Couture",
  tagline: "Wear Your Story",
  announcement: "Discover the latest edit  |  Effortless style, considered design",
  description:
    "ABC Couture is a contemporary fashion storefront for considered clothing and accessories, presented with Ghana cedi pricing.",
  market: "Ghana",
  currency: "GHS",
  locale: "en-GH",
  language: "en",
  phoneDisplay: "0232203037",
  phoneTel: "+233232203037",
  whatsappUrl: "https://wa.me/233232203037",
  logo: "/brand/logo.jpg",
  logoAlt:
    "ABC Couture monogram above the words ABC Couture and the line Wear Your Story",
  cartStorageKey: "abc-couture-bag",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  social: [] as { label: string; href: string }[],
} as const;
