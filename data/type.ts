import { IconType } from "react-icons";

// Home Page
export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
}

export interface Stack {
  icon: IconType;
  name: string;
  color: string;
}

export interface Stats {
  value: string;
  label: string;
}

// About Page
export interface Language {
  language: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  color: string;
  points: string[];
}

export interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

export interface Project {
  img: string;
  title: string;
  desc: string;
  code: string;
  link: string;
}

// Contact Page
export interface ContactLink {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}
