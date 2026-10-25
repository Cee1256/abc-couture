import { getProductById } from "@/lib/products";
import type { AddToBagInput, CartLine, CartResult } from "@/types/cart";

export function cartLineId(productId: string, size: string | null, color: string | null): string {
  return `${productId}::${size ?? ""}::${color ?? ""}`;
}

export function lineUnits(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.quantity, 0);
}

export function lineSubtotal(lines: CartLine[]): number {
  return lines.reduce((total, line) => {
    const product = getProductById(line.productId);
    if (!product) return total;
    return total + product.price * line.quantity;
  }, 0);
}

export function sanitizeCart(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return [];
  const lines: CartLine[] = [];

  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const candidate = entry as Partial<CartLine>;
    if (typeof candidate.productId !== "string") continue;
    const product = getProductById(candidate.productId);
    if (!product || !product.available || product.stock < 1) continue;

    const size = typeof candidate.size === "string" ? candidate.size : null;
    const color = typeof candidate.color === "string" ? candidate.color : null;
    if (product.availableSizes.length > 0 && (!size || !product.availableSizes.includes(size))) {
      continue;
    }
    if (size && product.availableSizes.length === 0) continue;
    if (color && !product.availableColors.some((option) => option.name === color)) continue;
    if (!color && product.availableColors.length > 1) continue;

    const quantity = typeof candidate.quantity === "number" ? Math.floor(candidate.quantity) : 0;
    if (quantity < 1) continue;

    const resolvedColor = color ?? product.availableColors[0]?.name ?? null;
    lines.push({
      id: cartLineId(product.id, size, resolvedColor),
      productId: product.id,
      size,
      color: resolvedColor,
      quantity: Math.min(quantity, product.stock),
    });
  }

  return lines;
}

export function addLine(lines: CartLine[], input: AddToBagInput): { lines: CartLine[]; result: CartResult } {
  const product = getProductById(input.productId);
  if (!product || !product.available || product.stock < 1) {
    return { lines, result: { ok: false, message: "This piece is currently unavailable." } };
  }

  const quantity = Math.floor(input.quantity);
  if (!Number.isFinite(quantity) || quantity < 1) {
    return { lines, result: { ok: false, message: "Enter a quantity of at least 1." } };
  }

  if (product.availableSizes.length > 0 && !input.size) {
    return { lines, result: { ok: false, message: "Select a size before adding this piece." } };
  }
  if (input.size && !product.availableSizes.includes(input.size)) {
    return { lines, result: { ok: false, message: "That size is not available." } };
  }
  if (product.availableColors.length > 1 && !input.color) {
    return { lines, result: { ok: false, message: "Select a colour before adding this piece." } };
  }
  if (input.color && !product.availableColors.some((option) => option.name === input.color)) {
    return { lines, result: { ok: false, message: "That colour is not available." } };
  }

  const color = input.color ?? product.availableColors[0]?.name ?? null;
  const size = product.availableSizes.length > 0 ? input.size : null;
  const id = cartLineId(product.id, size, color);
  const existing = lines.find((line) => line.id === id);
  const nextQuantity = (existing?.quantity ?? 0) + quantity;

  if (nextQuantity > product.stock) {
    return {
      lines,
      result: {
        ok: false,
        message: `Only ${product.stock} available for this selection.`,
      },
    };
  }

  const nextLine: CartLine = { id, productId: product.id, size, color, quantity: nextQuantity };
  const nextLines = existing
    ? lines.map((line) => (line.id === id ? nextLine : line))
    : [...lines, nextLine];

  return { lines: nextLines, result: { ok: true, name: product.name } };
}

export function updateLineQuantity(lines: CartLine[], id: string, quantity: number): CartLine[] {
  const line = lines.find((item) => item.id === id);
  if (!line) return lines;
  const product = getProductById(line.productId);
  if (!product) return lines.filter((item) => item.id !== id);
  const next = Math.floor(quantity);
  if (!Number.isFinite(next)) return lines;
  if (next < 1) {
    return lines.filter((item) => item.id !== id);
  }
  const capped = Math.min(next, product.stock);
  return lines.map((item) => (item.id === id ? { ...item, quantity: capped } : item));
}
