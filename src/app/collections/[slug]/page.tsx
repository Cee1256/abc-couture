import { ProductGrid } from "@/components/shop/ProductGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/ui/ProductImage";
import { collections, getCollection } from "@/data/collections";
import { getByCollection } from "@/lib/products";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection not found" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-[11px] uppercase tracking-[0.18em] text-taupe">Loading</p>}>
      <CollectionContent params={params} />
    </Suspense>
  );
}

async function CollectionContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const products = getByCollection(collection.slug);

  return (
    <>
      <div className="relative min-h-[52vh] bg-[#e7e1d8]">
        <ProductImage
          src={collection.image}
          alt={collection.imageAlt}
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <Container className="py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: collection.name },
          ]}
        />
        <h1 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">{collection.name}</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal">{collection.description}</p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-taupe">
          {products.length} {products.length === 1 ? "piece" : "pieces"}
        </p>
        <div className="mt-10">
          {products.length > 0 ? (
            <ProductGrid products={products} priorityCount={2} />
          ) : (
            <p className="text-sm">This collection does not have pieces yet.</p>
          )}
        </div>
        <Link href="/collections" className="mt-12 inline-block text-[11px] uppercase tracking-[0.16em] underline">
          All collections
        </Link>
      </Container>
    </>
  );
}
