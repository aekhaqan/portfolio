"use client";
import ProjectLayout from "@/components/Project/Project";

export default function ProcurementAutomation() {
  return (
    <ProjectLayout
      title="Procurement Automation System"
      overview="A low-code workflow for purchase requests and approvals. Automates validation, routing, and budget control using Power Automate and Dataverse — reducing approval time from 7 days to under 2."
      hero={{
        type: "image",
        src: "/lowcode.png",
      }}
      problems={[
        {
          title: "Unclear Routing",
          desc: "Requests often bounced between the wrong approvers, wasting time and causing delays.",
        },
        {
          title: "Budget Overspend",
          desc: "Finance discovered overspending only at quarter-end, after budgets had already been breached.",
        },
        {
          title: "Weak Audit Trail",
          desc: "Approvals were buried in emails and spreadsheets, making audits slow and incomplete.",
        },
      ]}
      solutions={[
        {
          title: "Request Intake & Validation",
          color: "blue",
          desc: "Purchase requests are validated automatically against approved suppliers, category rules, and budget authority in Dataverse.",
          impact:
            "No rejected submissions or missing documents — all checks happen instantly.",
        },
        {
          title: "Dynamic Approval Routing",
          color: "amber",
          desc: "Approval path adapts by value: Under £5k → Line Manager, £5k–£25k → + Department Head, £25k–£50k → + Finance Director, Over £50k → All three levels.",
          impact:
            "Requests reach the right approver first time — no manual routing required.",
        },
        {
          title: "Real-Time Budget Management",
          color: "green",
          desc: "Approved requests automatically reserve funds. Power BI dashboards show live budget usage and forecasts by department.",
          impact:
            "Finance gains real-time visibility and control — no more overspend surprises.",
        },
        {
          title: "Completion & Audit Trail",
          color: "purple",
          desc: "Purchase Orders (POs) generate automatically, notify suppliers via Outlook, and log every step to SharePoint for full traceability.",
          impact:
            "Compliance teams can review any request in seconds — fully auditable end-to-end.",
        },
      ]}
      impact={[
        "Speed: Approval times reduced from a week to under two days. Instant routing and mobile approvals ensure requests never sit idle or lost in email chains.",
        "Control & Compliance: Real-time visibility of committed and available budgets. Automated records support full audit readiness, eliminating last-minute budget freezes or missing approvals.",
        "Audit Compliance: Every action — request, approval, budget commit — is logged automatically, ensuring complete transparency and accountability.",
      ]}
      technical={[
        {
          title: "Workflow Layer",
          points: [
            "Power Automate manages approvals and validation",
            "Conditions handle tier-based routing",
            "Budget subflows reserve or release funds",
          ],
        },
        {
          title: "Data Layer",
          points: [
            "Dataverse stores requests, budgets, and statuses",
            "SharePoint logs approvals and documents",
            "Document library for attachments",
          ],
        },
        {
          title: "Reporting",
          points: [
            "Power BI tracks approval bottlenecks",
            "Spending vs planned budgets per department",
            "Finance dashboards update in real time",
          ],
        },
        {
          title: "Integrations",
          points: [
            "Outlook notifications to requestors and approvers",
            "Form submissions trigger new requests",
            "Mobile-friendly approvals and tracking",
          ],
        },
      ]}
      techStack={[
        "Power Automate",
        "Dataverse",
        "Power BI",
        "SharePoint",
        "Outlook Integration",
        "Teams",
      ]}
      note="Figure: Architecture of the Procurement Automation System — showing validation, approval routing, and budget integration. Diagram illustrates general architecture; tools are interchangeable for demonstration."
    />
  );
}
