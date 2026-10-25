"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CartLine = { qty: number };

const links = [
  ["Shop", "/shop"],
  ["Collections", "/collections"],
  ["The Brand", "/about"],
  ["Contact", "/contact"],
] as const;

function readCount() {
  try {
    const lines = JSON.parse(localStorage.getItem("mn-cart") || "[]") as CartLine[];
    return lines.reduce((total, line) => total + line.qty, 0);
  } catch {
    return 0;
  }
}

export function MaisonHeader() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const read = () => setCount(readCount());
    read();
    window.addEventListener("mn-cart-updated", read);
    return () => window.removeEventListener("mn-cart-updated", read);
  }, []);

  return (
    <>
      <div className="announcement">
        <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $250</span>
        <span className="announcement-right">
          A STUDY IN MODERN FORM <i>✳</i>
        </span>
      </div>
      <header className="site-header">
        <button className="icon-button mobile-menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
        <Link className="wordmark" href="/" aria-label="Maison Noir home">
          <span>MAISON</span>
          <b>NOIR</b>
          <small>OBJECTS OF DESIRE</small>
        </Link>
        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={() => router.push("/shop")}>
            <Search size={18} />
          </button>
          <Link href="/shop" className="bag-button" aria-label={`Shopping bag, ${count} ${count === 1 ? "item" : "items"}`}>
            <ShoppingBag size={18} />
            <span>BAG ({count})</span>
          </Link>
        </div>
      </header>
    </>
  );
}
