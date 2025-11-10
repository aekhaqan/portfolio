"use client";
import ProjectLayout from "@/components/Project/Project";

export default function BobsBurgers() {
  return (
    <ProjectLayout
      title="Restaurant Operations Analysis"
      overview="Found £5,200/month revenue opportunity and identified operational bottlenecks from just 5 columns of data."
      hero={{
        type: "carousel",
        items: [
          { type: "video", src: "/bobs.mp4" },
          { type: "image", src: "/bobs.png" },
          { type: "image", src: "/bobs2.png" },
        ],
      }}
      problems={[
        {
          title: "Client Request",
          desc: `"Here's our Excel order data. Find us something useful." — That was the entire brief.`,
        },
        {
          title: "The Constraint",
          desc: "Unlike the e-commerce project with 74K orders, this dataset had just 5 columns. The challenge: extract meaningful insights from minimal data.",
        },
      ]}
      solutions={[
        {
          title: "Walthamstow Problem",
          color: "red",
          desc: "Geographically isolated branch drives long deliveries and low-value orders, eroding margins.",
          impact: "Offer order online, pick up in store.",
        },
        {
          title: "Peak Hour Chaos",
          color: "amber",
          desc: "Peak hours (7–8pm) overload drivers, pushing delivery times to 50 mins vs 30 off-peak.",
          impact: "Dynamic pricing (+£2–3 delivery fee) or reallocate drivers from slower branches.",
        },
        {
          title: "Kensington Opportunity",
          color: "green",
          desc: "Highest order value (£64 avg) with solid delivery, but limited radius caps growth.",
          impact: "Expand delivery zone by 1km — estimated +£5,000/month revenue based on current order density.",
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
      impact={[
        "The Constraint as Feature: With limited data, every measure had to earn its keep. No room for 'wouldn't it be cool if...' — only metrics that directly answered business questions.",
      ]}
      techStack={[
        "Power BI",
        "DAX",
        "Calculated Columns",
        "Delivery Analysis",
        "Operations Metrics",
      ]}
      note="Fictional scenario for portfolio, but modeled after real restaurant operational challenges."
    />
  );
}
