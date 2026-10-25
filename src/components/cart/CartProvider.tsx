"use client";

import { addLine, lineSubtotal, lineUnits, updateLineQuantity } from "@/lib/cart";
import { cartStore } from "@/lib/cart-store";
import type { AddToBagInput, CartLine, CartResult } from "@/types/cart";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";

type Notice = { id: number; message: string; href?: string };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  drawerOpen: boolean;
  notice: Notice | null;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (input: AddToBagInput) => CartResult;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearBag: () => void;
  dismissNotice: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const lines = snapshot.lines;
  const hydrated = snapshot.hydrated;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const showNotice = useCallback((message: string, href?: string) => {
    setNotice({ id: Date.now(), message, href });
  }, []);

  const addItem = useCallback(
    (input: AddToBagInput) => {
      const next = addLine(cartStore.getSnapshot().lines, input);
      if (next.result.ok) {
        cartStore.setLines(next.lines);
        showNotice(`${next.result.name} added to your bag.`, "/bag");
      }
      return next.result;
    },
    [showNotice],
  );

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    cartStore.setLines(updateLineQuantity(cartStore.getSnapshot().lines, id, quantity));
  }, []);

  const removeItem = useCallback(
    (id: string) => {
      cartStore.setLines(cartStore.getSnapshot().lines.filter((line) => line.id !== id));
      showNotice("Removed from your bag.");
    },
    [showNotice],
  );

  const clearBag = useCallback(() => {
    cartStore.setLines([]);
    showNotice("Your bag is clear.");
  }, [showNotice]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: hydrated ? lineUnits(lines) : 0,
      subtotal: lineSubtotal(lines),
      hydrated,
      drawerOpen,
      notice,
      openDrawer,
      closeDrawer,
      addItem,
      setQuantity,
      removeItem,
      clearBag,
      dismissNotice: () => setNotice(null),
    }),
    [addItem, clearBag, closeDrawer, drawerOpen, hydrated, lines, notice, openDrawer, removeItem, setQuantity],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {notice ? (
        <div
          key={notice.id}
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 z-[60] flex items-center justify-between gap-4 border border-stone bg-ivory px-4 py-3 text-sm shadow-none sm:left-auto sm:w-[24rem]"
        >
          <p>{notice.message}</p>
          <div className="flex shrink-0 items-center gap-3">
            {notice.href ? (
              <a href={notice.href} className="text-[11px] uppercase tracking-[0.16em] underline">
                View bag
              </a>
            ) : null}
            <button type="button" onClick={() => setNotice(null)} className="text-[11px] uppercase tracking-[0.16em]">
              Close
            </button>
          </div>
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
