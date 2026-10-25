import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">404</p>
      <h1 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">This page is not in the edit.</h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-charcoal">
        The link may be out of date, or the piece may have been removed. The shop is still open.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        <Button href="/shop">Return to shop</Button>
        <Button href="/" variant="line">
          Home
        </Button>
      </div>
    </Container>
  );
}
