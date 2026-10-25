import { formatPrice } from "@/lib/currency";
import { cn } from "@/lib/cn";

export function Price({ amount, className }: { amount: number; className?: string }) {
  return <span className={cn("tabular-nums", className)}>{formatPrice(amount)}</span>;
}
