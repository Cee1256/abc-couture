"use client";

import { ProductCard } from "@/components/maison/ProductCard";
import { maisonProducts } from "@/lib/maison-products";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export function ShopGrid() {
  const params = useSearchParams();
  const [category, setCategory] = useState(params.get("category") || "All pieces");
  const [sort, setSort] = useState("featured");
  const categories = ["All pieces", ...Array.from(new Set(maisonProducts.map((product) => product.category)))];

  const filtered = useMemo(() => {
    let list = maisonProducts.filter((product) => category === "All pieces" || product.category === category);
    const filter = params.get("filter");
    if (filter === "New Arrival") list = list.filter((product) => product.tag === "NEW ARRIVAL");
    if (filter === "Bestseller") list = list.filter((product) => product.tag === "BESTSELLER");
    if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort, params]);

  return (
    <>
      <div className="shop-toolbar">
        <div className="filter-pills">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <label className="sort-label">
          SORT BY{" "}
          <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort pieces">
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <p className="result-count">{filtered.length} PIECES IN THE EDIT</p>
      <div className="product-grid shop-products">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {filtered.length === 0 ? <p className="empty-state">Nothing in this edit just yet. Explore all pieces.</p> : null}
    </>
  );
}
