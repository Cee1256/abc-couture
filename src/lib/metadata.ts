import type { Metadata } from "next";
import { brand } from "@/config/brand";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = brand.siteUrl ? new URL(path, brand.siteUrl).toString() : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} — ${brand.name}`,
      description,
      url,
      locale: "en_GH",
      type: "website",
      siteName: brand.name,
    },
  };
}
