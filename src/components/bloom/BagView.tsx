"use client";

import { BLOOM_CART_EVENT, BLOOM_CART_KEY, bloomCartCount, writeBloomCart, type BloomCartLine } from "@/lib/bloom-cart";
import { getBloomProduct } from "@/lib/bloom-products";
import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(BLOOM_CART_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(BLOOM_CART_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot() {
  return localStorage.getItem(BLOOM_CART_KEY) || "[]";
}

function getServerSnapshot() {
  return "[]";
}

export function BagView() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const lines = useMemo(() => {
    try {
      const parsed = JSON.parse(raw) as BloomCartLine[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [raw]);

  function update(next: BloomCartLine[]) {
    writeBloomCart(next);
  }

  const visible = lines.flatMap((line) => {
    const product = getBloomProduct(line.slug);
    return product ? [{ line, product }] : [];
  });
  const count = bloomCartCount(visible.map((item) => item.line));
  const total = visible.reduce((sum, item) => sum + item.product.price * item.line.qty, 0);

  return (
    <div className="page-shell">
      <section className="page-intro">
        <span className="eyebrow">SAVED IN THIS BROWSER</span>
        <h1>
          YOUR <em>BAG.</em>
        </h1>
        <p>
          {count} {count === 1 ? "piece" : "pieces"}. Checkout is not available.
        </p>
      </section>
      <div className="bag-layout">
        {visible.length === 0 ? (
          <p className="empty-state">
            Your bag is empty. <Link href="/shop">Explore the edit.</Link>
          </p>
        ) : (
          <>
            <div>
              {visible.map(({ line, product }) => (
                <article className="bag-row" key={`${line.slug}-${line.size}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt="" />
                  <div>
                    <p className="product-category">{product.category}</p>
                    <h2>{product.name}</h2>
                    <p className="bag-meta">
                      Size {line.size} · ${product.price.toFixed(2)}
                    </p>
                    <div className="qty">
                      <button
                        type="button"
                        aria-label={`Decrease ${product.name}`}
                        onClick={() =>
                          update(
                            lines.flatMap((item) => {
                              if (item.slug !== line.slug || item.size !== line.size) return [item];
                              if (item.qty <= 1) return [];
                              return [{ ...item, qty: item.qty - 1 }];
                            }),
                          )
                        }
                      >
                        −
                      </button>
                      <span>{line.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${product.name}`}
                        onClick={() =>
                          update(lines.map((item) => (item.slug === line.slug && item.size === line.size ? { ...item, qty: item.qty + 1 } : item)))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="bag-remove"
                    type="button"
                    onClick={() => update(lines.filter((item) => item.slug !== line.slug || item.size !== line.size))}
                  >
                    REMOVE
                  </button>
                </article>
              ))}
            </div>
            <aside className="bag-summary">
              <p>
                <span>SUBTOTAL</span>
                <span>${total.toFixed(2)}</span>
              </p>
              <p className="bag-note">Checkout is coming soon. Nothing here is an order, and payment is not taken.</p>
              <Link className="button button-light" href="/shop">
                CONTINUE SHOPPING
              </Link>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}
