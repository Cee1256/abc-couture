import { Wordmark } from "@/components/brand/Wordmark";
import { brand } from "@/config/brand";
import { collections } from "@/data/collections";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";

const shopLinks = [
  { href: "/shop", label: "All pieces" },
  { href: "/shop?category=womens-clothing", label: "Women's clothing" },
  { href: "/shop?category=mens-clothing", label: "Men's clothing" },
  { href: "/shop?category=shoes", label: "Shoes" },
  { href: "/shop?category=all-accessories", label: "Accessories" },
  { href: "/shop?new=1", label: "New arrivals" },
];

const marks = ["Visa", "Mastercard", "Amex", "PayPal"];

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone bg-ivory">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-4">
          <Wordmark linked={false} align="left" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal">
            {brand.tagline}. A darker edit of clothing and accessories, priced in Ghana cedis.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em]">Shop</h2>
          <ul className="mt-3 space-y-1.5 text-[13px] text-charcoal">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em]">Collections</h2>
          <ul className="mt-3 space-y-1.5 text-[13px] text-charcoal">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link href={`/collections/${collection.slug}`} className="hover:text-ink">
                  {collection.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em]">Studio</h2>
          <ul className="mt-3 space-y-1.5 text-[13px] text-charcoal">
            <li>
              <Link href="/about" className="hover:text-ink">
                About the brand
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#newsletter" className="hover:text-ink">
                Newsletter
              </Link>
            </li>
            <li>
              <a href={`tel:${brand.phoneTel}`} className="hover:text-ink">
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={brand.whatsappUrl} className="hover:text-ink" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-stone">
        <Container className="flex flex-col gap-4 py-4 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{" "}
            <Suspense fallback={<span className="inline-block w-8" />}>
              <CopyrightYear />
            </Suspense>{" "}
            {brand.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Payment marks. Checkout is not available on this demonstration.">
            {marks.map((mark) => (
              <li key={mark} className="border border-stone px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-charcoal">
                {mark}
              </li>
            ))}
          </ul>
          <p>Prices in Ghana cedis. Demonstration storefront.</p>
        </Container>
      </div>
    </footer>
  );
}
