import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata("About the brand", "More bloom. More you. The BLOOM point of view.", "/about");

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="about-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bloom/hero.jpg" alt="BLOOM fashion editorial" />
        <div>
          <span className="eyebrow lime">OUR POINT OF VIEW</span>
          <h1>
            MORE BLOOM.
            <br />
            <em>MORE YOU.</em>
          </h1>
        </div>
      </section>
      <section className="about-copy">
        <span className="eyebrow">THE BLOOM / EST. 2026</span>
        <h2>
          WE&apos;RE NOT HERE TO
          <br />
          TELL YOU WHO TO BE.
          <br />
          <em>JUST WHAT TO WEAR.</em>
        </h2>
        <div>
          <p>BLOOM began with a simple idea: fashion should make you feel as good as you look.</p>
          <p>We curate expressive wardrobe pieces with beautiful silhouettes, tactile details and a confident point of view. Romantic without being precious. Bold without trying too hard.</p>
          <p>Our approach is playful and considered: pieces that lift your mood, work hard in your wardrobe, and let your personality lead.</p>
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
