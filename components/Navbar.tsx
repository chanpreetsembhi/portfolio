"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiGrid, FiHome, FiMoon, FiSend, FiSun, FiUser } from "react-icons/fi";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/about", icon: FiUser, label: "About" },
  { href: "/work", icon: FiGrid, label: "Work" },
  { href: "/contact", icon: FiSend, label: "Contact" },
];

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => setMounted(true), []);

  const linkClass = (path: string) =>
    cn(
      "flex items-center gap-2 rounded-full p-2 border transition-colors duration-150",
      pathName === path
        ? "bg-neutral-200 border-neutral-300 dark:bg-neutral-700 dark:border-neutral-500"
        : "border-transparent hover:bg-neutral-100 hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700",
    );

  return (
    <nav className="fixed md:sticky md:top-0 bottom-2 inset-x-0 z-20 flex justify-center py-2 mt-6">
      <div className="bg-white dark:bg-neutral-950 dark:text-white border border-neutral-200 dark:border-neutral-700/90 flex items-center gap-1 rounded-full shadow-sm text-xs p-1">
        {/* Home */}
        <Link href="/" aria-label="Home" className={linkClass("/")}>
          <FiHome className="size-4" />
        </Link>

        {/* Middle links */}
        <div className="flex items-center gap-1 border-l border-r border-neutral-200 dark:border-neutral-700 px-2">
          {navLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={linkClass(href)}
            >
              <Icon className="size-4" />
              <span className="hidden md:block">{label}</span>
            </Link>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={
            mounted && theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className="p-1 rounded-full size-8 flex items-center justify-center cursor-pointer hover:border hover:bg-neutral-100 hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-colors duration-150"
        >
          {mounted && theme === "dark" ? (
            <FiSun className="size-4" />
          ) : (
            <FiMoon className="size-4" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
