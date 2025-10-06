"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={images[active]}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 600px"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative w-full aspect-square rounded-md overflow-hidden border ${
                i === active ? "border-zinc-900 dark:border-white" : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


