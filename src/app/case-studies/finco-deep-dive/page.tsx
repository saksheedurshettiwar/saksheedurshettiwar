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

export default function FincoDeepDive() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "New Hire Milestone Dashboard",
      desc: "Milestone framing eliminates 'am I behind?' anxiety.",
      solution: "Progress is shown as forward movement through named stages, not as a shrinking list of unchecked boxes. 'Week 2 - Meet Your Team' tells Priya where she is in a story, not what she's failed to do.",
      image: "/Finco Cover.png",
    },
    {
      title: "Every task has a named owner",
      desc: "New hires didn't know who to go to when stuck.",
      solution: "'1:1 with Marcus (Engineering Lead)' tells exactly who to contact. This single change reduced HR support messages by 44% in the pilot.",
      image: "/Finco Cover.png",
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
          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="sticky top-32">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-6 leading-tight">
                  Redesigning new hire onboarding to cut early attrition by 38%
                </h1>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  HR teams were managing onboarding across 4 disconnected tools. New hires felt lost. We replaced a fragmented checklist experience with a milestone-based, new-hire-first product layer and the numbers followed.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["HR Tech", "B2B SaaS", "Onboarding"].map((tag, i) => (
                    <motion.span 
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-7">
              <motion.div 
                className="rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Image 
                  src="/Finco Cover.png" 
                  alt="Finco Dashboard"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">The Problem</h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">A $28,000 failure hidden inside a checklist</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Mid-market companies using HRIS platforms like BambooHR were stitching together onboarding across 4-5 tools: an HRIS for paperwork, Slack for introductions, email for task reminders, an LMS for training, and a Google Doc for the 30-60-90 day plan. None of these talked to each other.
              </p>
<p className="text-base text-gray-600 leading-relaxed">
                For HR managers this meant constant manual chasing. For new hires, especially remote employees joining post-2022, it meant navigating a maze with no map, no sense of progress, and no signal that they were doing the right things.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 mb-10">
                <div className="pr-4">
                  <p className="text-2xl font-bold text-gray-900">28%</p>
                  <p className="text-xs text-gray-500">of new hires quit before day 90</p>
                  <p className="text-[10px] text-gray-400 mt-1">Enboarder Onboarding Trends Report, 2025</p>
                </div>
                <div className="pl-4 border-l border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">81%</p>
                  <p className="text-xs text-gray-500">feel overwhelmed by too much information</p>
                  <p className="text-[10px] text-gray-400 mt-1">flair.hr Onboarding Statistics, 2025</p>
                </div>
                <div className="pl-4 border-l border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">12%</p>
                  <p className="text-xs text-gray-500">feel their company does onboarding well</p>
                  <p className="text-[10px] text-gray-400 mt-1">EMP Trust HR Industry Report, 2024</p>
                </div>
                <div className="pl-4 border-l border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">$28k</p>
                  <p className="text-xs text-gray-500">maximum cost per employee lost</p>
                  <p className="text-[10px] text-gray-400 mt-1">BambooHR Definitive Guide, 2024</p>
                </div>
              </div>
              
              <p className="text-base text-gray-600 leading-relaxed">
                The business result: nearly 1-in-3 new hires were leaving before day 90, costing the average mid-market company between $7,500 and $28,000 per head in rehiring costs.
              </p>
              <div className="w-full h-px bg-gray-200 my-6"></div>
              <p className="text-sm text-gray-700 leading-relaxed">The B2B tension: HR teams needed visibility and control.</p>
              <p className="text-sm text-gray-700 leading-relaxed">The B2C tension: new hires needed clarity, confidence, and a sense of "I'm on track."</p>
              <p className="text-sm text-gray-700 leading-relaxed">These were architecturally different needs being forced into the same task-list UI, and it was failing both.</p>
            </div>
          </div>
</AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-12">Process</h2>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8 relative">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold z-10 flex-shrink-0">1</div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-gray-900">Milestones over checklists</h3>
                    <p className="text-sm text-gray-500 mt-1">Every existing HRIS uses a task checklist. In 5 interviews, the word "behind" came up 9 times. We moved to a 4-milestone model (Orientation, Team, First Win, First Review) that groups tasks by meaning, not due date.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8 relative">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold z-10 flex-shrink-0">2</div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-gray-900">Two interfaces, one data layer</h3>
                    <p className="text-sm text-gray-500 mt-1">We built two separate views off the same data layer, with role-based routing. HR needs a fleet view, new hires need a personal view.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8 relative">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold z-10 flex-shrink-0">3</div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-gray-900">Named people, not just tasks</h3>
                    <p className="text-sm text-gray-500 mt-1">We attached a task owner to every item, surfacing the social layer. Buddy connections and manager check-ins went from abstract to actionable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">Solution</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`py-5 border-b border-gray-200 cursor-pointer transition-all last:border-b-0 ${activeFeature === i ? '' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${activeFeature === i ? 'text-gray-700' : 'text-gray-400'}`}>0{i + 1}</span>
                      <h3 className={`text-base font-medium ${activeFeature === i ? 'text-gray-800' : 'text-gray-500'}`}>{feature.title}</h3>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: activeFeature === i ? 'auto' : 0, opacity: activeFeature === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-8">
                        <p className="text-sm text-gray-500 mb-3">{feature.desc}</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li className="text-sm text-gray-700">{feature.solution}</li>
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                key={activeFeature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-3 rounded-2xl overflow-hidden"
              >
                <div className="h-full min-h-[300px] bg-gray-100">
                  <Image 
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
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
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image 
                    src="/Finco Cover.png" 
                    alt="Finco Main"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 h-full">
                  <Image 
                    src="/Finco Cover.png" 
                    alt="Finco Feature 1"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 h-full">
                  <Image 
                    src="/Finco Cover.png" 
                    alt="Finco Feature 2"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image 
                    src="/Finco Cover.png" 
                    alt="Finco Feature 3"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="my-20">
            <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-8">Results</h2>
            
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "25%", label: "faster transfers" },
                { num: "30%", label: "more savings" },
                { num: "60%", label: "higher confidence" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center p-8 rounded-2xl border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: '#e5e7eb' }}
                >
                  <p className="text-4xl font-bold text-gray-900">{stat.num}</p>
                  <p className="text-xs text-gray-500 mt-2  tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex justify-between items-center pt-8 border-t border-gray-100">
            <Link 
              href="/case-studies"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors  tracking-wide font-medium"
            >
              ← All Projects
            </Link>
            <Link 
              href="/case-studies/accessiq"
              className="text-xs text-gray-900 hover:text-gray-600 font-semibold  tracking-wide"
            >
              Next: AccessIQ →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}