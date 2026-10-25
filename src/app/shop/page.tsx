import { ShopGrid } from "@/components/bloom/ShopGrid";
import { pageMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const metadata = pageMetadata("The shop", "Pink clothing, bags, and accessories.", "/shop");

export default function ShopPage() {
  return (
    <div className="page-shell">
      <section className="page-intro shop-intro">
        <span className="eyebrow">CLOTHING, BAGS, ACCESSORIES / 001—008</span>
        <h1>
          THE <em>SHOP.</em>
        </h1>
        <p>
          Pink clothing, bags, and accessories.
          <br />
          One palette, worn your way.
        </p>
      </section>
      <div className="shop-content">
        <Suspense fallback={<p>Loading the edit…</p>}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
