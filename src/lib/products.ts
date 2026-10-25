import { accessorySlugs, categoryLabel } from "@/data/categories";
import { collectionName } from "@/data/collections";
import { products } from "@/data/products";
import type { CategorySlug } from "@/data/categories";
import type { Product } from "@/types/product";

export const priceBands = [
  { id: "under-300", label: "Under GHS 300", min: 0, max: 300 },
  { id: "300-600", label: "GHS 300 – 599", min: 300, max: 600 },
  { id: "600-1000", label: "GHS 600 – 999", min: 600, max: 1000 },
  { id: "over-1000", label: "GHS 1,000 and above", min: 1000, max: Number.POSITIVE_INFINITY },
] as const;

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "name", label: "Alphabetical" },
] as const;

export type SortKey = (typeof sortOptions)[number]["id"];

export type ShopQuery = {
  q: string;
  category: string;
  sort: SortKey;
  price: string;
  stock: "" | "in";
  isNew: boolean;
  bestseller: boolean;
};

const sortIds = new Set<string>(sortOptions.map((option) => option.id));

function one(raw: Record<string, string | string[] | undefined>, key: string): string {
  const value = raw[key];
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export function parseShopQuery(raw: Record<string, string | string[] | undefined>): ShopQuery {
  const sort = one(raw, "sort");
  const price = one(raw, "price");
  return {
    q: one(raw, "q").trim(),
    category: one(raw, "category"),
    sort: sortIds.has(sort) ? (sort as SortKey) : "featured",
    price: priceBands.some((band) => band.id === price) ? price : "",
    stock: one(raw, "stock") === "in" ? "in" : "",
    isNew: one(raw, "new") === "1",
    bestseller: one(raw, "bestseller") === "1",
  };
}

export function shopHref(query: ShopQuery, patch: Partial<ShopQuery> = {}, clear = false): string {
  const base: ShopQuery = clear
    ? { q: "", category: "", sort: "featured", price: "", stock: "", isNew: false, bestseller: false }
    : query;
  const next = { ...base, ...patch };
  const params = new URLSearchParams();
  if (next.q) params.set("q", next.q);
  if (next.category) params.set("category", next.category);
  if (next.sort !== "featured") params.set("sort", next.sort);
  if (next.price) params.set("price", next.price);
  if (next.stock) params.set("stock", next.stock);
  if (next.isNew) params.set("new", "1");
  if (next.bestseller) params.set("bestseller", "1");
  const value = params.toString();
  return value ? `/shop?${value}` : "/shop";
}

export function hasActiveFilters(query: ShopQuery): boolean {
  return Boolean(query.q || query.category || query.price || query.stock || query.isNew || query.bestseller || query.sort !== "featured");
}

export function matchesCategory(product: Product, category: string): boolean {
  if (!category) return true;
  if (category === "all-accessories") {
    return product.categories.some((item) => accessorySlugs.includes(item));
  }
  return product.categories.includes(category as CategorySlug);
}

export function filterProducts(query: ShopQuery): Product[] {
  const needle = query.q.toLowerCase();
  const band = priceBands.find((item) => item.id === query.price);

  const filtered = products.filter((product) => {
    if (needle) {
      const haystack = [
        product.name,
        product.description,
        product.details,
        ...product.tags,
        ...product.categories.map((category) => categoryLabel(category)),
        ...product.collections.map((collection) => collectionName(collection)),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    if (!matchesCategory(product, query.category)) return false;
    if (band && (product.price < band.min || product.price >= band.max)) return false;
    if (query.stock === "in" && (!product.available || product.stock < 1)) return false;
    if (query.isNew && !product.isNew) return false;
    if (query.bestseller && !product.bestseller) return false;
    return true;
  });

  return sortProducts(filtered, query.sort);
}

export function sortProducts(list: Product[], sort: SortKey): Product[] {
  const copy = [...list];
  switch (sort) {
    case "newest":
      return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt) || a.name.localeCompare(b.name));
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return copy.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          Number(b.bestseller) - Number(a.bestseller) ||
          a.name.localeCompare(b.name),
      );
  }
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getNewArrivals(limit = 8): Product[] {
  return sortProducts(
    products.filter((product) => product.isNew),
    "newest",
  ).slice(0, limit);
}

export function getBestsellers(limit = 6): Product[] {
  return products.filter((product) => product.bestseller).slice(0, limit);
}

export function getByCollection(slug: string): Product[] {
  return sortProducts(
    products.filter((product) => product.collections.includes(slug)),
    "featured",
  );
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.id !== product.id)
    .map((item) => {
      const sharedCollection = item.collections.some((slug) => product.collections.includes(slug));
      const sharedCategory = item.categories.some((slug) => product.categories.includes(slug));
      return { item, score: (sharedCollection ? 2 : 0) + (sharedCategory ? 1 : 0) };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function categoryCounts(): { slug: string; label: string; count: number }[] {
  const specific = products
    .flatMap((product) => product.categories)
    .reduce<Map<string, number>>((map, slug) => {
      map.set(slug, (map.get(slug) ?? 0) + 1);
      return map;
    }, new Map());

  return [...specific.entries()]
    .map(([slug, count]) => ({ slug, label: categoryLabel(slug), count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function primaryCategory(product: Product): string {
  return categoryLabel(product.categories[0] ?? "");
}

export { products };
