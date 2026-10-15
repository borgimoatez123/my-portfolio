"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, getActiveTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // null until mounted: the server cannot know the visitor's saved theme,
  // so we render a same-sized placeholder first to avoid a hydration mismatch.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getActiveTheme());
  }, []);

  function toggle() {
    const next: Theme = getActiveTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
  }

  const label =
    theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/60 text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {theme === null ? (
        <span className="block h-4 w-4" aria-hidden="true" />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
