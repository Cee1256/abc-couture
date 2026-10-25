import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import Link from "next/link";

const categories = [
  {
    title: "Winter couture",
    href: "/shop?category=womens-clothing",
    image: "/campaign/cat-1.jpg",
    alt: "Woman in a long black coat",
  },
  {
    title: "Accessories",
    href: "/shop?category=bags",
    image: "/campaign/cat-2.jpg",
    alt: "Black handbag with a gold chain",
  },
  {
    title: "Summer couture",
    href: "/shop?category=dresses",
    image: "/campaign/cat-3.jpg",
    alt: "Woman in black loungewear on a white sofa",
  },
  {
    title: "Jewellery",
    href: "/shop?category=jewellery",
    image: "/campaign/cat-4.jpg",
    alt: "Gold hoop earrings",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <Container>
        <h2 className="text-center font-serif text-[1.7rem] uppercase tracking-[0.16em] sm:text-4xl">Shop categories</h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li key={category.title}>
              <Link href={category.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                  <ProductImage
                    src={category.image}
                    alt={category.alt}
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="media-zoom object-cover"
                  />
                </div>
                <span className="mt-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em]">
                  {category.title}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
