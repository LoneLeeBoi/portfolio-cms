"use client";

export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded p-2 text-muted transition hover:text-fg"
    >
      <span className="hidden dark:inline">☀️</span>
      <span className="dark:hidden">🌙</span>
    </button>
  );
}