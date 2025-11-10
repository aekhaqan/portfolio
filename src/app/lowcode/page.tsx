"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProcurementAutomation() {
  const images = ["/lowcode.png"];
  const [index, setIndex] = useState(0);

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

      {/* Hero Image */}
      <section className="relative w-full overflow-hidden rounded-xl shadow-glass">
        <div className="relative w-full" style={{ aspectRatio: "6.5 / 2" }}>
          <Image
            src={images[index]}
            alt="Procurement automation workflow diagram"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mx-6 text-centre text-sm text-tertiary mt-2 italic">
          Figure: Architecture of the Procurement Automation System: showing validation, approval routing, and budget integration.
        </p>
      </section>

      {/* Header */}
      <section className="space-y-3 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Procurement Automation System
        </h1>
        <p className="text-md text-secondary max-w-4xl">
          A low-code workflow for purchase requests and approvals. Automates validation, routing, and budget control using Power Automate and Dataverse — reducing approval time from 7 days to under 2.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Unclear Routing</h3>
            <p className="text-sm text-secondary">
              Requests often bounced between the wrong approvers, wasting time and causing delays.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Budget Overspend</h3>
            <p className="text-sm text-secondary">
              Finance discovered overspending only at quarter-end, after budgets had already been breached.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Weak Audit Trail</h3>
            <p className="text-sm text-secondary">
              Approvals were buried in emails and spreadsheets, making audits slow and incomplete.
            </p>
          </div>
        </div>
      </section>

      {/* The Automation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Automation</h2>

        <div className="space-y-4">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Request Intake & Validation
            </h3>
            <p className="text-secondary text-sm mb-3">
              Purchase requests are validated automatically against approved suppliers, category rules, and budget authority in Dataverse.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> No rejected submissions or missing documents — all checks happen instantly.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Dynamic Approval Routing
            </h3>
            <p className="text-secondary mb-3">
              Approval path adapts by value:
            </p>
            <ul className="space-y-1 text-sm text-secondary pl-4 list-disc">
              <li>Under £5k → Line Manager</li>
              <li>£5k–£25k → + Department Head</li>
              <li>£25k–£50k → + Finance Director</li>
              <li>Over £50k → All three levels</li>
            </ul>
            <div className="p-3 rounded bg-tertiary mt-3">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Requests reach the right approver first time — no manual routing required.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Real-Time Budget Management
            </h3>
            <p className="text-secondary text-sm mb-3">
              Approved requests automatically reserve funds. Power BI dashboards show live budget usage and forecasts by department.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Finance gains real-time visibility and control — no more overspend surprises.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Completion & Audit Trail
            </h3>
            <p className="text-secondary text-sm mb-3">
              Purchase Orders (POs) generate automatically, notify suppliers via Outlook, and log every step to SharePoint for full traceability.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Compliance teams can review any request in seconds — fully auditable end-to-end.
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
            <h3 className="font-semibold text-primary mb-3">Speed</h3>
            <p className="text-sm text-secondary mb-2">
              Approval times reduced from a week to under two days.
            </p>
            <p className="text-sm text-secondary mb-2">
              Instant routing and mobile approvals.
            </p>
            <p className="text-sm text-secondary">
              Requests never sit idle or lost in email chains.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Control & Compliance</h3>
            <p className="text-sm text-secondary mb-2">
              Real-time visibility of committed and available budgets.
            </p>
            <p className="text-sm text-secondary mb-2">
              Automated records support full audit readiness.
            </p>
            <p className="text-sm text-secondary">
              Eliminates last-minute budget freezes or missing approvals.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Audit Compliance:</strong> Every action — request, approval, budget commit — is logged automatically, ensuring complete transparency and accountability.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technical Architecture</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Workflow Layer</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Power Automate manages approvals and validation</li>
              <li>Conditions handle tier-based routing</li>
              <li>Budget subflows reserve or release funds</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Data Layer</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Dataverse stores requests, budgets, and statuses</li>
              <li>SharePoint logs approvals and documents</li>
              <li>Document library for attachments</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Reporting</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Power BI tracks approval bottlenecks</li>
              <li>Spending vs planned budgets per department</li>
              <li>Finance dashboards update in real time</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Integrations</h3>
            <ul className="space-y-2 text-sm text-secondary pl-4 list-disc">
              <li>Outlook notifications to requestors and approvers</li>
              <li>Form submissions trigger new requests</li>
              <li>Mobile-friendly approvals and tracking</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-tertiary italic">
          Note: Diagram shows general architecture; tools are interchangeable for demonstration.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Power Automate",
            "Dataverse",
            "Power BI",
            "SharePoint",
            "Outlook Integration",
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
