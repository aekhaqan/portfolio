"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LowCodeAutomation() {
  const images = [
    "/lowcode.png",
  ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 space-y-20">
      {/* HERO IMAGE */}
      <section className="relative max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-md">
          <Image
            src={images[index]}
            alt="Low-code procurement automation"
            width={1600}
            height={900}
            className="w-full h-[70vh] object-contain bg-neutral-100 dark:bg-neutral-900"
          />

          {images.length > 1 && (
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
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Procurement Automation System
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          End-to-end purchase request workflow with dynamic approval routing and real-time budget tracking.
        </p>
      </section>

      {/* WHAT WE AUTOMATED */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          What We Automated
        </h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Request Intake & Validation
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Purchase requests come in through a simple form. System validates against category requirements—some items need technical specs, others need approved vendor lists. Budget authority checks happen automatically against Dataverse. No more requests bouncing back because someone forgot to attach the right docs or didn't know vendor X isn't approved anymore.
            </p>
          </div>

          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Dynamic Approval Routing
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Requests under £5k go straight to line manager. £5k-£25k add department head. £25k-£50k add finance director. Over £50k needs all three levels. Decision router figures this out automatically based on amount and category. No more "who do I send this to?" emails or requests sitting in the wrong person's inbox.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Budget Management
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Real-time budget tracker in Dataverse shows what's committed, what's spent, what's left. When a request gets approved, it reserves that budget immediately. Power BI dashboard shows department spending vs. plan. No more end-of-quarter surprises when finance realizes a team burned through their annual budget in 8 months.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Completion & Audit Trail
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Once approved, PO generator creates the purchase order automatically. Supplier gets notified via Outlook. Every step—who requested what, who approved when, budget impact—logs to SharePoint for audit. Finance can pull compliance reports in seconds instead of digging through email chains and spreadsheets.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Business Impact
        </h2>
        
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong>Faster approvals:</strong> Requests that used to take a week (or just sit in limbo because no one knew where they were) now get routed to the right people immediately. Approvers get notifications, can review on mobile, one-click decision. Most requests clear in 1-2 days.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong>Budget control:</strong> Real-time tracking means finance actually knows what's committed before it's too late. Department heads can see their burn rate and adjust before hitting the ceiling. Fewer awkward "we need to freeze spending" conversations mid-quarter.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong>Audit compliance:</strong> Complete audit trail with zero manual work. Finance or compliance can pull any request's full history—who requested, who approved, when, why, budget impact—in seconds. No more scrambling to reconstruct decisions from scattered emails.
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
            Note: Workflow diagram shows the general architecture. Actual implementation built with Power Automate, Dataverse for data storage, Power BI for dashboards, SharePoint for document management. Tools interchangeable for demo purposes.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Tools & Approach
        </h2>
        
        <p className="text-neutral-700 dark:text-neutral-300">
          Built using Power Automate for workflow orchestration with child flows for approval logic and budget checks. Dataverse stores requests, approvals, and budget data. Power BI dashboards for real-time spending visibility. SharePoint for audit logs and document storage. Outlook integration for notifications.
        </p>
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