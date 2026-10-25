export type BloomCartLine = {
  slug: string;
  qty: number;
  size: string;
};

export const BLOOM_CART_KEY = "bloom-cart";
export const BLOOM_CART_EVENT = "bloom-cart-updated";

export function readBloomCart(): BloomCartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(BLOOM_CART_KEY) || "[]") as BloomCartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.slug === "string" &&
        typeof line.size === "string" &&
        typeof line.qty === "number" &&
        line.qty > 0,
    );
  } catch {
    return [];
  }
}

export function writeBloomCart(lines: BloomCartLine[]) {
  localStorage.setItem(BLOOM_CART_KEY, JSON.stringify(lines));
  window.dispatchEvent(new Event(BLOOM_CART_EVENT));
}

export function bloomCartCount(lines: BloomCartLine[]) {
  return lines.reduce((total, line) => total + line.qty, 0);
}
