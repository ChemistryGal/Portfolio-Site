import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utlis";

type Props = { className?: string };

export const ThemeToggle = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
    if (!storedTheme) localStorage.setItem("theme", "light");
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

return (
  <button
    onClick={toggleTheme}
    className={cn(
      "absolute left-1/2 top-5 -translate-x-1/2 z-[60]",
      "flex items-center gap-2",
      "p-2 transition-colors duration-200",
      "hover:opacity-80",
      "focus:outline-none focus:ring-0",
      className
    )}
    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    title={isDarkMode ? "Light mode" : "Dark mode"}
    type="button"
  >
    {isDarkMode ? (
      <>
        <Sun className="h-6 w-6 text-yellow-300" />
        <span className="text-sm font-medium text-foreground">Light Mode</span>
      </>
    ) : (
      <>
        <Moon className="h-6 w-6 text-blue-900 dark:text-blue-200" />
        <span className="text-sm font-medium text-foreground">Dark Mode</span>
      </>
    )}
  </button>
);


};
