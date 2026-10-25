"use client";

import { Container } from "@/components/ui/Container";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-5xl">Something went wrong.</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-charcoal">
        The page could not be shown. You can try again, or return to the shop.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory"
      >
        Try again
      </button>
    </Container>
  );
}
