import { ProductGrid } from "@/components/shop/ProductGrid";
import { Container } from "@/components/ui/Container";
import { getNewArrivals } from "@/lib/products";
import Link from "next/link";

export function NewArrivals() {
  const products = getNewArrivals(8);
  return (
    <section className="border-t border-stone py-14 sm:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl uppercase tracking-[0.12em] sm:text-4xl">New arrivals</h2>
          <Link href="/shop?new=1" className="shrink-0 text-[11px] uppercase tracking-[0.16em] underline underline-offset-4">
            View all
          </Link>
        </div>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}
