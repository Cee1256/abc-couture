import { ProductDetail } from "@/components/bloom/ProductDetail";
import { bloomProducts, getBloomProduct } from "@/lib/bloom-products";

export function generateStaticParams() {
  return bloomProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getBloomProduct(slug);
  return {
    title: product ? product.name : "Piece not found",
    description: product?.description ?? "This piece is not in the BLOOM edit.",
  };
}

export default function ProductPage() {
  return <ProductDetail />;
}
