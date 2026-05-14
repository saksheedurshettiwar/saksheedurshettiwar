"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
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

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const numericPart = target.replace(/[^0-9]/g, '');
  const prefix = target.replace(/[0-9]/g, '').split(numericPart)[0] || '';
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      {prefix}{numericPart}{suffix}
    </motion.span>
  );
}

export default function AccessIQCaseStudy() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [activeSlide, setActiveSlide] = useState(0);
  
  const metrics = [
    { num: "67%", text: "reduction in stale access to cardholder data after first quarterly review cycle." },
{ num: "4X", text: "faster onboarding for new hires: from 5-day access chaos to same-day provisioning" },
              { num: "100%", text: "audit evidence coverage with zero manual spreadsheet exports: for the first time" },
  ];

  const screens = [
    {
      title: "Manager Dashboard",
      problem: "Managers had no visibility into their team's access health. They only found out something was wrong when security escalated it, or an auditor did.",
      decision: "Most tools answer \"how bad is it?\" This one answers \"what do I do right now?\" Five KPIs replace the Slack messages, emails, and spreadsheet tabs managers were juggling every morning.",
      insight: "91% of managers had no consolidated view of their team's access health. The KPIs weren't pulled from a compliance checklist, they came from what managers were already trying to track themselves.",
      insightLabel: "Research insight",
      image: "/case-studies/AccessIQ/Manager Dashboard/Manager Dashboard.png",
    },
    {
      title: "Conflict Detection",
      problem: "When a conflict was flagged, tools showed a red badge and nothing else. Managers had no idea what it meant, so they approved it anyway and moved on.",
      decision: "The consequence of approving comes before the buttons. Always. Showing the real-world risk in plain English, not just a colour, is what makes managers actually stop and think.",
      insight: "Managers approved conflicts in other tools because warnings were visual noise with no meaning. Replacing the red badge with a one-line consequence was the change that turned ignored alerts into actual decisions.",
      insightLabel: "Research insight",
      image: "/case-studies/AccessIQ/Conflict Detection/Conflict Detection.png",
    },
    {
      title: "Approvals Queue",
      problem: "80–120 requests a month, shown as a flat list. Everything looked equally urgent, so managers rubber-stamped the rest just to clear their inbox.",
      decision: "The queue is triaged before the manager sees it. Four numbers tell the shape of the work upfront: what needs judgment, what AI handles, what's blocked.",
      insight: "Approval fatigue is the leading cause of over-provisioning in high-volume IAM environments. When everything looks the same priority, risky requests slip through alongside routine ones.",
      insightLabel: "Research insight",
      image: "/case-studies/AccessIQ/Approvals Queue/Approvals Queue.png",
    },
    {
      title: "AI Recommendation",
      problem: "Managers received a permission string and two buttons, no context, no suggestion, no risk signal. With nothing to go on, 91% approved everything to avoid blocking their team.",
      decision: "The AI recommendation leads at 97% confidence, in plain English, before any buttons appear. Managers confirm a recommendation, they don't interpret raw data.",
      insight: "Adding the confidence score and plain-English reasoning was the single change that lifted AI suggestion adoption from 22% to 61% in testing.",
      insightLabel: "Research insight",
      images: ["/case-studies/AccessIQ/AI Recommendation/01.png", "/case-studies/AccessIQ/AI Recommendation/02.png"],
    },
    {
      title: "Access Catalogue",
      problem: "Employees had no way to see what tools existed or what they did. They messaged their manager, who guessed what to grant, so requests came in broad to avoid asking twice.",
      decision: "One place. Every tool described in plain English: what you can do, what you can't, and how many peers in your role already have it.",
      insight: "Showing peer data directly reduced over-broad requests. When employees saw colleagues only had read-only access, they stopped asking for admin, cutting review volume downstream.",
      insightLabel: "Research insight",
      image: "/case-studies/AccessIQ/Access Catalogue/Access Catalogue.png",
    },
    {
      title: "Extend Access",
      problem: "Employees had no self-service way to manage access. Everything went through the manager via Slack, and expired access was only discovered when they got locked out.",
      decision: "Two decisions only: how long, and why. Current access is shown upfront so employees know what they already have before submitting a new request.",
      insight: "The expiry warning inside the modal let employees extend access in under 60 seconds, eliminating the emergency Slack messages managers got every time someone was locked out.",
      insightLabel: "Research insight",
      images: ["/case-studies/AccessIQ/Extend Access/01.png", "/case-studies/AccessIQ/Extend Access/02.png"],
    },
    {
      title: "Request Access",
      problem: "Requesting access meant messaging your manager, waiting, explaining, and hoping they approved the right thing. No standard process, no record, no way to track it.",
      decision: "Two questions. What you'll get is shown before you ask, no surprises post-approval. The justification field creates the audit trail automatically, no separate process needed.",
      insight: "The \"Why do you need this?\" field turns a rubber-stamp approval into a documented decision. When managers see the reason, they make better calls. When auditors ask, the answer is already there.",
      insightLabel: "Research insight",
      images: ["/case-studies/AccessIQ/Request Access/01.png", "/case-studies/AccessIQ/Request Access/02.png"],
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
            className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Fintech · B2B SaaS · AI-Powered
          </motion.span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Cutting Access Risk by 67%<br />without the Security Jargon
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Designing access governance for a global fintech so managers could own access decisions without needing a security degree.
          </p>
        </AnimatedSection>
        
        {/* Scrolling Cover Images */}
        <AnimatedSection delay={0.4}>
          <div className="relative w-[100vw] left-1/2 right-1/2 -translate-x-1/2 mb-16 overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                <div key={idx} className="flex-shrink-0 w-[400px] md:w-[600px]">
                  <Image 
                    src={`/case-studies/AccessIQ/Hero Section/0${i}.png`} 
                    alt={`AccessIQ Dashboard ${i}`}
                    width={600}
                    height={340}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
        
        <motion.div 
          className="bg-gray-900 p-8 md:p-12 rounded-2xl mb-16 relative overflow-hidden"
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
              { num: "67%", text: "reduction in stale access to cardholder data after first quarterly review cycle." },
              { num: "4X faster", text: "onboarding for new hires: from 5-day access chaos to same-day provisioning" },
              { num: "100%", text: "audit evidence coverage with zero manual spreadsheet exports: for the first time" },
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
        
        {/* The UX Gap */}
        <AnimatedSection>
          <div className="mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The UX Gap
            </motion.h2>
            <FadeInOnScroll className="space-y-4">
              <p className="text-base text-gray-500 leading-relaxed">
                What a manager actually sees when they try to approve access.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Here's the core UX problem. Existing tools were built by security engineers, for security engineers, non-technical managers are handed this interface and asked to make a risk-based decision.
              </p>
            </FadeInOnScroll>
            
            {/* Quote */}
            <FadeInOnScroll className="mt-8">
              <motion.blockquote 
                className="border-l-4 border-gray-900 pl-6 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-800 italic font-medium">
                  "What is schema_admin? Is that bad? I'll just approve it so James isn't blocked."
                </p>
              </motion.blockquote>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        {/* Comparison Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What Existing Tools Show vs What AccessIQ Shows</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <FadeInOnScroll>
                  <p className="text-sm font-semibold text-gray-700 mb-3">What existing tools show a manager</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <Image src="/case-studies/AccessIQ/What existing tools show a manager/What existing tools show a manager.png" alt="Old Tool" width={600} height={400} className="w-full" />
                  </div>
                </FadeInOnScroll>
                <div className="space-y-3">
                  {["What is schema_admin? Is that bad? I'll just approve it so James isn't blocked.", "No plain-English explanation of what this actually does", "No risk context. No suggestion. No compliance note.", "PERMANENT is the default, nobody defaults to time-limited"].map((item, i) => (
                    <FadeInOnScroll key={i}>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-0.5">✗</span>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    </FadeInOnScroll>
                  ))}
                </div>
              </div>
              
              <div className="w-px bg-gray-200 hidden md:block" />
              
              <div className="flex-1 space-y-4">
                <FadeInOnScroll>
                  <p className="text-sm font-semibold text-gray-700 mb-3">What AccessIQ shows instead</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <Image src="/case-studies/AccessIQ/What AccessIQ shows insteadWhat AccessIQ shows instead.png" alt="New Tool" width={600} height={400} className="w-full" />
                  </div>
                </FadeInOnScroll>
                <div className="space-y-3">
                  {["Plain English: Full Dashboard + Data Export not scope:read:write:export", "Risk explained in one sentence, in business language", "AI suggestion with a clear reason, manager can agree in one click", "Time-limited by default, 14 days not permanent"].map((item, i) => (
                    <FadeInOnScroll key={i}>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    </FadeInOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Research */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
            <p className="text-base text-gray-500 mb-4">What I found when I looked at existing tools</p>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              I looked at 12 platforms in this space, the big enterprise names and newer challengers. Every single one showed managers raw technical data and asked them to make a judgment call.
            </p>
            <p className="text-base text-gray-900 font-semibold border-l-4 border-gray-900 pl-4 py-2">
              None of them explained what the data meant. None suggested what the manager should do. None were designed for someone without a security background.
            </p>
          </div>
        </AnimatedSection>
        
        {/* The Three Gaps */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">The Three Gaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { gap: "Gap 01", title: "Language", subtitle: "Raw permissions, no translation", desc: "Managers see \"scope:write:export\" with no explanation of what it does or whether it's safe to approve." },
                { gap: "Gap 02", title: "Decision Support", subtitle: "No guidance, just data", desc: "Platforms show risk flags but never say what to do. Managers decide blind, every time." },
                { gap: "Gap 03", title: "Fintech Context", subtitle: "No templates for regulated roles", desc: "No platform ships ready-made bundles for roles like \"EU Cards Analyst.\" Built from scratch, every time." },
              ].map((item, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="bg-white border border-gray-200 rounded-xl p-6 h-full"
                    whileHover={{ y: -4, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{item.gap}</p>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-3">{item.subtitle}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
            <FadeInOnScroll>
              <p className="text-base text-gray-900 font-semibold mt-6 border-l-4 border-gray-900 pl-4 py-2">
                The gap wasn't in the technology. It was in who the technology was talking to.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        {/* The People */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The People</h2>
            <p className="text-base text-gray-500 mb-6">Who's actually involved</p>
            
            <FadeInOnScroll>
              <p className="text-lg text-gray-900 font-semibold mb-8 border-l-4 border-gray-900 pl-4">
                This isn't a technology problem. It's a people problem.
              </p>
            </FadeInOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { role: "Manager", points: [
                  { label: "Know well", text: "Their team, their goals, who needs what to do their job." },
                  { label: "Don't know", text: "\"scope:write:export\" — what any permission string means." },
                ]},
                { role: "Employee", points: [
                  { label: "Need", text: "Quick access to tools so they can start work without waiting days." },
                  { label: "Instead", text: "They request everything upfront to avoid going back and asking again." },
                ]},
                { role: "Security Team", points: [
                  { label: "Responsible for", text: "Proving to auditors that only the right people can access sensitive data." },
                  { label: "Stuck with", text: "Managers who approve everything and spreadsheets they stitch together manually." },
                ]},
              ].map((person, i) => (
                <FadeInOnScroll key={i}>
                  <motion.div 
                    className="bg-gray-50 rounded-xl p-6 h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -6, 
                      boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                      backgroundColor: '#f9fafb'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gray-900"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                      <motion.div 
                        className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span className="text-white text-sm font-bold">{i === 0 ? "M" : i === 1 ? "E" : "S"}</span>
                      </motion.div>
                      <p className="text-sm font-semibold text-gray-900">{person.role}</p>
                    </div>
                    <div className="space-y-5">
                      {person.points.map((point, j) => (
                        <motion.div 
                          key={j}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">{point.label}</p>
                          <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </FadeInOnScroll>
              ))}
            </div>
            
            <FadeInOnScroll>
              <p className="text-base text-gray-700 leading-relaxed border-l-4 border-gray-900 pl-4">
                The problem isn't that managers are careless. It's that the tools they're given speak a language they were never taught.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        {/* North Star */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">North Star</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug">
                Can a non-technical manager make a confident decision in under 60 seconds?
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
                    </div>
                    
                    {/* Problem & Decision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">The Problem</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.problem}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">The Design Decision</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.decision}</p>
                      </div>
                    </div>
                    
                    {/* Mock Image(s) - Full Width */}
                    <div className="mb-6 space-y-6">
                      {'images' in screen && screen.images ? (
                        screen.images.map((img, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                          >
                            <Image 
                              src={img} 
                              alt={`${screen.title} ${imgIdx + 1}`} 
                              width={1200} 
                              height={675} 
                              className="w-full h-auto" 
                            />
                          </motion.div>
                        ))
                      ) : 'image' in screen && screen.image && (
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden rounded-xl border border-gray-200"
                        >
                          <Image 
                            src={screen.image} 
                            alt={screen.title} 
                            width={1200} 
                            height={675} 
                            className="w-full h-auto" 
                          />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Research Insight */}
                    <div className="border-l-4 border-gray-900 pl-5 py-3">
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{screen.insightLabel}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{screen.insight}</p>
                    </div>
                  </div>
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
              href="/case-studies/finco"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2 group"
            >
              Next Project: Finco
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
