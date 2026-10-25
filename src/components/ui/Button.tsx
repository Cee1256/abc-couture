import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  solid:
    "inline-flex items-center justify-center bg-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-white disabled:cursor-not-allowed disabled:bg-stone disabled:text-charcoal",
  ghost:
    "inline-flex items-center justify-center border border-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-ivory disabled:cursor-not-allowed disabled:opacity-40",
  line: "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink",
} as const;

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof styles;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "solid",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(styles[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
