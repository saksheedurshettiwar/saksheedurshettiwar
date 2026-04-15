"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeInOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FincoCaseStudy() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const screens = [
    {
      title: "Know the best time to send before you send",
      problem: "Rates shift constantly, but users never know the right moment to act.",
      decision: "Most tools show predictions as data. I turned them into decisions.",
      image: "/Know the best time to send before you send.png",
    },
    {
      title: "Stop picking blindly. See exactly why we recommend each provider",
      problem: "Options are visible, but users still hesitate before making a decision.",
      decision: "Every recommendation shows its reasoning, so users can agree or override it.",
      image: "/Stop picking blindly. See exactly why we recommend each provider.png",
    },
    {
      title: "Split your transfer. Get more to the other side",
      problem: "Users pick one provider without knowing if a better option exists.",
      decision: "Smart routing only triggers when savings exceed ₹150. Below that, the complexity isn't worth it.",
      image: "/Split your transfer. Get more to the other side.png",
    },
    {
      title: "Cofin — AI Assistant",
      problem: "Users see the result but don't understand how it was calculated.",
      decision: "Cofin explains costs, providers, and recommendations in plain language, so users decide with confidence, not guesswork.",
      images: ["/Cofin/01.png", "/Cofin/02.png"],
    },
  ];

  return (
    <div className="pt-20 min-h-screen" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />
      
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Back Button */}
        <AnimatedSection>
          <motion.button 
            onClick={() => router.push("/case-studies")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors group"
            whileHover={{ x: -4 }}
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Case Studies
          </motion.button>
        </AnimatedSection>
        
        {/* Hero */}
        <AnimatedSection delay={0.1}>
          <motion.span 
            className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Fintech · AI · B2C
          </motion.span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Designing Smarter Remittance Decisions That Made Users 25% Faster and 30% More Confident
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Finco is an end-to-end AI-powered remittance tool designed to help users make confident transfer decisions, faster.
          </p>
        </AnimatedSection>
        
        {/* Hero Image */}
        <AnimatedSection delay={0.4}>
          <div className="w-full mb-16 rounded-xl overflow-hidden">
            <Image 
              src="/Finco Cover.png" 
              alt="Finco Dashboard"
              width={1200}
              height={600}
              className="w-full h-auto object-top rounded-xl"
            />
          </div>
        </AnimatedSection>
        
        {/* Metrics Strip */}
        <motion.div 
          className="bg-gray-900 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 py-12 rounded-xl mb-16 relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <h2 className="text-2xl font-bold text-white mb-8 text-center relative z-10">What success looks like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-white max-w-4xl mx-auto relative z-10">
            {[
              { num: "30%", text: "increase in user confidence picking the right provider and timing" },
              { num: "25%", text: "faster from comparison to confirmed transfer" },
              { num: "15%", text: "drop in abandonment during the transfer flow" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="cursor-default"
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  {item.num}
                </motion.p>
                <p className="text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* The Core Problems */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Problems</h2>
            <FadeInOnScroll>
              <p className="text-lg text-gray-700 font-medium mb-8 border-l-4 border-gray-900 pl-4">
                Moments where everything goes wrong. The tools were built for transparency. But transparency without guidance is not helpful, it is just more data to be overwhelmed by.
              </p>
            </FadeInOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Timing Uncertainty", desc: "Rates shift constantly, but users don't know when to act." },
                { num: "02", title: "Decision Hesitation", desc: "Options are visible, but users still hesitate before committing." },
                { num: "03", title: "Strategy Blind Spots", desc: "Providers are compared, but better payout strategies go unnoticed." },
              ].map((item, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* North Star */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">North Star</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug">
                Can a non-technical person make a confident decision in under 30 seconds?
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Key Screens */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The screens and the thinking behind each one</h2>
            <p className="text-lg text-gray-700 mb-12">One question drove every screen.</p>
            
            <div className="space-y-16">
              {screens.map((screen, i) => (
                <FadeInOnScroll key={i}>
                  <div className="group">
                    {/* Screen Number & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{screen.title}</h3>
                      </div>
                      {screen.badge && (
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full ml-auto font-medium">{screen.badge}</span>
                      )}
                    </div>
                    
                    {/* Problem & Decision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">The Problem</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.problem}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">The Design Decision</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.decision}</p>
                      </div>
                    </div>
                    
                    {/* Mock Image - Full Width */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 overflow-hidden rounded-xl"
                    >
                      {screen.images ? (
                        <div className="space-y-4">
                          {screen.images.map((img, idx) => (
                            <Image 
                              key={idx}
                              src={img} 
                              alt={`${screen.title} ${idx + 1}`} 
                              width={1200} 
                              height={675} 
                              className="w-full h-auto" 
                            />
                          ))}
                        </div>
                      ) : (
                        <Image 
                          src={screen.image} 
                          alt={screen.title} 
                          width={1200} 
                          height={675} 
                          className="w-full h-auto" 
                        />
                      )}
                    </motion.div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Constraints */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Constraints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Accurate rates depend on real-time data and consistent updates." },
                { text: "Smart routing depends on a robust backend for split logic." },
                { text: "Pricing transparency depends on regulatory approvals in each market." },
              ].map((item, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="grid grid-cols-2 gap-1 w-5 h-5 mb-4">
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Navigation Footer */}
        <AnimatedSection>
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/case-studies"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors group flex items-center gap-2"
            >
              <motion.span 
                className="transition-transform group-hover:-translate-x-1"
                whileHover={{ x: -4 }}
              >
                ← All Case Studies
              </motion.span>
            </Link>
            <Link 
              href="/case-studies/hivel"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2 group"
            >
              Next Project: Hivel
              <motion.span 
                className="transition-transform group-hover:translate-x-1"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
