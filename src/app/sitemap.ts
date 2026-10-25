import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { brand } from "@/config/brand";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!brand.siteUrl) return [];
  const base = brand.siteUrl.replace(/\/$/, "");
  const staticRoutes = ["", "/shop", "/collections", "/about", "/contact", "/bag"].map((path) => ({
    url: `${base}${path || "/"}`,
  }));
  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
  }));
  const collectionRoutes = collections.map((collection) => ({
    url: `${base}/collections/${collection.slug}`,
  }));
  return [...staticRoutes, ...collectionRoutes, ...productRoutes];
}
