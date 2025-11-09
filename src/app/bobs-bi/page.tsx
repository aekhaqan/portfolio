"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, TrendingUp, Layers } from "lucide-react";
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
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 space-y-20">
      {/* HERO MEDIA CAROUSEL */}
      <section className="relative max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-md">
          {current.type === "video" ? (
            <video
              key={current.src}
              src={current.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[80vh] object-contain bg-neutral-100 dark:bg-neutral-900"
            />
          ) : (
            <Image
              key={current.src}
              src={current.src}
              alt={`Bob's Burgers analysis ${index + 1}`}
              width={1600}
              height={900}
              className="w-full h-[80vh] object-contain bg-neutral-100 dark:bg-neutral-900"
            />
          )}

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md hover:scale-110 transition"
              >
                <ArrowLeft className="h-5 w-5 text-black dark:text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md hover:scale-110 transition"
              >
                <ArrowRight className="h-5 w-5 text-black dark:text-white" />
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          {index + 1}/{media.length}
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          B.O.B. Burgers: Operations Analysis
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Finding revenue opportunities in a multi-branch restaurant chain with minimal data inputs.
        </p>
      </section>

      {/* WHY THIS PROJECT */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
          Why This Project Was Interesting
        </h2>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-l-4 border-amber-500 bg-neutral-50 dark:bg-neutral-900">
              <h3 className="font-semibold text-black dark:text-white mb-3">
                Client brief
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                "Here's our excel order data, find us something useful."
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                That's it.
              </p>
            </div>

            <div className="p-6 border-l-4 border-blue-500 bg-neutral-50 dark:bg-neutral-900">
              <h3 className="font-semibold text-black dark:text-white mb-3">
                The Opposite Problem
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Unlike the e-commerce project with 74K orders, this was 5 columns worth of data. The challenge wasn't cleaning messy data—it was: can you extract meaningful insights from limited data? Turns out, yeah.
              </p>
            </div>
          </div>

          <div className="p-6 border-l-4 border-green-500 bg-neutral-50 dark:bg-neutral-900">
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>What made it fun:</strong> Built measures to spot patterns (delivery times, driver efficiency, order clustering), created visuals that made the problems obvious, and came up with actionable recommendations.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
              Note: Fictional scenario for portfolio purposes, but modeled after real restaurant operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I FOUND */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          What I Found
        </h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Walthamstow Problem
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              49-minute average delivery time with lowest order value (£46 avg). Branch is geographically isolated, causing cross-borough deliveries.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              → Recommendation: Close or relocate
            </p>
          </div>

          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Peak Hour Chaos
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              7-8pm sees 350 orders with only 5 drivers at Westminster. 50-minute delivery times during peak vs. 28 minutes off-peak.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              → Recommendation: Dynamic pricing or driver reallocation
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Kensington Opportunity
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-2">
              Highest order value (£50 avg) with strong delivery metrics. Currently limited radius means we're leaving money on the table.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              → Recommendation: Expand delivery zone by 4km for +£5,200/month revenue
            </p>
          </div>
        </div>
      </section>

     {/* QUICK TECH NOTES */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
          Technical Bits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              DAX Measures
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Delivery efficiency ratios</li>
              <li>• Driver utilization percentages</li>
              <li>• Branch performance scoring</li>
              <li>• Peak hour classifications</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
              <Layers className="h-5 w-5 text-purple-500" />
              Calculated Columns
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Cross-borough delivery flags</li>
              <li>• Order size categorization</li>
              <li>• Time slot groupings</li>
              <li>• Distance band analysis</li>
            </ul>
          </div>
        </div>

    
        <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            <strong className="text-blue-600 dark:text-blue-400">Fun constraint:</strong> With limited data, every measure had to earn its keep. No room for "wouldn't it be cool if..." only report that directly answers business questions.
          </p>
        </div>
      </section>

      <div className="text-center max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}