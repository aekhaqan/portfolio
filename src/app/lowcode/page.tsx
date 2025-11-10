"use client";
import ProjectLayout from "@/components/Project/Project";

export default function ProcurementAutomation() {
  return (
    <ProjectLayout
      title="Procurement Automation System"
      hero={{
        type: "image",
        src: "/lowcode.png",
      }}
      context="This project was created to simplify and control the procurement process. The aim was to replace slow, email-based approvals with a structured system that automatically validates requests, routes them to the correct approvers, and provides live visibility of budgets and spending."
      challenges={[
        {
          title: "Unclear Routing",
          desc: "Requests were often sent to the wrong approvers, causing delays and confusion between departments.",
        },
        {
          title: "Budget Overspending",
          desc: "Finance teams became aware of exceeded budgets only at the end of each quarter, leaving no opportunity for corrective action.",
        },
        {
          title: "Lack of Audit Visibility",
          desc: "Approval evidence was hidden in email threads and spreadsheets, making audit preparation time-consuming and inconsistent.",
        },
      ]}
      approach={[
        {
          title: "Automated Request Validation",
          color: "blue",
          desc: "All purchase requests were validated automatically against approved suppliers, category rules, and budget limits in Dataverse, removing the need for manual checks.",
        },
        {
          title: "Dynamic Approval Routing",
          color: "amber",
          desc: "Power Automate used tier-based logic to route requests according to value thresholds. Requests under five thousand pounds went to Line Managers, mid-range requests reached Department Heads and Finance, while high-value approvals required senior authorisation.",
        },
        {
          title: "Real-Time Budget Control",
          color: "green",
          desc: "Approved requests automatically reserved funds within the system. Power BI dashboards provided instant visibility of spending, available balances, and forecasted commitments by department.",
        },
        {
          title: "Complete Audit Trail",
          color: "purple",
          desc: "Every approval, rejection, and budget update was recorded in SharePoint, creating a fully auditable record. Notifications were sent to all stakeholders via Outlook and Teams to maintain full transparency.",
        },
      ]}
      results={[
        "Reduced approval time from one week to less than two days through dynamic routing and mobile-friendly approvals.",
        "Delivered real-time budget visibility that prevented overspending and supported proactive financial control.",
        "Achieved full audit readiness with complete traceability of every request and approval action.",
        "Improved collaboration between Finance, Procurement, and departmental teams by integrating all communication into one automated workflow.",
      ]}
      technical={[
        {
          title: "Workflow Layer",
          points: [
            "Power Automate handled all approvals, validations, and routing conditions.",
            "Separate subflows managed fund reservations and releases.",
            "Conditional logic ensured correct routing based on request value.",
          ],
        },
        {
          title: "Data Layer",
          points: [
            "Dataverse stored all procurement requests, budget records, and approval statuses.",
            "SharePoint hosted supporting documents and audit logs.",
            "Document libraries handled attachments and reference files.",
          ],
        },
        {
          title: "Reporting",
          points: [
            "Power BI tracked approval timelines and budget utilisation.",
            "Finance dashboards compared planned versus actual spending.",
            "Automated refresh maintained real-time accuracy.",
          ],
        },
        {
          title: "Integrations",
          points: [
            "Outlook notifications informed requestors and approvers instantly.",
            "Teams provided quick access for approvals and discussions.",
            "Power Apps supported mobile approvals and progress tracking.",
          ],
        },
      ]}
      techStack={[
        "Power Automate",
        "Dataverse",
        "Power BI",
        "SharePoint",
        "Teams",
        "Outlook Integration",
      ]}
      note="Architecture diagram below illustrates validation, routing, and budget integration. This system demonstrates how low-code automation can transform procurement into a transparent and data-driven process."
    />
  );
}
