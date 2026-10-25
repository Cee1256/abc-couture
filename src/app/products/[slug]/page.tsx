import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";
import { categoryLabel } from "@/data/categories";
import { products } from "@/data/products";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0].src, alt: product.images[0].alt }] : undefined,
    },
  };
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<p className="px-4 py-16 text-[11px] uppercase tracking-[0.18em] text-taupe">Loading</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);
  const category = product.categories[0];
  const imageUrl = brand.siteUrl && product.images[0] ? new URL(product.images[0].src, brand.siteUrl).toString() : product.images[0]?.src;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: imageUrl,
    brand: { "@type": "Brand", name: brand.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "GHS",
      price: product.price,
      availability: product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <Container className="py-8 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          ...(category
            ? [{ label: categoryLabel(category), href: `/shop?category=${category}` }]
            : []),
          { label: product.name },
        ]}
      />
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />
        <div>
          <ProductPurchase product={product} />
          <div className="mt-12 space-y-8 border-t border-stone pt-8">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.18em]">Details</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-charcoal">{product.details}</p>
            </div>
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.18em]">Care</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-charcoal">{product.care}</p>
            </div>
          </div>
          <Link href="/shop" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] underline">
            Return to shop
          </Link>
        </div>
      </div>
      <RelatedProducts products={related} />
    </Container>
  );
}
