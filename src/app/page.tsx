"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/Form/form";
import FindMyNumberGame from "@/components/Game/Game";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const text = "Hello, I'm Atif";
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

  const projects = [
    {
      id: "ecommerce-etl",
      title: "E-Commerce ETL + BI Report",
      subtitle: "End-to-End ETL + Power BI Dashboard",
      desc: "Built a 4-page business performance report with full data cleaning, modelling, and transformation pipeline.",
      images: [
        "/ecommerce1.png",
        "/ecommerce2.png",
        "/ecommerce3.png",
        "/ecommerce4.png",
        "/ecommerce5.png",
      ],
    },
    {
      id: "bobs-bi",
      title: "Bob’s Burger Analysis",
      subtitle: "Business Intelligence Case Study",
      desc: "Minimal dataset, maximum insight — identified loss trends and performance leaks with only 5 input columns.",
      image: "/bobs.png",
    },
    {
      id: "ai-automation",
      title: "AI Document Workflow",
      subtitle: "GPT-4 + Intelligent Automation",
      desc: "End-to-end AI contract analysis pipeline with metadata writing, manager approval routing, and Power BI sync.",
      image: "/ai-automation.png",
    },
    {
      id: "lowcode",
      title: "Procurement Automation",
      subtitle: "Power Automate + Dataverse",
      desc: "Dynamic approval routing, budget validation, and invoice generation using Microsoft Power Platform.",
      image: "/lowcode.png",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100 dark:via-neutral-900 to-transparent animate-pulse-slow"></div>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-black dark:text-white"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-4 bg-black dark:bg-white ml-1"
          ></motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-300"
        >
          Data Analyst · Developer · Automator
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl px-6 pb-32 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/${project.id}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Carousel for Project 1 */}
              {project.images ? (
                <div className="relative w-full h-64 overflow-hidden">
                  {project.images.map((src, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        zIndex: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 12,
                        times: [0, 0.1, 0.9, 1],
                        repeat: Infinity,
                        repeatDelay: 0,
                        delay: i * 3, // each image shows 3s apart
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} preview ${i + 1}`}
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Image
                  src={project.image || ""}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Text Overlay */}
              <div className="p-6 space-y-2 bg-white/80 dark:bg-black/60 backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                  {project.subtitle}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

       <FindMyNumberGame />

      {/* Contact */}
      <section id="contact" className="w-full max-w-xl px-6 pb-24">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Drop me a message — I’ll respond soon.
          </p>
        </div>
        <div className="p-4 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-sm backdrop-blur-md bg-white/40 dark:bg-black/40">
          <ContactForm />
        </div>


      </section>
    </main>
  );
}
