"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    tag: "Enterprise IAM · B2B SaaS",
    title: "AccessIQ — Access Governance Platform",
    description:
      "Redesigning access decisions for non-technical managers at 10,000+ employee fintechs. From permission strings and two buttons to AI-guided decisions in plain English.",
    metric: "↓ 67% access risk reduction",
  },
  {
    tag: "Fintech · AI · B2C",
    title: "FinCo — Smart Remittance",
    description:
      "AI Rate Forecasting for Smarter Transfer Timing. Transparent Recommendations & Smart Routing for Better Value.",
    metric: "Coming soon",
  },
  {
    tag: "Dev Tools · 0→1 · B2B SaaS",
    title: "Hivel — Integrations & Team Setup",
    description:
      "Turned support-heavy, engineering-dependent surfaces into fully self-serve. 200+ member org setup went from 1–2 days to minutes.",
    metric: "↓ 40–50% integration tickets",
  },
  {
    tag: "HealthTech · 0→1 · 6 Portals",
    title: "Dentread — Practice Management System",
    description:
      "Sole designer. Six user types. No playbook. PMS used by 10,000+ doctors; native imaging viewer replaced all third-party tools across 500+ dental organisations.",
    metric: "10,000+ doctors · 1M+ images",
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
    <div className="pt-20 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-12">
            Every project starts with a question worth answering
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, index) => {
            const hrefs = ["/case-studies/accessiq", "/case-studies/finco", "/case-studies/hivel", "#"];
            const href = hrefs[index];
            return (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Link href={href}>
                  <motion.div
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
                    whileHover={href !== "#" ? {} : { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                <div className="h-56 bg-gray-100 flex items-center flex-shrink-0 overflow-hidden">
                  {index === 0 && (
                    <motion.div 
                      className="flex gap-3"
                      animate={{
                        x: [0, -800],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 10,
                          ease: "linear",
                        },
                      }}
                    >
                      {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[260px] h-40 overflow-hidden">
                          <Image 
                            src={`/case-studies/accessiq/0${i}.png`} 
                            alt={`AccessIQ Dashboard ${i}`}
                            width={260}
                            height={160}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </motion.div>
                  )}
                  {index !== 0 && (
                    <div className="w-64 h-40 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="h-7 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      </div>
                      <div className="p-3">
                        <div className="h-2 w-32 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-gray-100 rounded mb-3"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-gray-100 rounded"></div>
                          <div className="h-8 bg-gray-100 rounded"></div>
                          <div className="h-8 bg-purple-100 rounded"></div>
                          <div className="h-8 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
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
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <p className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                    <span className="text-green-500">↑</span> {project.metric}
                  </p>
                </div>
              </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </div>
  );
}
