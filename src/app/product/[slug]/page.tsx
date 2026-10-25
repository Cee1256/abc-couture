import { ProductDetail } from "@/components/maison/ProductDetail";
import { getMaisonProduct, maisonProducts } from "@/lib/maison-products";

export function generateStaticParams() {
  return maisonProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getMaisonProduct(slug);
  return {
    title: product ? product.name : "Piece not found",
    description: product?.description ?? "This piece is not in the Maison Noir edit.",
  };
}

export default function ProductPage() {
  return <ProductDetail />;
}
