"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Lightbulb } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const scrollTo = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 
      ${isScrolled
        ? "bg-white/40 dark:bg-black/30 backdrop-blur-lg border-b border-black/10 dark:border-white/10"
        : "bg-transparent"
      }`}
    >

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-16 items-center justify-between">
        
        {/* Left: Email */}
        <a
          href="mailto:atifmkhan10@gmail.com"
          className="text-sm font-medium hover:underline underline-offset-4 
          text-neutral-700 dark:text-neutral-300"
        >
          atifmkhan10@gmail.com
        </a>

        {/* Center: Menu */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm font-semibold hover:opacity-80"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-semibold hover:opacity-80"
          >
            Contact
          </button>
        </div>

        {/* Right: Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative w-12 h-6 rounded-full bg-black/10 dark:bg-white/10 
          border border-black/20 dark:border-white/20 transition-colors"
        >
          <div
            className={`absolute w-4 h-4 rounded-full bg-black dark:bg-white 
            transition-transform duration-300 top-1
            ${theme === "dark" ? "translate-x-7" : "translate-x-1"}`}
          >
            <Lightbulb
              className={`h-3 w-3 absolute top-0.5 left-0.5 
              ${theme === "dark" ? "text-yellow-400" : "text-white"}`}
              fill={theme === "dark" ? "currentColor" : "none"}
            />
          </div>
        </button>
      </div>

      {/* MOBILE */}
      <div className="
        md:hidden 
        flex flex-col 
        backdrop-blur-xl 
        bg-white/40 dark:bg-black/30 
        border-b border-black/10 dark:border-white/10
      ">
        
        {/* Row 1 (Email + Toggle) */}
        <div className="flex items-center justify-between px-6 h-14">
          
          <a
            href="mailto:atifmkhan10@gmail.com"
            className="text-xs font-medium hover:underline underline-offset-4 
            text-neutral-700 dark:text-neutral-300"
          >
            atifmkhan10@gmail.com
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-12 h-6 rounded-full bg-black/10 dark:bg-white/10 
            border border-black/20 dark:border-white/20 transition-colors"
          >
            <div
              className={`absolute w-4 h-4 rounded-full bg-black dark:bg-white 
              transition-transform duration-300 top-1
              ${theme === "dark" ? "translate-x-7" : "translate-x-1"}`}
            >
              <Lightbulb
                className={`h-3 w-3 absolute top-0.5 left-0.5 
                ${theme === "dark" ? "text-yellow-400" : "text-white"}`}
                fill={theme === "dark" ? "currentColor" : "none"}
              />
            </div>
          </button>

        </div>

        {/* Row 2 (Projects + Contact) */}
        <div className="
          flex items-center justify-center gap-10 py-3 
          border-t border-black/10 dark:border-white/10
        ">
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm font-semibold hover:opacity-80"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm font-semibold hover:opacity-80"
          >
            Contact
          </button>
        </div>

      </div>

    </nav>
  );
}
