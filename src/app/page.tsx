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
            <Link href="/case-studies">
              <motion.button 
                className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View case studies →
              </motion.button>
            </Link>
            <motion.a 
              href="/resume.pdf"
              download="Sakshee Durshettiwar_Resume.pdf"
              className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.02, y: -2, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.98 }}
            >
              Download resume <span className="text-gray-300">↗</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS MARQUEE */}
      <div className="border-y border-gray-200 py-14 overflow-hidden">
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

      {/* WORK */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:pt-24 pb-16 md:pb-24">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <Link href="/case-studies">
              <motion.button 
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-400 text-xs rounded-lg hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05, x: 2 }}
              >
                View all →
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
          {projects.slice(0, 2).map((project, index) => {
            const href = index === 0 ? "/case-studies/accessiq" : "/case-studies";
            return (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Link href={href}>
                  <motion.div
                    className="bg-white border border-gray-200 rounded-xl p-0 hover:bg-gray-50 transition-colors cursor-pointer overflow-hidden flex flex-col h-full"
                    whileHover={href !== "#" ? {} : { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                <ParallaxFloat speed={0.05 * (index % 2 === 0 ? 1 : -1)} className="h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center flex-shrink-0">
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
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
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

      {/* FOOTER CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-700 mb-4">
            Let&apos;s build something<br />
            <span className="text-gray-400">worth using.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <motion.a
              href="https://calendly.com/saksheedurshettiwar/growth_call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg inline-block"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a call →
            </motion.a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
