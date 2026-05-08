import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50",
        "p-3 rounded-full border border-border",
        "bg-background/60 backdrop-blur-md",
        "hover:scale-110 transition-all duration-300",
        "shadow-md hover:shadow-primary/20"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <FaSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <FaMoon className="h-5 w-5 text-blue-500" />
      )}
    </button>
  );
};