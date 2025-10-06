import ProductCard, { Product } from "@/components/ProductCard";
import { headers } from "next/headers";

async function getProducts(): Promise<Product[]> {
  const hdrs = await headers();
  const host = hdrs.get("host") ?? "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/products`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />)
      )}
    </div>
  );
}


