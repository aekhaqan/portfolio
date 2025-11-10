"use client";

import { useState } from "react";
import { ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// ---------------- TECH ICON MAP ----------------
import {
  Database,
  BarChart3,
  FileText,
  Zap,
  Workflow,
  Brain,
  Code,
  Server,
  Cloud,
  Cpu,
  Shield,
  Layers,
  Lock,
  SlidersHorizontal,
} from "lucide-react";

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactElement> = {
    "Power BI": <BarChart3 className="h-4 w-4 text-[var(--accent)]" />,
    "Microsoft Fabric": <Cloud className="h-4 w-4 text-[var(--accent)]" />,
    "Power Platform": <Workflow className="h-4 w-4 text-[var(--accent)]" />,
    "Dataverse": <Database className="h-4 w-4 text-[var(--accent)]" />,
    "Power Automate": <Workflow className="h-4 w-4 text-[var(--accent)]" />,
    "Power Apps": <Workflow className="h-4 w-4 text-[var(--accent)]" />,
    "Power Query (M)": <SlidersHorizontal className="h-4 w-4 text-[var(--accent)]" />,
    DAX: <Code className="h-4 w-4 text-[var(--accent)]" />,
    Python: <Code className="h-4 w-4 text-[var(--accent)]" />,
    SQL: <Server className="h-4 w-4 text-[var(--accent)]" />,
    Azure: <Cloud className="h-4 w-4 text-[var(--accent)]" />,
    "Machine Learning": <Cpu className="h-4 w-4 text-[var(--accent)]" />,
    "Copilot Studio": <Brain className="h-4 w-4 text-[var(--accent)]" />,
    GPT4: <Brain className="h-4 w-4 text-[var(--accent)]" />,
    GPT: <Brain className="h-4 w-4 text-[var(--accent)]" />,
    "Star Schema": <Layers className="h-4 w-4 text-[var(--accent)]" />,
    "Star Schema Modelling": <Layers className="h-4 w-4 text-[var(--accent)]" />,
    "Dataflows Gen2": <Zap className="h-4 w-4 text-[var(--accent)]" />,
    "Data Governance": <Shield className="h-4 w-4 text-[var(--accent)]" />,
    "GDPR Compliance": <Lock className="h-4 w-4 text-[var(--accent)]" />,
    SharePoint: <FileText className="h-4 w-4 text-[var(--accent)]" />,
    React: <Code className="h-4 w-4 text-[var(--accent)]" />,
    "Next.js": <Code className="h-4 w-4 text-[var(--accent)]" />,
    ETL: <Database className="h-4 w-4 text-[var(--accent)] opacity-90" />,
  };

  return icons[name] || <Zap className="h-4 w-4 text-[var(--accent)] opacity-80" />;
};



interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface SectionItem {
  title: string;
  desc?: string;
  color?: string;
}

interface TechnicalItem {
  title: string;
  points: string[];
}

interface ProjectLayoutProps {
  title: string;
  hero?:
  | { type: "image" | "video"; src: string; aspectRatio?: string }
  | { type: "carousel"; items: MediaItem[]; aspectRatio?: string };
  context?: string;
  challenges?: SectionItem[];
  approach?: SectionItem[];
  results?: string[];
  technical?: TechnicalItem[];
  techStack?: string[];
  backText?: string;
  note?: string;
}

export default function ProjectLayout({
  title,
  hero,
  context,
  challenges,
  approach,
  results,
  technical,
  techStack,
  backText = "Back to portfolio",
  note,
}: ProjectLayoutProps) {
  const [index, setIndex] = useState(0);
  const items = hero && "items" in hero ? hero.items : hero ? [hero] : [];
  const hasCarousel = hero && "items" in hero;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-[var(--accent)] gap-2 hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4 text-[var(--accent)]" />
        {backText}
      </Link>

      {/* Hero */}
      {hero && (
        <section className="relative rounded-xl overflow-hidden">
          <div
            className="relative flex items-center justify-center w-full"
            style={{
              aspectRatio: hero?.aspectRatio || (items.length > 1 ? "16 / 9" : "6.5 / 2"),
            }}
          >
            {items.length > 0 &&
              (items[index].type === "video" ? (
                <video
                  key={items[index].src}
                  src={items[index].src}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  key={items[index].src}
                  src={items[index].src}
                  alt={`${title} visual ${index + 1}`}
                  fill
                  className="object-contain"
                />
              ))}
          </div>

          {hasCarousel && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)] border border-custom hover:bg-secondary transition"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-primary)] border border-custom hover:bg-secondary transition"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          )}
        </section>
      )}

      {/* Header */}
      <section className="space-y-3 text-center md:text-left">
        <h1 className="text-5xl md:text-5xl font-extrabold text-[var(--accent)]">
          {title}
        </h1>
        {/* Removed redundant overview paragraph */}
      </section>


      {/* Context */}
      {context && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Context & Objective</h2>
          <p className="text-secondary text-sm leading-relaxed">{context}</p>
        </section>
      )}

      {/* Challenges */}
      {challenges && challenges.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Challenges Faced</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((c, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl bg-secondary border border-custom ${c.color ? `border-${c.color}-500` : "border-amber-500"
                  }`}
              >
                <h3 className="font-semibold text-primary mb-2">{c.title}</h3>
                <p className="text-sm text-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Approach & Solution */}
      {approach && approach.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Approach & Solution</h2>
          <div className="space-y-4">
            {approach.map((a, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl bg-secondary border-l-4 ${a.color ? `border-${a.color}-500` : "border-blue-500"
                  }`}
              >
                <h3 className="font-semibold text-lg text-primary mb-2">{a.title}</h3>
                <p className="text-sm text-secondary">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results & Impact */}
      {results && results.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Results & Impact</h2>
          <ul className="tech-list pl-5 space-y-2 text-sm text-secondary">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Technical Implementation */}
      {technical && technical.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {technical.map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-secondary border border-custom">
                <h3 className="font-semibold text-primary mb-3">{t.title}</h3>
                <ul className="tech-list pl-5 text-sm text-secondary space-y-1">
                  {t.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tertiary text-secondary text-sm font-medium"
              >
                <TechIcon name={tech} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {note && <p className="text-sm text-tertiary italic">{note}</p>}
    </main>
  );
}
