"use client";

import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Price } from "@/components/ui/Price";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function CartDrawer() {
  const { lines, drawerOpen, closeDrawer, subtotal, hydrated, count } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  return (
    <Dialog open={drawerOpen} onClose={closeDrawer} title="Shopping bag" align="right">
      {!hydrated ? (
        <p className="px-5 py-8 text-sm text-charcoal">Opening your bag…</p>
      ) : lines.length === 0 ? (
        <div className="px-5 py-10">
          <p className="font-serif text-3xl">Your bag is empty.</p>
          <p className="mt-3 text-sm leading-6 text-charcoal">When you add a piece, it will wait here.</p>
          <Button href="/shop" className="mt-8" onClick={closeDrawer}>
            Continue shopping
          </Button>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="flex-1 px-5">
            <p className="pt-4 text-[11px] uppercase tracking-[0.16em] text-taupe">
              {count} {count === 1 ? "piece" : "pieces"}
            </p>
            {lines.map((line) => (
              <CartItem key={line.id} line={line} compact />
            ))}
          </div>
          <div className="border-t border-stone px-5 py-5">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em]">Subtotal</span>
              <Price amount={subtotal} className="text-lg" />
            </div>
            <p className="mt-3 text-xs leading-5 text-charcoal">
              Checkout is coming soon. This bag is a demonstration: no payment is taken and no order is placed.
            </p>
            <Button href="/bag" className="mt-5 w-full">
              Review bag
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}
