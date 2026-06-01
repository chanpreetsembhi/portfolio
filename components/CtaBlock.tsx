// components/CtaBlock.tsx
// Identical CTA used at the bottom of Home and About pages

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface CtaBlockProps {
  title?: string;
  subtitle?: string;
}

export function CtaBlock({
  title = "Let's build something together",
  subtitle = "Have a project in mind? I'd love to hear about it.",
}: CtaBlockProps) {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-linear-to-br from-sky-500 via-blue-600 to-violet-600 p-8 text-white">
      {/* dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="text-center sm:text-start w-full">
          <h3 className="text-xl font-black mb-1">{title}</h3>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-blue-50 transition-colors duration-200 mx-auto sm:mx-0"
        >
          Get in touch <FiArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
