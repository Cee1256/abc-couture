"use client";

import { ProductImage } from "@/components/ui/ProductImage";
import type { ProductImage as GalleryImage } from "@/types/product";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[3/4] bg-paper">
        <ProductImage
          src={current?.src ?? ""}
          alt={current?.alt ?? name}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 flex gap-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                aria-label={`Show image ${index + 1} of ${name}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={`relative block h-20 w-16 bg-paper ${index === active ? "outline outline-1 outline-ink" : ""}`}
              >
                <ProductImage src={image.src} alt="" sizes="80px" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
