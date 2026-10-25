import { Newsletter } from "@/components/maison/Newsletter";
import { ProductCard } from "@/components/maison/ProductCard";
import { maisonProducts } from "@/lib/maison-products";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "THE OUTER LAYER",
    sub: "Outerwear",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
    no: "01",
  },
  {
    name: "FORM & FUNCTION",
    sub: "Knitwear",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    no: "02",
  },
  {
    name: "THE FINISHING TOUCH",
    sub: "Accessories",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    no: "03",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=90"
          alt="Fashion editorial campaign in a sculptural black look"
        />
        <div className="hero-shade" />
        <div className="hero-index">CAMPAIGN 06 / AUTUMN—WINTER 26</div>
        <div className="hero-copy">
          <span className="eyebrow lime">THE NEW UNIFORM</span>
          <h1>
            QUIETLY
            <br />
            <em>UNMISTAKABLE.</em>
          </h1>
          <p>Modern essentials. Uncompromising point of view.</p>
          <Link className="button button-light" href="/collections">
            DISCOVER THE COLLECTION <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="hero-bottom">
          <span>01 — 03&nbsp; / &nbsp;THE FORM STUDY</span>
          <span>SCROLL TO EXPLORE ↓</span>
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
              THE HOUSE <em>EDIT.</em>
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
          {maisonProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <section className="manifesto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85" alt="Models wearing modern understated fashion" />
        <div className="manifesto-panel">
          <span className="eyebrow lime">A DIFFERENT KIND OF STATEMENT</span>
          <h2>
            STYLE ISN&apos;T
            <br />
            WHAT YOU <em>ADD.</em>
            <br />
            IT&apos;S WHAT YOU
            <br />
            <em>LEAVE OUT.</em>
          </h2>
          <p>We believe in fewer, better things. Pieces that earn their place, move with you, and feel more like yourself every time you wear them.</p>
          <Link className="button button-outline" href="/about">
            THE MAISON NOIR POINT OF VIEW <ArrowUpRight size={15} />
          </Link>
          <span className="manifesto-mark">MN—001</span>
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
          {maisonProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
