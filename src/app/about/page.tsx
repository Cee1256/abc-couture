import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata("About the brand", "Less noise. More you. The Maison Noir point of view.", "/about");

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="about-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90" alt="Maison Noir fashion editorial" />
        <div>
          <span className="eyebrow lime">OUR POINT OF VIEW</span>
          <h1>
            LESS NOISE.
            <br />
            <em>MORE YOU.</em>
          </h1>
        </div>
      </section>
      <section className="about-copy">
        <span className="eyebrow">THE HOUSE / EST. 2026</span>
        <h2>
          WE&apos;RE NOT HERE TO
          <br />
          TELL YOU WHO TO BE.
          <br />
          <em>JUST WHAT TO WEAR.</em>
        </h2>
        <div>
          <p>Maison Noir began with a simple idea: getting dressed should feel less like a performance and more like coming into yourself.</p>
          <p>We make considered wardrobe pieces with clear silhouettes, tactile materials and a quiet confidence. Not trend-led. Not disposable. Just good design that earns its place in your everyday.</p>
          <p>Our approach is deliberate: fewer distractions, better choices, and a little more room to be entirely your own.</p>
          <Link href="/shop" className="button button-outline">
            EXPLORE THE WARDROBE <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <div className="about-values">
        <div>
          <b>01</b>
          <h3>INTENTION</h3>
          <p>Every detail has a reason to be there.</p>
        </div>
        <div>
          <b>02</b>
          <h3>LONGEVITY</h3>
          <p>Designed to stay in rotation, season after season.</p>
        </div>
        <div>
          <b>03</b>
          <h3>INDIVIDUALITY</h3>
          <p>Clothes should serve your point of view, not replace it.</p>
        </div>
      </div>
    </div>
  );
}
