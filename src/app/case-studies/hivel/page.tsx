"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

export default function HivelCaseStudy() {
  const router = useRouter();
  
  return (
    <div className="pt-20 min-h-screen">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <button 
            onClick={() => router.push("/case-studies")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back to Case Studies
          </button>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            Dev Tools · 0→1 · B2B SaaS
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mt-6 mb-6">
            Hivel — Integrations & Team Setup
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Turned support-heavy, engineering-dependent surfaces into fully self-serve. 
            200+ member org setup went from 1–2 days to minutes.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap gap-8 mb-16 pb-8 border-b border-gray-200">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Role</p>
              <p className="text-base text-gray-700">Product Designer</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Timeline</p>
              <p className="text-base text-gray-700">3 Months</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-base text-gray-700">↓ 40–50% integration tickets</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Enterprise teams needed engineering help to set up integrations and configure team spaces. 
              This created bottlenecks and slowed down adoption significantly.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Users were dependent on support tickets and developer time just to get started, 
              making the product inaccessible for non-technical team leads.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Designed a fully self-serve experience that allowed admins to set up integrations 
              and configure team spaces without any engineering involvement.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Implemented guided flows, visual configuration tools, and pre-built templates 
              that reduced setup time from days to minutes.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.7}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Visual Integration Builder</h3>
                <p className="text-sm text-gray-500">Drag-and-drop interface for connecting services</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Team Space Templates</h3>
                <p className="text-sm text-gray-500">Pre-configured setups for common use cases</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step Guide</h3>
                <p className="text-sm text-gray-500">Walkthrough for complex configurations</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Role-Based Permissions</h3>
                <p className="text-sm text-gray-500">Fine-grained access without engineering</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">40-50%</p>
                <p className="text-sm text-gray-500">Reduction in integration tickets</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">200+</p>
                <p className="text-sm text-gray-500">Member org setup time reduced</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">0</p>
                <p className="text-sm text-gray-500">Engineering dependencies</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.9}>
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/case-studies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link 
              href="/case-studies/hivel-score"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2"
            >
              Next Project: Hivel Score
              <span>→</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
