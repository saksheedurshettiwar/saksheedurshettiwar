"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
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

export default function SproutDeepDive() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const decisions = [
    {
      num: "1",
      title: "Voice-first, screen-optional for kids",
      desc: "Early prototypes had kids interacting with a tablet. Every teacher we interviewed said the same thing: \"The moment there's a screen, they stop talking to each other.\" So we flipped the interaction model. Kids receive missions verbally through a classroom speaker. They complete tasks physically — sorting cards, drawing, acting out scenarios — and speak results back. The screen is never for them.",
      tradeoff: "This eliminated 40% of feature ideas we'd explored, including any gamified reward loop that required staring at a display. Worth it.",
      color: "green"
    },
    {
      num: "2",
      title: "Physical Skill Cards as the primary artifact",
      desc: "Inspired by embodied cognition research showing tactile learning outperforms screen tasks for children under 10, we designed a set of physical \"Skill Cards\" — laminated, scannable — one per AI concept. Cards are earned, traded, collected. A child who earns the \"Pattern Finder\" card has demonstrably practiced pattern recognition. The card is the credential. No certificate email needed.",
      tradeoff: "Physical manufacturing added cost and complexity. We de-scoped animated card effects to keep print costs under ₹18/card. Teachers in the pilot accepted this immediately.",
      color: "amber"
    },
    {
      num: "3",
      title: "Teachers observe, not orchestrate",
      desc: "Our first dashboard design gave teachers controls: assign missions, skip cards, override AI suggestions. Every teacher in testing ignored it. What they actually wanted: \"Tell me who's struggling and why, so I can walk over and help.\" We removed orchestration controls entirely. The dashboard became a monitoring surface — a quiet signal that respects teachers' attention.",
      tradeoff: "This disappointed the product team who wanted \"engagement features.\" But teacher adoption in the pilot jumped from 58% to 89% once the dashboard felt calm, not demanding.",
      color: "purple"
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />
      
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <AnimatedSection>
          <motion.button 
            onClick={() => router.push("/case-studies")}
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 mb-8 transition-colors tracking-wide font-medium"
            whileHover={{ x: -4 }}
          >
            ← Back to Projects
          </motion.button>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="sticky top-32">
                <motion.span 
                  className="text-xs text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Product Design · AI Literacy · EdTech
                </motion.span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mt-4 mb-6 leading-tight">
                  Teaching kids <span className="text-amber-500">how to think</span> with AI — not just use it
                </h1>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Designing Sprout — a screen-smart AI literacy companion for grades 1 through 5, built for teachers and loved by kids.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-full">Voice-first design</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Physical cards</span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Teacher dashboard</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div><span className="text-gray-400">Role</span><p className="text-gray-700">Lead Product Designer</p></div>
                  <div><span className="text-gray-400">Timeline</span><p className="text-gray-700">14 weeks</p></div>
                  <div><span className="text-gray-400">Team</span><p className="text-gray-700">1 Designer, 2 Engineers, 1 Educator Advisor</p></div>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-7">
              <motion.div 
                className="rounded-3xl overflow-hidden bg-gray-900 p-8"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { num: "94%", label: "of teachers said kids were more actively curious", color: "text-green-400" },
                    { num: "75%", label: "reduction in daily screen time", color: "text-amber-400" },
                    { num: "3", label: "AI literacy skills gained per child per week", color: "text-coral-400" },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.num}</p>
                      <p className="text-xs text-gray-400 mt-2">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">The Problem</h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              A generation learning with AI, but not about it. Every EdTech company rushed to add AI. None asked: is pointing more children at more screens actually teaching them anything?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { num: "75%", label: "of current AI tools for kids are screen-only — zero physical components", color: "text-amber-500" },
                { num: "12%", label: "of K-5 students have received guidance on what AI is", color: "text-amber-500" },
                { num: "0", label: "physical AI learning kits exist at scale for elementary classrooms", color: "text-amber-500" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-gray-900 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className={`text-4xl font-bold ${item.color} mb-2`}>{item.num}</p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xs font-medium text-blue-600 mb-3">Business tension</h3>
                <p className="text-base text-gray-700">Schools need to demonstrate AI literacy outcomes to parents and boards — but "more screen time" is politically radioactive in grades 1–5.</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xs font-medium text-orange-600 mb-3">Child tension</h3>
                <p className="text-base text-gray-700">Kids aged 6–10 learn best through touch, movement, and story — not through chatbots and passive video. The medium is wrong for the learner.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">Three Decisions</h2>
            
            <div className="space-y-6">
              {decisions.map((item, i) => (
                <motion.div 
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`lg:col-span-1 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                    item.color === 'green' ? 'bg-green-100 text-green-700' : 
                    item.color === 'amber' ? 'bg-amber-100 text-amber-700' : 
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {item.num}
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="text-base font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="lg:col-span-4 bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500"><span className="font-semibold text-coral-600">Trade-off:</span> {item.tradeoff}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">Quick Scan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-xs text-gray-400 mb-2">Screen 01 — Before State</p>
                    <p className="text-gray-600">The fragmented mess we inherited — 6 different apps, 3 logins, no shared vocabulary</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-xs text-gray-400 mb-2">Screen 02</p>
                    <p className="text-gray-600">Teacher Dashboard — quiet signals, not a control room</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-xs text-gray-400 mb-2">Screen 03</p>
                    <p className="text-gray-600">Kid Mission — a mission that ends at the desk, not the screen</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-xs text-gray-400 mb-2">Screen 04</p>
                    <p className="text-gray-600">Physical Skill Card Companion — the card is the credential</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "89%", label: "teacher adoption after 4 weeks", color: "text-green-600" },
                { num: "17 min", label: "average screen time per week vs 87 min before", color: "text-amber-500" },
                { num: "3", label: "named AI concepts retained per child per week", color: "text-blue-600" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center p-8 rounded-2xl border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className={`text-4xl font-bold ${stat.color}`}>{stat.num}</p>
                  <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-green-50 rounded-2xl p-6 mt-8">
              <p className="text-base text-gray-700 italic">"For the first time, a parent came to me excited — not worried — about AI in school. They said Arjun came home and taught them what a 'decision tree' is. He used sticks and leaves."</p>
              <p className="text-sm text-gray-500 mt-4">— Kavya Menon, Class 3B teacher, DPS Hyderabad</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-between items-center pt-8 border-t border-gray-100">
            <Link 
              href="/case-studies"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors tracking-wide font-medium"
            >
              ← All Projects
            </Link>
            <Link 
              href="/case-studies/accessiq"
              className="text-xs text-gray-900 hover:text-gray-600 font-semibold tracking-wide"
            >
              Next: AccessIQ →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}