import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata("Collections", "Different moods. One point of view.", "/collections");

const items = [
  ["01", "THE OUTER LAYER", "Structure for the in-between.", "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1300&q=85", "Outerwear"],
  ["02", "SOFT STRUCTURES", "Texture with intention.", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1300&q=85", "Knitwear"],
  ["03", "FINISHING FORMS", "Small details. Lasting impact.", "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1300&q=85", "Accessories"],
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
        {items.map(([no, title, desc, img, category]) => (
          <Link href={`/shop?category=${category}`} className="collection-row" key={no}>
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
