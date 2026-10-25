import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";
import Link from "next/link";

export function Wordmark({
  className,
  linked = true,
  align = "center",
}: {
  className?: string;
  linked?: boolean;
  align?: "center" | "left";
}) {
  const mark = (
    <span className={cn("block leading-none", align === "center" ? "text-center" : "text-left", className)}>
      <span className="block font-serif text-[1.65rem] italic leading-none tracking-[-0.03em] sm:text-[2.05rem]">
        {brand.wordmark}
      </span>
      <span className="mt-1.5 block text-[8px] font-medium uppercase tracking-[0.48em] text-taupe">
        {brand.tagline}
      </span>
    </span>
  );

  if (!linked) return mark;

  return (
    <Link href="/" aria-label={`${brand.name} home`} className="justify-self-center">
      {mark}
    </Link>
  );
}
