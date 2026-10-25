import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { brand } from "@/config/brand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About the brand",
  "The point of view behind ABC Couture: considered clothes, clear shapes, and nothing invented about the studio’s past.",
  "/about",
);

const principles = [
  {
    number: "01",
    title: "Proportion",
    text: "A shoulder, a hem, a sleeve. If the shape is right, the piece does not need decoration.",
  },
  {
    number: "02",
    title: "Cloth",
    text: "Colour and texture should be readable up close. The edit prefers cloth you would wear twice in a week.",
  },
  {
    number: "03",
    title: "Restraint",
    text: "Fewer pieces, chosen carefully. A wardrobe can be expressive without being loud.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-12 sm:py-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">{brand.tagline}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-7xl">
          Dressing, considered.
        </h1>
      </Container>
      <div className="relative min-h-[60vh] bg-[#e7e1d8]">
        <ProductImage
          src="/images/library/1441984904996-e0b6ba687e04.jpg"
          alt="Clothing rails in a bright room, used here as an editorial photograph"
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl leading-none">A point of view, not a history.</h2>
        </div>
        <div className="max-w-xl space-y-5 text-sm leading-7 text-charcoal lg:col-span-6 lg:col-start-7">
          <p>
            {brand.name} is a clothing and accessories studio for people who prefer clarity. The edit is small on purpose: tailored forms, considered cloth, and pieces that can be worn again tomorrow.
          </p>
          <p>
            The work is for warm days, long evenings, and the confidence of getting dressed with less. Nothing here asks you to perform. The clothes should feel precise, then disappear into the day.
          </p>
          <p>
            This page introduces that point of view. It is not a company history. It does not claim awards, certifications, a founding year, or a street address, because none of those have been supplied.
          </p>
        </div>
      </Container>
      <section className="border-t border-stone">
        <Container className="grid gap-10 py-16 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.number}>
              <p className="font-serif text-4xl text-taupe">{principle.number}</p>
              <h2 className="mt-4 font-serif text-3xl">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal">{principle.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[60vh] bg-[#e7e1d8]">
          <ProductImage
            src="/images/library/1490481651871-ab68de25d43d.jpg"
            alt="Light shirts and knits hanging in a row"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-14 sm:px-10">
          <h2 className="font-serif text-4xl leading-none sm:text-5xl">Quality is repetition.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-charcoal">
            A piece earns its place when it can be worn on an ordinary Tuesday and still feel right on a Friday. Personal style, here, is the habit of choosing well rather than choosing more.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Button href="/shop">Shop the edit</Button>
            <Button href="/contact" variant="line">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
