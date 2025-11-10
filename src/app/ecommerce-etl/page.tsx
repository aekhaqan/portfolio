"use client";
import ProjectLayout from "@/components/Project/Project";

export default function EcommerceETL() {
  return (
    <ProjectLayout
      title="E-Commerce Data Integration & Analytics"
      overview="Unified fragmented online retail data into a single, GDPR-compliant dataset using Microsoft Fabric. Built a complete ETL pipeline and a 4-page Power BI report for interactive sales, customer, and product insights."
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
      problems={[
        {
          title: "Scattered Data Sources",
          desc: "Transaction, customer, and inventory data spread across multiple Excel files, web exports, and legacy databases.",
        },
        {
          title: "Inconsistent Quality",
          desc: "Missing customer identifiers, duplicate orders, and non-standard date formats created reconciliation challenges.",
        },
        {
          title: "Compliance Gaps",
          desc: "Customer data lacked proper anonymisation and retention handling, risking GDPR non-compliance.",
        },
      ]}
      solutions={[
        {
          title: "Fabric Dataflows & Cleansing",
          color: "blue",
          desc: "Connected multiple sources through Microsoft Fabric and Power Query. Applied transformation logic for standardising column names, correcting nulls, and mapping categories. Implemented automatic deduplication and validation routines.",
        },
        {
          title: "GDPR-Compliant Data Modelling",
          color: "purple",
          desc: "Designed a secure schema in Fabric Lakehouse, removing or hashing personally identifiable data. Ensured audit trails for all transformations and maintained region-based access policies.",
        },
        {
          title: "Star Schema & Measure Layer",
          color: "amber",
          desc: "Modelled a central fact table linked to dimension tables for products, customers, and regions. Built DAX measures for sales trends, conversion rates, and customer lifetime value.",
        },
        {
          title: "Interactive Insights",
          color: "green",
          desc: "Created an executive dashboard covering sales performance, profit margins, customer cohorts, and product segmentation. Enabled drill-through and dynamic filtering for region and channel comparisons.",
        },
      ]}
      technical={[
        {
          title: "DAX Measures",
          points: [
            "Delivery efficiency ratios (time vs distance)",
            "Driver utilisation percentages",
            "Branch performance scoring",
            "Peak hour classifications",
          ],
        },
        {
          title: "Calculated Columns",
          points: [
            "Cross-borough delivery flags",
            "Order size categorisation",
            "Time slot groupings",
            "Distance band analysis",
          ],
        },
      ]}
      insights={[
        "15% of revenue driven by repeat customers",
        "Significant regional under-performance in North Zone",
        "High return rate linked to two specific product lines",
        "Seasonality: 40% of yearly sales occur in Q4",
      ]}
      impact={[
        "Time saved: Weekly data refresh fully automated — eliminating over 4 hours of manual consolidation.",
        "Data reliability: Consistent, validated dataset now trusted by all business units.",
        "Governance: GDPR-aligned retention and anonymisation policies built into every pipeline.",
        "Decision quality: Real-time insight into product profitability and customer retention improved forecasting accuracy.",
      ]}
      techStack={[
        "Microsoft Fabric",
        "Dataflows Gen2",
        "Power BI",
        "DAX",
        "Power Query (M)",
        "Star Schema",
        "Data Governance",
        "GDPR Compliance",
      ]}
      note="Note: Synthetic dataset used for demonstration. All modelling, transformations, and automation steps replicate real enterprise ETL practices."
    />
  );
}
