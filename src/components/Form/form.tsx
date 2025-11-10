"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ec7328bf-b44e-41c1-8886-d84f50561c41");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setResult("Sent! I’ll be in touch soon.");
        setError("");
        form.reset();
        setTimeout(() => setResult(""), 4000);
      } else {
        setError("Something went wrong. Try again.");
        setResult("");
      }
    } catch {
      setError("Failed. Try again.");
      setResult("");
    }
  };

  if (!mounted) return null;

  return (
     <form onSubmit={onSubmit} className="space-y-4 w-full md:w-[95%] mx-auto md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 bg-[var(--bg-primary)]/70 dark:bg-[var(--bg-secondary)]/60 border border-custom rounded-xl shadow-glass focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-tertiary"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-[var(--bg-primary)]/70 dark:bg-[var(--bg-secondary)]/60 border border-custom rounded-xl shadow-glass focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-tertiary"
          placeholder="Email"
        />
      </div>

      <textarea
        name="message"
        required
        rows={4}
        className="w-full px-4 py-3 bg-[var(--bg-primary)]/70 dark:bg-[var(--bg-secondary)]/60 border border-custom rounded-xl shadow-glass focus:ring-2 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-tertiary resize-none"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={result === "Sending..."}
        className="w-full px-8 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50 shadow-glass"
      >
        {result === "Sending..." ? "Sending..." : "Send"}
      </button>

      {(result || error) && (
        <p
          className={`text-center text-sm font-medium ${
            error ? "text-red-500" : "text-[var(--accent)]"
          }`}
        >
          {error || result}
        </p>
      )}
    </form>
  );
}
