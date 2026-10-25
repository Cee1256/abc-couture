"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { primaryCategory } from "@/lib/products";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.availableSizes.length === 1 ? product.availableSizes[0] : "");
  const [color, setColor] = useState(product.availableColors.length === 1 ? product.availableColors[0].name : "");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  const soldOut = !product.available || product.stock < 1;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAdded(false);
    const result = addItem({
      productId: product.id,
      size: size || null,
      color: color || null,
      quantity,
    });
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    setAdded(true);
  }

  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-taupe">{primaryCategory(product)}</p>
      <h1 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">{product.name}</h1>
      <Price amount={product.price} className="mt-4 block text-lg" />
      <p className="mt-5 max-w-md text-sm leading-6 text-charcoal">{product.description}</p>
      <p className="mt-3 text-sm">
        {soldOut ? (
          <span className="uppercase tracking-[0.14em] text-taupe">Sold out</span>
        ) : (
          <span>{product.stock} available</span>
        )}
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
        {product.availableColors.length > 0 ? (
          <fieldset>
            <legend className="text-[11px] uppercase tracking-[0.18em]">Colour</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.availableColors.map((option) => {
                const selected = color === option.name;
                return (
                  <label key={option.name} className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={option.name}
                      checked={selected}
                      onChange={() => setColor(option.name)}
                      className="sr-only"
                      disabled={soldOut}
                    />
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 border px-3 py-2 text-sm",
                        selected ? "border-ink" : "border-stone",
                      )}
                    >
                      <span className="size-3 rounded-full border border-stone" style={{ backgroundColor: option.hex }} />
                      {option.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {product.availableSizes.length > 0 ? (
          <fieldset>
            <legend className="text-[11px] uppercase tracking-[0.18em]">Size</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.availableSizes.map((option) => {
                const selected = size === option;
                return (
                  <label key={option} className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      checked={selected}
                      onChange={() => setSize(option)}
                      className="sr-only"
                      disabled={soldOut}
                    />
                    <span className={cn("inline-flex min-w-12 justify-center border px-3 py-2 text-sm", selected ? "border-ink bg-ink text-ivory" : "border-stone")}>
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em]">Quantity</p>
          <div className="mt-3 flex w-fit items-center border border-stone">
            <button
              type="button"
              className="grid size-10 place-items-center"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              disabled={soldOut}
            >
              <Minus className="size-3.5" aria-hidden="true" />
            </button>
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <input
              id="quantity"
              inputMode="numeric"
              className="w-12 bg-transparent text-center text-sm outline-none"
              value={quantity}
              disabled={soldOut}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (!Number.isFinite(next)) return;
                setQuantity(Math.min(product.stock || 1, Math.max(1, Math.floor(next))));
              }}
            />
            <button
              type="button"
              className="grid size-10 place-items-center disabled:opacity-30"
              aria-label="Increase quantity"
              disabled={soldOut || quantity >= product.stock}
              onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}
            >
              <Plus className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {error ? (
          <p role="alert" className="text-sm text-charcoal">
            {error}
          </p>
        ) : null}
        {added ? (
          <p role="status" className="text-sm">
            Added to your bag.
          </p>
        ) : null}

        <Button type="submit" disabled={soldOut} className="w-full sm:w-auto">
          {soldOut ? "Sold out" : "Add to bag"}
        </Button>
      </form>
    </div>
  );
}
