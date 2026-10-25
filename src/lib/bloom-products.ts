export type BloomProduct = {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  colors: string[];
};

export const bloomProducts: BloomProduct[] = [
  {
    slug: "blush-column-dress",
    name: "Blush Column Dress",
    category: "Clothing",
    price: 280,
    image: "/bloom/dress.jpg",
    tag: "BESTSELLER",
    description: "A blush silk column with a soft cowl neck. Cut to catch the light and leave the rest quiet.",
    colors: ["#f3c7d2", "#e7a8b8"],
  },
  {
    slug: "rose-silk-blouse",
    name: "Rose Silk Blouse",
    category: "Clothing",
    price: 165,
    image: "/bloom/top.jpg",
    tag: "NEW ARRIVAL",
    description: "Pale rose silk with a relaxed collar and gathered cuff. Easy over a skirt, or on its own.",
    colors: ["#e7b7c4", "#f6d5de"],
  },
  {
    slug: "petal-pleat-skirt",
    name: "Petal Pleat Skirt",
    category: "Clothing",
    price: 175,
    image: "/bloom/skirt.jpg",
    description: "A blush pleated midi with an easy waist. Movement without noise.",
    colors: ["#f0c3cf", "#f7efe8"],
  },
  {
    slug: "blush-shoulder-bag",
    name: "Blush Shoulder Bag",
    category: "Bags",
    price: 240,
    image: "/bloom/bag.jpg",
    tag: "LIMITED",
    description: "Structured blush leather with a short handle and a quiet line of stitching.",
    colors: ["#e8c3cc", "#d7aeb8"],
  },
  {
    slug: "rose-satin-clutch",
    name: "Rose Satin Clutch",
    category: "Bags",
    price: 125,
    image: "/bloom/clutch.jpg",
    description: "A compact rose satin clutch with a soft envelope fold. For evenings that stay light.",
    colors: ["#e7b4c2", "#f4d5dc"],
  },
  {
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    category: "Accessories",
    price: 85,
    image: "/bloom/earrings.jpg",
    tag: "EDITOR'S PICK",
    description: "Blush pearl drops on a small crystal post. One pair, worn often.",
    colors: ["#f3d5dc", "#e8c4b4"],
  },
  {
    slug: "rose-silk-scarf",
    name: "Rose Silk Scarf",
    category: "Accessories",
    price: 95,
    image: "/bloom/scarf.jpg",
    description: "A rose silk square with a fluid hand. At the neck, in the hair, or on a bag.",
    colors: ["#f0c4d0", "#e7aebc"],
  },
  {
    slug: "petal-sunglasses",
    name: "Petal Sunglasses",
    category: "Accessories",
    price: 110,
    image: "/bloom/sunglasses.jpg",
    description: "Soft pink acetate with a gentle cat-eye. Light enough for every day.",
    colors: ["#f2c6d2", "#e8b7c6"],
  },
];

export function getBloomProduct(slug: string) {
  return bloomProducts.find((product) => product.slug === slug);
}
