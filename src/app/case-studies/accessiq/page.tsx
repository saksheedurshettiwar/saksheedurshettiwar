"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

export default function AccessIQCaseStudy() {
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
            Fintech · B2B SaaS · AI-Powered
          </span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mt-6 mb-6">
            Cutting Access Risk by 67%<br />without the Security Jargon
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Designing access governance for a global fintech so managers could own access decisions without needing a security degree.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.35}>
          <div className="w-full mb-16">
            <Image 
              src="/case-studies/accessiq/dashboard.png" 
              alt="AccessIQ Dashboard" 
              width={1920} 
              height={1080}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Role</p>
              <p className="text-base text-gray-700">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Timeline</p>
              <p className="text-base text-gray-700">4 Months</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-base text-gray-700">67% risk reduction</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What success looks like</h2>
          <div className="bg-gray-900 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 py-12 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-white max-w-4xl mx-auto">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">67%</p>
              <p className="text-sm text-gray-400">reduction in stale access to cardholder data</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">4X</p>
              <p className="text-sm text-gray-400">faster onboarding — from 5-day chaos to same-day</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-sm text-gray-400">audit evidence coverage with zero manual exports</p>
            </div>
          </div>
        </div>
        
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The UX Gap</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              What a manager actually sees when they try to approve access.
            </p>
            <p className="text-base text-gray-500 leading-relaxed font-medium mb-6">
              Existing tools were built by security engineers, for security engineers. Non-technical managers were handed this interface and asked to make a risk-based decision.
            </p>
            <p className="text-lg text-gray-700 italic font-medium border-l-4 border-gray-900 pl-4 py-2">
              "What is schema_admin? Is that bad? I'll just approve it so James isn't blocked."
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.7}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Existing Tools Show vs What AccessIQ Shows</h2>
            <div className="flex gap-8">
              <div className="flex-1 space-y-4">
                <p className="text-sm font-semibold text-gray-700">What existing tools show a manager</p>
                <Image 
                  src="/case-studies/accessiq/red.png" 
                  alt="What Existing Tools Show" 
                  width={600} 
                  height={400}
                  className="w-full rounded-xl border border-gray-200"
                />
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-sm text-gray-600">"What is schema_admin? Is that bad? I'll just approve it so James isn't blocked."</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-sm text-gray-600">No plain-English explanation of what this actually does</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-sm text-gray-600">No risk context. No suggestion. No compliance note.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-sm text-gray-600">"PERMANENT" is the default — nobody defaults to time-limited</span>
                  </div>
                </div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="flex-1 space-y-4">
                <p className="text-sm font-semibold text-gray-700">What AccessIQ shows instead</p>
                <Image 
                  src="/case-studies/accessiq/green.png" 
                  alt="What AccessIQ Shows Instead" 
                  width={600} 
                  height={400}
                  className="w-full rounded-xl border border-gray-200"
                />
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-sm text-gray-600">Plain English — "Full Dashboard + Data Export" not scope:read:write:export</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-sm text-gray-600">Risk explained in one sentence, in business language</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-sm text-gray-600">AI suggestion with a clear reason — manager can agree in one click</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span className="text-sm text-gray-600">Time-limited by default — 14 days, not permanent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Core Problems</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              Moments where everything goes wrong. Not edge cases. These happen daily at every global fintech, each one a UX failure, a process failure, and a compliance failure rolled into one.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">01</span>
                  <h3 className="text-lg font-semibold text-gray-900">New hires start wrong</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  When someone joins a company, their manager needs to set up their access. There's no standard. The role definition lives in a document nobody reads. So managers copy permissions from a random colleague, or approve whatever list lands in their inbox.
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  The consequence: A junior Cards Analyst gets full export access to cardholder data because their peer happened to have it.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">02</span>
                  <h3 className="text-lg font-semibold text-gray-900">Access accumulates and nobody notices</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Someone moves from the risk team to marketing. Their old access stays. Their new access gets added. Six months later they have permissions from two completely different jobs, and nobody flagged it.
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  The consequence: A former fraud analyst retains write access to the payments database six months after moving to marketing.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">03</span>
                  <h3 className="text-lg font-semibold text-gray-900">Quarterly reviews are a tick-box exercise</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Regulations require companies to confirm who has access to sensitive data every 90 days. In practice, this means a security team exports data from six different tools into a spreadsheet and emails it to 40 managers.
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  The consequence: Managers tick every box in three minutes. The evidence looks complete. The auditor finds the gaps anyway.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.9}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              I looked at 12 platforms in this space — the big enterprise names and newer challengers. Every single one showed managers raw technical data and asked them to make a judgment call.
            </p>
            <p className="text-base text-gray-900 leading-relaxed font-semibold">
              None of them explained what the data meant. None suggested what the manager should do. None were designed for someone without a security background.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.0}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Three Gaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Gap 01</p>
                <h3 className="font-semibold text-gray-900 mb-2">Language</h3>
                <p className="text-sm text-gray-500">Raw permissions with no translation. Managers see "scope:write:export" with no explanation.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Gap 02</p>
                <h3 className="font-semibold text-gray-900 mb-2">Decision Support</h3>
                <p className="text-sm text-gray-500">No guidance, just data. Platforms show risk flags but never say what to do.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Gap 03</p>
                <h3 className="font-semibold text-gray-900 mb-2">Fintech Context</h3>
                <p className="text-sm text-gray-500">No templates for regulated roles like "EU Cards Analyst." Built from scratch, every time.</p>
              </div>
            </div>
            <p className="text-base text-gray-900 leading-relaxed font-semibold mt-6">
              The gap wasn't in the technology. It was in who the technology was talking to.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.1}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The People</h2>
            <p className="text-lg text-gray-900 leading-relaxed font-semibold mb-8">
              This isn't a technology problem. It's a people problem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">M</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Manager</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What they know well</p>
                    <p className="text-gray-600">Their team, their goals, who needs what to do their job.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What they don't know</p>
                    <p className="text-gray-600">"scope:write:export" — what any permission string means.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">E</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Employee</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What they need</p>
                    <p className="text-gray-600">Quick access to tools so they can start work without waiting days.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What happens instead</p>
                    <p className="text-gray-600">They request everything upfront to avoid going back and asking again.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Security Team</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What they're responsible for</p>
                    <p className="text-gray-600">Proving to auditors that only the right people can access sensitive data.</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">What they're stuck with</p>
                    <p className="text-gray-600">Managers who approve everything and spreadsheets they stitch together manually.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-base text-gray-900 leading-relaxed font-medium mt-6">
              The problem isn't that managers are careless. It's that the tools they're given speak a language they were never taught.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.2}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Design Principle</h2>
            <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed">
              Can a non-technical manager make a confident decision in under 60 seconds?
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.3}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Screens & Design Decisions</h2>
            
            <div className="space-y-16">
              <div>
                <div className="bg-gray-100 rounded-xl p-4 md:p-8 mb-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <p className="text-xs text-gray-400 mb-4">Manager Dashboard — Joiner, Mover, Leaver</p>
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-green-600">3</p>
                        <p className="text-xs text-gray-500">New Hires</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-yellow-600">2</p>
                        <p className="text-xs text-gray-500">Role Changes</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-red-600">1</p>
                        <p className="text-xs text-gray-500">Pending Offboard</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Manager Dashboard</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">The Problem:</span> Managers found out about access problems only when security escalated or an auditor raised a finding. There was no proactive surface.
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">The Design Decision:</span> Most tools answer "how bad is it?" This one answers "what do I do right now?"
                  </p>
                  <p className="text-sm text-gray-700 mt-4 border-l-2 border-gray-900 pl-3 py-1">
                    <span className="font-semibold text-gray-900">Research insight:</span> 91% of managers had no visibility into their team's access health. The five KPIs map directly to what they were checking manually every morning — across emails, Slack, and spreadsheet tabs.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-xl p-4 md:p-8 mb-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <p className="text-xs text-gray-400 mb-4">Conflict Detection Alert</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-red-700 mb-2">⚠️ Conflict Detected</p>
                      <p className="text-sm text-gray-600 mb-2">
                        James requesting "Full Admin Access" conflicts with his current "Cards Team" role.
                      </p>
                      <p className="text-xs text-gray-500">
                        If approved, James would have access to 6 systems he doesn't need.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded-lg">Approve with Conditions</button>
                      <button className="flex-1 bg-gray-100 text-gray-600 text-sm py-2 rounded-lg">Deny</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Conflict Detection <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded ml-2">AI Powered</span></h3>
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">The Problem:</span> A conflict gets detected. The tool shows a red badge. The manager has no idea what it means so they approve it anyway.
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">The Design Decision:</span> The consequence comes before the buttons. Always.
                  </p>
                  <p className="text-sm text-gray-700 mt-4 border-l-2 border-gray-900 pl-3 py-1">
                    <span className="font-semibold text-gray-900">Research insight:</span> Managers approved conflicts in other tools because the warning was just a colour. Explain what could actually go wrong and they stop and think.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-xl p-4 md:p-8 mb-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <p className="text-xs text-gray-400 mb-4">AI Recommendation in Plain English</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold text-green-700">✓ Approve:</span> James has a valid business need for this access.
                      </p>
                      <p className="text-xs text-gray-500">Full dashboard + data export access for the EU Cards team.</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded-lg">Approve</button>
                      <button className="flex-1 bg-gray-100 text-gray-600 text-sm py-2 rounded-lg">Modify</button>
                      <button className="flex-1 bg-gray-100 text-gray-600 text-sm py-2 rounded-lg">Deny</button>
                    </div>
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Recommendation <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded ml-2">AI Powered</span></h3>
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">The Problem:</span> The manager receives a permission string and two buttons. No context, no suggested action, no risk signal. 91% approve everything to avoid blocking their team.
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">The Design Decision:</span> AI recommendation leads at 97% confidence in plain English. "James has a valid business need — but full export isn't required for it." Manager confirms a recommendation — they don't interpret raw data.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-100 rounded-xl p-4 md:p-8 mb-4">
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <p className="text-xs text-gray-400 mb-4">Request Queue — Triage View</p>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="bg-yellow-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-yellow-600">3</p>
                        <p className="text-xs text-gray-500">Need Judgment</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-green-600">8</p>
                        <p className="text-xs text-gray-500">AI Handles</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-red-600">1</p>
                        <p className="text-xs text-gray-500">Blocked</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-gray-600">12</p>
                        <p className="text-xs text-gray-500">Total</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">The shape of today's work in four numbers.</p>
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Triage the Queue</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-medium text-gray-700">The Problem:</span> 80–120 requests a month. A flat list. Everything looks equally urgent, so nothing gets real attention.
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">The Design Decision:</span> Triage the queue before the manager sees it. 3 need judgment. 8 the AI handles. 1 is blocked. The shape of the work in four numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.4}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insight</h2>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-4 font-semibold">
              Adding the confidence score and plain-English reasoning was the single change that lifted AI suggestion adoption from 22% to 61% in testing.
            </p>
            <p className="text-base text-gray-600">
              When managers understood why the AI suggested something, they trusted it more and acted on it.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={1.5}>
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/case-studies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← All Case Studies
            </Link>
            <Link 
              href="/case-studies/hivel"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2"
            >
              Next Project: Hivel
              <span>→</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
