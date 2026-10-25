import { brand } from "@/config/brand";
import { sanitizeCart } from "@/lib/cart";
import type { CartLine } from "@/types/cart";

type CartState = {
  lines: CartLine[];
  hydrated: boolean;
};

const serverState: CartState = { lines: [], hydrated: false };
let state: CartState = serverState;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStorage(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(brand.cartStorageKey);
    return raw ? sanitizeCart(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    if (!state.hydrated && typeof window !== "undefined") {
      state = { lines: readStorage(), hydrated: true };
      queueMicrotask(emit);
    }
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot() {
    return state;
  },
  getServerSnapshot() {
    return serverState;
  },
  setLines(lines: CartLine[]) {
    state = { lines, hydrated: true };
    if (typeof window !== "undefined") {
      window.localStorage.setItem(brand.cartStorageKey, JSON.stringify(lines));
    }
    emit();
  },
};
