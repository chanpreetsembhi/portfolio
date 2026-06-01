import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/chanpreetsembhi",
    icon: FiGithub,
    label: "GitHub",
  },
  { href: "https://www.linkedin.com/in/sembhi77", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/chanpreet_singh_sembhi", icon: FiInstagram, label: "Instagram" },
  { href: "mailto:chanpreetsingh73553@gmail.com", icon: FiMail, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto pt-5 pb-20 md:pb-5 px-4 w-full">
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Copyright */}
        <p className="text-xs text-neutral-400 dark:text-neutral-600 order-2 md:order-1">
          &copy; 2026{" "}
          <span className="text-neutral-600 dark:text-neutral-400 font-medium">
            Chanpreet Singh
          </span>{" "}
          · Built with Next.js & Tailwind
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-1 order-1 md:order-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="flex items-center justify-center size-8 rounded-xl text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
