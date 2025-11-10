"use client";
import ProjectLayout from "@/components/Project/Project";

export default function RestaurantOperationsAnalysis() {
  return (
    <ProjectLayout
      title="Restaurant Operations Analysis"
      hero={{
        type: "carousel",
        items: [
          { type: "video", src: "/bobs.mp4" },
          { type: "image", src: "/bobs.png" },
          { type: "image", src: "/bobs2.png" },
        ],
      }}
      context="The only brief received was a single line in an Excel file that said, 'Find us something useful.' With just five columns available and no additional context, the challenge was to define the right questions, engineer meaningful metrics, and turn sparse data into actionable business insight."
      challenges={[
        {
          title: "Lack of Direction",
          desc: "The client provided no context or objectives beyond the request to 'find something useful.' This required independent framing of the analytical goals and hypotheses before any modelling could begin.",
        },
        {
          title: "Limited Data Availability",
          desc: "With only five columns of information, traditional analysis techniques such as segmentation or regression were not viable. Each metric had to be designed to extract maximum insight from minimal input.",
        },
        {
          title: "Complex Operational Interactions",
          desc: "Delivery times, order values, and branch locations influenced one another in non-linear ways, demanding calculated columns and logical groupings to uncover underlying performance patterns.",
        },
      ]}

      approach={[
        {
          title: "Metric-First Analysis",
          color: "blue",
          desc: "Established essential KPIs that could be computed from the available fields — delivery efficiency, driver utilisation, and order density — before designing any visuals.",
        },
        {
          title: "Data Enrichment with DAX",
          color: "amber",
          desc: "Created calculated columns and measures to classify orders by distance, time slot, and branch performance. Applied ratio-based DAX logic to highlight efficiency and profitability variations.",
        },
        {
          title: "Visual Modelling & Insight Delivery",
          color: "green",
          desc: "Developed a Power BI dashboard revealing where operational bottlenecks and revenue opportunities existed, using interactive views for time, geography, and performance comparisons.",
        },
      ]}
      results={[
        "Modelled a £5,200/month improvement opportunity from operational optimisations.",
        "Demonstrated how clean logic and measure design extract maximum value from minimal data.",
        "Showcased analytical independence — framing business questions, building measures, and communicating results without external direction.",
      ]}
      technical={[
        {
          title: "DAX Measures",
          points: [
            "Delivery efficiency ratios (time vs distance)",
            "Driver utilisation and branch performance scoring",
            "Peak-hour classification and variance metrics",
          ],
        },
        {
          title: "Calculated Columns",
          points: [
            "Distance band segmentation and delivery radius flags",
            "Time slot grouping and order-size categorisation",
            "Cross-region delivery logic for efficiency analysis",
          ],
        },
      ]}
      techStack={[
        "Power BI",
        "DAX",
        "Data Modelling",
        "Operational Analytics",
        "Data Storytelling",
      ]}
      note="Portfolio demonstration highlighting analytical creativity, modelling skill, and structured reasoning using limited real-world style data."
    />
  );
}
