export type MaisonProduct = {
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  description: string;
  colors: string[];
};

export const maisonProducts: MaisonProduct[] = [
  {
    slug: "the-architect-coat",
    name: "The Architect Coat",
    category: "Outerwear",
    price: 320,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    tag: "BESTSELLER",
    description: "A considered, oversized silhouette cut from a substantial wool-blend fabric. Made for the in-between moments.",
    colors: ["#242424", "#b8aa96"],
  },
  {
    slug: "sculpted-knit",
    name: "Sculpted Knit Top",
    category: "Knitwear",
    price: 145,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    tag: "NEW ARRIVAL",
    description: "A soft, architectural knit with a close fit and quiet texture.",
    colors: ["#ded7ca", "#171717"],
  },
  {
    slug: "form-trouser",
    name: "Form Wide-Leg Trouser",
    category: "Trousers",
    price: 180,
    image: "https://images.unsplash.com/photo-1506629905607-d9d9c5c6f4c6?auto=format&fit=crop&w=900&q=85",
    description: "Fluid tailoring and a clean line. Designed to move effortlessly from day to night.",
    colors: ["#252525", "#d0c6b7"],
  },
  {
    slug: "noir-leather-bag",
    name: "Noir Leather Shoulder Bag",
    category: "Accessories",
    price: 210,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    tag: "LIMITED",
    description: "A compact everyday essential with sculptural proportions and understated hardware.",
    colors: ["#161616", "#8c6549"],
  },
  {
    slug: "essential-shirt",
    name: "Essential Cotton Shirt",
    category: "Shirts",
    price: 125,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    description: "An elevated wardrobe foundation in crisp cotton with a relaxed, considered fit.",
    colors: ["#eeeae1", "#252525"],
  },
  {
    slug: "after-hours-dress",
    name: "After Hours Dress",
    category: "Dresses",
    price: 265,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
    tag: "EDITOR'S PICK",
    description: "A confident evening silhouette with clean lines and a fluid drape.",
    colors: ["#111111", "#6c3437"],
  },
  {
    slug: "studio-sunglasses",
    name: "Studio Sunglasses",
    category: "Accessories",
    price: 95,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    description: "A sharp acetate frame with a timeless, almost cinematic profile.",
    colors: ["#171717", "#6f5744"],
  },
  {
    slug: "everyday-overshirt",
    name: "Everyday Overshirt",
    category: "Outerwear",
    price: 195,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    description: "A versatile layer with generous pockets and a structured, easy fit.",
    colors: ["#c1b7a5", "#282828"],
  },
];

export function getMaisonProduct(slug: string) {
  return maisonProducts.find((product) => product.slug === slug);
}
