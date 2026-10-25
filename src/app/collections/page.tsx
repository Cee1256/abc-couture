import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { collections } from "@/data/collections";
import { pageMetadata } from "@/lib/metadata";
import { getByCollection } from "@/lib/products";
import Link from "next/link";

export const metadata = pageMetadata(
  "Collections",
  "Explore ABC Couture collections, from essentials and evening dressing to contemporary pieces.",
  "/collections",
);

export default function CollectionsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Lookbooks</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Collections</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal">
        Eight edits, each with its own reason for being. Open one to see only the pieces that belong there.
      </p>
      <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {collections.map((collection, index) => {
          const count = getByCollection(collection.slug).length;
          return (
            <li key={collection.slug} className={index === 0 ? "sm:col-span-2" : undefined}>
              <article>
                <Link href={`/collections/${collection.slug}`} className="group block">
                  <div className={`relative overflow-hidden bg-[#e7e1d8] ${index === 0 ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[4/3]"}`}>
                    <ProductImage
                      src={collection.image}
                      alt={collection.imageAlt}
                      sizes={index === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                      priority={index === 0}
                      className="media-zoom object-cover"
                    />
                  </div>
                  <h2 className="mt-4 font-serif text-3xl sm:text-4xl">{collection.name}</h2>
                </Link>
                <p className="mt-2 max-w-md text-sm leading-6 text-charcoal">{collection.description}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-taupe">
                  {count} {count === 1 ? "piece" : "pieces"}
                </p>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="mt-3 inline-block text-[11px] uppercase tracking-[0.16em] underline"
                >
                  Explore collection
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
