import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

export function EditorialSection() {
  return (
    <section className="grid lg:grid-cols-12">
      <div className="relative min-h-[70vh] bg-paper lg:col-span-7">
        <ProductImage
          src="/images/library/1589156280159-27698a70f29e.jpg"
          alt="A woman in a white sweatshirt looking over a city at dusk"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <div className="flex flex-col justify-center bg-paper px-4 py-14 sm:px-8 lg:col-span-5 lg:px-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Editorial</p>
        <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">The art of everyday dressing.</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-charcoal">
          A good day of clothes is usually a short one: a clear shape, a cloth that feels right, and nothing added for the sake of it.
        </p>
        <Button href="/collections/the-essentials-edit" variant="line" className="mt-8">
          Read the essentials
        </Button>
      </div>
    </section>
  );
}
