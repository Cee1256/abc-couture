import { Newsletter } from "@/components/bloom/Newsletter";
import { ProductCard } from "@/components/bloom/ProductCard";
import { bloomProducts } from "@/lib/bloom-products";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "PINK CLOTHING",
    sub: "Clothing",
    img: "/bloom/dress.jpg",
    no: "01",
  },
  {
    name: "BAGS",
    sub: "Bags",
    img: "/bloom/bag.jpg",
    no: "02",
  },
  {
    name: "ACCESSORIES",
    sub: "Accessories",
    img: "/bloom/scarf.jpg",
    no: "03",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-image is-campaign" src="/bloom/hero.jpg" alt="BLOOM campaign in a blush silk dress and rose coat" />
        <div className="hero-shade" />
        <div className="hero-index">CAMPAIGN 06 / AUTUMN—WINTER 26</div>
        <div className="hero-copy">
          <span className="eyebrow lime">THE BLOOM EDIT</span>
          <h1>
            SOFTLY
            <br />
            <em>UNFORGETTABLE.</em>
          </h1>
          <p>Romantic silhouettes. Modern confidence.</p>
          <Link className="button button-light" href="/collections">
            EXPLORE THE COLLECTION <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="hero-bottom">
          <span>01 — 03&nbsp; / &nbsp;THE FORM STUDY</span>
          <span>SCROLL TO BLOOM ↓</span>
        </div>
      </section>
      <div className="ticker">
        <div>
          MADE FOR YOUR OWN RULES <b>✳</b> LESS, BUT BETTER <b>✳</b> DRESS WITH INTENTION <b>✳</b> MADE FOR YOUR OWN RULES <b>✳</b> LESS, BUT BETTER <b>✳</b>
        </div>
      </div>
      <section className="section categories-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / FIND YOUR FORM</span>
            <h2>
              THE BLOOM <em>EDIT.</em>
            </h2>
          </div>
          <Link className="text-link" href="/collections">
            VIEW ALL COLLECTIONS <ArrowRight size={16} />
          </Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className="category-card" href={`/shop?category=${category.sub}`} key={category.no}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={category.img} alt={category.sub} />
              <span className="category-no">{category.no} / 03</span>
              <div className="category-caption">
                <div>
                  <span>{category.sub}</span>
                  <h3>{category.name}</h3>
                </div>
                <ArrowUpRight />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section product-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / CONSIDERED BY DESIGN</span>
            <h2>
              THE LATEST <em>THINGS.</em>
            </h2>
          </div>
          <Link className="text-link" href="/shop">
            SHOP ALL PIECES <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {bloomProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <section className="manifesto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bloom/dress.jpg" alt="Blush silk column dress from the BLOOM edit" />
        <div className="manifesto-panel">
          <span className="eyebrow lime">YOUR MOMENT TO BLOOM</span>
          <h2>
            STYLE ISN&apos;T
            <br />
            WHAT YOU <em>ADD.</em>
            <br />
            IT&apos;S WHAT YOU
            <br />
            <em>LEAVE OUT.</em>
          </h2>
          <p>We believe getting dressed should feel like stepping into yourself. Pieces with a little romance, a lot of confidence, and room to make them your own.</p>
          <Link className="button button-outline" href="/about">
            THE BLOOM POINT OF VIEW <ArrowUpRight size={15} />
          </Link>
          <span className="manifesto-mark">BL—001</span>
        </div>
      </section>
      <section className="section product-section bestsellers">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / THE ONES YOU COME BACK TO</span>
            <h2>
              HOUSE <em>FAVOURITES.</em>
            </h2>
          </div>
          <Link className="text-link" href="/shop?filter=Bestseller">
            SHOP BESTSELLERS <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {bloomProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
