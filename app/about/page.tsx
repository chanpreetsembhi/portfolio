import Sidelinks from "@/components/Sidelinks";
import Image from "next/image";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { skills, languages, experiences } from "@/data/portfolio";
import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "About - Chanpreet",
  description: "Learn more about Chanpreet and professional background.",
};

const page = () => {
  return (
    <main className="flex flex-col md:flex-row items-start gap-8 px-4 py-10">
      <Sidelinks />

      {/* ── Sticky Profile Card ── */}
      <aside className="w-full md:w-72 md:sticky md:top-20 shrink-0">
        <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          {/* gradient header strip */}
          <div className="h-24 bg-linear-to-br from-sky-400 via-blue-500 to-violet-500 relative z-0">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mt-12 mb-4 px-6 relative z-10">
            <div className="ring-4 ring-white dark:ring-neutral-900 rounded-full">
              <Image
                src="/profile.jpg"
                alt="Chanpreet Singh"
                width={88}
                height={88}
                loading="eager"
                className="rounded-full size-22 object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="px-6 pb-6 text-center">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Chanpreet Singh
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 mb-4">
              Web Developer
            </p>

            <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              <BsGlobeAsiaAustralia className="size-3.5 text-sky-500" />
              <span>Asia / Punjab, India</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-5">
              {languages.map((lang, i) => (
                <span
                  key={i}
                  className="text-xs bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full py-0.5 px-3"
                >
                  {lang.language}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              {[
                {
                  href: "https://github.com/chanpreetsembhi",
                  icon: FiGithub,
                  label: "GitHub",
                },
                { href: "https://www.linkedin.com/in/sembhi77", icon: FiLinkedin, label: "LinkedIn" },
                { href: "mailto:chanpreetsingh73553@gmail.com", icon: FiMail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="flex items-center justify-center size-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 dark:hover:bg-sky-900/30 dark:hover:border-sky-700 dark:hover:text-sky-400 transition-all duration-200"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className="mx-6 mb-6 flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl px-4 py-3">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            <div>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Open to work
              </p>
              <p className="text-[11px] text-emerald-600/70 dark:text-emerald-500/70">
                Remote · Full-time
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="w-full md:flex-1 space-y-16">
        {/* Introduction — uses PageHeader pattern for the big title block */}
        <section id="introduction" className="scroll-mt-24">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-sky-500 to-transparent rounded-full hidden md:block" />
            {/*
              sky-label + h1 mirrors the same pattern as Projects/Contact
              (PageHeader centres it; here it's left-aligned, which is fine
              because the sidebar already anchors the layout)
            */}
            <span className="sky-label">Introduction</span>
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-5">
              I turn ideas into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">living interfaces</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-sky-200/70 dark:bg-sky-800/50 z-0 rounded" />
              </span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px] max-w-xl">
              Proficient web developer skilled in HTML5, CSS3, JavaScript
              (ES6+), Bootstrap, Tailwind CSS, Vue.js, React and GitHub.
              Committed to delivering responsive, reusable, accessible, and
              scalable web solutions.
            </p>
          </div>
        </section>

        {/* Work Experience — uses shared SectionHeader */}
        <section id="work-experience" className="scroll-mt-24">
          <SectionHeader label="Career" title="Work Experience" />

          <div className="relative space-y-6">
            <div className="absolute left-2.75 top-3 bottom-3 w-px bg-neutral-200 dark:bg-neutral-800" />

            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-5 group">
                <div
                  className={`relative z-10 mt-1.5 size-5.5 rounded-full ${exp.color} ring-4 ring-white dark:ring-neutral-950 shrink-0 flex items-center justify-center`}
                >
                  <span className="size-2 rounded-full bg-white/80" />
                </div>

                <div className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-sky-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills — uses shared SectionHeader */}
        <section id="technical-skills" className="scroll-mt-24">
          <SectionHeader label="Toolkit" title="Technical Skills" />

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {skills.map(({ icon: Icon, name, color }) => (
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

        {/* CTA — shared component, same as Home */}
        <CtaBlock />
      </div>
    </main>
  );
};

export default page;
