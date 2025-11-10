"use client";
import ProjectLayout from "@/components/Project/Project";

export default function AIResourceAllocation() {
  return (
    <ProjectLayout
      title="AI Resource Allocation System"
      overview="Intelligent automation that matches project needs with the right people. Powered by Dataverse, Power Automate, and GPT-4 for skill matching, optimisation, and proactive workload monitoring."
      hero={{
        type: "image",
        src: "/ai-automation.png",
      }}
      problems={[
        {
          title: "Manual Allocation",
          desc: "Managers assign staff by availability, not skills — slowing projects and lowering output.",
        },
        {
          title: "Unbalanced Workload",
          desc: "Without real-time visibility, teams face burnout while others sit idle.",
        },
        {
          title: "Reactive Planning",
          desc: "Issues surface only after overruns or missed deadlines — too late to fix efficiently.",
        },
      ]}
      solutions={[
        {
          title: "Smart Intake",
          color: "blue",
          desc: "Requests from email or portals are analysed by AI Builder and GPT-4 to extract skills, deadlines, and effort estimates.",
          impact: "Eliminates manual reading — requests are structured and ready for assignment.",
        },
        {
          title: "AI Skill Matching",
          color: "purple",
          desc: "The optimiser compares project data with Dataverse staff profiles to suggest the ideal mix of people by skill, load, and availability.",
          impact: "Assignments generated in minutes, improving utilisation and delivery speed.",
        },
        {
          title: "Quick Approvals",
          color: "amber",
          desc: "Managers review AI-suggested teams directly in Teams or Power Apps and approve or adjust instantly.",
          impact: "Decision cycles reduced from days to minutes.",
        },
        {
          title: "Monitoring & Forecasting",
          color: "green",
          desc: "Dataverse and Power BI track workload, detect anomalies, and forecast capacity across teams.",
          impact: "Enables early intervention and balanced resourcing.",
        },
      ]}
      impact={[
        "Efficiency Gains: Allocation time reduced from hours to minutes; manager reviews simplified and automated; forecasting accuracy improved by 40%.",
        "Better Work Balance: Even distribution of work across teams; higher retention and job satisfaction; fewer delays from resourcing issues.",
        "Key Insight: The AI model accounts for workload, holidays, and development goals — assigning people where they add the most value.",
      ]}
      technical={[
        {
          title: "Orchestration Layer",
          points: [
            "Power Automate manages workflow routing",
            "Modular flows for allocation and monitoring",
            "Teams and Outlook connectors for approvals",
          ],
        },
        {
          title: "AI Components",
          points: [
            "AI Builder extracts metadata from project briefs",
            "GPT-4 and Copilot Studio provide insights",
            "Power BI anomaly detection for monitoring",
          ],
        },
        {
          title: "Data Layer",
          points: [
            "Dataverse for staff, projects, and timesheets",
            "SharePoint for audit and document storage",
            "Power BI for utilisation dashboards",
          ],
        },
        {
          title: "Integration Points",
          points: [
            "Teams notifications for managers",
            "Email intake for project requests",
            "Power Apps for allocation interface",
          ],
        },
      ]}
      techStack={[
        "Copilot Studio",
        "Power Automate",
        "Dataverse",
        "GPT-4",
        "Power BI",
        "SharePoint",
        "Teams",
      ]}
      note="Figure: Architecture diagram for the AI Resource Allocation System — illustrating AI-led intake, optimisation, and reporting. Tools interchangeable for demonstration."
    />
  );
}
