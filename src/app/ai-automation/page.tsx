"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIResourceAllocation() {
  const images = ["/ai-automation.png"];
  const [index, setIndex] = useState(0);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Back Button */}
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colours"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* Hero Image (corrected spacing and ratio) */}
      <section className="relative w-full overflow-hidden rounded-xl shadow-glass ">
        <div className="relative w-full" style={{ aspectRatio: "6.5 / 2" }}>
          <Image
            src="/ai-automation.png"
            alt="AI Resource Allocation architecture diagram"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mx-6 text-left text-sm text-tertiary mt-2 italic">
          Figure: Architecture diagram for the AI Resource Allocation System: 
          illustrating AI-led intake, optimisation, and reporting.
        </p>
      </section>

      {/* Header (closer spacing below image) */}
      <section className="space-y-3 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          AI Resource Allocation System
        </h1>
        <p className="text-md text-secondary max-w-4xl">
          Intelligent automation that matches project needs with the right people.
          Powered by Dataverse, Power Automate, and GPT-4 for skill matching,
          optimisation, and proactive workload monitoring.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Manual Allocation
            </h3>
            <p className="text-sm text-secondary">
              Managers assign staff by availability, not skills—slowing projects
              and lowering output.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Unbalanced Workload
            </h3>
            <p className="text-sm text-secondary">
              Without real-time visibility, teams face burnout while others sit
              idle.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">
              Reactive Planning
            </h3>
            <p className="text-sm text-secondary">
              Issues surface only after overruns or missed deadlines—too late to
              fix efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* The Automation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">The Automation</h2>

        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Smart Intake
            </h3>
            <p className="text-secondary mb-3">
              Requests from email or portals are analysed by AI Builder and
              GPT-4 to extract skills, deadlines, and effort estimates.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Eliminates
                manual reading—requests are structured and ready for assignment.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              AI Skill Matching
            </h3>
            <p className="text-secondary mb-3">
              The optimiser compares project data with Dataverse staff profiles
              to suggest the ideal mix of people by skill, load, and
              availability.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Assignments
                generated in minutes, improving utilisation and delivery speed.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Quick Approvals
            </h3>
            <p className="text-secondary mb-3">
              Managers review AI-suggested teams directly in Teams or Power Apps
              and approve or adjust instantly.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Decision
                cycles reduced from days to minutes.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Monitoring & Forecasting
            </h3>
            <p className="text-secondary mb-3">
              Dataverse and Power BI track workload, detect anomalies, and
              forecast capacity across teams.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Enables early
                intervention and balanced resourcing.
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
            <h3 className="font-semibold text-primary mb-3">
              Efficiency Gains
            </h3>
            <p className="text-sm text-secondary mb-2">
              Allocation time: hours → minutes
            </p>
            <p className="text-sm text-secondary mb-2">
              Manager reviews: simplified and automated
            </p>
            <p className="text-sm text-secondary">
              Forecasting accuracy improved by 40%
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">
              Better Work Balance
            </h3>
            <p className="text-sm text-secondary mb-2">
              Even distribution of work across teams
            </p>
            <p className="text-sm text-secondary mb-2">
              Higher retention and job satisfaction
            </p>
            <p className="text-sm text-secondary">
              Fewer delays from resourcing issues
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Key Insight:</strong> The AI model
            accounts for workload, holidays, and development goals — assigning
            people where they add the most value.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">
          Technical Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">
              Orchestration Layer
            </h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Power Automate manages workflow routing</li>
              <li>Modular flows for allocation and monitoring</li>
              <li>Teams and Outlook connectors for approvals</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">AI Components</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>AI Builder extracts metadata from project briefs</li>
              <li>GPT-4 and Copilot Studio provide insights</li>
              <li>Power BI anomaly detection for monitoring</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Data Layer</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Dataverse for staff, projects, and timesheets</li>
              <li>SharePoint for audit and document storage</li>
              <li>Power BI for utilisation dashboards</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">
              Integration Points
            </h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Teams notifications for managers</li>
              <li>Email intake for project requests</li>
              <li>Power Apps for allocation interface</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Note: Diagram illustrates general architecture. Tools are
          interchangeable for demonstration purposes.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Copilot Studio",
            "Power Automate",
            "Dataverse",
            "GPT-4",
            "Power BI",
            "SharePoint",
            "Teams",
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
