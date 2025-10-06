"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const pref = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = pref ? pref === "dark" : prefersDark;
    root.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      onClick={toggle}
      className={
        `relative inline-flex items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500
         w-28 h-8 select-none border border-zinc-200 dark:border-zinc-800 shadow-inner
         ${isDark ? "bg-black text-white" : "bg-zinc-100 text-zinc-900"}`
      }
    >
      <span className="absolute inset-0 grid grid-cols-2 place-items-center px-3 text-[10px] font-semibold tracking-wide">
        <span className={`${isDark ? "opacity-60" : "opacity-100"}`}>DAY</span>
        <span className={`${isDark ? "opacity-100" : "opacity-60"}`}>NIGHT</span>
      </span>

      <span
        aria-hidden
        className={
          `absolute top-1 left-1 h-6 w-6 rounded-full bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center transition-transform
           ${isDark ? "translate-x-0" : "translate-x-[80px]"}`
        }
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-zinc-900">
            <path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.96 6.63 6.76 4.84zm10.48 0l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM12 2h0v2h0V2zm0 18h0v2h0v-2zM4.22 19.78l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM18.01 18l1.79 1.79-1.79 1.79-1.79-1.79L18.01 18zM2 12h2v0H2v0zm18 0h2v0h-2v0zM12 6a6 6 0 100 12 6 6 0 000-12z"/>
          </svg>
        )}
      </span>
    </button>
  );
}


