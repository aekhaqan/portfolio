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
        setResult("Sent! We'll be in touch.");
        setError("");
        form.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setError("Failed. Try again.");
        setResult("");
      }
    } catch {
      setError("Failed. Try again.");
      setResult("");
    }
  };

  // 🩹 Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg focus:outline-none transition-all"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg focus:outline-none transition-all"
          placeholder="Email"
        />
      </div>

      <textarea
        name="message"
        required
        rows={4}
        className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg focus:outline-none transition-all resize-none"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={result === "Sending..."}
        className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-all disabled:opacity-50"
      >
        {result === "Sending..." ? "Sending..." : "Send"}
      </button>

      {result && result !== "Sending..." && (
        <p className="text-center font-medium">{result}</p>
      )}
      {error && <p className="text-center font-medium text-red-500">{error}</p>}
    </form>
  );
}
