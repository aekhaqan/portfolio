"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Database,
  BarChart3,
  FileText,
  Zap,
  Mail,
  FileSpreadsheet,
  Workflow,
  Brain,
  Code,
  TrendingUp,
  Gamepad2,
} from "lucide-react";
import ContactForm from "@/components/Form/form";
import FindMyNumberGame from "@/components/Game/Game";

// Tech icon mapping
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactElement> = {
    "Power BI": <BarChart3 className="h-4 w-4" />,
    ETL: <Database className="h-4 w-4" />,
    "Data Modeling": <TrendingUp className="h-4 w-4" />,
    DAX: <Code className="h-4 w-4" />,
    "Business Intelligence": <BarChart3 className="h-4 w-4" />,
    "GPT-4": <Brain className="h-4 w-4" />,
    "Power Automate": <Workflow className="h-4 w-4" />,
    "AI Agents": <Brain className="h-4 w-4" />,
    Dataverse: <Database className="h-4 w-4" />,
    "Low-Code": <Zap className="h-4 w-4" />,
    "Workflow Automation": <Workflow className="h-4 w-4" />,
  };
  return icons[name] || <Zap className="h-4 w-4" />;
};

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const text = "Atif Khan";
  const typingSpeed = 100;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, typingSpeed);
    return () => clearInterval(timer);
  }, []);

  const capabilities = [
    {
      id: "etl",
      icon: <Database className="h-5 w-5" />,
      title: "ETL Pipelines",
      desc: "Power Query transformations, data modeling",
    },
    {
      id: "bi",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Power BI",
      desc: "DAX measures, star schema design, dashboards",
    },
    {
      id: "ai",
      icon: <Brain className="h-5 w-5" />,
      title: "AI Automation",
      desc: "GPT-4 integration, document intelligence",
    },
    {
      id: "lowcode",
      icon: <Zap className="h-5 w-5" />,
      title: "Low-Code Automation",
      desc: "Power Automate workflows, Dataverse",
    },
    {
      id: "custom",
      icon: <Gamepad2 className="h-5 w-5" />,
      title: "Custom Solutions",
      desc: "Next.js websites, interactive games",
    },
  ];

  const skills = [
    { name: "Power BI", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Power Automate", icon: <Workflow className="h-5 w-5" /> },
    { name: "Power Query", icon: <Database className="h-5 w-5" /> },
    { name: "DAX", icon: <Code className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
    { name: "Python", icon: <Code className="h-5 w-5" /> },
    { name: "React", icon: <Code className="h-5 w-5" /> },
    { name: "Machine Learning", icon: <Brain className="h-5 w-5" /> },
    { name: "Dataverse", icon: <Database className="h-5 w-5" /> },
    { name: "SharePoint", icon: <FileText className="h-5 w-5" /> },
    { name: "AI Agents", icon: <Brain className="h-5 w-5" /> },
  ];

  const automationExamples = [
    "SharePoint capacity monitoring with automated alerts",
    "Intelligent support ticket routing using priority and category detection",
    "Automated user onboarding in Microsoft 365 with approval flows and licence assignment",
    "Vendor invoice reconciliation against purchase orders using AI document processing",
    "Weekly Power BI snapshot archiving to SharePoint for audit compliance",
    "Dynamic project status tracking in Dataverse with Teams notifications",
  ];


  const projects = [
    {
      id: "ecommerce-etl",
      category: "etl",
      title: "E-Commerce Intelligence Platform",
      description:
        "End-to-end data pipeline transforming fragmented Excel data into enterprise-grade analytics. Star schema design with 30+ DAX measures.",
      image: "/ecommerce1.png",
      tags: ["Power BI", "ETL", "Data Modeling"],
    },
    {
      id: "bobs-bi",
      category: "bi",
      title: "Restaurant Operations Analysis",
      description:
        "Extracted actionable insights from minimal data—identified £5,200/month revenue opportunity and operational bottlenecks.",
      image: "/bobs.png",
      tags: ["Power BI", "DAX", "Business Intelligence"],
    },
    {
      id: "ai-automation",
      category: "ai",
      title: "AI Resource Allocation System",
      description: "Intelligent automation that matches project needs with the right people for resource optimisation, and proactive workload monitoring.",
      image: "/ai-automation.png",
      tags: ["GPT-4", "Power Automate", "AI Agent"],
    },
    {
      id: "lowcode",
      category: "lowcode",
      title: "Procurement Automation",
      description:
        "Dynamic approval routing with real-time budget tracking. Approval times reduced from 7 days to 1–2 days.",
      image: "/lowcode.png",
      tags: ["Power Automate", "Dataverse", "Low-Code"],
    },
  ];

  const filteredProjects =
    selectedWork === "custom"
      ? []
      : selectedWork
        ? projects.filter((p) => p.category === selectedWork)
        : projects;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary leading-none"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-2 h-20 md:h-24 lg:h-32 bg-[var(--accent)] ml-2 align-middle"
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-md text-secondary max-w-3xl">
            I bridge business problems with technical solutions using data, AI, and automation.
          </p>
          <p className="text-md mt-4 text-tertiary max-w-2xl">
            Consultant & Automation Specialist
          </p>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {/* Automation */}
        <div className="md:col-span-2 p-6 rounded-2xl border border-custom bg-secondary space-y-4 shadow-glass">
          <h2 className="text-2xl font-bold text-primary">Automation Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-[var(--accent)]">
            {automationExamples.map((example, i) => (
              <li
                key={i}
                className="text-sm text-secondary leading-relaxed transition-colors hover:text-primary"
              >
                {example}
              </li>
            ))}
          </ul>
        </div>


        <div className="md:col-span-1 p-6 rounded-xl border border-custom bg-secondary space-y-4">
          <h2 className="text-2xl font-bold text-primary">Skills & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-tertiary border border-custom"
              >
                <span className="text-[var(--accent)]">{skill.icon}</span>
                <span className="text-xs font-medium text-primary">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="space-y-3">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-primary">Selected Work</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() =>
                setSelectedWork(selectedWork === cap.id ? null : cap.id)
              }
              className={`p-4 rounded-xl border transition-all text-left ${selectedWork === cap.id
                ? "bg-[var(--accent)] border-[var(--accent)] shadow-lg"
                : "bg-secondary border-custom hover:border-[var(--accent)]"
                }`}
            >
              <div
                className={`mb-2 ${selectedWork === cap.id ? "text-white" : "text-[var(--accent)]"
                  }`}
              >
                {cap.icon}
              </div>
              <h3
                className={`font-semibold text-sm mb-1 ${selectedWork === cap.id ? "text-white" : "text-primary"
                  }`}
              >
                {cap.title}
              </h3>
              <p
                className={`text-xs ${selectedWork === cap.id ? "text-white/80" : "text-tertiary"
                  }`}
              >
                {cap.desc}
              </p>
            </button>

          ))}
        </div>
        <p className="text-secondary">
          These projects showcase different skills and approaches, each chosen
          for its technical challenge.
        </p>
      </section>

      {/* Projects */}

      {/* ===== PROJECT CARDS ===== */}
      <section id="projects" className="flex flex-col gap-12">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/${project.id}`}
            className="group block rounded-3xl overflow-hidden bg-primary border border-custom shadow-glass hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Image */}
              <div className="w-full md:w-5/12 relative overflow-hidden border-r border-custom">
                <div className="aspect-video relative rounded-2xl overflow-hidden m-4 bg-tertiary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-7/12 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary mt-3 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-tertiary text-secondary rounded-lg border border-custom"
                    >
                      <TechIcon name={tag} />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Custom Solution Info (above game) */}
      <section className="p-6 rounded-xl border border-custom bg-primary text-left">
        <p className="text-lg text-secondary">
          <span className="">Custom Solution:</span>{" "}
          This portfolio itself is a Next.js website built with React, Tailwind, and Framer Motion.
          Or the game below!
        </p>
      </section>

      {/* Game */}
      <FindMyNumberGame />

      {/* Contact Section */}
      <section
        id="contact" className="">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 items-center gap-12 px-6">
          {/* Left side: 1/3 */}
          <div className="space-y-3 md:col-span-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary">Get in Touch</h3>
            <p className="text-sm text-tertiary flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              <span>I’ll respond soon.</span>
            </p>
          </div>

          {/* Right side: 2/3 */}
          <div className="md:col-span-2 p-8 rounded-2xl border border-custom bg-secondary/70 shadow-glass w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
