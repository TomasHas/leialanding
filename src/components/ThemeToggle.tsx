"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // determine initial theme in a robust way and apply it before interactions
    try {
      let initial = false;
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        initial = true;
      } else if (stored === "light") {
        initial = false;
      } else if (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initial = true;
      }

      setIsDark(initial);
      // explicitly add/remove to avoid accidental toggles
      if (initial) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {
      // fail silently
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    // if not initialized yet, assume light -> make dark
    const current = isDark === null ? false : isDark;
    const next = !current;
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      // ignore storage errors
    }
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    // Debugging aid — visible in browser console when clicking
    try {
      // eslint-disable-next-line no-console
      console.log("ThemeToggle: set theme to", next ? "dark" : "light");
    } catch (e) {}
  };

  // while we haven't determined the initial theme (SSR/hydration), render a neutral control
  const ready = isDark !== null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={ready ? isDark : undefined}
      className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 transition-colors"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
