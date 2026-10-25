import Link from "next/link";

export function MaisonFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark footer-mark" href="/">
            <span>MAISON</span>
            <b>NOIR</b>
            <small>OBJECTS OF DESIRE</small>
          </Link>
          <p>
            Considered pieces. Lasting presence.
            <br />
            A wardrobe with a point of view.
          </p>
          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram">
              IG ↗
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              PIN ↗
            </a>
          </div>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <Link href="/shop">Shop all</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/shop?filter=New%20Arrival">New arrivals</Link>
          <Link href="/shop?filter=Bestseller">Bestsellers</Link>
        </div>
        <div>
          <h4>MAISON NOIR</h4>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:care@maisonnoir.example">Client care</a>
          <Link href="/contact">Shipping & returns</Link>
        </div>
        <div>
          <h4>THE DETAILS</h4>
          <p>
            Designed with intention.
            <br />
            Made to be lived in.
          </p>
          <div className="payment-marks" aria-label="Payment marks. Checkout is not available on this demonstration.">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MAISON NOIR STUDIO</span>
        <span>PRIVACY&nbsp;&nbsp;&nbsp; TERMS&nbsp;&nbsp;&nbsp; ACCESSIBILITY</span>
        <span>MADE FOR THE EVERYDAY EXTRAORDINARY.</span>
      </div>
    </footer>
  );
}
