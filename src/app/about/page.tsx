"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

const tools = ["Figma", "Claude", "Cursor", "Framer", "Jitter", "Notion", "Jira", "OpenCode"];

function ToolsChips() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tools.map((tool) => (
        <span
          key={tool}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default function About() {
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
            About
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-12">
            I think in systems. I design for people.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl">
            I began my journey in engineering, like many who set out to discover what truly excites them. My degree says textile technologist, but my heart has always belonged to creativity — sketching people, capturing details, and turning ideas into something meaningful. That curiosity slowly led me toward the world of design.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mt-8">
            What started as a hobby became a purpose. I grew fascinated by how digital products shape how we interact, learn, and live. I taught myself design, explored tools like Figma, and built my foundation on UX / UI and product thinking. Over time, I learned that great design sits at the intersection of empathy, logic, and simplicity.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mt-8">
            Today, I work with clients across India and abroad — helping startups and brands craft purposeful, conversion-driven, and visually consistent experiences. I love building things that look good, work well, and make sense.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mt-8">
            Beyond work, I&apos;m a traveler at heart. Exploring new places gives me fresh perspectives and endless inspiration. I also write blogs about design and creativity — a space where I reflect, share, and connect ideas that go beyond the screen.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[3px] h-12 bg-gray-900 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-900 leading-relaxed max-w-4xl font-medium">
              I see design as a quiet conversation between intent and imagination, one that never really ends, it just evolves.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Card 1 - Tools */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between overflow-hidden"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-bold text-gray-900">Tools I can use</p>
                <ToolsChips />
              </motion.div>

              {/* Card 2 - Experience */}
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(16,185,129,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-5xl font-bold text-green-600 mb-2">5+</p>
                  <p className="text-sm text-gray-600 font-medium">Years of experience in product design</p>
                </div>
              </motion.div>

              {/* Card 3 - AI First */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex items-center justify-center overflow-hidden"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 300 120" className="w-full h-full max-h-[200px]">
                  <defs>
                    <path id="topArc" d="M 30 80 Q 150 0 270 80" />
                    <path id="bottomArc" d="M 30 90 Q 150 170 270 90" />
                  </defs>
                  <text className="fill-gray-900" fontSize="22" fontWeight="bold" fontFamily="system-ui, sans-serif">
                    <textPath href="#topArc" startOffset="50%" textAnchor="middle" letterSpacing="4">
                      AI FIRST
                    </textPath>
                  </text>
                  <text className="fill-gray-900" fontSize="26" fontWeight="bold" fontFamily="system-ui, sans-serif">
                    <textPath href="#bottomArc" startOffset="50%" textAnchor="middle" letterSpacing="3">
                      PRODUCT DESIGNER
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Card 4 - Products */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 h-[395px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-5xl font-bold text-gray-900 mb-2">10+</p>
                  <p className="text-sm text-gray-500 font-medium">Products shipped from scratch</p>
                </div>
              </motion.div>

              {/* Card 5 - Photo */}
              <motion.div 
                className="rounded-2xl h-[395px] overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/sakshee.png" 
                  alt="Sakshee Durshettiwar" 
                  width={400}
                  height={395}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Card 6 - Writing */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 h-[395px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Design Blogger</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Sharing thoughts on design, creativity & life through words and ideas.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
