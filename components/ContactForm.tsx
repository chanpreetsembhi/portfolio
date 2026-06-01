"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-4">
        <Field className="w-full">
          <FieldLabel
            htmlFor="input-name"
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide"
          >
            Name <span className="text-red-400">*</span>
          </FieldLabel>
          <Input
            type="text"
            id="input-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-xl bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 focus:border-sky-400 dark:focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900/30 transition-all"
            required
          />
        </Field>
        <Field className="w-full">
          <FieldLabel
            htmlFor="input-email"
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide"
          >
            Email <span className="text-red-400">*</span>
          </FieldLabel>
          <Input
            type="email"
            id="input-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="rounded-xl bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 focus:border-sky-400 dark:focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900/30 transition-all"
            required
          />
        </Field>
      </div>

      <Field className="w-full">
        <FieldLabel
          htmlFor="textarea-message"
          className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide"
        >
          Message <span className="text-red-400">*</span>
        </FieldLabel>
        <Textarea
          id="textarea-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or idea..."
          className="rounded-xl bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 focus:border-sky-400 dark:focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900/30 transition-all min-h-36 resize-none"
          required
        />
        <FieldDescription className="text-xs text-neutral-400 dark:text-neutral-600">
          Be as detailed as you like — I read every message.
        </FieldDescription>
      </Field>

      {status === "success" && (
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl px-4 py-3">
          <FiCheck className="size-4 shrink-0" />
          Message sent! I'll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl px-4 py-3">
          <FiAlertCircle className="size-4 shrink-0" />
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      <Button
        variant="default"
        size="lg"
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="w-full rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-sky-100 dark:shadow-sky-900/30 transition-all duration-200 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <FiSend className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </div>
  );
};

export default ContactForm;