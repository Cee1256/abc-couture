import { BagView } from "@/components/bloom/BagView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Shopping bag",
  "Review pieces in your BLOOM bag. Checkout is not available on this demonstration storefront.",
  "/bag",
);

export default function BagPage() {
  return <BagView />;
}
