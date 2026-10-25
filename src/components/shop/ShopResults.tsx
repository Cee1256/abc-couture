import { FilterPanel } from "@/components/shop/FilterPanel";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ShopToolbar } from "@/components/shop/ShopToolbar";
import { categoryLabel } from "@/data/categories";
import { accessorySlugs } from "@/data/categories";
import { products } from "@/data/products";
import { categoryCounts, filterProducts, parseShopQuery } from "@/lib/products";
import Link from "next/link";

export async function ShopResults({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = parseShopQuery(await searchParams);
  const visible = filterProducts(query);
  const counts = categoryCounts();
  const accessoryCount = products.filter((product) =>
    product.categories.some((category) => accessorySlugs.includes(category)),
  ).length;
  const activeLabel = query.category ? categoryLabel(query.category) : "";

  return (
    <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
      <aside className="hidden lg:block">
        <form action="/shop" className="mb-8">
          <label htmlFor="shop-search" className="text-[11px] uppercase tracking-[0.18em]">
            Search
          </label>
          <div className="mt-3 flex border-b border-ink">
            <input
              id="shop-search"
              name="q"
              defaultValue={query.q}
              placeholder="Name, cloth, category"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-taupe"
            />
            <button type="submit" className="text-[11px] uppercase tracking-[0.16em]">
              Go
            </button>
          </div>
          {query.category ? <input type="hidden" name="category" value={query.category} /> : null}
          {query.sort !== "featured" ? <input type="hidden" name="sort" value={query.sort} /> : null}
          {query.price ? <input type="hidden" name="price" value={query.price} /> : null}
          {query.stock ? <input type="hidden" name="stock" value={query.stock} /> : null}
          {query.isNew ? <input type="hidden" name="new" value="1" /> : null}
          {query.bestseller ? <input type="hidden" name="bestseller" value="1" /> : null}
        </form>
        <FilterPanel query={query} counts={counts} accessoryCount={accessoryCount} />
      </aside>
      <div className="min-w-0">
        <form action="/shop" className="mb-6 lg:hidden">
          <label htmlFor="shop-search-mobile" className="sr-only">
            Search the shop
          </label>
          <div className="flex border-b border-ink">
            <input
              id="shop-search-mobile"
              name="q"
              defaultValue={query.q}
              placeholder="Search the edit"
              className="w-full bg-transparent py-2 text-base outline-none placeholder:text-taupe"
            />
            <button type="submit" className="text-[11px] uppercase tracking-[0.16em]">
              Search
            </button>
          </div>
        </form>
        {activeLabel || query.q ? (
          <p className="mb-4 font-serif text-3xl">
            {query.q ? `“${query.q}”` : activeLabel}
          </p>
        ) : null}
        <ShopToolbar query={query} count={visible.length} counts={counts} accessoryCount={accessoryCount} />
        {visible.length === 0 ? (
          <div className="border-t border-stone py-16">
            <h2 className="font-serif text-4xl">No pieces match.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-charcoal">
              Try another word, or clear the filters to see the full edit.
            </p>
            <Link href="/shop" className="mt-6 inline-block text-[11px] uppercase tracking-[0.16em] underline">
              Clear filters
            </Link>
          </div>
        ) : (
          <ProductGrid products={visible} priorityCount={4} />
        )}
      </div>
    </div>
  );
}
