export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const collections: Collection[] = [
  {
    slug: "the-essentials-edit",
    name: "The Essentials Edit",
    description: "Quiet pieces with a clear shape. The clothes that hold a wardrobe together.",
    image: "/images/library/1490481651871-ab68de25d43d.jpg",
    imageAlt: "A rail of light shirts and knits hanging against a pale wall",
  },
  {
    slug: "modern-classics",
    name: "Modern Classics",
    description: "Tailoring, camel wool, and forms that stay relevant after the season changes.",
    image: "/images/library/1539533018447-63fcce2678e3.jpg",
    imageAlt: "A camel wrap coat worn with black trousers on stone steps",
  },
  {
    slug: "new-season",
    name: "New Season",
    description: "The latest arrivals: fresh cloth, sharper colour, and pieces just added to the edit.",
    image: "/images/library/1566174053879-31528523f8ae.jpg",
    imageAlt: "A woman in a burgundy off-shoulder column dress against a lilac background",
  },
  {
    slug: "elevated-streetwear",
    name: "Elevated Streetwear",
    description: "Ease with a precise cut. Track sets, denim, and coats worn off-duty.",
    image: "/images/library/1515886657613-9f3515b0c78f.jpg",
    imageAlt: "A woman in a sunflower-yellow track set and white boots standing outdoors",
  },
  {
    slug: "the-evening-edit",
    name: "The Evening Edit",
    description: "Columns, full skirts, and jewellery for a room that asks for a little more.",
    image: "/images/library/1550614000-4895a10e1bfd.jpg",
    imageAlt: "Two women in crimson evening separates photographed in warm light",
  },
  {
    slug: "african-contemporary",
    name: "African Contemporary",
    description: "Print, embroidery, and colour worn in a modern silhouette. A point of view, not a costume.",
    image: "/images/library/1531123897727-8f129e1688ce.jpg",
    imageAlt: "A woman wearing a purple wax-print shirt with a white collar and silver chains",
  },
  {
    slug: "everyday-accessories",
    name: "Everyday Accessories",
    description: "The small things that finish a look: a belt, a watch, a bag, a pair of glasses.",
    image: "/images/library/1515562141207-7a88fb7ce338.jpg",
    imageAlt: "A pearl necklace resting in an open jewellery box",
  },
  {
    slug: "the-weekend-collection",
    name: "The Weekend Collection",
    description: "Lighter dresses, easy layers, and shoes that can cross a city without fuss.",
    image: "/images/library/1496747611176-843222e1e57c.jpg",
    imageAlt: "A floral wrap dress and woven bag photographed beside the sea",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function collectionName(slug: string): string {
  return getCollection(slug)?.name ?? slug;
}
