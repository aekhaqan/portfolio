"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LowCodeAutomation() {
  const images = ["/lowcode.png"];
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
            alt="Procurement automation workflow"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {["Power Automate", "Dataverse", "Low-Code", "Workflow Automation"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-tertiary text-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Procurement Automation System
        </h1>
        
        <p className="text-xl text-secondary">
          End-to-end purchase request workflow with dynamic approval routing and real-time budget tracking. 
          Approval times: 7 days → 1-2 days.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Routing Confusion</h3>
            <p className="text-sm text-secondary">
              "Who do I send this to?" Requests bouncing between wrong approvers or sitting in limbo.
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Budget Surprises</h3>
            <p className="text-sm text-secondary">
              End-of-quarter realization that teams burned through annual budget in 8 months.
            </p>
          </div>
          
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-2">Audit Nightmares</h3>
            <p className="text-sm text-secondary">
              Scrambling to reconstruct decisions from scattered emails and spreadsheets.
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
              Request Intake & Validation
            </h3>
            <p className="text-secondary mb-3">
              Simple form submission → automatic validation against category requirements and approved vendor 
              lists. Budget authority checks happen automatically against Dataverse.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> No more requests bouncing back because 
                someone forgot docs or didn't know vendor X isn't approved.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-amber-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Dynamic Approval Routing
            </h3>
            <p className="text-secondary mb-3">
              4-tier approval logic based on amount and category:
            </p>
            <ul className="space-y-1 text-sm text-secondary mb-3">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Under £5k → Line manager only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                £5k-£25k → + Department head
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                £25k-£50k → + Finance director
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Over £50k → All three levels
              </li>
            </ul>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Decision router figures it out automatically. 
                No more "who do I send this to?" emails.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-green-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Real-Time Budget Management
            </h3>
            <p className="text-secondary mb-3">
              Budget tracker in Dataverse shows what's committed, spent, and remaining. When request gets 
              approved, budget reserves immediately. Power BI dashboard shows department spending vs plan.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Finance actually knows what's committed 
                before it's too late. Department heads can adjust before hitting ceiling.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border-l-4 border-purple-500 bg-secondary">
            <h3 className="font-semibold text-lg text-primary mb-3">
              Completion & Audit Trail
            </h3>
            <p className="text-secondary mb-3">
              PO generator creates purchase order automatically. Supplier gets notified via Outlook. Every 
              step—who requested, who approved, when, why, budget impact—logs to SharePoint.
            </p>
            <div className="p-3 rounded bg-tertiary">
              <p className="text-xs text-secondary">
                <strong className="text-primary">Impact:</strong> Finance can pull compliance reports in 
                seconds instead of digging through email chains.
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
              Requests that used to take a week now get routed immediately
            </p>
            <p className="text-sm text-secondary mb-2">
              Most requests clear in 1-2 days vs 7+ days before
            </p>
            <p className="text-sm text-secondary">
              Approvers can review on mobile, one-click decision
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Control</h3>
            <p className="text-sm text-secondary mb-2">
              Real-time budget visibility prevents overspending
            </p>
            <p className="text-sm text-secondary mb-2">
              Department heads see burn rate and adjust proactively
            </p>
            <p className="text-sm text-secondary">
              Fewer mid-quarter "we need to freeze spending" conversations
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
          <p className="text-secondary text-sm">
            <strong className="text-primary">Audit Compliance:</strong> Complete audit trail with zero manual 
            work. Finance or compliance can pull any request's full history—who requested, who approved, when, 
            why, budget impact—in seconds.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Technical Architecture</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Workflow Layer</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Power Automate for orchestration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Child flows for approval logic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Budget validation subroutines
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Data Storage</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Dataverse for requests & budget
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                SharePoint for audit logs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Document library for attachments
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Reporting</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Power BI for real-time dashboards
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Spending vs plan by department
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Approval bottleneck analysis
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-secondary border border-custom">
            <h3 className="font-semibold text-primary mb-3">Integration</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Outlook for notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Form submission triggers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                Mobile approval support
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
            "Dataverse",
            "Power BI",
            "SharePoint",
            "Outlook Integration",
            "Dynamic Routing",
            "Budget Control"
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