"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DotBackground } from "@/components/DotBackground";
import CaseStudyCard from "@/components/CaseStudyCard";

const projects = [
  {
    tag: "Healthcare Staffing · B2B SaaS",
    title: "Designing a Zero-Gap Compliance System That Ensures Every Healthcare Worker Is 100% Verified Before Day One",
    description:
      "Hospitals getting fully verified workers on day one, without chasing a single missing document.",
    description2:
      "From billing data accidentally bleeding across parties to a platform where no one ever sees what they shouldn't.",
    image: "/case-studies/nexusforce/Card - NexusForce.png",
    alt: "NexusForce",
    href: "/case-studies/nexusforce-deep-dive",
  },
  {
    tag: "Enterprise IAM · B2B SaaS",
    title: "Cutting Access Risk by 67% without the Security Jargon",
    description:
      "Non-technical managers making access decisions without security jargon.",
    description2:
      "From cryptic permission strings to AI-guided approvals in plain English.",
    image: "/case-studies/AccessIQ/Card - AccessIQ.png",
    alt: "AccessIQ",
    href: "/case-studies/accessiq",
  },
  {
    tag: "Fintech · AI · B2C",
    title: "End-to-end AI-powered remittance tool that Made Users 25% Faster",
    description:
      "Users sending money at the right time with AI-powered rate forecasting.",
    description2:
      "From single-provider guesswork to transparent, optimised split transfers.",
    image: "/case-studies/Finco/Card - Finco.png",
    alt: "Finco",
    href: "/case-studies/finco",
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

export default function CaseStudies() {
  const router = useRouter();
  
  return (
    <div className="pt-20 min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <DotBackground />
      </div>
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <AnimatedSection>
          <button 
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Here's what I've been making
          </h1>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-8">
            Every project starts with a question worth answering
          </p>
        </AnimatedSection>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <CaseStudyCard
              key={project.title}
              tag={project.tag}
              title={project.title}
              description={project.description}
              description2={project.description2}
              image={project.image}
              alt={project.alt}
              href={project.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
