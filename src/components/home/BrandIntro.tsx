import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { brand } from "@/config/brand";

export function BrandIntro() {
  return (
    <section className="border-t border-stone py-14 sm:py-16 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 items-end gap-3 md:relative md:block md:h-[540px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper md:absolute md:bottom-6 md:left-0 md:z-10 md:aspect-auto md:h-[280px] md:w-[42%]">
            <ProductImage
              src="/campaign/about-portrait.jpg"
              alt="Close portrait of a woman in a black scarf"
              sizes="(min-width: 768px) 18vw, 46vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden bg-paper md:absolute md:right-0 md:top-0 md:aspect-auto md:h-[500px] md:w-[68%]">
            <ProductImage
              src="/campaign/about-gown.jpg"
              alt="Woman in a black gown with a high slit"
              sizes="(min-width: 768px) 34vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <h2 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">About us</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-charcoal">
            <p>
              {brand.name} edits clothing and accessories for a darker, more defined wardrobe. Clear shapes, strong cloth, and pieces that hold their own without decoration.
            </p>
            <p>
              The catalogue is sample work for this storefront, priced in Ghana cedis. This is a point of view, not a company history. It does not claim awards, a founding year, or a street address.
            </p>
          </div>
          <Button href="/contact" className="mt-8">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
