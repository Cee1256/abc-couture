"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";

export function ProductImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-end bg-[#e7e1d8] p-4">
        <span className="font-serif text-2xl leading-none text-ink/75">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      {...(priority ? { preload: true } : {})}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
