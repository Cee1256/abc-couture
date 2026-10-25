"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="page-shell contact-page">
      <section className="page-intro">
        <span className="eyebrow">A HUMAN ON THE OTHER SIDE</span>
        <h1>
          LET&apos;S <em>TALK.</em>
        </h1>
        <p>
          Questions, thoughts, or just saying hello.
          <br />
          We&apos;re listening.
        </p>
      </section>
      <div className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">CLIENT CARE</span>
          <a href="mailto:care@maisonnoir.example">
            CARE@MAISONNOIR.EXAMPLE <ArrowUpRight size={15} />
          </a>
          <p>
            Monday—Friday
            <br />
            09:00—17:00 GMT
          </p>
          <span className="eyebrow">FOLLOW THE HOUSE</span>
          <a href="https://instagram.com">INSTAGRAM ↗</a>
          <a href="https://pinterest.com">PINTEREST ↗</a>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="form-two">
            <label>
              YOUR NAME
              <input required placeholder="Name" />
            </label>
            <label>
              EMAIL ADDRESS
              <input type="email" required placeholder="you@email.com" />
            </label>
          </div>
          <label>
            WHAT&apos;S ON YOUR MIND?
            <select defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              <option>Product enquiry</option>
              <option>Order support</option>
              <option>Press & partnerships</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            YOUR MESSAGE
            <textarea required rows={5} placeholder="Tell us a little more…" />
          </label>
          <button className="button button-light" type="submit">
            {sent ? "MESSAGE RECEIVED" : "SEND YOUR MESSAGE"} <ArrowUpRight size={15} />
          </button>
          {sent ? (
            <p className="form-success">Thank you for reaching out. This demonstration form does not send a message.</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
