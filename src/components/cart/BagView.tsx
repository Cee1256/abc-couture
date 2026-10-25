"use client";

import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Price } from "@/components/ui/Price";
import { useState } from "react";

export function BagView() {
  const { lines, hydrated, subtotal, count, clearBag } = useCart();
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <Container className="py-10 sm:py-14">
      <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Bag</p>
      <h1 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Shopping bag</h1>

      {!hydrated ? (
        <p className="mt-10 text-sm text-charcoal">Opening your bag…</p>
      ) : lines.length === 0 ? (
        <div className="mt-12 max-w-lg border-t border-stone pt-10">
          <p className="font-serif text-4xl">Nothing here yet.</p>
          <p className="mt-4 text-sm leading-6 text-charcoal">
            The edit is waiting. Choose a piece, a size, and a colour, then add it to the bag.
          </p>
          <Button href="/shop" className="mt-8">
            Continue shopping
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div>
            <p className="text-sm text-charcoal">
              {count} {count === 1 ? "piece" : "pieces"}
            </p>
            {lines.map((line) => (
              <CartItem key={line.id} line={line} />
            ))}
            <div className="mt-6">
              {confirmClear ? (
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <p>Remove every piece from the bag?</p>
                  <button
                    type="button"
                    className="text-[11px] uppercase tracking-[0.16em] underline"
                    onClick={() => {
                      clearBag();
                      setConfirmClear(false);
                    }}
                  >
                    Clear bag
                  </button>
                  <button
                    type="button"
                    className="text-[11px] uppercase tracking-[0.16em] underline"
                    onClick={() => setConfirmClear(false)}
                  >
                    Keep pieces
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="text-[11px] uppercase tracking-[0.16em] underline"
                  onClick={() => setConfirmClear(true)}
                >
                  Clear bag
                </button>
              )}
            </div>
          </div>
          <aside className="border border-stone p-6 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl">Summary</h2>
            <div className="mt-6 flex items-baseline justify-between border-t border-stone pt-4">
              <span className="text-[11px] uppercase tracking-[0.16em]">Subtotal</span>
              <Price amount={subtotal} />
            </div>
            <p className="mt-2 text-xs leading-5 text-charcoal">Prices are in Ghana cedis. Delivery is not calculated.</p>
            <div className="mt-6 border border-stone bg-paper p-4">
              <p className="text-[11px] uppercase tracking-[0.16em]">Checkout coming soon</p>
              <p className="mt-2 text-sm leading-6 text-charcoal">
                This is a demonstration bag. No payment is taken and no order is placed.
              </p>
            </div>
            <Button href="/shop" variant="ghost" className="mt-4 w-full">
              Continue shopping
            </Button>
          </aside>
        </div>
      )}
    </Container>
  );
}
