export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-12" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-600 dark:text-zinc-300 flex items-center justify-between">
        <p>
          © {new Date().getFullYear()} NeoShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


