"use client";

import { useState } from "react";
import { ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ProblemItem {
  title: string;
  desc: string;
}

interface SolutionItem {
  title: string;
  desc: string;
  color?: string; // blue, purple, amber, green
  impact?: string;
}

interface TechnicalItem {
  title: string;
  points: string[];
}
interface ProjectLayoutProps {
  title: string;
  overview: string;
  hero?:
  | { type: "image" | "video"; src: string; aspectRatio?: string }  // 👈 add it here
  | { type: "carousel"; items: MediaItem[]; aspectRatio?: string }; // 👈 and here
  problems?: ProblemItem[];
  solutions?: SolutionItem[];
  technical?: TechnicalItem[];
  insights?: string[];
  impact?: string[];
  techStack?: string[];
  backText?: string;
  note?: string;
}

export default function ProjectLayout({
  title,
  overview,
  hero,
  problems,
  solutions,
  technical,
  insights,
  impact,
  techStack,
  backText = "Back to portfolio",
  note,
}: ProjectLayoutProps) {
  const [index, setIndex] = useState(0);
  const items = hero && "items" in hero ? hero.items : hero ? [hero] : [];
  const hasCarousel = hero && "items" in hero;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        {backText}
      </Link>

      {/* Hero */}
      {hero && (
        <section className="relative rounded-xl overflow-hidden">
          {/* Dynamic aspect ratio */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{
              aspectRatio: hero?.aspectRatio || (items.length > 1 ? "16 / 9" : "6.5 / 2"),
            }}
          >
            {items.length > 0 &&
              (items[index].type === "video" ? (
                <video
                  key={items[index].src}
                  src={items[index].src}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  key={items[index].src}
                  src={items[index].src}
                  alt={`${title} visual ${index + 1}`}
                  fill
                  className="object-contain"
                />
              ))}
          </div>

          {/* Carousel Navigation */}
          {hasCarousel && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)] border border-custom hover:bg-secondary transition"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)] border border-custom hover:bg-secondary transition"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          )}
        </section>
      )}


      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">{title}</h1>
        <p className="text-sm text-secondary">{overview}</p>
      </section>

      {/* Problems */}
      {problems && problems.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-custom">
                <h3 className="font-semibold text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Solutions */}
      {solutions && solutions.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">The Solution</h2>
          <div className="space-y-4">
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border-l-4 bg-secondary ${s.color ? `border-${s.color}-500` : "border-blue-500"
                  }`}
              >
                <h3 className="font-semibold text-lg text-primary mb-3">{s.title}</h3>
                <p className="text-secondary text-sm mb-3">{s.desc}</p>
                {s.impact && (
                  <div className="p-3 rounded bg-tertiary">
                    <p className="text-xs text-secondary">
                      <strong className="text-primary">Impact:</strong> {s.impact}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical */}
      {technical && technical.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Technical Approach</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {technical.map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-custom">
                <h3 className="font-semibold text-primary mb-3">{t.title}</h3>
                <ul className="tech-list">
                  {t.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Insights */}
      {insights && insights.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((ins, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-custom">
                <h3 className="font-semibold text-primary">{ins}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Impact */}
      {impact && impact.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Business Impact</h2>
          <div className="space-y-3">
            {impact.map((imp, i) => (
              <p key={i} className="text-secondary text-sm">
                {imp}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-tertiary text-secondary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {note && (
        <p className="text-sm text-tertiary italic">
          {note}
        </p>
      )}
    </main>
  );
}
