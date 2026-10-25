"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="newsletter" id="newsletter">
      <div>
        <span className="eyebrow">A NOTE FROM THE HOUSE</span>
        <h2>
          GOOD TASTE.
          <br />
          <em>OCCASIONAL MAIL.</em>
        </h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (email.includes("@")) setSent(true);
        }}
      >
        <p>New collections, considered stories and things worth knowing. No noise.</p>
        <div className="email-field">
          <input
            aria-label="Email address"
            type="email"
            required
            placeholder="YOUR EMAIL ADDRESS"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button aria-label="Subscribe" type="submit">
            {sent ? "✓" : <ArrowRight />}
          </button>
        </div>
        <small>{sent ? "YOU'RE ON THE LIST. THANK YOU." : "BY SUBSCRIBING, YOU AGREE TO OUR PRIVACY POLICY."}</small>
      </form>
    </section>
  );
}
