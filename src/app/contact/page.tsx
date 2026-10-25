import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Call or write to ABC Couture. The contact form on this demonstration site does not send messages.",
  "/contact",
);

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">Studio</p>
          <h1 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Contact</h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-charcoal">
            Questions about a piece, a size, or the edit are welcome. Use the telephone if you need a person. The form on this page is only a demonstration.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-taupe">Telephone</dt>
              <dd className="mt-1">
                <a href={`tel:${brand.phoneTel}`} className="text-lg underline-offset-4 hover:underline">
                  {brand.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-taupe">WhatsApp</dt>
              <dd className="mt-1">
                <a href={brand.whatsappUrl} className="underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                  Message {brand.phoneTel}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
