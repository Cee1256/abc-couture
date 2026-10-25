import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-xl">
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 font-serif text-4xl leading-none text-ink sm:text-5xl">{title}</h2>
        {text ? <p className="mt-4 max-w-md text-sm leading-6 text-charcoal">{text}</p> : null}
      </div>
      {action}
    </div>
  );
}
