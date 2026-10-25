import { ProductGrid } from "@/components/shop/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNewArrivals } from "@/lib/products";

export function NewArrivals() {
  const products = getNewArrivals(8);
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Just arrived"
          title="New arrivals"
          text="A short list of pieces added to the current edit."
          action={
            <Button href="/shop?new=1" variant="line">
              View all new arrivals
            </Button>
          }
        />
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
