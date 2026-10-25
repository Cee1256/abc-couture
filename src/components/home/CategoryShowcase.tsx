import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import Link from "next/link";

const categories = [
  {
    title: "Women's Wear",
    href: "/shop?category=womens-clothing",
    image: "/images/library/1571513722275-4b41940f54b8.jpg",
    alt: "Woman in an ivory tailored suit",
    large: true,
  },
  {
    title: "Men's Wear",
    href: "/shop?category=mens-clothing",
    image: "/images/library/1552374196-1ab2a1c593e8.jpg",
    alt: "Man in a camel overcoat",
  },
  {
    title: "Shoes",
    href: "/shop?category=shoes",
    image: "/images/library/1608256246200-53e635b5b65f.jpg",
    alt: "Chestnut leather cap-toe boots",
  },
  {
    title: "Bags",
    href: "/shop?category=bags",
    image: "/images/library/1566150905458-1bf1fc113f0d.jpg",
    alt: "Pale pink structured shoulder bag",
  },
  {
    title: "Accessories",
    href: "/shop?category=all-accessories",
    image: "/images/library/1511499767150-a48a237f0083.jpg",
    alt: "Round metal sunglasses on marble",
  },
  {
    title: "Contemporary Essentials",
    href: "/collections/the-essentials-edit",
    image: "/images/library/1490481651871-ab68de25d43d.jpg",
    alt: "A rail of light shirts and knits",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">The edit</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl leading-none sm:text-5xl">Six ways into the wardrobe.</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <li key={category.title} className={category.large ? "col-span-2" : undefined}>
              <Link href={category.href} className="group block">
                <div className={`relative overflow-hidden bg-[#e7e1d8] ${category.large ? "aspect-[4/5] sm:aspect-[5/4]" : "aspect-[3/4]"}`}>
                  <ProductImage
                    src={category.image}
                    alt={category.alt}
                    sizes={category.large ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1024px) 22vw, 50vw"}
                    className="media-zoom object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-ivory px-3 py-2 font-serif text-2xl leading-none sm:text-3xl">
                    {category.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
