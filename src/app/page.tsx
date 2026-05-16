"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { DotPattern } from "@/components/DotPattern";
import { GridFill } from "@/components/GridFill";
import CaseStudyCard from "@/components/CaseStudyCard";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

const projects = [
  {
    tag: "Healthcare Staffing · B2B SaaS",
    title: "Designing a Zero-Gap Compliance System That Ensures Every Healthcare Worker Is 100% Verified Before Day One",
    description:
      "Hospitals getting fully verified workers on day one, without chasing a single missing document.",
    description2:
      "From billing data accidentally bleeding across parties to a platform where no one ever sees what they shouldn't.",
    image: "/case-studies/nexusforce/Card - NexusForce.png",
    alt: "NexusForce",
    href: "/case-studies/nexusforce-deep-dive",
  },
  {
    tag: "Enterprise IAM · B2B SaaS",
    title: "Cutting Access Risk by 67% without the Security Jargon",
    description:
      "Non-technical managers making access decisions without security jargon.",
    description2:
      "From cryptic permission strings to AI-guided approvals in plain English.",
    image: "/case-studies/AccessIQ/Card - AccessIQ.png",
    alt: "AccessIQ",
    href: "/case-studies/accessiq",
  },
];

const experiments = [
  {
    title: "Design System Generator",
    description: "AI-powered tool that generates design systems from brand guidelines. Currently processing 50+ components automatically.",
    tag: "AI · Figma Plugin",
    icon: "🎨",
    color: "bg-purple-100",
    link: "#",
  },
  {
    title: "User Research Tracker",
    description: "A lightweight CRM for UX researchers. Manage participants, insights, and synthesis in one place.",
    tag: "Productivity · Side Project",
    icon: "🔍",
    color: "bg-blue-100",
    link: "#",
  },
  {
    title: "Motion Design Playground",
    description: "Interactive playground for testing animation curves and transitions. Export to CSS, Swift, or Compose.",
    tag: "Developer Tool · Open Source",
    icon: "✨",
    color: "bg-green-100",
    link: "#",
  },
  {
    title: "Accessibility Checklist",
    description: "Step-by-step WCAG compliance checker for product teams. Includes remediation suggestions and code snippets.",
    tag: "Accessibility · In Progress",
    icon: "♿",
    color: "bg-orange-100",
    link: "#",
  },
  {
    title: "Portfolio Template",
    description: "Minimal, fast, and customizable portfolio template built with Next.js and Tailwind CSS.",
    tag: "Open Source · Template",
    icon: "📁",
    color: "bg-gray-100",
    link: "#",
  },
  {
    title: "Design-to-Code CLI",
    description: "Command-line tool that converts Figma variables to design tokens in multiple formats.",
    tag: "Developer Tool · CLI",
    icon: "⚡",
    color: "bg-yellow-100",
    link: "#",
  },
];

const stats = [
  { icon: "◆", num: "0→1 thinking", label: "From blank canvas to shipped product" },
  { icon: "◆", num: "Systems first", label: "Architecture and flows decided before any UI work" },
  { icon: "◆", num: "Research driven", label: "Every decision backed by users, not assumptions" },
  { icon: "◆", num: "AI as a layer", label: "Proactive intelligence designed in, not bolted on" },
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
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="min-h-screen flex items-center overflow-visible relative">
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 w-full items-center relative" style={{ zIndex: 10 }}>
          <div className="flex flex-col justify-center py-16 lg:py-0">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-400">From zero to launch,</span><br />I help founders turn <span className="text-gray-900">&ldquo;what if&rdquo;</span> into <span className="text-gray-900">&ldquo;it&apos;s live&rdquo;</span>
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
                href="/Sakshee Durshettiwar_Resume_Product Designer_B2B SaaS.pdf"
                download="Sakshee Durshettiwar_Resume_Product Designer_B2B SaaS.pdf"
                className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-lg flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2, borderColor: "#9CA3AF" }}
                whileTap={{ scale: 0.98 }}
              >
                Download resume <span className="text-gray-300">↗</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Lanyard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:h-screen"
          >
            <div className="w-full h-full overflow-visible">
              <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:pt-24 pb-16 md:pb-24">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Here's what I've been making
            </h2>
            <Link href="/case-studies">
              <motion.button 
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-400 text-sm rounded-lg hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05, x: 2 }}
              >
                View all →
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <CaseStudyCard
              key={project.title}
              tag={project.tag}
              title={project.title}
              description={project.description}
              description2={project.description2}
              image={project.image}
              alt={project.alt}
              href={project.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-gray-200">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.num} delay={index * 0.15}>
              <motion.div 
              className="pr-0 md:pr-8"
              whileHover={{ y: -5 }}
            >
              <div className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center mb-3">
                <span className="text-sm text-gray-500">{stat.icon}</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-1 md:mb-2 leading-tight">
                {stat.num}
              </p>
              <p className="text-sm md:text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* FOOTER CTA */}
      <section className="bg-gray-900 border-t border-gray-800 py-20 md:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)',
          }}
        />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Let&apos;s build something <span className="text-gray-400">worth using.</span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="https://calendly.com/saksheedurshettiwar/growth_call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg text-center whitespace-nowrap hover:bg-gray-100 transition-colors"
                >
                  Schedule a call →
                </a>
                <a
                  href="mailto:saksheedurshettiwar@gmail.com"
                  className="px-6 py-3 border border-gray-700 text-gray-400 text-sm font-medium rounded-lg text-center whitespace-nowrap hover:border-gray-500 hover:text-gray-300 transition-colors"
                >
                  Send an email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
