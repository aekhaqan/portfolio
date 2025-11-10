"use client";
import ProjectLayout from "@/components/Project/Project";

export default function EcommerceETL() {
  return (
    <ProjectLayout
      title="E-Commerce Data Integration & Analytics"
      hero={{
        type: "carousel",
        items: [
          { type: "video", src: "/ecommerce.mp4" },
          { type: "image", src: "/ecommerce1.png" },
          { type: "image", src: "/ecommerce2.png" },
          { type: "image", src: "/ecommerce3.png" },
          { type: "image", src: "/ecommerce4.png" },
          { type: "image", src: "/ecommerce5.png" },
        ],
      }}
      context="This project focused on creating a unified and reliable view of online retail operations. The objective was to design an automated data pipeline that integrates sales, inventory, and customer data into one trusted source, enabling real-time analytics and ensuring compliance with data protection standards."
      challenges={[
        {
          title: "Fragmented Data Landscape",
          desc: "Sales, customer, and inventory data were stored in separate spreadsheets, APIs, and legacy databases, resulting in inconsistency and poor integration.",
        },
        {
          title: "Poor Data Hygiene",
          desc: "Duplicate orders, missing identifiers, and inconsistent time formats made it difficult to produce accurate metrics and reconcile data across systems.",
        },
        {
          title: "Regulatory Risk",
          desc: "Customer records lacked proper anonymisation and retention policies, creating potential non-compliance with GDPR requirements.",
        },
      ]}

      approach={[
        {
          title: "Fabric Dataflows & Cleansing",
          color: "blue",
          desc: "Used Microsoft Fabric Dataflows to ingest and transform multi-source data. Standardised structures, fixed nulls, deduplicated records, and enforced data-type validation.",
        },
        {
          title: "Secure Data Modelling",
          color: "purple",
          desc: "Built a Lakehouse schema with region-based access and hashed personal identifiers. Each transformation step logged for full auditability and compliance assurance.",
        },
        {
          title: "Optimised Star Schema",
          color: "amber",
          desc: "Created a central fact table linked to product, region, and customer dimensions. Developed reusable DAX measures for sales growth, conversion, and lifetime value.",
        },
        {
          title: "Dynamic Reporting Layer",
          color: "green",
          desc: "Developed a four-page Power BI dashboard offering drill-through analytics for sales performance, profitability, cohort trends, and product segmentation.",
        },
      ]}
      results={[
        "Reduced manual data prep by over 4 hours per week through full automation.",
        "Created a single, governed dataset now used by multiple business units.",
        "Implemented GDPR-aligned data policies including anonymisation and retention schedules.",
        "Delivered consistent, accurate metrics improving commercial decision-making and forecasting.",
      ]}
      technical={[
        {
          title: "Modelling & Measures",
          points: [
            "Sales growth, profit margin, and lifetime value DAX calculations.",
            "Cross-region delivery and seasonality analysis.",
            "Branch and product-level performance indicators.",
            "Categorical segmentation for time slots and basket size.",
          ],
        },
        {
          title: "Automation Layer",
          points: [
            "Dataflows Gen2 used for scheduled ingestion and transformation.",
            "Power BI Service refresh configured for near real-time reporting.",
            "Error logging and data validation integrated into pipeline runs.",
          ],
        },
      ]}
      techStack={[
        "Microsoft Fabric",
        "Dataflows Gen2",
        "Power BI",
        "DAX",
        "Power Query (M)",
        "Star Schema Modelling",
        "Data Governance",
        "GDPR Compliance",
      ]}
      note="Demonstration project using synthetic retail data. All transformations, models, and governance steps reflect real-world enterprise ETL practice."
    />
  );
}
