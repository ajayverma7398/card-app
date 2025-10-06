import { headers } from "next/headers";
import ProductGallery from "../../../components/ProductGallery";
import Link from "next/link";

async function getProduct(id: string) {
  const hdrs = await headers();
  const host = hdrs.get("host") ?? "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/products/${id}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:col-span-2 -mt-2 mb-2">
        <Link href="/" aria-label="Back to products" className="inline-flex items-center gap-2 text-sm hover:underline">
          <span aria-hidden>←</span>
          Back
        </Link>
      </div>
      <div>
        <ProductGallery images={product.images?.length ? product.images : [product.imageUrl]} alt={product.title} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{product.description}</p>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl font-semibold">₹{product.price?.toFixed(2)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-zinc-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        {product.features?.length ? (
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              {product.features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Add to Cart</button>
          <button className="px-4 py-2 rounded-md border">Buy Now</button>
        </div>
      </div>
    </div>
  );
}


