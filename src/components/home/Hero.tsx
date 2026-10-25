import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

export function Hero() {
  return (
    <section className="grid lg:min-h-[88vh] lg:grid-cols-12">
      <div className="relative order-1 min-h-[72vh] bg-[#e7e1d8] lg:order-2 lg:col-span-7 lg:min-h-[88vh]">
        <ProductImage
          src="/images/library/1618244972963-dbee1a7edc95.jpg"
          alt="A woman in an olive column dress and camel coat standing against a dark facade"
          sizes="(min-width: 1024px) 58vw, 100vw"
          priority
          className="object-cover object-[center_20%]"
        />
      </div>
      <div className="order-2 flex flex-col justify-end px-4 py-12 sm:px-6 lg:order-1 lg:col-span-5 lg:px-10 lg:py-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">New season</p>
        <h1 className="mt-4 max-w-md font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
          Style without excess.
        </h1>
        <p className="mt-5 max-w-sm text-base leading-7 text-charcoal">Considered pieces. Effortless expression.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href="/shop">Shop the collection</Button>
          <Button href="/collections" variant="line">
            Explore the edit
          </Button>
        </div>
      </div>
    </section>
  );
}
