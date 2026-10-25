"use client";

import { BLOOM_CART_EVENT, bloomCartCount, readBloomCart } from "@/lib/bloom-cart";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Shop", "/shop"],
  ["Collections", "/collections"],
  ["The Brand", "/about"],
  ["Contact", "/contact"],
] as const;

export function BloomHeader() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const read = () => setCount(bloomCartCount(readBloomCart()));
    read();
    window.addEventListener(BLOOM_CART_EVENT, read);
    return () => window.removeEventListener(BLOOM_CART_EVENT, read);
  }, []);

  return (
    <>
      <div className="announcement">
        <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $250</span>
        <span className="announcement-right">
          A LITTLE ROMANCE. A LOT OF YOU. <i>✳</i>
        </span>
      </div>
      <header className="site-header">
        <button className="icon-button mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <Link className="wordmark" href="/" aria-label="BLOOM home">
          <span>BLOOM</span>
          <small>MADE TO BLOOM</small>
        </Link>
        <nav className={open ? "nav-links is-open" : "nav-links"}>
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
          <Link href="/bag" className="bag-button" aria-label={`Shopping bag, ${count} ${count === 1 ? "item" : "items"}`}>
            <ShoppingBag size={18} />
            <span>BAG ({count})</span>
          </Link>
        </div>
      </header>
    </>
  );
}
