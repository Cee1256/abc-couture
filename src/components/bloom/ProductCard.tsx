import type { BloomProduct } from "@/lib/bloom-products";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }: { product: BloomProduct }) {
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} />
        {product.tag ? <span className="product-tag">{product.tag}</span> : null}
        <span className="product-quick" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </Link>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <Link href={`/product/${product.slug}`} className="product-name">
            {product.name}
          </Link>
        </div>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
      <div className="swatches">
        {product.colors.map((color) => (
          <i key={color} style={{ backgroundColor: color }} />
        ))}
        <span>+ DETAILS</span>
      </div>
    </article>
  );
}
