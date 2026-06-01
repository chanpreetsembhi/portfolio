import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects - Chanpreet",
  description: "Real-world projects built by Chanpreet Singh.",
};

const page = () => {
  return (
    <main className="py-10 max-w-4xl mx-auto px-4">

      {/* Header — shared PageHeader, same as Contact */}
      <PageHeader
        label="My Work"
        title="Projects"
        subtitle="I have worked on many projects over the course of being a Web Developer. Here are a few of my live, real-world projects."
      />

      {/* Project list */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="group">

            {/* Index divider */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm group-hover:shadow-lg group-hover:shadow-neutral-200/60 dark:group-hover:shadow-neutral-900/60 transition-shadow duration-500">
              <Image
                src={project.img}
                alt={project.title}
                width={1200}
                height={800}
                loading="eager"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>

            {/* Info row */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mt-6">

              {/* Left — title */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                  {project.title}
                </h2>
              </div>

              {/* Right — author, desc, links */}
              <div className="w-full md:w-1/2 space-y-4">

                {/* Author */}
                <div className="flex items-center gap-2.5">
                  <Avatar className="size-7">
                    <AvatarImage
                      src="/profile.jpg"
                      alt="Chanpreet Singh"
                      className="object-cover object-top"
                    />
                    <AvatarFallback className="text-xs bg-sky-100 text-sky-600">CS</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    by{" "}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Chanpreet Singh
                    </span>
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Links — same button styles used on Home project cards */}
                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href={project.code}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full px-4 py-2 transition-all duration-200"
                  >
                    <FiGithub className="size-3.5" />
                    Source Code
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-medium bg-sky-500 hover:bg-sky-600 text-white rounded-full px-4 py-2 transition-all duration-200 shadow-sm shadow-sky-200 dark:shadow-sky-900/40"
                  >
                    <FiExternalLink className="size-3.5" />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;