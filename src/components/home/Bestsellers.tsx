import { ProductCard } from "@/components/shop/ProductCard";
import { Container } from "@/components/ui/Container";
import { getBestsellers } from "@/lib/products";
import Link from "next/link";

export function Bestsellers() {
  const products = getBestsellers(4);
  return (
    <section className="border-t border-stone py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl uppercase tracking-[0.12em] sm:text-4xl">
            Shop the faves <span aria-hidden="true">◆</span>
          </h2>
          <Link href="/shop?bestseller=1" className="shrink-0 text-[11px] uppercase tracking-[0.16em] underline underline-offset-4">
            View all
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
