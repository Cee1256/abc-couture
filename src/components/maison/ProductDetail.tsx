"use client";

import { maisonProducts } from "@/lib/maison-products";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

type CartLine = { slug: string; qty: number; size: string };

export function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const product = maisonProducts.find((item) => item.slug === params.slug);
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="page-shell product-detail">
        <h1>PIECE NOT FOUND.</h1>
        <Link href="/shop">Back to the shop</Link>
      </div>
    );
  }

  const piece = product;

  function add() {
    let cart: CartLine[] = [];
    try {
      cart = JSON.parse(localStorage.getItem("mn-cart") || "[]") as CartLine[];
    } catch {
      cart = [];
    }
    const existing = cart.find((line) => line.slug === piece.slug && line.size === size);
    if (existing) existing.qty += 1;
    else cart.push({ slug: piece.slug, qty: 1, size });
    localStorage.setItem("mn-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("mn-cart-updated"));
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
          <img src={product.image} alt={product.name} />
          <span className="eyebrow">MAISON NOIR / OBJECT {product.slug.slice(0, 3).toUpperCase()}</span>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {product.category} / 2026 EDIT
          </span>
          <h1>{product.name.toUpperCase()}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-rule" />
          <span className="eyebrow">SELECT SIZE</span>
          <div className="size-options">
            {["XS", "S", "M", "L", "XL"].map((option) => (
              <button key={option} type="button" className={size === option ? "selected" : ""} onClick={() => setSize(option)}>
                {option}
              </button>
            ))}
          </div>
          <button className="button button-light add-bag" type="button" onClick={add}>
            <ShoppingBag size={16} />
            {added ? "ADDED TO YOUR BAG" : "ADD TO BAG"} — ${product.price.toFixed(2)}
          </button>
          {added ? (
            <p className="form-success">
              Added to your bag. <Link href="/shop">Continue exploring.</Link>
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
