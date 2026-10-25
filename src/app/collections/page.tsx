import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata("Collections", "Different moods. One point of view.", "/collections");

const items = [
  ["01", "PINK CLOTHING", "Dresses, tops, and skirts in blush and rose.", "/bloom/skirt.jpg", "Clothing"],
  ["02", "BAGS", "Shoulder bags and clutches in soft pink.", "/bloom/bag.jpg", "Bags"],
  ["03", "ACCESSORIES", "Earrings, scarves, and sunglasses.", "/bloom/earrings.jpg", "Accessories"],
] as const;

export default function CollectionsPage() {
  return (
    <div className="page-shell">
      <section className="page-intro">
        <span className="eyebrow">A WARDROBE IN CHAPTERS</span>
        <h1>
          THE <em>COLLECTIONS.</em>
        </h1>
        <p>Different moods. One point of view.</p>
      </section>
      <div className="collections-list">
        {items.map(([no, title, desc, img, cat]) => (
          <Link href={`/shop?category=${cat}`} className="collection-row" key={no}>
            <span className="collection-number">{no} / 03</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>{desc}</p>
              <span className="text-link">
                EXPLORE COLLECTION <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
