"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const experiments = [
  {
    title: "Design System Generator",
    description: "AI-powered tool that generates design systems from brand guidelines. Currently processing 50+ components automatically.",
    tag: "AI · Figma Plugin",
    icon: "🎨",
    color: "bg-purple-100",
    link: "/experiments/design-system-generator",
  },
  {
    title: "User Research Tracker",
    description: "A lightweight CRM for UX researchers. Manage participants, insights, and synthesis in one place.",
    tag: "Productivity · Side Project",
    icon: "🔍",
    color: "bg-blue-100",
    link: "#",
  },
  {
    title: "Motion Design Playground",
    description: "Interactive playground for testing animation curves and transitions. Export to CSS, Swift, or Compose.",
    tag: "Developer Tool · Open Source",
    icon: "✨",
    color: "bg-green-100",
    link: "#",
  },
  {
    title: "Accessibility Checklist",
    description: "Step-by-step WCAG compliance checker for product teams. Includes remediation suggestions and code snippets.",
    tag: "Accessibility · In Progress",
    icon: "♿",
    color: "bg-orange-100",
    link: "#",
  },
  {
    title: "Portfolio Template",
    description: "Minimal, fast, and customizable portfolio template built with Next.js and Tailwind CSS.",
    tag: "Open Source · Template",
    icon: "📁",
    color: "bg-gray-100",
    link: "#",
  },
  {
    title: "Design-to-Code CLI",
    description: "Command-line tool that converts Figma variables to design tokens in multiple formats.",
    tag: "Developer Tool · CLI",
    icon: "⚡",
    color: "bg-yellow-100",
    link: "#",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Experiments() {
  const router = useRouter();
  
  return (
    <div className="pt-20 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <button 
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Experiments
          </h1>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-12">
            Side projects and tools I&apos;m building to solve problems I encounter in my work
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <AnimatedSection key={experiment.title} delay={index * 0.1}>
              <Link
                href={experiment.link}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${experiment.color}`}>
                    <span className="text-2xl">{experiment.icon}</span>
                  </div>
                  <span className="text-gray-300">↗</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{experiment.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{experiment.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                  {experiment.tag}
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
