// components/SectionHeader.tsx
// Shared two-line section header with optional "View all" link

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface SectionHeaderProps {
  label: string;         // small uppercase sky label e.g. "Work"
  title: string;         // section heading
  viewAllHref?: string;  // if provided, shows "View all →" link
}

export function SectionHeader({ label, title, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <span className="sky-label block">{label}</span>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="flex items-center gap-1 text-sm text-sky-600 dark:text-sky-400 hover:underline mb-0.5"
        >
          View all <FiArrowRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
}