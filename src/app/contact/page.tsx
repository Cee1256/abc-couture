import { ContactForm } from "@/components/bloom/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Questions, thoughts, or just saying hello.", "/contact");

export default function ContactPage() {
  return <ContactForm />;
}
