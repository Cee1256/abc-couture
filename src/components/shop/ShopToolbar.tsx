"use client";

import { FilterPanel } from "@/components/shop/FilterPanel";
import { Dialog } from "@/components/ui/Dialog";
import { hasActiveFilters, sortOptions, type ShopQuery } from "@/lib/products";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Count = { slug: string; label: string; count: number };

export function ShopToolbar({
  query,
  count,
  counts,
  accessoryCount,
}: {
  query: ShopQuery;
  count: number;
  counts: Count[];
  accessoryCount: number;
}) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-stone pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <p className="text-sm text-charcoal">
          {count} {count === 1 ? "piece" : "pieces"}
        </p>
        {hasActiveFilters(query) ? (
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.16em] underline">
            Clear filters
          </Link>
        ) : null}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-stone px-3 py-2 text-[11px] uppercase tracking-[0.16em] lg:hidden"
          onClick={() => setFiltersOpen(true)}
        >
          <SlidersHorizontal className="size-3.5" aria-hidden="true" />
          Filter
        </button>
        <form action="/shop" className="flex items-center gap-2">
          {query.q ? <input type="hidden" name="q" value={query.q} /> : null}
          {query.category ? <input type="hidden" name="category" value={query.category} /> : null}
          {query.price ? <input type="hidden" name="price" value={query.price} /> : null}
          {query.stock ? <input type="hidden" name="stock" value={query.stock} /> : null}
          {query.isNew ? <input type="hidden" name="new" value="1" /> : null}
          {query.bestseller ? <input type="hidden" name="bestseller" value="1" /> : null}
          <label htmlFor="sort" className="sr-only">
            Sort pieces
          </label>
          <select
            id="sort"
            name="sort"
            defaultValue={query.sort}
            className="bg-transparent py-2 text-sm outline-none"
            onChange={(event) => event.currentTarget.form?.requestSubmit()}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit" className="sr-only">
            Apply sort
          </button>
        </form>
      </div>
      <Dialog open={filtersOpen} onClose={() => setFiltersOpen(false)} title="Filter" align="left">
        <div className="px-5 py-6" onClick={() => setFiltersOpen(false)}>
          <FilterPanel query={query} counts={counts} accessoryCount={accessoryCount} />
          {hasActiveFilters(query) ? (
            <Link href="/shop" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] underline">
              Clear filters
            </Link>
          ) : null}
        </div>
      </Dialog>
    </div>
  );
}
