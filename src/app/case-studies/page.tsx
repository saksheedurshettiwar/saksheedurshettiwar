"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DotBackground } from "@/components/DotBackground";

const projects = [
  {
    tag: "Enterprise IAM · B2B SaaS",
    title: "Cutting Access Risk by 67% without the Security Jargon",
    description:
      "Non-technical managers making access decisions without security jargon.",
    description2:
      "From cryptic permission strings to AI-guided approvals in plain English.",
  },
  {
    tag: "Fintech · AI · B2C",
    title: "End-to-end AI-powered remittance tool that Made Users 25% Faster",
    description:
      "Users sending money at the right time with AI-powered rate forecasting.",
    description2:
      "From single-provider guesswork to transparent, optimised split transfers.",
  },
  {
    tag: "Healthcare Staffing · B2B SaaS",
    title: "NexusForce",
    description:
      "Redesigning new hire onboarding to cut early attrition by 38%.",
    description2:
      "From fragmented checklist chaos to milestone-based employee experience.",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, index) => {
              const hrefs = ["/case-studies/accessiq", "/case-studies/finco"];
              const images = [
                "/case-studies/AccessIQ/Manager Dashboard/Manager Dashboard.png",
                "/Finco Cover.png",
              ];
              const alts = ["AccessIQ", "Finco"];
              return (
                <AnimatedSection key={project.title} delay={index * 0.1}>
                  <Link href={hrefs[index]}>
                    <motion.div
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
                      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                      transition={{ duration: 0.3 }}
                    >
                  <div className="h-48 md:h-56 bg-gray-100 flex items-center flex-shrink-0 overflow-hidden pt-3 px-3">
                    <div className="w-full h-full">
                      <Image 
                        src={images[index]}
                        alt={alts[index]}
                        width={240}
                        height={140}
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                    </div>
                  </div>
                   <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                        {project.tag}
                      </span>
                      <motion.span 
                        className="text-gray-300"
                        whileHover={{ scale: 1.2, x: 3 }}
                      >
                        ↗
                      </motion.span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 space-y-1">
                      <p>• {project.description}</p>
                      {project.description2 && <p>• {project.description2}</p>}
                    </div>
                  </div>
                </motion.div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {/* NexusForce - full width card */}
          <div className="mt-6">
            <AnimatedSection delay={0.2}>
              <Link href="/case-studies/nexusforce-deep-dive">
                <motion.div
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col md:flex-row"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 flex flex-col w-1/2 justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                        Healthcare Staffing · B2B SaaS
                      </span>
                      <motion.span 
                        className="text-gray-300"
                        whileHover={{ scale: 1.2, x: 3 }}
                      >
                        ↗
                      </motion.span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
Designing a Zero-Gap Compliance System That Ensures Every Healthcare Worker Is 100% Verified Before Day One
                    </h3>
                    <div className="text-sm text-gray-500 leading-relaxed space-y-1">
                      <p>• Hospitals getting fully verified workers on day one, without chasing a single missing document.</p>
                      <p>• From billing data accidentally bleeding across parties to a platform where no one ever sees what they shouldn't.</p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gray-100 flex-shrink-0">
                    <div className="h-48 md:h-full">
                      <Image 
                        src="/case-studies/nexusforce/Hero/Step 1 - 3.png"
                        alt="NexusForce"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          </div>
      </section>
    </div>
  );
}
