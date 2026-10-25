export const categories = [
  { slug: "womens-clothing", label: "Women's Clothing" },
  { slug: "mens-clothing", label: "Men's Clothing" },
  { slug: "dresses", label: "Dresses" },
  { slug: "tops-shirts", label: "Tops and Shirts" },
  { slug: "trousers-denim", label: "Trousers and Denim" },
  { slug: "jackets-outerwear", label: "Jackets and Outerwear" },
  { slug: "african-contemporary", label: "Traditional and Contemporary African-Inspired Fashion" },
  { slug: "shoes", label: "Shoes and Sneakers" },
  { slug: "bags", label: "Bags" },
  { slug: "jewellery", label: "Jewellery" },
  { slug: "watches", label: "Watches" },
  { slug: "belts", label: "Belts" },
  { slug: "hats", label: "Hats and Caps" },
  { slug: "sunglasses", label: "Sunglasses" },
  { slug: "accessories", label: "Other Fashion Accessories" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const accessorySlugs: CategorySlug[] = [
  "jewellery",
  "watches",
  "belts",
  "hats",
  "sunglasses",
  "accessories",
];

const labels = new Map(categories.map((category) => [category.slug, category.label]));

export function categoryLabel(slug: string): string {
  if (slug === "all-accessories") return "All accessories";
  return labels.get(slug as CategorySlug) ?? slug;
}
