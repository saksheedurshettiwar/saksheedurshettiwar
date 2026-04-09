"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeInOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FinCoCaseStudy() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const screens = [
    {
      title: "Know the best time to send before you send",
      problem: "Rates fluctuate constantly, but users lack clarity on the best time to send.",
      decision: "Most financial tools show predictions as data. I showed them as decisions. The difference is giving someone directions instead of handing them a map.",
      insight: "The insight was to transform raw data into actionable recommendations that users could immediately act upon.",
      insightLabel: "Design Insight",
    },
    {
      title: "Stop picking blindly. See exactly why we recommend each provider",
      badge: "AI Powered",
      problem: "Comparison shows options, yet users still hesitate before sending.",
      decision: "AI confidence is worthless without AI reasoning. Every recommendation shows its working so users can agree or override with full information.",
      insight: "When users understand why a recommendation is made, they trust it more and act faster.",
      insightLabel: "AI Powered",
    },
    {
      title: "Split your transfer. Get more to the other side",
      badge: "AI Powered",
      problem: "Users choose one provider without knowing if better payout strategies exist.",
      decision: "Smart routing is only triggered when savings exceed ₹150. Below that threshold, the added complexity is not worth it for users. The flow is step-by-step and one-click confirmable.",
      insight: "Complexity should only appear when it adds clear value to the user's decision.",
      insightLabel: "Design Decision",
    },
  ];

  return (
    <div className="pt-20 min-h-screen" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />
      
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Back Button */}
        <AnimatedSection>
          <motion.button 
            onClick={() => router.push("/case-studies")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors group"
            whileHover={{ x: -4 }}
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Case Studies
          </motion.button>
        </AnimatedSection>
        
        {/* Hero */}
        <AnimatedSection delay={0.1}>
          <motion.span 
            className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Fintech · AI · B2C
          </motion.span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Designing Smarter Remittance Decisions<br />That Made Users 25% Faster
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            FinCo is an end-to-end AI-powered remittance tool designed to help users make confident transfer decisions, faster.
          </p>
        </AnimatedSection>
        
        {/* Metrics Strip */}
        <div className="bg-gray-900 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 py-12 rounded-xl mb-16">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">What success looks like</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-white max-w-4xl mx-auto">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">30%</p>
              <p className="text-sm text-gray-400">increase in user confidence picking the right provider and timing</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">25%</p>
              <p className="text-sm text-gray-400">faster from comparison to confirmed transfer</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15%</p>
              <p className="text-sm text-gray-400">drop in abandonment during the transfer flow</p>
            </div>
          </div>
        </div>
        
        {/* The Core Problems */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Problems</h2>
            <FadeInOnScroll>
              <p className="text-lg text-gray-700 font-medium mb-8 border-l-4 border-gray-900 pl-4">
                Moments where everything goes wrong. The tools were built for transparency. But transparency without guidance is not helpful, it is just more data to be overwhelmed by.
              </p>
            </FadeInOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Timing Uncertainty", desc: "Rates fluctuate constantly, but users lack clarity on the best time to send." },
                { num: "02", title: "Decision Hesitation", desc: "Comparison shows options, yet users still hesitate before sending." },
                { num: "03", title: "Strategy Blind Spots", desc: "Users choose one provider without knowing if better payout strategies exist." },
              ].map((item, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* North Star */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">North Star</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug">
                Can a non-technical person make a confident decision in under 30 seconds?
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Key Screens */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The screens and the thinking behind each one</h2>
            <p className="text-lg text-gray-700 mb-12">One question drove every screen.</p>
            
            <div className="space-y-16">
              {screens.map((screen, i) => (
                <FadeInOnScroll key={i}>
                  <div className="group">
                    {/* Screen Number & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{screen.title}</h3>
                      </div>
                      {screen.badge && (
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full ml-auto font-medium">{screen.badge}</span>
                      )}
                    </div>
                    
                    {/* Problem & Decision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">The Problem</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.problem}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">The Design Decision</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.decision}</p>
                      </div>
                    </div>
                    
                    {/* Mock Image - Full Width */}
                    <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image 
                          src="/case-studies/finco/placeholder.png" 
                          alt={screen.title} 
                          width={1200} 
                          height={675} 
                          className="w-full h-auto" 
                        />
                      </motion.div>
                    </div>
                    
                    {/* Research Insight */}
                    <div className="border-l-4 border-gray-900 pl-5 py-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{screen.insightLabel}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{screen.insight}</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Constraints */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Constraints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Relies on real-time data, needing consistent updates for accuracy.",
                "Smart routing needs a robust backend system to handle complex transfer logic.",
                "Regulatory restrictions limit the transparency of certain pricing details.",
              ].map((item, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* AI Assistant */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">FinCo AI Assistant (Cofin)</h3>
                  <p className="text-sm text-gray-400">The smartest way to send money abroad</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Provides instant answers to user questions about transfer costs, provider trust, and how recommendations are calculated, helping users make decisions with confidence.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Navigation Footer */}
        <AnimatedSection>
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/case-studies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors group flex items-center gap-2"
            >
              <motion.span 
                className="transition-transform group-hover:-translate-x-1"
                whileHover={{ x: -4 }}
              >
                ← All Case Studies
              </motion.span>
            </Link>
            <Link 
              href="/case-studies/hivel"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2 group"
            >
              Next Project: Hivel
              <motion.span 
                className="transition-transform group-hover:translate-x-1"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
