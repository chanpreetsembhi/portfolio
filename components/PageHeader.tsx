// components/PageHeader.tsx
// Shared centered header used on About, Projects, and Contact pages

interface PageHeaderProps {
  label: string;       // small uppercase category label e.g. "My Work"
  title: string;       // large heading
  subtitle?: string;   // optional description paragraph
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center pb-14 max-w-xl mx-auto">
      <span className="sky-label">{label}</span>
      <h1 className="text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-3 mt-1">
        {title}
      </h1>
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}