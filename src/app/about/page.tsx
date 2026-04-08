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
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {tools.map((tool, i) => (
        <motion.span
          key={tool}
          className="text-base text-gray-400 cursor-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ color: "#374151" }}
        >
          {tool}
        </motion.span>
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
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      <defs>
                        <path id="circlePath" d="M 150,150 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                      </defs>
                      <text
                        fill="#111"
                        fontSize="16"
                        fontWeight="bold"
                        fontFamily="system-ui, sans-serif"
                        letterSpacing="3"
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          AI FIRST • PRODUCT DESIGNER •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <rect width="24" height="24" rx="12" fill="#1E1E1E"/>
                      <path d="M7.41382 14.4951C7.84607 15.2055 8.46183 15.7914 9.2015 16.1961C9.94117 16.6009 10.7797 16.849 11.6359 16.8437L11.6539 15.6232C11.0136 15.6272 10.3866 15.4702 9.83345 15.1676C9.28033 14.8649 8.81986 14.4267 8.49663 13.8955L7.41382 14.4951Z" fill="white"/>
                      <path d="M11.6335 7.14718C10.9616 7.1136 10.29 7.21992 9.66131 7.45942C9.03261 7.69892 8.4605 8.06637 7.98121 8.53849C7.50192 9.01062 7.1259 9.57714 6.87696 10.2022C6.62803 10.8272 6.51161 11.4971 6.53507 12.1695L7.75973 12.1267C7.74219 11.6239 7.82925 11.123 8.0154 10.6556C8.20155 10.1882 8.48274 9.76454 8.84115 9.41149C9.19957 9.05843 9.62739 8.78365 10.0975 8.60455C10.5677 8.42546 11.0699 8.34595 11.5724 8.37106L11.6335 7.14718Z" fill="white"/>
                      <rect x="6.69238" y="10.9366" width="4.89713" height="1.22428" fill="white"/>
                      <rect x="10.5182" y="10.9366" width="1.14777" height="3.13723" fill="white"/>
                      <path d="M10.4418 7.87613C10.4418 7.47467 10.7672 7.14922 11.1687 7.14922H11.6661V9.59778H10.4418V7.87613Z" fill="white"/>
                      <path d="M12.5288 7.15685C13.7718 7.22876 14.9397 7.77509 15.7916 8.68309C16.6435 9.5911 17.1144 10.7915 17.1069 12.0365C17.0995 13.2816 16.6145 14.4763 15.7518 15.3741C14.8892 16.2719 13.753 16.8043 12.5093 16.8614L12.4913 15.6372C13.4214 15.5945 14.2231 15.1964 14.8682 14.5251C15.5133 13.8537 15.876 12.9603 15.8816 12.0292C15.8871 11.0982 15.535 10.2005 14.898 9.52154C14.2609 8.84253 13.4258 8.43398 12.4963 8.38021L12.5288 7.15685Z" fill="white"/>
                      <path d="M12.4777 7.14825V7.14825C13.1539 7.14825 13.702 7.69638 13.702 8.37253V14.0866H12.4777V7.14825Z" fill="white"/>
                    </svg>
                  </motion.div>
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
