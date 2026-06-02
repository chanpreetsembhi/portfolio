import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

// Inter as the sole UI font — mapped to --font-sans
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Geist Mono for code blocks only
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chanpreet Singh — Web Developer",
    template: "%s — Chanpreet",
  },
  description:
    "Portfolio of Chanpreet Singh, a frontend & full-stack web developer based in Punjab, India.",
  icons: {
    icon: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  authors: [{ name: "Chanpreet Singh" }],
  openGraph: {
    title: "Chanpreet Singh — Web Developer",
    description:
      "Frontend & full-stack developer crafting intuitive user experiences.",
    url: "https://chanpreet.dev",
    siteName: "Chanpreet Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanpreet Singh — Web Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased scroll-smooth",
        inter.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="relative min-h-full flex flex-col bg-neutral-100 dark:bg-neutral-950 dark:text-white px-5">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Ambient background glow — decorative only */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-sky-200/40 dark:bg-sky-900/20 blur-3xl" />
          </div>

          <Navbar />

          <main className="flex-1 flex items-center justify-center max-w-4xl mx-auto w-full">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
