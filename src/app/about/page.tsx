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
              {/* Card 1 - Profile */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between text-white"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sakshee Durshettiwar</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Product Designer crafting meaningful digital experiences across healthtech, analytics, and developer tools.
                  </p>
                </div>
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

              {/* Card 3 - Expertise */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Expertise</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["B2B SaaS", "HealthTech", "UX/UI", "0→1 Products"].map((tag) => (
                    <span key={tag} className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Card 4 - Products */}
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(245,158,11,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-5xl font-bold text-amber-600 mb-2">10+</p>
                  <p className="text-sm text-gray-600 font-medium">Products shipped from scratch</p>
                </div>
              </motion.div>

              {/* Card 5 - Tools */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Tools & Stack</p>
                </div>
                <div className="mb-4">
                  <Image 
                    src="/sakshee.png" 
                    alt="Sakshee Durshettiwar" 
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover w-28 h-28"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Framer", "Notion", "Miro"].map((tool) => (
                    <span key={tool} className="text-xs text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Card 6 - Writing */}
              <motion.div 
                className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(244,63,94,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Design Blogger</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Sharing thoughts on design, creativity & life through words and ideas.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
