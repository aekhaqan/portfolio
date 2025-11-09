"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIAutomation() {
  const images = ["/ai-automation.png"];
  const [index, setIndex] = useState(0);

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

      {/* Hero Image */}
      <section className="relative rounded-xl overflow-hidden border border-custom">
        <div className="aspect-video relative bg-secondary">
          <Image
            src={images[index]}
            alt="AI automation workflow"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {["GPT-4", "Power Automate", "AI Builder", "Copilot Studio"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-tertiary text-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          AI Contract Intelligence System
        </h1>
        
        <p className="text-xl text-secondary">
          Automated contract review with AI document intelligence, resource optimization, and team skill 
          matching. Same-day intake vs 2-3 days manual.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Slow Intake</h3>
            <p className="text-sm text-secondary">
              2-3 days from contract upload to team assignment. Manual reading of 50-page PDFs to extract metadata.
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Poor Resource Matching</h3>
            <p className="text-sm text-secondary">
              Team assignments based on "who's free" rather than optimal skill matching and availability.
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Reactive Management</h3>
            <p className="text-sm text-secondary">
              Problems discovered in post-mortems—overworked staff, budget overruns, timeline issues.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Automation</h2>
        
        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Contract Intelligence
            </h3>
            <p className="text-secondary mb-3">
              Clients upload contracts via portal or email. AI Builder extracts key metadata—parties, dates, 
              obligations, financials. GPT-4 analyzes structure and writes plain-language summary for reviewers.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> No more manual reading of 50-page PDFs. 
                Review teams get concise summaries with key points highlighted.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Smart Approval Routing
            </h3>
            <p className="text-secondary mb-3">
              Extracted metadata automatically routes contracts to the right manager. Review portal presents 
              AI summary alongside original docs. One-click approve/reject.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Managers don't chase context from five 
                different people. All info in one place, instant decisions.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Resource Optimization
            </h3>
            <p className="text-secondary mb-3">
              Skill matcher compares project requirements against staff profiles. Optimization engine suggests 
              best-fit team based on availability, skills, and workload. Conflict resolver flags scheduling issues.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Team assignments in minutes instead of days. 
                Better skill matching = fewer project delays.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Proactive Monitoring
            </h3>
            <p className="text-secondary mb-3">
              Timesheet data flows into central hub. Anomaly detector flags unusual patterns—weekend work, 
              budget overruns, assignment conflicts. Auto-generated executive reports. Power BI dashboards update 
              in real-time.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Catch problems before they explode. 
                Managers intervene early instead of during post-mortems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Business Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Time Savings</h3>
            <p className="text-sm text-secondary mb-2">
              Contract intake: 2-3 days → same day
            </p>
            <p className="text-sm text-secondary mb-2">
              Manager review time: Hours → minutes
            </p>
            <p className="text-sm text-secondary">
              Team assignment: Days → minutes
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Quality Improvements</h3>
            <p className="text-sm text-secondary mb-2">
              Better resource allocation through skill matching
            </p>
            <p className="text-sm text-secondary mb-2">
              Early problem detection via anomaly monitoring
            </p>
            <p className="text-sm text-secondary">
              Reduced project delays from wrong assignments
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Key Insight:</strong> The optimization engine doesn't just 
            match skills—it considers current workload, holiday schedules, and development plans. This prevents 
            burnout and ensures people work on projects that advance their career goals.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technical Architecture</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Orchestration Layer</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Power Automate for workflow orchestration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Child flows for modular components
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Error handling and retry logic
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">AI Components</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                AI Builder for document intelligence
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                GPT-4 via Copilot Studio for analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Custom models for anomaly detection
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Data Layer</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Dataverse as central data hub
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                SharePoint for document storage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Power BI for dashboards
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Integration Points</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Email/portal intake triggers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Outlook for notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Teams for collaboration
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Note: Workflow diagram shows general architecture. Tools interchangeable for demo purposes.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tech Stack</h2>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Power Automate",
            "Copilot Studio",
            "AI Builder",
            "GPT-4",
            "Dataverse",
            "Power BI",
            "SharePoint",
            "Document Intelligence"
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