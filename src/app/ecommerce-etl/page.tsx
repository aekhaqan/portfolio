"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Wrench,
  TrendingUp,
  FileSpreadsheet,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceBI() {
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

  const current = media[index];

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 space-y-24">
      {/* HERO MEDIA CAROUSEL */}
      <section className="relative max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-md">
          {current.type === "video" ? (
            <video
              key={current.src}
              src={current.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[70vh] object-contain bg-neutral-100 dark:bg-neutral-900"
            />
          ) : (
            <Image
              key={current.src}
              src={current.src}
              alt={`E-commerce report ${index}`}
              width={1600}
              height={900}
              className="w-full h-[70vh] object-contain bg-neutral-100 dark:bg-neutral-900"
            />
          )}

          {/* Navigation Arrows */}
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
        </div>

        <div className="text-center mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          {index + 1}/{media.length}
        </div>
      </section>


      {/* QUICK INTRO */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          E-Commerce Intelligence Platform
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          From scattered Excel chaos to enterprise-grade analytics. Built end-to-end with Power Query, DAX, and data modeling.
        </p>
      </section>

      {/* THE CHALLENGE */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
          The Challenge
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mb-3" />
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Fragmented Data Sources
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              Sales, customer, and product data scattered across 8+ Excel workbooks from different departments
            </p>
          </div>
          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mb-3" />
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Data Quality Issues
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              Missing values, inconsistent formatting, duplicate entries, and no standardized keys
            </p>
          </div>
          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mb-3" />
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Manual Processes
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              Weekly manual consolidation taking 4+ hours, prone to errors and version control issues
            </p>
          </div>
        </div>
      </section>

      {/* THE TRANSFORMATION JOURNEY */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">
          The Transformation Journey
        </h2>
        
        <div className="space-y-8">
          {/* Step 1: Data Extraction & Cleaning */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Data Extraction & Cleaning
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Built Power Query pipelines to connect to multiple data sources. Standardized date formats, handled null values, removed duplicates, and created unique identifiers across tables.
              </p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                  <strong>Key transformations:</strong> Conditional columns for data validation • Text.Proper() for name standardization • Date.From() to fix inconsistent formats • Merged queries to enrich customer data • Removed 3,200+ duplicate orders
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Data Modeling */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-purple-500" />
                Star Schema Design
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Designed a star schema with fact tables (Orders, Order Details) and dimension tables (Customers, Products, Date). Established one-to-many relationships with proper cardinality and cross-filter direction.
              </p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                  <strong>Architecture:</strong> 1 fact table (Orders) • 5 dimension tables • 6 relationships • Bi-directional filtering for RFM analysis • Date table with fiscal calendar support
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: DAX Calculations */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-500" />
                Advanced DAX Measures
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Created 30+ calculated measures and columns using DAX for business intelligence. Implemented time intelligence, cohort analysis, and dynamic price optimization zones.
              </p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                  <strong>Key measures:</strong> Customer Lifetime Value (CLV) using CALCULATE + FILTER • RFM segmentation with nested IF logic • YoY growth with SAMEPERIODLASTYEAR • Price elasticity calculations • Running totals with DATESBETWEEN
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Visualization */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-500" />
                Interactive Dashboard Design
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Built a 5-page interactive report with drill-through capabilities, synchronized slicers, and custom tooltips. Designed for both executive overview and granular analysis.
              </p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                  <strong>Pages:</strong> Executive Summary • Customer Insights (RFM, CLV, segments) • Product Intelligence (elasticity, profitability) • Financial Performance • Drill-Through Detail View
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
          Technical Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-black/40 shadow-sm">
            <Database className="h-7 w-7 mb-3 text-blue-500" />
            <h4 className="font-semibold text-black dark:text-white mb-2">Data Pipeline</h4>
            <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              <li>• Power Query M code for ETL</li>
              <li>• Automated refresh workflows</li>
              <li>• Error handling & data validation</li>
              <li>• Parameter-driven connections</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-black/40 shadow-sm">
            <TrendingUp className="h-7 w-7 mb-3 text-purple-500" />
            <h4 className="font-semibold text-black dark:text-white mb-2">Business Logic</h4>
            <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              <li>• RFM segmentation algorithm</li>
              <li>• CLV prediction models</li>
              <li>• Dynamic price optimization</li>
              <li>• Cohort retention analysis</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-black/40 shadow-sm">
            <Sparkles className="h-7 w-7 mb-3 text-teal-500" />
            <h4 className="font-semibold text-black dark:text-white mb-2">UX Design</h4>
            <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              <li>• Drill-through to product detail</li>
              <li>• Cross-page filter persistence</li>
              <li>• Custom tooltips with DAX</li>
              <li>• Mobile-responsive layouts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT & RESULTS */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
          Impact & Results
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <CheckCircle className="h-7 w-7 text-green-600 dark:text-green-400 mb-3" />
            <h3 className="font-semibold text-lg text-green-600 dark:text-green-400 mb-3">
              Business Value
            </h3>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
              <li><strong>90% time savings</strong> - From 4 hours of manual work to automated refresh</li>
              <li><strong>Identified £680K opportunity</strong> - Underpriced products flagged for repricing</li>
              <li><strong>40% customer segment</strong> - Low-value customers identified for targeted campaigns</li>
              <li><strong>Self-service analytics</strong> - Empowered stakeholders to explore data independently</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <FileSpreadsheet className="h-7 w-7 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-3">
              Technical Achievement
            </h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <li><strong>74,000+ orders</strong> processed with sub-second query performance</li>
              <li><strong>8 data sources</strong> consolidated into single source of truth</li>
              <li><strong>30+ DAX measures</strong> covering KPIs from revenue to retention</li>
              <li><strong>Zero manual intervention</strong> - Fully automated end-to-end pipeline</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}