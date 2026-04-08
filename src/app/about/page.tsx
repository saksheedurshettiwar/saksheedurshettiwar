"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large card - Profile/Intro */}
              <motion.div 
                className="md:col-span-2 md:row-span-2 bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Sakshee Durshettiwar
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      Product Designer crafting meaningful digital experiences across healthtech, analytics, and developer tools.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["B2B SaaS", "HealthTech", "UX/UI", "0→1 Products"].map((tag) => (
                      <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">5+</p>
                <p className="text-sm text-gray-500">Years of experience in product design</p>
              </motion.div>

              {/* Fun fact card */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✈️</span>
                  <span className="text-sm font-medium text-gray-900">Travel Enthusiast</span>
                </div>
                <p className="text-xs text-gray-500">Exploring new places fuels my creativity and design thinking.</p>
              </motion.div>

              {/* Tools card */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <p className="text-sm font-semibold text-gray-900 mb-4">Tools & Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Framer", "Notion", "Miro"].map((tool) => (
                    <span key={tool} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Writing card */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-6"
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✍️</span>
                  <span className="text-sm font-medium text-gray-900">Design Blogger</span>
                </div>
                <p className="text-xs text-gray-500">Sharing thoughts on design, creativity & life.</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
