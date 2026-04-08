"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const projects = [
  {
    tag: "Dev Tools · 0→1 · B2B SaaS",
    title: "Hivel — Integrations & Team Setup",
    description:
      "Turned support-heavy, engineering-dependent surfaces into fully self-serve. 200+ member org setup went from 1–2 days to minutes.",
    metric: "↓ 40–50% integration tickets",
  },
  {
    tag: "Dev Tools · Analytics · 0→1",
    title: "Hivel Score — Engineering Performance",
    description:
      "Designed from scratch: a weighted performance system integrating DORA, SPACE, PR, and custom metrics with user-configurable weightage across org, team, and individual levels.",
    metric: "0→1 shipped",
  },
  {
    tag: "HealthTech · 0→1 · 6 Portals",
    title: "Dentread — Practice Management System",
    description:
      "Sole designer. Six user types. No playbook. PMS used by 10,000+ doctors; native imaging viewer replaced all third-party tools across 500+ dental organisations.",
    metric: "10,000+ doctors · 1M+ images",
  },
  {
    tag: "EdTech · Mobile · 0→1",
    title: "MemoNeet — Competitive Exam App",
    description:
      "Designed mobile and web from scratch. Reduced complexity for competitive exam students and improved learning engagement for a fast-growing user base.",
    metric: "800K+ downloads",
  },
];

const features = [
  {
    num: "01",
    title: "Research & Discovery",
    description:
      "User interviews, competitive analysis, and data synthesis to define the real problem before touching Figma.",
  },
  {
    num: "02",
    title: "Rapid Ideation",
    description:
      "Low-fidelity explorations to test concepts quickly. Kill bad ideas fast, double down on what works.",
  },
  {
    num: "03",
    title: "High-Fidelity Design",
    description:
      "Pixel-perfect execution with component systems built to scale. Every state, every edge case considered.",
  },
  {
    num: "04",
    title: "Validate & Ship",
    description:
      "Usability testing, A/B experiments, and close collaboration with engineering to ship right — then iterate.",
  },
];

const skills = [
  "Figma",
  "0→1 Product Design",
  "UX Research",
  "Design Systems",
  "Analytics & Data Viz",
  "Interaction Design",
  "Multi-role Platforms",
  "Usability Testing",
  "FigJam",
  "Prototyping",
  "AI-native Workflow",
  "RBAC Design",
  "Founder Collaboration",
];

const stats = [
  { num: "5+", label: "Years designing 0→1 products across B2B SaaS, HealthTech, and EdTech" },
  { num: "10K+", label: "Doctors using the Practice Management System I designed at Dentread" },
  { num: "800K+", label: "Downloads on MemoNeet — EdTech mobile app designed from scratch" },
  { num: "1M+", label: "Dental images managed on the native viewer I built to replace third-party tools" },
];

const testimonials = [
  {
    text: "Rare combination of strategic thinking and pixel-perfect execution. She transformed our complex broker workflows into something our users actually love.",
    name: "Alex B.",
    role: "Product Manager · Enterprise SaaS",
  },
  {
    text: "Working with her was seamless — she understood technical constraints while never compromising on user experience. Engineering loved collaborating with her.",
    name: "Mike K.",
    role: "Software Engineer · Fintech",
  },
  {
    text: "Her research-first approach meant every decision had evidence behind it. The 60% adoption improvement didn't happen by accident — it was methodical.",
    name: "Sarah R.",
    role: "Head of Design · AI Platform",
  },
  {
    text: "She thinks in systems. Not just screens. Her design work scales in ways most designers can't anticipate, and that saves enormous time during engineering.",
    name: "James P.",
    role: "CTO · B2B SaaS",
  },
];

const companies = ["Hivel", "Dentread", "Photoshooto", "MemoNeet", "Freelance Clients"];

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

function ParallaxFloat({ children, className = "", speed = 0.5 }: { children: React.ReactNode; className?: string; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

function CounterAnimation({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayNum, setDisplayNum] = useState("0");
  
  const numericPart = target.replace(/[^0-9]/g, '');
  const prefix = target.replace(/[0-9]/g, '').split(numericPart)[0] || '';
  
  useState(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(numericPart);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayNum(numericPart);
          clearInterval(timer);
        } else {
          setDisplayNum(Math.floor(start).toString());
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      {prefix}{displayNum}{suffix}
    </motion.span>
  );
}

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section ref={heroRef} className="max-w-6xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>


          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
<span className="text-gray-400">From zero to launch,</span> I help founders turn <span className="text-gray-900">&ldquo;what if&rdquo;</span> into <span className="text-gray-900">&ldquo;it&apos;s live&rdquo;</span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mb-8 md:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;ve led 0→1 product design across <span className="text-gray-900 font-medium">healthtech</span>, <span className="text-gray-900 font-medium">analytics</span>, and more, scaling platforms to tens of thousands of global users. I work end-to-end and I&apos;ve shipped alongside founding teams, and I&apos;m comfortable without a playbook. <span className="text-gray-900 font-medium">AI is central to how I work, from research to prototyping</span>, backed by strong expertise in <span className="text-gray-900 font-medium">UX</span>, <span className="text-gray-900 font-medium">interaction design</span>, and <span className="text-gray-900 font-medium">system thinking</span>.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View case studies →
            </motion.button>
            <motion.button 
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.02, y: -2, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.98 }}
            >
              Download resume <span className="text-gray-300">↗</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mini Dashboard Preview - Parallax */}
        <motion.div 
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-2xl -mx-4 md:mx-0"
          style={{ scale: dashboardScale, y: dashboardY }}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="overflow-x-auto">
          <div className="min-w-[600px] md:min-w-0 flex">
          <div className="h-9 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>
          <div className="flex">
            <div className="w-56 bg-gray-50 border-r border-gray-100 p-4">
              <div className="mb-6">
                <p className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Portfolio
                </p>
                <div className="space-y-1">
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-gray-100 rounded-md text-gray-900"
                    whileHover={{ x: 4 }}
                  >
                    📁 All Projects <span className="ml-auto text-gray-400">10+</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 rounded-md hover:bg-gray-100 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    ⭐ Case Studies <span className="ml-auto text-gray-400">5</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 rounded-md hover:bg-gray-100 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    🔬 0→1 Work <span className="ml-auto text-gray-400">4</span>
                  </motion.div>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  Domain
                </p>
                <div className="space-y-1">
                  {["⚙️ Dev Productivity", "🦷 HealthTech", "📚 EdTech", "🏢 Enterprise SaaS"].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 rounded-md hover:bg-gray-100 cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Selected Work</span>
                <div className="flex gap-2">
                  {["All", "0→1", "Shipped"].map((item, i) => (
                    <span 
                      key={i}
                      className={`text-[11px] px-3 py-1 border border-gray-200 rounded-full bg-white cursor-pointer transition-colors ${
                        i === 0 ? "bg-gray-900 text-white border-gray-900" : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                {[
                  { id: "HIV-01", title: "Hivel Integrations & Team Mgmt — Self-serve redesign, 200+ member orgs", tag: "-50% tickets", priority: "High" },
                  { id: "HIV-02", title: "Hivel Score — DORA · SPACE · PR metrics with configurable weightage", tag: "0→1", priority: "High" },
                  { id: "DTR-01", title: "Dentread PMS — Practice Management System for 10,000+ doctors", tag: "10K+ doctors", priority: "High" },
                  { id: "DTR-02", title: "Native Dental Imaging Viewer — Replaced third-party tools from scratch", tag: "1M+ images", priority: "High" },
                  { id: "MN-01", title: "MemoNeet EdTech App — Mobile & web from scratch", tag: "800K+ DL", priority: "Med" },
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-100 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 4, backgroundColor: "#F9FAFB" }}
                  >
                    <span className="w-3 h-3 rounded-full border-2 border-green-400 bg-green-400/10"></span>
                    <span className="text-[11px] font-mono text-gray-300 w-14">{item.id}</span>
                    <span className="text-xs text-gray-800 flex-1">{item.title}</span>
                    <span className="text-[10px] text-gray-400">↑ {item.priority}</span>
                    <span className="text-[10px] px-2 py-0.5 border border-gray-200 rounded-full text-gray-500">
                      {item.tag}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-gray-200 text-[8px] font-semibold flex items-center justify-center text-gray-500">
                      SD
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            </div>
          </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full mb-4 md:mb-6">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
            B.Tech → PGDM<br />
            <span className="text-gray-400">→ Product Designer.</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-8">
            Started in textile engineering, discovered product design along the way, and
            never looked back. I&apos;ve shipped alongside founding teams at Hivel and
            Dentread — platforms now used by tens of thousands. AI is central to how I
            work, from research to prototyping. Comfortable without a playbook.
          </p>
          <motion.button 
            className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg"
            whileHover={{ scale: 1.02, y: -2, borderColor: "#9CA3AF" }}
            whileTap={{ scale: 0.98 }}
          >
            Read my story <span className="text-gray-300 ml-1">→</span>
          </motion.button>
        </AnimatedSection>
      </section>

      {/* WORK */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <motion.button 
              className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 text-xs rounded-lg"
              whileHover={{ scale: 1.05, x: 2 }}
            >
              View all →
            </motion.button>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                className="bg-white p-0 hover:bg-gray-50 transition-colors cursor-pointer"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <ParallaxFloat speed={0.05 * (index % 2 === 0 ? 1 : -1)} className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 border-b border-gray-100 flex items-center justify-center">
                  <motion.div 
                    className="w-64 h-40 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                </ParallaxFloat>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
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
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                    <span className="text-green-500">↑</span> {project.metric}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-20">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full mb-4 md:mb-6">
              How I work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              Designed to<br />
              <span className="text-gray-400">move fast.</span>
            </h2>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
              A research-first approach that doesn&apos;t slow down shipping. Every design
              decision is backed by data and validated with users.
            </p>
          </AnimatedSection>
          <div>
            {features.map((feature, index) => (
              <motion.div
                key={feature.num}
                className="py-6 border-b border-gray-200 last:border-b-0 cursor-pointer"
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <p className="text-[11px] font-medium font-mono text-gray-300 mb-2">
                  {feature.num}
                </p>
                <h3
                  className={`text-sm font-semibold mb-2 transition-colors ${
                    activeFeature === index ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {feature.title}
                </h3>
                <motion.p 
                  className="text-sm text-gray-500 leading-relaxed max-w-xs"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeFeature === index ? "auto" : 0, 
                    opacity: activeFeature === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <div className="border-b border-gray-200 py-14 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-3 px-8 border-r border-gray-200"
            >
              <span className="text-sm font-medium text-gray-500">{skill}</span>
              <span className="w-1 h-1 rounded-full bg-gray-200"></span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-gray-200">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.num} delay={index * 0.15}>
              <motion.div 
              className="pr-0 md:pr-8"
              whileHover={{ y: -5 }}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-1 md:mb-2">
                {stat.num}
              </p>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full mb-4 md:mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-700 mb-8 md:mb-12">
            What people<br />
            <span className="text-gray-400">say about working</span>
            <br />
            <span className="text-gray-400">with me.</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((testi, index) => (
            <AnimatedSection key={testi.name} delay={index * 0.1}>
              <motion.div
                className="p-7 border border-gray-200 rounded-xl"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  borderColor: "#D1D5DB"
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-gray-800 leading-relaxed mb-5">
                  &ldquo;{testi.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <motion.span 
                    className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] font-semibold text-gray-400"
                    whileHover={{ scale: 1.1, backgroundColor: "#E5E7EB" }}
                  >
                    {testi.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </motion.span>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{testi.name}</p>
                    <p className="text-[11px] text-gray-300">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full mb-4 md:mb-6">
            Let&apos;s build something
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-700 mb-4">
            Open to the<br />
            <span className="text-gray-400">right opportunity.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-6 md:mb-8">
            Looking for full-time product design roles. B2B SaaS, developer tools,
            HealthTech, and AI-native products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <motion.a
              href="mailto:saksheedurshettiwar@gmail.com"
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg inline-block"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              saksheedurshettiwar@gmail.com →
            </motion.a>
            <motion.button 
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume <span className="text-gray-300">↗</span>
            </motion.button>
            <motion.a
              href="https://www.linkedin.com/in/sakshee-durshettiwar-product-designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.98 }}
            >
              LinkedIn <span className="text-gray-300">↗</span>
            </motion.a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
