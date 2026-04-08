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

export default function FinCoCaseStudy() {
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
            Fintech · AI · B2C
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mt-6 mb-6">
            Designing Smarter Remittance Decisions<br />That Made Users 25% Faster
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Finco is an end-to-end AI-powered remittance tool designed to help users make confident transfer decisions, faster.
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
              <p className="text-base text-gray-700">30% more confident users</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">30%</p>
              <p className="text-sm text-gray-500">increase in user confidence picking the right provider</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">25%</p>
              <p className="text-sm text-gray-500">faster from comparison to confirmed transfer</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">15%</p>
              <p className="text-sm text-gray-500">drop in abandonment during transfer flow</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Core Problems</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              The tools were built for transparency. But transparency without guidance is not helpful, it is just more data to be overwhelmed by.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600">⏰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Timing Uncertainty</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Rates fluctuate constantly, but users lack clarity on the best time to send.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">🤔</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Decision Hesitation</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Comparison shows options, yet users still hesitate before sending.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">👁</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Strategy Blind Spots</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Users choose one provider without knowing if better payout strategies exist.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.7}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Design Principle</h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed">
              Can a non-technical person make a confident decision in under 30 seconds?
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Screens & Design Decisions</h2>
            
            <div className="space-y-12">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <p className="text-xs text-gray-400 mb-4">Best Time to Send</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-green-700 mb-1">Best time to send: Today</p>
                      <p className="text-xs text-gray-500">Rates expected to dip tomorrow. Send today for optimal payout.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Today</span>
                        <span className="font-medium text-green-600">₹92.45</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tomorrow</span>
                        <span className="font-medium text-gray-700">₹91.80</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Know the Best Time to Send</h3>
                  <p className="text-sm text-gray-500">
                    Most financial tools show predictions as data. We showed them as decisions. The difference is giving someone directions instead of handing them a map.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <p className="text-xs text-gray-400 mb-4">Provider Recommendation</p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-purple-700 mb-2">We recommend Wise</p>
                      <p className="text-xs text-gray-600">Lowest fees (₹45) + best rate (₹92.45) = highest payout.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-50 rounded p-2 text-center">
                        <p className="text-xs text-gray-500">Fee</p>
                        <p className="text-sm font-medium">₹45</p>
                      </div>
                      <div className="bg-gray-50 rounded p-2 text-center">
                        <p className="text-xs text-gray-500">Rate</p>
                        <p className="text-sm font-medium">₹92.45</p>
                      </div>
                      <div className="bg-gray-50 rounded p-2 text-center">
                        <p className="text-xs text-gray-500">Payout</p>
                        <p className="text-sm font-medium text-green-600">₹92,003</p>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white text-sm py-3 rounded-lg font-medium">
                      Continue with Wise
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Stop Picking Blindly</h3>
                  <p className="text-sm text-gray-500">
                    AI confidence is worthless without AI reasoning. Every recommendation shows its working so users can agree or override with full information.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <p className="text-xs text-gray-400 mb-4">Smart Routing Option</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-blue-700 mb-2">Split your transfer</p>
                      <p className="text-xs text-gray-600 mb-2">Send ₹50,000 via Wise + ₹50,000 via Instarem</p>
                      <p className="text-sm font-medium text-blue-600">Save ₹312 extra</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Via Wise (50%)</span>
                        <span className="font-medium">₹46,201</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Via Instarem (50%)</span>
                        <span className="font-medium">₹46,112</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white text-sm py-3 rounded-lg font-medium">
                      Confirm Split Transfer
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Split Your Transfer</h3>
                  <p className="text-sm text-gray-500">
                    Smart routing is only triggered when savings exceed ₹150. Below that threshold, the added complexity is not worth it for users. The flow is step-by-step and one-click confirmable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.9}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Constraints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  Relies on real-time data, needing consistent updates for accuracy.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  Smart routing needs a robust backend system to handle complex transfer logic.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  Regulatory restrictions limit the transparency of certain pricing details.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.0}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Smartest Way to Send Money Abroad</h2>
            <div className="bg-gray-900 text-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold">FinCo AI Assistant (Cofin)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Provides instant answers to user questions about transfer costs, provider trust, and how recommendations are calculated, helping users make decisions with confidence.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.1}>
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/case-studies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link 
              href="/case-studies/accessiq"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2"
            >
              Previous: AccessIQ
              <span>→</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
