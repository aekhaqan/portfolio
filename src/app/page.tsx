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
  Workflow,
  Brain,
  Code,
  TrendingUp,
  Gamepad2,
  Server,
  Cloud,
  Cpu,
} from "lucide-react";
import ContactForm from "@/components/Form/form";
import FindMyNumberGame from "@/components/Game/Game";

// Tech icon mapping
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactElement> = {
    "Power BI": <BarChart3 className="h-4 w-4" />,
    "Microsoft Fabric": <Cloud className="h-4 w-4" />,
    Python: <Code className="h-4 w-4" />,
    SQL: <Server className="h-4 w-4" />,
    Azure: <Zap className="h-4 w-4" />,
    "Machine Learning": <Cpu className="h-4 w-4" />,
    "Power Platform": <Workflow className="h-4 w-4" />,
    SharePoint: <FileText className="h-4 w-4" />,
    React: <Code className="h-4 w-4" />,
    "Copilot Studio": <Brain className="h-4 w-4" />,
    ETL: <Database className="h-4 w-4" />,
  };
  return icons[name] || <Zap className="h-4 w-4" />;
};

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Core Capabilities
  const capabilities = [
    {
      id: "etl",
      icon: <Database className="h-5 w-5" />,
      title: "ETL Pipelines",
      desc: "Fabric Dataflows, Power Query transformations, data modeling",
    },
    {
      id: "bi",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Power BI",
      desc: "DAX measures, star schema design, interactive dashboards",
    },
    {
      id: "ai",
      icon: <Brain className="h-5 w-5" />,
      title: "AI Automation",
      desc: "GPT-4 integration, Copilot design, intelligent workflows",
    },
    {
      id: "lowcode",
      icon: <Workflow className="h-5 w-5" />,
      title: "Low-Code Automation",
      desc: "Power Automate, Dataverse, SharePoint integration",
    },
    {
      id: "custom",
      icon: <Code className="h-5 w-5" />,
      title: "Custom Solutions",
      desc: "Next.js apps, process tools, and interactive utilities",
    },
  ];

  // Technical Stack
  const skills = [
    { name: "Power BI", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Microsoft Fabric", icon: <Cloud className="h-5 w-5" /> },
    { name: "Python", icon: <Code className="h-5 w-5" /> },
    { name: "SQL", icon: <Server className="h-5 w-5" /> },
    { name: "Azure", icon: <Cloud className="h-5 w-5" /> },
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5" /> },
    { name: "Power Platform", icon: <Workflow className="h-5 w-5" /> },
    { name: "SharePoint", icon: <FileText className="h-5 w-5" /> },
    { name: "React", icon: <Code className="h-5 w-5" /> },
    { name: "Copilot Studio", icon: <Brain className="h-5 w-5" /> },
    { name: "ETL", icon: <Database className="h-5 w-5 opacity-60" /> },
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
      gradientClass: "project-gradient-blue"
    },
    {
      id: "bobs-bi",
      category: "bi",
      title: "Restaurant Operations Analysis",
      description:
        "Extracted actionable insights from minimal data identified £5,200/month revenue opportunity and operational bottlenecks.",
      image: "/bobs.png",
      tags: ["Power BI", "DAX", "Business Intelligence"],
      gradientClass: "project-gradient-purple"
    },
    {
      id: "ai-automation",
      category: "ai",
      title: "AI Resource Allocation System",
      description: "Intelligent automation that matches project needs with the right people for resource optimisation, and proactive workload monitoring.",
      image: "/ai-automation.png",
      tags: ["GPT-4", "Power Automate", "AI Agent"],
      gradientClass: "project-gradient-orange"
    },
    {
      id: "lowcode",
      category: "lowcode",
      title: "Procurement Automation",
      description:
        "Dynamic approval routing with real-time budget tracking. Approval times reduced from 7 days to 1–2 days.",
      image: "/lowcode.png",
      tags: ["Power Automate", "Dataverse", "Low-Code"],
      gradientClass: "project-gradient-green"
    },
    {
      id: "custom-solution",
      category: "custom",
      title: "Interactive Portfolio & Game",
      description:
        "This Next.js website you're viewing right now, plus the fun little number game below. Built with modern React patterns and smooth animations.",
      image: null,
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      gradientClass: "project-gradient-purple"
    },
  ];

  const filteredProjects = selectedWork
    ? projects.filter((p) => p.category === selectedWork)
    : projects;

  return (
    <main className="portfolio-container">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-purple"
          style={{
            left: `${mousePos.x / 20}px`,
            top: `${mousePos.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="orb-blue" />
        <div className="orb-cyan" />
      </div>

      <div className="portfolio-content">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="hero-cursor"
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="hero-subtitle">
              I build intelligent systems that automate decisions, surface insight, and deliver measurable business impact.
            </p>
            <p className="hero-role">
              AI Automation & BI Consultant
            </p>

          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {/* Automation */}
          <div className="md:col-span-2 portfolio-card">
            <h2 className="portfolio-card-title">Automation Highlights</h2>
            <ul className="automation-list">
              {automationExamples.map((example, i) => (
                <li key={i}>
                  {example}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 portfolio-card rounded-xl">
            <h2 className="portfolio-card-title">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-tag">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="space-y-2">
          <div className="space-y-2">
            <h2 className="section-title">Selected Work</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() =>
                  setSelectedWork(selectedWork === cap.id ? null : cap.id)
                }
                className={`capability-btn ${selectedWork === cap.id ? 'active' : ''}`}
              >
                <div className="capability-icon">
                  {cap.icon}
                </div>
                <h3 className="capability-title">
                  {cap.title}
                </h3>
                <p className="capability-desc">
                  {cap.desc}
                </p>
              </button>
            ))}
          </div>
          <p className="section-description">
            These projects showcase different skills and approaches, each chosen
            for its technical challenge.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-2">
          <div className="grid gap-8">
            {filteredProjects.map((project, i) => (
              <Link
                key={project.id}
                href={`/${project.id}`}
                className="project-card group"
              >
                <div className={`project-gradient ${project.gradientClass}`} />

                <div className="project-content">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-4">
                        <h3 className="project-title">
                          {project.title}
                        </h3>
                        <p className=" project-description ">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <div key={tag} className="project-tag mt-16">
                            <TechIcon name={tag} />
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="project-image-container">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={150}
                          className="project-image"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center px-6">
                          <Code className="h-16 w-16 mb-4" style={{ color: 'var(--portfolio-accent)' }} />
                          <p className="text-sm font-semibold" style={{ color: 'var(--portfolio-text-primary)' }}>
                            This Next.js Website
                          </p>
                          <p className="text-xs mt-2" style={{ color: 'var(--portfolio-text-tertiary)' }}>
                            + Game Below
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Game */}
        <FindMyNumberGame />

        {/* Contact Section */}
        <section id="contact">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 items-center gap-12 px-6">
            <div className="space-y-3 md:col-span-1 text-center md:text-left">
              <h3 className="contact-title">Get in Touch</h3>
              <p className="contact-subtitle">
                <Mail className="h-4 w-4" />
                <span>I'll respond soon.</span>
              </p>
            </div>

            <div className="md:col-span-2 contact-form-container">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}