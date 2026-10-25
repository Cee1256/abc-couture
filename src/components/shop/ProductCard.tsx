"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Price } from "@/components/ui/Price";
import { ProductImage } from "@/components/ui/ProductImage";
import { primaryCategory } from "@/lib/products";
import type { Product } from "@/types/product";
import Link from "next/link";
import { useState } from "react";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  const [message, setMessage] = useState("");
  const image = product.images[0];
  const simple = product.availableSizes.length <= 1 && product.availableColors.length <= 1;
  const soldOut = !product.available || product.stock < 1;

  function quickAdd() {
    const result = addItem({
      productId: product.id,
      size: product.availableSizes[0] ?? null,
      color: product.availableColors[0]?.name ?? null,
      quantity: 1,
    });
    if (!result.ok) setMessage(result.message);
  }

  return (
    <article className="group">
      <Link
        href={`/products/${product.slug}`}
        aria-label={product.name}
        className="relative block aspect-[3/4] overflow-hidden bg-[#e7e1d8]"
      >
        {product.isNew ? (
          <span aria-hidden="true" className="absolute left-3 top-3 z-10 bg-ivory px-2 py-1 text-[10px] uppercase tracking-[0.16em]">
            New
          </span>
        ) : null}
        {soldOut ? (
          <span aria-hidden="true" className="absolute right-3 top-3 z-10 bg-ink px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory">
            Sold out
          </span>
        ) : null}
        <ProductImage
          src={image?.src ?? ""}
          alt={image?.alt ?? product.name}
          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 33vw, 50vw"
          priority={priority}
          className="media-zoom object-cover"
        />
      </Link>
      <div className="pt-3">
        <p className="text-[10px] uppercase tracking-[0.16em] text-taupe">{primaryCategory(product)}</p>
        <h3 className="mt-1 font-serif text-2xl leading-tight">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center justify-between gap-3">
          <Price amount={product.price} className="text-sm" />
          {product.availableColors.length > 0 ? (
            <ul className="flex items-center gap-1.5" aria-label="Available colours">
              {product.availableColors.map((color) => (
                <li key={color.name}>
                  <span
                    className="block size-2.5 rounded-full border border-stone"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    <span className="sr-only">{color.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="mt-3">
          {soldOut ? (
            <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Unavailable</p>
          ) : simple ? (
            <button type="button" onClick={quickAdd} className="text-[11px] uppercase tracking-[0.16em] underline underline-offset-4">
              Add to bag
            </button>
          ) : (
            <Link href={`/products/${product.slug}`} className="text-[11px] uppercase tracking-[0.16em] underline underline-offset-4">
              Select options
            </Link>
          )}
          {message ? (
            <p role="alert" className="mt-2 text-xs text-charcoal">
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
