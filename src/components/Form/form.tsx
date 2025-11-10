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
    <form
      onSubmit={onSubmit}
      className="space-y-5 w-full md:w-[95%] mx-auto md:mx-0"
    >
      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full px-4 py-3 rounded-xl border border-custom bg-secondary focus:ring-2 focus:ring-[var(--accent)] text-primary placeholder:text-tertiary outline-none transition-all shadow-glass"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl border border-custom bg-secondary focus:ring-2 focus:ring-[var(--accent)] text-primary placeholder:text-tertiary outline-none transition-all shadow-glass"
        />
      </div>

      {/* Message Textarea */}
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className="w-full px-4 py-3 rounded-xl border border-custom bg-secondary focus:ring-2 focus:ring-[var(--accent)] text-primary placeholder:text-tertiary outline-none transition-all resize-none shadow-glass"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={result === 'Sending...'}
        className="w-full py-3 font-semibold rounded-xl bg-[var(--accent)] text-white hover:opacity-90 transition-all disabled:opacity-50 shadow-glass"
      >
        {result === 'Sending...' ? 'Sending...' : 'Send'}
      </button>

      {/* Result/Error */}
      {(result || error) && (
        <p
          className={`text-center text-sm font-medium ${error ? 'text-red-500' : 'text-[var(--accent)]'
            }`}
        >
          {error || result}
        </p>
      )}
    </form>
  );
}
