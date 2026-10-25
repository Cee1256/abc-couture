export type CartLine = {
  id: string;
  productId: string;
  size: string | null;
  color: string | null;
  quantity: number;
};

export type AddToBagInput = {
  productId: string;
  size: string | null;
  color: string | null;
  quantity: number;
};

export type CartResult =
  | { ok: true; name: string }
  | { ok: false; message: string };
