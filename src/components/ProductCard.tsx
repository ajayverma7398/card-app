"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import Link from "next/link";

export type Product = {
  id: string;
  title: string;
  description: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  imageUrl: string;
  inStock?: boolean;
  tag?: "sale" | "new" | "none";
};

type Props = {
  product: Product;
  onView?: (id: string) => void;
  className?: string;
};

export default function ProductCard({ product, onView, className }: Props) {
  const { id, title, description, imageUrl, price, originalPrice, rating, inStock = true, tag } = product;
  const hasDiscount = typeof price === "number" && typeof originalPrice === "number" && originalPrice > price;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "group w-full max-w-sm bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow",
        className
      )}
      aria-labelledby={`product-title-${id}`}
    >
      <figure className="w-full">
        <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-contain"
            priority={false}
          />
          <button
            type="button"
            aria-label="Add to wishlist"
            className="absolute top-3 right-3 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-white p-2 shadow hover:shadow-md transition"
            title="Add to wishlist"
          >
            ♥
          </button>
          {tag && tag !== "none" && (
            <span
              className={cn(
                "absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md",
                tag === "sale" && "bg-red-600 text-white",
                tag === "new" && "bg-emerald-600 text-white"
              )}
              aria-label={tag === "sale" ? "On Sale" : "New"}
            >
              {tag === "sale" ? "Sale" : "New"}
            </span>
          )}
          {!inStock && (
            <span
              className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-md bg-zinc-700 text-white"
              aria-label="Out of Stock"
            >
              Out of Stock
            </span>
          )}
        </div>
        <figcaption className="p-4">
          <h3
            id={`product-title-${id}`}
            className="text-center font-bold text-lg mb-1 text-zinc-900 dark:text-zinc-100"
          >
            {title}
          </h3>
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-300 mb-3">
            {description}
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            {price !== undefined && (
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100" aria-label={`Price ${price.toFixed(2)}`}>
                ₹{price.toFixed(2)}
              </span>
            )}
            {hasDiscount && (
              <span className="text-sm text-zinc-500 line-through" aria-label={`Original price ${originalPrice!.toFixed(2)}`}>
                ₹{originalPrice!.toFixed(2)}
              </span>
            )}
            {rating !== undefined && (
              <span className="inline-flex items-center gap-1" aria-label={`Rating ${rating} out of 5`}>
                {[0, 1, 2, 3, 4].map((i) => {
                  const filled = rating >= i + 1;
                  const half = !filled && rating > i && rating < i + 1;
                  return (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden className={filled ? "text-amber-500" : half ? "text-amber-400" : "text-zinc-400"}>
                      <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  );
                })}
                <span className="text-xs text-zinc-600 dark:text-zinc-300">{rating.toFixed(1)}</span>
              </span>
            )}
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => (onView ? onView(id) : window.location.assign(`/products/${id}`))}
              className="w-full inline-flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 font-medium transition-transform hover:shadow-lg group-hover:shadow-lg hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500"
              aria-label={`View more about ${title}`}
            >
              View More
            </button>
            <button
              type="button"
              disabled={!inStock}
              aria-disabled={!inStock}
              className={cn(
                "w-full inline-flex items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500",
                !inStock && "opacity-60 cursor-not-allowed"
              )}
            >
              {inStock ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        </figcaption>
      </figure>
    </motion.article>
  );
}


