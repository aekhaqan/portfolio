"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BobsBurgers() {
  const media = [
    { type: "video", src: "/bobs.mp4" },
    { type: "image", src: "/bobs.png" },
    { type: "image", src: "/bobs2.png" },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % media.length);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  const current = media[index];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Hero Media */}
      <section className="relative rounded-xl overflow-hidden border border-custom">
        <div className="aspect-video relative bg-secondary">
          {current.type === "video" ? (
            <video
              key={current.src}
              src={current.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              key={current.src}
              src={current.src}
              alt={`Restaurant analysis ${index + 1}`}
              fill
              className="object-contain"
            />
          )}
        </div>

        {/* Navigation */}
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

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-custom text-sm text-secondary">
          {index + 1} / {media.length}
        </div>
      </section>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {["Power BI", "DAX", "Operations Analysis", "Minimal Data"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-tertiary text-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Restaurant Operations Analysis
        </h1>
        
        <p className="text-xl text-secondary">
          Found £5,200/month revenue opportunity and identified operational bottlenecks from just 5 columns of data.
        </p>
      </section>

      {/* The Brief */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Brief</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Client Request</h3>
            <p className="text-secondary">
              "Here's our Excel order data. Find us something useful."
            </p>
            <p className="text-sm text-tertiary mt-2">That was the entire brief.</p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">The Constraint</h3>
            <p className="text-secondary">
              Unlike the e-commerce project with 74K orders, this was 5 columns. 
              Challenge: Can you extract meaningful insights from minimal data?
            </p>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Fictional scenario for portfolio, but modeled after real restaurant operational challenges.
        </p>
      </section>

      {/* What I Found */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Deliverable</h2>
        
        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-red-500 bg-secondary">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-semibold text-lg text-primary">
                Walthamstow Problem
              </h3>
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                Critical
              </span>
            </div>
            <p className="text-secondary mb-3">
              Geographically isolated branch drives long deliveries and low-value orders, eroding margins.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-sm text-secondary">
                <strong className="text-primary">Recommendation:</strong> Offer order online, pick up in store.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-semibold text-lg text-primary">
                Peak Hour Chaos
              </h3>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                Operational
              </span>
            </div>
            <p className="text-secondary mb-3">
              Peak hours (7–8pm) overloads drivers, pushing delivery times to 50 mins vs 30 off-peak.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-sm text-secondary">
                <strong className="text-primary">Recommendation:</strong> Dynamic pricing during peak (+£2-3 
                delivery fee) or reallocate drivers from slower branches.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-semibold text-lg text-primary">
                Kensington Opportunity
              </h3>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                Revenue
              </span>
            </div>
            <p className="text-secondary mb-3">
              Highest order value (£64 avg) with solid delivery, but limited radius caps growth.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-sm text-secondary">
                <strong className="text-primary">Recommendation:</strong> Expand delivery zone by 1km. 
                Estimated +£5,000/month revenue based on current order density.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technical Approach</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">DAX Measures</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Delivery efficiency ratios (time vs distance)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Driver utilization percentages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Branch performance scoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Peak hour classifications
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Calculated Columns</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Cross-borough delivery flags
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Order size categorization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Time slot groupings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Distance band analysis
              </li>
            </ul>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <p className="text-secondary">
            <strong className="text-primary">The Constraint as Feature:</strong> With limited data, every 
            measure had to earn its keep. No room for "wouldn't it be cool if..." — only metrics that 
            directly answered business questions.
          </p>
        </div>
      </section>

      {/* Impact */}
      

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tools Used</h2>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Power BI",
            "DAX",
            "Calculated Columns",
            "Delivery Analysis",
            "Operations Metrics"
          ].map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-lg bg-tertiary text-secondary text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}