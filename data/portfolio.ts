import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import {
  Skill,
  Experience,
  Language,
  Project,
  FeaturedProject,
  Stack,
  Stats,
  ContactLink,
} from "./type";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

// Home Page
export const featuredProjects: FeaturedProject[] = [
  {
    title: "NEP Dashboard",
    description: "Student platform for reading educational notes.",
    tags: ["Vue.js", "Tailwind", "TypeScript"],
    github: "https://github.com/chanpreetsembhi/nep-dash",
    live: "https://nep-dash.vercel.app",
    gradient: "from-sky-500/10 to-blue-500/10",
  },
  {
    title: "NEP Mobile App",
    description: "Mobile app for accessing notes and resources.",
    tags: ["React Native", "Expo"],
    github: "https://github.com/chanpreetsembhi/nep-app",
    live: "https://github.com/chanpreetsembhi/nep-app/releases/tag/beta",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    title: "Food Delivery Ui",
    description: "Responsive food delivery interface design.",
    tags: ["Html", "Bootstrap"],
    github: "https://github.com/ChanpreetSembhi/fast-food",
    live: "https://chanpreetsembhi.github.io/fast-food",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const stack: Stack[] = [
  { icon: SiReact, name: "React", color: "text-sky-400" },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-neutral-900 dark:text-neutral-100",
  },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiGit, name: "Git", color: "text-orange-500" },
];

export const stats: Stats[] = [
  { value: "12+", label: "Projects" },
  { value: "3 yrs", label: "Experience" },
  { value: "5★", label: "Client rating" },
];

// About page
export const languages: Language[] = [
  { language: "English" },
  { language: "Hindi" },
  { language: "Punjabi" },
];

export const experiences: Experience[] = [
  {
    role: "FullStack Developer",
    company: "Freelancer",
    period: "2024 — Present",
    color: "bg-emerald-500",
    points: [
      "Developed and maintained scalable full-stack web applications using modern frontend and backend technologies.",
      "Built responsive and user-friendly interfaces with React, Next.js or Vue.js.",
      "Conducted debugging, troubleshooting, and performance tuning across the entire technology stack.",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Akaal Creatives",
    period: "2023 — 2024",
    color: "bg-sky-500",
    points: [
      "Developed dynamic Single Page Applications using Vue.js.",
      "Managed source code using Git and GitHub workflows.",
      "Implemented responsive designs for desktop, tablet, and mobile devices.",
    ],
  },
];

export const skills: Skill[] = [
  { icon: SiHtml5, name: "HTML", color: "text-[#E34F26]" },
  { icon: SiCss, name: "CSS", color: "text-[#1572B6]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
  { icon: SiBootstrap, name: "Bootstrap", color: "text-[#7952B3]" },
  { icon: SiVuedotjs, name: "Vue.js", color: "text-[#4FC08D]" },
  { icon: SiReact, name: "React.js", color: "text-[#61DAFB]" },
  { icon: SiReact, name: "React Native", color: "text-[#61DAFB]" },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-neutral-900 dark:text-neutral-100",
  },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  {
    icon: SiExpress,
    name: "Express.js",
    color: "text-neutral-900 dark:text-neutral-100",
  },
  { icon: SiGit, name: "Git", color: "text-[#F05032]" },
  { icon: DiPhotoshop, name: "Photoshop", color: "text-sky-400" },
  { icon: DiIllustrator, name: "Illustrator", color: "text-orange-500" },
  { icon: SiLinux, name: "Linux", color: "text-zinc-900 dark:text-amber-400" },
];

export const projects: Project[] = [
  {
    img: "/projects/notes-app.png",
    title: "Notes Web App",
    desc: "Development of a flexible and highly customizable design system using Vue.js for front-end and Figma for design collaboration.",
    code: "https://github.com/chanpreetsembhi/nep-dash",
    link: "https://nep-dash.vercel.app",
  },
  {
    img: "/projects/e-card.jpg",
    title: "Online Visting Card",
    desc: "Development of a flexible and highly customizable design system using Html, Tailwind Css for front-end and Figma for design collaboration.",
    code: "https://github.com/chanpreetsembhi/health-consultation",
    link: "https://chanpreetsembhi.github.io/health-consultation",
  },
  {
    img: "/projects/food-delivery.jpg",
    title: "Food Delivery Ui",
    desc: "Development of a flexible and highly customizable design system using Html for front-end and Figma for design collaboration.",
    code: "https://github.com/chanpreetsembhi/fast-food",
    link: "https://chanpreetsembhi.github.io/fast-food",
  },
];

// Contact Page
export const contactLinks: ContactLink[] = [
  {
    icon: FiMail,
    label: "Gmail",
    value: "chanpreetsingh73553@gmail.com",
    href: "mailto:chanpreetsingh73553@gmail.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/chanpreetsembhi",
    href: "https://github.com/chanpreetsembhi",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chanpreet",
    href: "https://www.linkedin.com/in/sembhi77",
  },
  {
    icon: BsGlobeAsiaAustralia,
    label: "Location",
    value: "Punjab, India",
  },
];
