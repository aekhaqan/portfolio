"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceETL() {
  const images = [
    "/ecommerce1.png",
    "/ecommerce2.png",
    "/ecommerce3.png",
    "/ecommerce4.png",
    "/ecommerce5.png",
  ];
  
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

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

      {/* Hero Image Carousel */}
      <section className="relative rounded-xl overflow-hidden border border-custom">
        <div className="aspect-video relative bg-secondary">
          <Image
            src={images[index]}
            alt={`E-commerce dashboard ${index + 1}`}
            fill
            className="object-contain"
          />
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
          {index + 1} / {images.length}
        </div>
      </section>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {["Power BI", "Power Query", "DAX", "Star Schema"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-tertiary text-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          E-Commerce Intelligence Platform
        </h1>
        
        <p className="text-xl text-secondary">
          Transformed fragmented Excel data into an enterprise-grade analytics platform with full ETL pipeline and 4-page Power BI report.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Challenge</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Fragmented Data</h3>
            <p className="text-sm text-secondary">
              Sales, customer, and product data scattered across 8+ Excel workbooks from different departments
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Data Quality Issues</h3>
            <p className="text-sm text-secondary">
              Missing values, inconsistent formatting, duplicates, no standardized keys
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Manual Processes</h3>
            <p className="text-sm text-secondary">
              Weekly manual consolidation taking 4+ hours, prone to errors and version control issues
            </p>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Solution</h2>
        
        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              1. Data Extraction & Cleaning
            </h3>
            <p className="text-secondary mb-3">
              Built Power Query pipelines to connect to multiple data sources, standardized date formats, 
              handled null values, removed 3,200+ duplicate orders, and created unique identifiers across tables.
            </p>
            <div className="p-3 rounded bg-tertiary font-mono text-xs text-secondary">
              Conditional columns • Text.Proper() • Date.From() • Merged queries • Removed duplicates
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              2. Star Schema Design
            </h3>
            <p className="text-secondary mb-3">
              Designed star schema with 1 fact table (Orders) and 5 dimension tables (Customers, Products, 
              Date, Locations, Categories). Established one-to-many relationships with proper cardinality 
              and bi-directional filtering for RFM analysis.
            </p>
            <div className="p-3 rounded bg-tertiary font-mono text-xs text-secondary">
              1 fact table • 5 dimension tables • 6 relationships • Date table with fiscal calendar
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              3. Advanced DAX Measures
            </h3>
            <p className="text-secondary mb-3">
              Created 30+ calculated measures including time intelligence (YTD, MoM), cohort analysis, 
              customer segmentation, and dynamic price optimization zones.
            </p>
            <div className="p-3 rounded bg-tertiary font-mono text-xs text-secondary">
              CALCULATE() • FILTER() • Time intelligence • RFM scoring • Cohort retention • Price sensitivity
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              4. Interactive Dashboards
            </h3>
            <p className="text-secondary mb-3">
              4-page report covering sales overview, customer behavior, product performance, and profitability 
              analysis. Bookmarks for scenario switching, drill-throughs for detailed analysis.
            </p>
            <div className="p-3 rounded bg-tertiary font-mono text-xs text-secondary">
              Sales heatmap • Revenue breakdown • Profit margins • YoY category change • Customer RFM grid
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Key Findings</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Profit vs Sales Mismatch</h3>
            <p className="text-sm text-secondary">
              Discount category had highest sales but lowest margins. Shipping costs ate 48% of profit on items under £30.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Customer Concentration Risk</h3>
            <p className="text-sm text-secondary">
              Top 5% of customers drove 34% of revenue. 28% of customers were one-time buyers—retention issue.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Regional Performance Gaps</h3>
            <p className="text-sm text-secondary">
              West region had 43% lower order value despite same traffic. Pricing strategy needed adjustment.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Seasonal Patterns</h3>
            <p className="text-sm text-secondary">
              Q4 revenue 2.1x higher than Q2, but inventory costs spiked 3.2x—overstocking during peak season.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Business Impact</h2>
        
        <div className="p-6 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <div className="space-y-3 text-secondary">
            <p>
              <strong className="text-primary">Time savings:</strong> Report refresh automated—4+ hours of manual work per week eliminated.
            </p>
            <p>
              <strong className="text-primary">Data quality:</strong> Single source of truth with validated data. No more conflicting reports.
            </p>
            <p>
              <strong className="text-primary">Decision making:</strong> Identified profit leaks and customer retention issues that weren't visible in Excel.
            </p>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Note: Synthetic e-commerce dataset created for portfolio demonstration. All insights and technical implementations are real.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tools & Techniques</h2>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Power BI Desktop",
            "Power Query (M)",
            "DAX",
            "Star Schema",
            "Excel Integration",
            "Time Intelligence",
            "RFM Analysis",
            "Cohort Analysis"
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