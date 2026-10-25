import { brand } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function BrandIntro() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image
            src={brand.logo}
            alt={brand.logoAlt}
            width={640}
            height={420}
            className="h-auto w-full max-w-md bg-ivory object-contain"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">{brand.tagline}</p>
          <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Clothes with a point of view.</h2>
          <p className="mt-5 text-sm leading-7 text-charcoal">
            {brand.name} edits clothing and accessories for people who prefer clarity. The pieces are sample catalogue work for this storefront, priced in Ghana cedis, and ready to be replaced when the final collection is supplied.
          </p>
          <Button href="/about" variant="line" className="mt-8">
            About the brand
          </Button>
        </div>
      </Container>
    </section>
  );
}
