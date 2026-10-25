import { brand } from "@/config/brand";
import { collections } from "@/data/collections";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
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

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone bg-ivory">
      <Container className="grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src={brand.logo}
            alt={brand.logoAlt}
            width={280}
            height={180}
            className="h-auto w-44 bg-ivory object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal">
            {brand.tagline}. Considered clothing and accessories, edited for a quieter kind of dressing.
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.18em]">Shop</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[11px] uppercase tracking-[0.18em]">Collections</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link href={`/collections/${collection.slug}`} className="hover:underline">
                  {collection.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[11px] uppercase tracking-[0.18em]">Studio</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About the brand
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#newsletter" className="hover:underline">
                Newsletter
              </Link>
            </li>
            <li>
              <a href={`tel:${brand.phoneTel}`} className="hover:underline">
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={brand.whatsappUrl} className="hover:underline" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
          {brand.social.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm">
              {brand.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:underline" target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div className="border-t border-stone">
        <Container className="flex flex-col gap-2 py-5 text-xs text-charcoal sm:flex-row sm:justify-between">
          <p>
            ©{" "}
            <Suspense fallback={<span className="inline-block w-8" />}>
              <CopyrightYear />
            </Suspense>{" "}
            {brand.name}. All rights reserved.
          </p>
          <p>Prices shown in Ghana cedis. A demonstration storefront.</p>
        </Container>
      </div>
    </footer>
  );
}
