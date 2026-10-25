import { ShopGrid } from "@/components/maison/ShopGrid";
import { pageMetadata } from "@/lib/metadata";
import { Suspense } from "react";

export const metadata = pageMetadata("The shop", "Considered pieces for wherever the day takes you.", "/shop");

export default function ShopPage() {
  return (
    <div className="page-shell">
      <section className="page-intro shop-intro">
        <span className="eyebrow">THE MAISON NOIR WARDROBE / 001—008</span>
        <h1>
          THE <em>SHOP.</em>
        </h1>
        <p>
          Considered pieces for wherever the day takes you.
          <br />
          Nothing extra. Nothing missing.
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
