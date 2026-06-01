import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBlock } from "@/components/CtaBlock";
import { featuredProjects, stack, stats } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 pb-10">
      {/* ── Hero ── */}
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="flex items-center justify-center gap-2 divide-x divide-sky-400 bg-sky-200/50 dark:bg-sky-400/20 border border-sky-300/50 dark:border-sky-400/40 rounded-full text-xs py-1.5 px-3">
          <span className="font-bold pr-2">Coder</span>
          <span className="text-sky-600 dark:text-sky-300 font-medium pl-2">
            Web Developer
          </span>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Building bridges between design and code
        </h1>
        <p className="mt-6 md:text-lg md:leading-8 text-neutral-600 dark:text-neutral-400">
          I'm a developer crafting intuitive user experiences.
        </p>
      </div>

      {/* About pill link */}
      <div className="flex mt-8">
        <Link
          href="/about"
          className="group relative flex items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-sky-300 dark:hover:border-sky-700 rounded-full pl-1.5 pr-4 hover:pr-3 py-1.5 mx-auto shadow-sm hover:shadow-md hover:shadow-sky-100 dark:hover:shadow-sky-950/40 transition-all duration-300"
        >
          <div className="relative shrink-0">
            <div className="rounded-full size-9 overflow-hidden ring-2 ring-sky-400/40 group-hover:ring-sky-400/80 transition-all duration-300">
              <Image
                src="/profile.jpg"
                alt="Chanpreet Singh"
                width={40}
                height={40}
                className="object-cover object-top size-9"
              />
            </div>
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-neutral-900" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mb-0.5">
              Portfolio
            </span>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              Chanpreet Singh
              <span className="ml-1.5 text-xs font-normal text-sky-500 dark:text-sky-400">
                · About
              </span>
            </p>
          </div>
          <div className="ml-1 overflow-hidden max-w-0 group-hover:max-w-6 transition-all duration-300">
            <div className="flex items-center justify-center size-6 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-500 dark:text-sky-400">
              <FiChevronRight className="size-3.5" />
            </div>
          </div>
        </Link>
      </div>

      {/* ── Status Banner ── */}
      <div className="mt-16 flex justify-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-full px-5 py-2.5 text-sm text-center">
          <span className="relative flex size-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2.5 bg-green-500" />
          </span>
          <span className="font-medium text-neutral-800 dark:text-neutral-200">
            Open to work
          </span>
          <span className="text-neutral-300 dark:text-neutral-600 hidden sm:inline">
            ·
          </span>
          <span className="text-neutral-500 dark:text-neutral-400">
            Frontend / Full-stack · Remote or Hybrid
          </span>
        </div>
      </div>

      {/* ── Quick Stats ── */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center bg-neutral-100 dark:bg-neutral-800/50 rounded-2xl py-5"
          >
            <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {s.value}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Featured Projects ── */}
      <section className="mt-16">
        {/* Uses the shared SectionHeader — same as every other section on every page */}
        <SectionHeader
          label="Work"
          title="Featured Projects"
          viewAllHref="/work"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredProjects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/60 p-5 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {p.title}
                </h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={p.github}
                    className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  >
                    <FiGithub className="size-4" />
                  </a>
                  <a
                    href={p.live}
                    className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  >
                    <FiExternalLink className="size-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="mt-16">
        <SectionHeader
          label="Toolkit"
          title="Tech Stack"
          viewAllHref="/about/#technical-skills"
        />
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {stack.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-2xl py-4 transition-colors duration-200 cursor-default"
            >
              <Icon className={`size-6 ${color}`} />
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      {/* Uses the shared CtaBlock — identical to the one on the About page */}
      <section className="mt-16">
        <CtaBlock />
      </section>
    </main>
  );
}
