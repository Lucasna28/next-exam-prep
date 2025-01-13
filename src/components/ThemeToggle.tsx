"use client";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-800 dark:bg-slate-200 
                text-slate-200 dark:text-slate-800 
                hover:bg-slate-700 dark:hover:bg-slate-300 
                transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};
