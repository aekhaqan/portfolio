"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Lightbulb, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Scroll to projects section if hash exists on load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#projects") {
      const section = document.getElementById("projects");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay for mount/render
      }
    }
  }, []);

  if (!mounted) return null;

  // 🔹 Handles home/projects navigation
  const handleHomeClick = () => {
    if (pathname === "/") {
      // Already on homepage → scroll to projects section
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on homepage → navigate to homepage + #projects
      router.push("/#projects");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          isScrolled
            ? "bg-white/40 dark:bg-black/30 backdrop-blur-lg border-b border-black/10 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Home / Projects Scroll */}
          <button
            onClick={handleHomeClick}
            className="text-sm font-semibold tracking-wide hover:opacity-80 transition-opacity"
          >
            Projects
          </button>

          {/* Center: Email */}
          <div className="hidden md:flex items-center justify-center text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a
              href="mailto:atifmkhan10@gmail.com"
              className="hover:underline underline-offset-4"
            >
              atifmkhan10@gmail.com
            </a>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-12 h-6 rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute w-4 h-4 rounded-full bg-black dark:bg-white transition-transform duration-300 top-1 ${
                  theme === "dark" ? "translate-x-7" : "translate-x-1"
                }`}
              >
                <Lightbulb
                  className={`h-3 w-3 absolute top-0.5 left-0.5 ${
                    theme === "dark" ? "text-yellow-400" : "text-white"
                  }`}
                  fill={theme === "dark" ? "currentColor" : "none"}
                />
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Centered email on mobile */}
        <div className="flex md:hidden items-center justify-center mt-2 text-xs text-neutral-700 dark:text-neutral-400">
          <a
            href="mailto:atifmkhan10@gmail.com"
            className="hover:underline underline-offset-4"
          >
            atifmkhan10@gmail.com
          </a>
        </div>
      </nav>

      {/* Optional mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
