import { brand } from "@/config/brand";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: brand.siteUrl ? `${brand.siteUrl.replace(/\/$/, "")}/sitemap.xml` : undefined,
  };
}
