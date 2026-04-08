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
              {/* Card 1 - Tools */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between overflow-hidden"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-bold text-gray-900 relative z-10">Tools I can use</p>
                <div className="relative h-48 mt-auto">
                  <style jsx>{`
                    @keyframes fall1 {
                      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
                      20% { opacity: 1; }
                      70% { transform: translateY(4px) rotate(12deg); }
                      85% { transform: translateY(-2px) rotate(8deg); }
                      100% { transform: translateY(0px) rotate(10deg); opacity: 1; }
                    }
                    @keyframes fall2 {
                      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
                      20% { opacity: 1; }
                      70% { transform: translateY(5px) rotate(-8deg); }
                      85% { transform: translateY(-2px) rotate(-5deg); }
                      100% { transform: translateY(0px) rotate(-6deg); opacity: 1; }
                    }
                    @keyframes fall3 {
                      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
                      20% { opacity: 1; }
                      70% { transform: translateY(3px) rotate(15deg); }
                      85% { transform: translateY(-1px) rotate(12deg); }
                      100% { transform: translateY(0px) rotate(14deg); opacity: 1; }
                    }
                    @keyframes fall4 {
                      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
                      20% { opacity: 1; }
                      70% { transform: translateY(4px) rotate(-12deg); }
                      85% { transform: translateY(-2px) rotate(-9deg); }
                      100% { transform: translateY(0px) rotate(-10deg); opacity: 1; }
                    }
                    @keyframes fall5 {
                      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
                      20% { opacity: 1; }
                      70% { transform: translateY(5px) rotate(6deg); }
                      85% { transform: translateY(-2px) rotate(4deg); }
                      100% { transform: translateY(0px) rotate(5deg); opacity: 1; }
                    }
                  `}</style>
                  <div className="absolute bottom-2 left-2" style={{ animation: "fall1 0.7s ease-out 0s forwards" }}>
                    <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 38 57" className="w-7 h-7">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-14" style={{ animation: "fall2 0.7s ease-out 0.15s forwards" }}>
                    <div className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#FF6B6B"/>
                        <circle cx="12" cy="12" r="4" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2" style={{ animation: "fall3 0.7s ease-out 0.3s forwards" }}>
                    <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                        <rect x="2" y="3" width="20" height="18" rx="2" fill="#000000"/>
                        <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">N</text>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2" style={{ animation: "fall4 0.7s ease-out 0.45s forwards" }}>
                    <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                        <circle cx="8" cy="8" r="3" fill="#FF6B6B"/>
                        <circle cx="16" cy="8" r="3" fill="#4ECDC4"/>
                        <circle cx="8" cy="16" r="3" fill="#45B7D1"/>
                        <circle cx="16" cy="16" r="3" fill="#96CEB4"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-1/3" style={{ animation: "fall5 0.7s ease-out 0.6s forwards" }}>
                    <div className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#5C6AC4"/>
                        <path d="M2 17l10 5 10-5" stroke="#5C6AC4" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M2 12l10 5 10-5" stroke="#5C6AC4" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
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
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
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
