"use client";

import { Wordmark } from "@/components/brand/Wordmark";
import { useCart } from "@/components/cart/CartProvider";
import { Dialog } from "@/components/ui/Dialog";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";
import { Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link href={href} onClick={onClick} className="nav-link" aria-current={active ? "page" : undefined}>
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const { count, hydrated, openDrawer, closeDrawer } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b border-stone bg-ivory">
      <div className="mx-auto grid h-[4.25rem] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 lg:h-[4.75rem] lg:px-10">
        <div className="flex items-center">
          <button
            type="button"
            className="grid size-10 place-items-center lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => {
              closeDrawer();
              setSearchOpen(false);
              setMenuOpen(true);
            }}
          >
            <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hidden size-10 place-items-center lg:grid"
            aria-label="Search the shop"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <Search className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <Wordmark />

        <div className="flex items-center justify-end">
          <button
            type="button"
            className="grid size-10 place-items-center lg:hidden"
            aria-label="Search the shop"
            aria-expanded={searchOpen}
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen((open) => !open);
            }}
          >
            <Search className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative grid size-10 place-items-center"
            aria-label={hydrated && count > 0 ? `Shopping bag, ${count} ${count === 1 ? "item" : "items"}` : "Shopping bag"}
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(false);
              openDrawer();
            }}
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} aria-hidden="true" />
            {hydrated && count > 0 ? (
              <span className="absolute right-0.5 top-0.5 grid min-w-4 place-items-center bg-ink px-1 text-[10px] leading-4 text-ivory">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      <nav className="hidden items-center justify-center gap-9 pb-4 text-[11px] font-medium uppercase tracking-[0.22em] lg:flex" aria-label="Primary">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>

      {searchOpen ? (
        <div className="border-t border-stone">
          <form action="/shop" className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">
            <label htmlFor="header-search" className="sr-only">
              Search pieces
            </label>
            <input
              id="header-search"
              name="q"
              type="search"
              placeholder="Search pieces, categories, cloth"
              className="w-full border-b border-ink bg-transparent py-2 text-base text-ink outline-none placeholder:text-taupe"
              autoFocus
            />
            <button type="submit" className="text-[11px] uppercase tracking-[0.18em]">
              Search
            </button>
            <button type="button" className="text-[11px] uppercase tracking-[0.18em]" onClick={() => setSearchOpen(false)}>
              Close
            </button>
          </form>
        </div>
      ) : null}

      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu" align="full">
        <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "border-b border-stone py-4 font-serif text-4xl uppercase tracking-[0.04em]",
                  active && "italic",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a href={`tel:${brand.phoneTel}`} className="mt-8 text-sm tracking-[0.08em]">
            {brand.phoneDisplay}
          </a>
        </nav>
      </Dialog>
    </header>
  );
}
