"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIAutomation() {
  const images = [
    "/ai-automation.png",
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
            alt="AI-powered automation workflow"
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
          AI-Powered Contract Intelligence
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Automating contract review and project intake using AI document intelligence and orchestrated workflows.
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
              Contract Ingestion & Intelligence
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Clients upload contracts via portal or email. AI document intelligence extracts key metadata—parties, dates, obligations, financials. GPT-4 analyzes contract structure and writes a plain-language summary for review teams. No more manual reading of 50-page PDFs to find what matters.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Approval Routing
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Extracted metadata automatically routes contracts to the right manager for approval. Review portal presents the AI summary alongside original docs. Managers approve/reject with one click instead of chasing down context from five different people.
            </p>
          </div>

          <div className="border-l-4 border-amber-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Resource Allocation
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Once approved, skill matcher compares project requirements against staff profiles. Optimization engine suggests best-fit team based on availability and skillset. Conflict resolver flags scheduling issues. Team assignments happen in minutes instead of days of spreadsheet wrangling.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Monitoring & Reporting
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Timesheet data flows into central hub. Anomaly detector flags unusual patterns—people working weekends, projects over budget, assignment conflicts. Summary generator creates executive reports. Power BI dashboards update in real-time. Invoice generator kicks off billing when project milestones hit.
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
            <strong>Time savings:</strong> Contract intake that used to take 2-3 days (upload, review, extract info, route for approval, assign team) now happens same-day. Managers spend minutes reviewing AI summaries instead of hours reading full contracts.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong>Better resource allocation:</strong> The optimization engine actually considers skillsets and availability instead of just "who's free right now." Fewer mismatched assignments, fewer project delays from wrong people on the job.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <strong>Proactive management:</strong> Anomaly detection catches problems before they explode—overworked staff, budget overruns, timeline issues. Managers can intervene early instead of finding out during post-mortems.
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
            Note: Workflow diagram shows the general architecture. Actual implementation built with Power Automate, Copilot Studio, AI Builder for document intelligence, with child flows for modular components. Tools interchangeable for demo purposes.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Tools & Approach
        </h2>
        
        <p className="text-neutral-700 dark:text-neutral-300">
          Built using Power Automate for orchestration, Copilot Studio for conversational interfaces, AI Builder for document intelligence and GPT integration. Child flows handle modular components (contract analysis, team matching, reporting). Dataverse as central data hub, Power BI for dashboards, SharePoint for document storage.
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