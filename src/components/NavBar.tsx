"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 supports-[backdrop-filter]:dark:bg-zinc-900/50">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight !text-black dark:!text-white visited:!text-black dark:visited:!text-white transition-colors">
          NeoShop
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/" className="px-3 py-2 text-sm rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/" className="px-3 py-2 text-sm rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors">
            Products
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}


