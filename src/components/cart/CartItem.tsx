"use client";

import { Price } from "@/components/ui/Price";
import { ProductImage } from "@/components/ui/ProductImage";
import { useCart } from "@/components/cart/CartProvider";
import { getProductById } from "@/lib/products";
import type { CartLine } from "@/types/cart";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";

export function CartItem({ line, compact = false }: { line: CartLine; compact?: boolean }) {
  const { setQuantity, removeItem } = useCart();
  const product = getProductById(line.productId);
  if (!product) return null;
  const lineTotal = product.price * line.quantity;
  const atMax = line.quantity >= product.stock;

  return (
    <article className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-stone py-5 sm:grid-cols-[7rem_1fr]">
      <Link href={`/products/${product.slug}`} aria-label={product.name} className="relative block aspect-[3/4] bg-[#e7e1d8]">
        <ProductImage
          src={product.images[0]?.src ?? ""}
          alt={product.images[0]?.alt ?? product.name}
          sizes="120px"
        />
      </Link>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl leading-none">
              <Link href={`/products/${product.slug}`} className="hover:underline">
                {product.name}
              </Link>
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-charcoal">
              {line.color ? <span>{line.color}</span> : null}
              {line.color && line.size ? <span aria-hidden="true"> · </span> : null}
              {line.size ? <span>Size {line.size}</span> : null}
            </p>
          </div>
          <button type="button" onClick={() => removeItem(line.id)} aria-label={`Remove ${product.name}`} className="grid size-8 place-items-center">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div className="flex items-center border border-stone">
            <button
              type="button"
              className="grid size-9 place-items-center"
              aria-label={`Decrease quantity of ${product.name}`}
              onClick={() => setQuantity(line.id, line.quantity - 1)}
            >
              <Minus className="size-3.5" aria-hidden="true" />
            </button>
            <label className="sr-only" htmlFor={`qty-${line.id}`}>
              Quantity for {product.name}
            </label>
            <input
              id={`qty-${line.id}`}
              inputMode="numeric"
              className="w-10 bg-transparent text-center text-sm outline-none"
              value={line.quantity}
              onChange={(event) => setQuantity(line.id, Number(event.target.value))}
            />
            <button
              type="button"
              className="grid size-9 place-items-center disabled:opacity-30"
              aria-label={`Increase quantity of ${product.name}`}
              disabled={atMax}
              onClick={() => setQuantity(line.id, line.quantity + 1)}
            >
              <Plus className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <div className="text-right text-sm">
            {!compact ? (
              <p className="text-xs text-taupe">
                <Price amount={product.price} /> each
              </p>
            ) : null}
            <p className="mt-1">
              <Price amount={lineTotal} />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
