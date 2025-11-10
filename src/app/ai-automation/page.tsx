"use client";
import ProjectLayout from "@/components/Project/Project";

export default function AIResourceAllocation() {
  return (
    <ProjectLayout
      title="AI Resource Allocation System"
      hero={{
        type: "image",
        src: "/ai-automation.png",
      }}
      context="I designed an intelligent resourcing solution to replace static spreadsheets and subjective manager decisions. The objective was to automate project allocation, balance workloads, and provide real-time visibility of team capacity across departments."
      challenges={[
        {
          title: "Limited Visibility",
          desc: "There was no centralised system showing who was available or over-allocated, which made planning reactive and inconsistent.",
        },
        {
          title: "Manual Skill Matching",
          desc: "Managers relied on memory and emails to match people to projects, which was slow and did not scale effectively.",
        },
        {
          title: "Disconnected Tools",
          desc: "Approvals, timesheets, and reporting were handled in separate systems, creating duplication and data silos.",
        },
      ]}
      approach={[
        {
          title: "AI-Led Intake",
          color: "blue",
          desc: "Incoming project requests were analysed by AI Builder and GPT-4 to extract skills, timelines, and effort estimates automatically.",
        },
        {
          title: "Optimised Matching Engine",
          color: "purple",
          desc: "Dataverse stored structured staff profiles. An optimiser assessed availability, capability, and workload to recommend balanced teams.",
        },
        {
          title: "Seamless Approvals",
          color: "amber",
          desc: "Power Automate integrated with Teams and Outlook so that managers could review or adjust AI-generated team suggestions instantly.",
        },
        {
          title: "Continuous Monitoring",
          color: "green",
          desc: "Power BI tracked utilisation and forecasted capacity while anomaly detection identified workload imbalances early.",
        },
      ]}
      results={[
        "Reduced allocation time from several hours to minutes through automation and integrated data flows.",
        "Improved organisation-wide visibility of workloads, resulting in better balance and retention.",
        "Enhanced forecasting accuracy by around forty percent, enabling earlier interventions.",
        "The model incorporated holidays, learning objectives, and project criticality to create fair and data-driven resourcing decisions.",
      ]}
      technical={[
        {
          title: "Automation Orchestration",
          points: [
            "Power Automate handled all routing logic and approvals.",
            "Teams and Outlook connectors provided real-time notifications.",
            "Flows were modularised into allocation, approval, and monitoring layers.",
          ],
        },
        {
          title: "AI Components",
          points: [
            "AI Builder extracted structured data from project briefs.",
            "GPT-4 and Copilot Studio provided contextual analysis and recommendations.",
            "Power BI used anomaly detection to monitor utilisation and identify risks.",
          ],
        },
        {
          title: "Data Infrastructure",
          points: [
            "Dataverse stored entities for staff, projects, and workloads.",
            "SharePoint managed document storage and audit records.",
            "Power BI combined all data sources into a single live reporting layer.",
          ],
        },
        {
          title: "Integration Layer",
          points: [
            "Teams notifications kept managers informed at every stage.",
            "Email intake automatically captured new project requests.",
            "Power Apps provided the front-end interface for allocation and approval.",
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
      note="Architecture diagram below shows the AI-led intake, optimisation, and monitoring layers, demonstrating how automation, data, and AI combine to create a smarter and more efficient workforce planning process."
    />
  );
}
