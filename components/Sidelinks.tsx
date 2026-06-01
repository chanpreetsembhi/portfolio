"use client";

import { useCallback } from "react";

const sideLinks = [
  { link: "introduction", name: "Introduction" },
  { link: "work-experience", name: "Work Experience" },
  { link: "technical-skills", name: "Technical Skills" },
];

const Sidelinks = () => {
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 lg:flex flex-col items-start gap-4 hidden">
      {sideLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(link.link)}
          className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-300 hover:translate-x-2 hover:text-neutral-800 dark:hover:text-neutral-400"
        >
          <span className="w-4 border-t-2 border-neutral-300"></span>
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Sidelinks;
