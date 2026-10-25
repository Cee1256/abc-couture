"use client";

import { validateNewsletter } from "@/lib/validation";
import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; consent?: string }>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateNewsletter(email, consent);
    setErrors(nextErrors);
    setDone(Object.keys(nextErrors).length === 0);
  }

  return (
    <section id="newsletter" className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Notes</p>
          <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">A short letter, occasionally.</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-stone">
            New edits and nothing else. This form is a demonstration. It does not store your address or subscribe you to a mailing list.
          </p>
        </div>
        <form onSubmit={onSubmit} noValidate className="lg:col-span-6 lg:col-start-7">
          {done ? (
            <p role="status" className="font-serif text-3xl leading-tight">
              Thank you. This demonstration did not add your address to a mailing list.
            </p>
          ) : (
            <>
              <label htmlFor="newsletter-email" className="text-[11px] uppercase tracking-[0.18em]">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "newsletter-email-error" : undefined}
                className="mt-3 w-full border-b border-stone bg-transparent py-3 text-base text-ivory outline-none placeholder:text-taupe"
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p id="newsletter-email-error" role="alert" className="mt-2 text-sm text-taupe">
                  {errors.email}
                </p>
              ) : null}
              <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-stone">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1 size-4 accent-ivory"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "newsletter-consent-error" : undefined}
                />
                <span>I understand this form is a demonstration and does not sign me up for anything.</span>
              </label>
              {errors.consent ? (
                <p id="newsletter-consent-error" role="alert" className="mt-2 text-sm text-taupe">
                  {errors.consent}
                </p>
              ) : null}
              <button type="submit" className="mt-6 bg-ivory px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ink">
                Send
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
