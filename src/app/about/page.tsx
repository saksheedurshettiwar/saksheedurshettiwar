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
                <style jsx global>{`
                  @keyframes drop1 {
                    0% { transform: translateY(-80px) translateX(30px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(-5deg); }
                    75% { transform: translateY(-4px) translateX(-2px) rotate(-8deg); }
                    85% { transform: translateY(0px) translateX(1px) rotate(-3deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(-5deg); }
                  }
                  @keyframes drop2 {
                    0% { transform: translateY(-100px) translateX(-20px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(6deg); }
                    75% { transform: translateY(-4px) translateX(2px) rotate(9deg); }
                    85% { transform: translateY(0px) translateX(-1px) rotate(5deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(6deg); }
                  }
                  @keyframes drop3 {
                    0% { transform: translateY(-120px) translateX(40px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(-7deg); }
                    75% { transform: translateY(-4px) translateX(-2px) rotate(-10deg); }
                    85% { transform: translateY(0px) translateX(1px) rotate(-5deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(-7deg); }
                  }
                  @keyframes drop4 {
                    0% { transform: translateY(-140px) translateX(-30px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(5deg); }
                    75% { transform: translateY(-4px) translateX(2px) rotate(8deg); }
                    85% { transform: translateY(0px) translateX(-1px) rotate(4deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(5deg); }
                  }
                  @keyframes drop5 {
                    0% { transform: translateY(-80px) translateX(-35px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(-4deg); }
                    75% { transform: translateY(-4px) translateX(-2px) rotate(-7deg); }
                    85% { transform: translateY(0px) translateX(1px) rotate(-2deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(-4deg); }
                  }
                  @keyframes drop6 {
                    0% { transform: translateY(-100px) translateX(25px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(8deg); }
                    75% { transform: translateY(-4px) translateX(3px) rotate(11deg); }
                    85% { transform: translateY(0px) translateX(-1px) rotate(6deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(8deg); }
                  }
                  @keyframes drop7 {
                    0% { transform: translateY(-120px) translateX(-40px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(-6deg); }
                    75% { transform: translateY(-4px) translateX(-2px) rotate(-9deg); }
                    85% { transform: translateY(0px) translateX(1px) rotate(-4deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(-6deg); }
                  }
                  @keyframes drop8 {
                    0% { transform: translateY(-140px) translateX(35px) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; }
                    65% { transform: translateY(0px) translateX(0px) rotate(4deg); }
                    75% { transform: translateY(-4px) translateX(2px) rotate(7deg); }
                    85% { transform: translateY(0px) translateX(-1px) rotate(3deg); }
                    100% { transform: translateY(0px) translateX(0px) rotate(4deg); }
                  }
                `}</style>
                <p className="text-lg font-bold text-gray-900 relative z-10">Tools I can use</p>
                <div className="relative h-40 mt-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ animation: "drop1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 38 57" className="w-7 h-7">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-14 left-4" style={{ animation: "drop2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#D4A574"/>
                        <path d="M17 12c0-1.1-.9-2-2-2h-2V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4z" fill="#D4A574"/>
                        <circle cx="9" cy="12" r="1" fill="#D4A574"/>
                        <circle cx="12" cy="12" r="1" fill="#D4A574"/>
                        <circle cx="15" cy="12" r="1" fill="#D4A574"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-14 left-20" style={{ animation: "drop3 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <rect width="24" height="24" rx="6" fill="#000000"/>
                        <path d="M7 8h4v8H7V8z" fill="#00D9FF"/>
                        <path d="M13 8h4l-2 4 2 4h-4" fill="#00D9FF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-14 right-20" style={{ animation: "drop4 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <rect width="24" height="24" rx="4" fill="#7C3AED"/>
                        <path d="M12 6l1.5 3.5L17 11l-3.5 1.5L12 16l-1.5-3.5L7 11l3.5-1.5L12 6z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-14 right-4" style={{ animation: "drop5 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <circle cx="12" cy="12" r="12" fill="#FF6B6B"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0" style={{ animation: "drop6 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FFB800"/>
                        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-16" style={{ animation: "drop7 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <rect width="24" height="24" rx="4" fill="#5850EC"/>
                        <circle cx="12" cy="12" r="4" fill="white"/>
                        <circle cx="6" cy="12" r="2" fill="white" opacity="0.7"/>
                        <circle cx="18" cy="12" r="2" fill="white" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-16" style={{ animation: "drop8 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-200">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <rect width="24" height="24" rx="4" fill="#0052CC"/>
                        <path d="M5 8h3v8H5V8z" fill="white"/>
                        <path d="M10 6h3v10h-3V6z" fill="white"/>
                        <path d="M15 10h3v6h-3v-6z" fill="white"/>
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
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
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
