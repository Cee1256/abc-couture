import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getBestsellers } from "@/lib/products";

export function Bestsellers() {
  const products = getBestsellers(4);
  return (
    <section className="border-t border-stone py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Most requested</p>
          <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Bestsellers</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-charcoal">
            A few pieces people return to. The rest of the edit is deliberately quieter.
          </p>
          <Button href="/shop?bestseller=1" variant="line" className="mt-6">
            Browse bestsellers
          </Button>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:col-span-8">
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
