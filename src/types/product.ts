import type { CategorySlug } from "@/data/categories";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  details: string;
  care: string;
  categories: CategorySlug[];
  price: number;
  images: ProductImage[];
  featured: boolean;
  isNew: boolean;
  bestseller: boolean;
  available: boolean;
  stock: number;
  availableSizes: string[];
  availableColors: ProductColor[];
  collections: string[];
  tags: string[];
  createdAt: string;
};
