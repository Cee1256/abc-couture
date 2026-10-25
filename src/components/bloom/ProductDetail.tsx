"use client";

import { readBloomCart, writeBloomCart } from "@/lib/bloom-cart";
import { getBloomProduct } from "@/lib/bloom-products";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const clothingSizes = ["XS", "S", "M", "L", "XL"];

export function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const product = getBloomProduct(params.slug);
  const choices = product?.category === "Clothing" ? clothingSizes : ["ONE"];
  const fallbackSize = choices.includes("M") ? "M" : "ONE";
  const [selection, setSelection] = useState<{ slug: string; size: string } | null>(null);
  const size = selection?.slug === product?.slug ? selection.size : fallbackSize;
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="page-shell">
        <h1>PIECE NOT FOUND.</h1>
        <Link href="/shop">Back to the shop</Link>
      </div>
    );
  }

  const piece = product;

  function add() {
    const cart = readBloomCart();
    const existing = cart.find((line) => line.slug === piece.slug && line.size === size);
    if (existing) existing.qty += 1;
    else cart.push({ slug: piece.slug, qty: 1, size });
    writeBloomCart(cart);
    setAdded(true);
  }

  return (
    <div className="page-shell product-detail">
      <Link href="/shop" className="back-link">
        <ArrowLeft size={15} /> BACK TO THE SHOP
      </Link>
      <div className="detail-layout">
        <div className="detail-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={piece.image} alt={piece.name} />
          <span className="eyebrow">BLOOM / OBJECT {piece.slug.slice(0, 3).toUpperCase()}</span>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {piece.category} / 2026 EDIT
          </span>
          <h1>{piece.name.toUpperCase()}</h1>
          <p className="detail-price">${piece.price.toFixed(2)}</p>
          <p className="detail-description">{piece.description}</p>
          <div className="detail-rule" />
          <span className="eyebrow">{choices.length === 1 ? "ONE SIZE" : "SELECT SIZE"}</span>
          <div className="size-options">
            {choices.map((option) => (
              <button className={size === option ? "selected" : ""} key={option} type="button" onClick={() => setSelection({ slug: piece.slug, size: option })}>
                {option}
              </button>
            ))}
          </div>
          <button className="button button-light add-bag" type="button" onClick={add}>
            <ShoppingBag size={16} />
            {added ? "ADDED TO YOUR BAG" : "ADD TO BAG"} — ${piece.price.toFixed(2)}
          </button>
          {added ? (
            <p className="form-success">
              Added to your bag. <Link href="/bag">View your bag.</Link>
            </p>
          ) : null}
          <div className="detail-notes">
            <p>
              <b>THE DETAILS</b>
              <span>Considered construction. Easy to wear.</span>
            </p>
            <p>
              <b>DELIVERY</b>
              <span>Complimentary shipping on orders over $250.</span>
            </p>
            <p>
              <b>THE PROMISE</b>
              <span>Designed for repeat wear, season after season.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
