import { priceBands, shopHref, type ShopQuery } from "@/lib/products";
import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

type Count = { slug: string; label: string; count: number };

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={cn(
        "flex items-baseline justify-between gap-4 py-1.5 text-sm",
        active ? "text-ink underline underline-offset-4" : "text-charcoal hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

export function FilterPanel({
  query,
  counts,
  accessoryCount,
}: {
  query: ShopQuery;
  counts: Count[];
  accessoryCount: number;
}) {
  return (
    <div className="space-y-8 text-sm">
      <div>
        <h2 className="text-[11px] uppercase tracking-[0.18em]">Category</h2>
        <div className="mt-3 border-t border-stone pt-2">
          <FilterLink href={shopHref(query, { category: "" })} active={!query.category}>
            All pieces
          </FilterLink>
          {counts.map((item) => (
            <FilterLink
              key={item.slug}
              href={shopHref(query, { category: query.category === item.slug ? "" : item.slug })}
              active={query.category === item.slug}
            >
              {item.label}
              <span className="text-xs text-taupe">{item.count}</span>
            </FilterLink>
          ))}
          {accessoryCount > 0 ? (
            <FilterLink
              href={shopHref(query, { category: query.category === "all-accessories" ? "" : "all-accessories" })}
              active={query.category === "all-accessories"}
            >
              All accessories
              <span className="text-xs text-taupe">{accessoryCount}</span>
            </FilterLink>
          ) : null}
        </div>
      </div>

      <div>
        <h2 className="text-[11px] uppercase tracking-[0.18em]">Price</h2>
        <div className="mt-3 border-t border-stone pt-2">
          {priceBands.map((band) => (
            <FilterLink
              key={band.id}
              href={shopHref(query, { price: query.price === band.id ? "" : band.id })}
              active={query.price === band.id}
            >
              {band.label}
            </FilterLink>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[11px] uppercase tracking-[0.18em]">Edit</h2>
        <div className="mt-3 border-t border-stone pt-2">
          <FilterLink href={shopHref(query, { stock: query.stock === "in" ? "" : "in" })} active={query.stock === "in"}>
            In stock
          </FilterLink>
          <FilterLink href={shopHref(query, { isNew: !query.isNew })} active={query.isNew}>
            New arrivals
          </FilterLink>
          <FilterLink href={shopHref(query, { bestseller: !query.bestseller })} active={query.bestseller}>
            Bestsellers
          </FilterLink>
        </div>
      </div>
    </div>
  );
}
