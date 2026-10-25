import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

function Shot({
  src,
  alt,
  className,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div className={`relative bg-[#1a1a1a] ${className ?? ""}`}>
      <ProductImage src={src} alt={alt} sizes={sizes} priority={priority} className="object-cover object-center" />
    </div>
  );
}

export function Hero() {
  return (
    <section>
      <div className="grid lg:grid-cols-3">
        <Shot
          src="/campaign/hero-left.jpg"
          alt="Woman in a black strapless dress and heels, one knee raised"
          sizes="(min-width: 1024px) 34vw, 50vw"
          className="hidden min-h-[78vh] lg:block lg:max-h-[860px]"
        />
        <div className="relative min-h-[78vh] lg:max-h-[860px]">
          <ProductImage
            src="/campaign/hero-center.jpg"
            alt="Woman in a black dress with sheer sleeves, arms raised"
            sizes="(min-width: 1024px) 34vw, 100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 top-[22%] bottom-[4%] flex flex-col items-center justify-center bg-[#070707] px-4 text-center">
            <p className="font-serif text-5xl italic leading-none text-ink sm:text-6xl">New</p>
            <h1 className="mt-1 font-serif text-[2.8rem] font-medium uppercase leading-[0.82] tracking-[0.02em] text-ink sm:text-6xl lg:text-[4rem]">
              Noir
              <br />
              Collection
            </h1>
            <p className="mt-4 border border-ink px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-ink">
              The dark edit
            </p>
            <Button href="/shop" className="mt-4">
              Shop now
            </Button>
          </div>
        </div>
        <Shot
          src="/campaign/hero-right.jpg"
          alt="Close crop of black pointed heels"
          sizes="(min-width: 1024px) 34vw, 50vw"
          className="hidden min-h-[78vh] lg:block lg:max-h-[860px]"
        />
      </div>
      <div className="grid grid-cols-2 lg:hidden">
        <Shot
          src="/campaign/hero-left.jpg"
          alt="Woman in a black strapless dress and heels, one knee raised"
          sizes="50vw"
          className="min-h-[42vh]"
        />
        <Shot
          src="/campaign/hero-right.jpg"
          alt="Close crop of black pointed heels"
          sizes="50vw"
          className="min-h-[42vh]"
        />
      </div>
    </section>
  );
}
