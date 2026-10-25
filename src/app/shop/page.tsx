import { ShopResults } from "@/components/shop/ShopResults";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const metadata = pageMetadata(
  "Shop",
  "Browse the ABC Couture edit of clothing, shoes, bags, and accessories, priced in Ghana cedis.",
  "/shop",
);

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <Container className="py-10 sm:py-14">
      <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Catalogue</p>
      <h1 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">The shop</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal">
        Clothing, shoes, bags, and accessories. Filter by category, price, or what has just arrived.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-charcoal">Loading the edit…</p>}>
          <ShopResults searchParams={searchParams} />
        </Suspense>
      </div>
    </Container>
  );
}
