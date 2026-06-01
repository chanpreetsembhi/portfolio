import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { contactLinks } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Chanpreet",
  description: "Get in touch with Chanpreet.",
};

const ContactPage = () => {

  return (
    <main className="py-10 max-w-4xl mx-auto px-4">
      {/* Header — shared PageHeader, same as Projects */}
      <PageHeader
        label="Say Hello"
        title="Get in Touch"
        subtitle="Whether you have questions, ideas, or opportunities, I'm eager to connect. Feel free to reach out — I'm here to collaborate and discuss possibilities with you."
      />

      {/* Two-column layout */}
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Left — contact info */}
        <div className="md:col-span-2 space-y-3">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-neutral-600 uppercase mb-4">
            Contact Info
          </p>
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-4 py-3 hover:border-sky-300 dark:hover:border-sky-800 transition-colors duration-200 group"
            >
              <div className="size-8 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center shrink-0">
                <Icon className="size-4 text-sky-500" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate block"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Response time badge */}
          <div className="mt-5 flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl px-4 py-3">
            <span className="relative flex size-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            <div>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Usually replies within 24h
              </p>
              <p className="text-[11px] text-emerald-600/70 dark:text-emerald-500/70">
                Open to new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="md:col-span-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
