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
    <section id="newsletter" className="border-t border-stone bg-ivory">
      <div className="mx-auto grid max-w-[1440px] items-center gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-10 lg:py-10">
        <div>
          <h2 className="font-serif text-3xl uppercase tracking-[0.08em] sm:text-4xl">The list</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-charcoal">
            New edits, and nothing else. This form is a demonstration. It does not store your address or subscribe you to a mailing list.
          </p>
        </div>
        {done ? (
          <p role="status" className="font-serif text-2xl leading-tight sm:text-3xl">
            Thank you. This demonstration did not add your address to a mailing list.
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="min-w-0 flex-1">
                <label htmlFor="newsletter-email" className="text-[10px] uppercase tracking-[0.18em] text-taupe">
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
                  className="mt-1 w-full border-b border-ink bg-transparent py-2.5 text-base text-ink outline-none placeholder:text-taupe"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="submit"
                className="h-11 shrink-0 bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory sm:mb-px"
              >
                Join
              </button>
            </div>
            {errors.email ? (
              <p id="newsletter-email-error" role="alert" className="mt-2 text-sm text-taupe">
                {errors.email}
              </p>
            ) : null}
            <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-charcoal">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 size-4 accent-ink"
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
          </form>
        )}
      </div>
    </section>
  );
}
