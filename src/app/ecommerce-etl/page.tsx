"use client";

import { useState } from "react";
import { ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceETL() {
  const media = [
    { type: "video", src: "/ecommerce.mp4" },
    { type: "image", src: "/ecommerce1.png" },
    { type: "image", src: "/ecommerce2.png" },
    { type: "image", src: "/ecommerce3.png" },
    { type: "image", src: "/ecommerce4.png" },
    { type: "image", src: "/ecommerce5.png" },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % media.length);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-centre gap-2 text-secondary hover:text-primary transition-colours"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Hero Carousel */}
      <section className="relative rounded-xl overflow-hidden border border-custom bg-secondary shadow-glass">
        <div className="aspect-video relative flex items-center justify-centre">
          {media[index].type === "video" ? (
            <video
              key={media[index].src}
              src={media[index].src}
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              key={media[index].src}
              src={media[index].src}
              alt={`E-commerce data visual ${index}`}
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
      </section>

      {/* Header */}
      <section className="space-y-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          E-Commerce Data Integration & Analytics
        </h1>

        <p className="text-md text-secondary">
          Unified fragmented online retail data into a single, GDPR-compliant
          dataset using Microsoft Fabric. Built a complete ETL pipeline and a
          4-page Power BI report for interactive sales, customer, and product
          insights.
        </p>
      </section>

      {/* The Challenge */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Challenge</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Scattered Data Sources
            </h3>
            <p className="text-sm text-secondary">
              Transaction, customer, and inventory data spread across multiple
              Excel files, web exports, and legacy databases.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Inconsistent Quality
            </h3>
            <p className="text-sm text-secondary">
              Missing customer identifiers, duplicate orders, and non-standard
              date formats created reconciliation challenges.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Compliance Gaps
            </h3>
            <p className="text-sm text-secondary">
              Customer data lacked proper anonymisation and retention handling,
              risking GDPR non-compliance.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Solution</h2>

        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              1. Fabric Dataflows & Cleansing
            </h3>
            <p className="text-secondary text-sm mb-3">
              Connected multiple sources through Microsoft Fabric and Power
              Query. Applied transformation logic for standardising column
              names, correcting nulls, and mapping categories. Implemented
              automatic deduplication and validation routines.
            </p>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              2. GDPR-Compliant Data Modelling
            </h3>
            <p className="text-secondary text-sm mb-3">
              Designed a secure schema in Fabric Lakehouse, removing or hashing
              personally identifiable data. Ensured audit trails for all
              transformations and maintained region-based access policies.
            </p>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              3. Star Schema & Measure Layer
            </h3>
            <p className="text-secondary text-sm mb-3">
              Modelled a central fact table linked to dimension tables for
              products, customers, and regions. Built DAX measures for sales
              trends, conversion rates, and customer lifetime value.
            </p>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              4. Interactive Insights
            </h3>
            <p className="text-secondary text-sm mb-3">
              Created an executive dashboard covering sales performance, profit
              margins, customer cohorts, and product segmentation. Enabled
              drill-through and dynamic filtering for region and channel
              comparisons.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Key Insights</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-md bg-secondary border border-custom">
            <h3 className="font-semibold text-primary">
              15% of revenue driven by repeat customers
            </h3>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary">
              Significant regional under-performance in North Zone
            </h3>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary">
              High return rate linked to two specific product lines
            </h3>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary">
              Seasonality: 40% of yearly sales occur in Q4
            </h3>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Business Impact</h2>

        <div className="p-6 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <div className="space-y-3 text-secondary">
            <p>
              <strong className="text-primary">Time saved:</strong> Weekly data
              refresh fully automated — eliminating over 4 hours of manual
              consolidation.
            </p>
            <p>
              <strong className="text-primary">Data reliability:</strong>{" "}
              Consistent, validated dataset now trusted by all business units.
            </p>
            <p>
              <strong className="text-primary">Governance:</strong> GDPR-aligned
              retention and anonymisation policies built into every pipeline.
            </p>
            <p>
              <strong className="text-primary">Decision quality:</strong>{" "}
              Real-time insight into product profitability and customer
              retention improved forecasting accuracy.
            </p>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Note: Synthetic dataset used for demonstration. All modelling,
          transformations, and automation steps replicate real enterprise ETL
          practices.
        </p>
      </section>

      {/* Tools & Techniques */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tools & Techniques</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Microsoft Fabric",
            "Dataflows Gen2",
            "Power BI",
            "DAX",
            "Power Query (M)",
            "Star Schema",
            "Data Governance",
            "GDPR Compliance",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-tertiary text-secondary text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
