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

export default function NexusForceCaseStudy() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [activeSlide, setActiveSlide] = useState(0);
  const metrics = [
    { num: "38%", text: "reduction in early attrition (quit before day 90) within the first pilot quarter." },
    { num: "44%", text: "fewer HR support messages from new hires during onboarding." },
    { num: "100%", text: "of pilot managers reported higher new hire confidence by week two." },
  ];

  const screens = [
    {
      title: "Ecosystem Architecture",
      problem: "Four parties use one platform, but each needs strict data boundaries. Most systems rely on UI filters, which can fail in reports, exports, or new screens.",
      decision: "Sensitive data is removed before it reaches the client portal. If a role cannot access a module, it does not appear in navigation.",
      image: "/case-studies/nexusforce/Ecosystem Information Architecture.png",
    },
    {
      title: "Compliance Logic",
      problem: "Compliance fails too late, too loosely, or too often. Existing platforms patch each one separately, but none enforce the full workflow.",
      decision: "I defined three rules before any screen: frozen job snapshots, unchanged active checklists, and task lists based on the candidate's existing documents plus the job's requirements.",
      image: "/case-studies/nexusforce/Data Relationship & Compliance Mapping.png",
    },
    {
      title: "The Requisition Flow",
      steps: [
        {
          num: "01",
          name: "Type Selection",
          problem: "Job type controls the fields and options that follow. If this is wrong at the start, the rest of the flow breaks.",
          decision: "Four job types appear as visual choices before any details are entered, and the selected type gates the rest of the form.",
          images: ["/case-studies/nexusforce/Type Selection/02 - Type Selection.png", "/case-studies/nexusforce/Type Selection/01 - Type Selection.png"],
        },
        {
          num: "02",
          name: "Details",
          problem: "Occupation, specialty, and location determine the checklist downstream. Inconsistent entry leads to the wrong checklist.",
          decision: "Controlled vocabularies are used where precision matters, with free text only where flexibility is needed.",
          images: ["/case-studies/nexusforce/Details/02 - Details.png", "/case-studies/nexusforce/Details/01 - Details.png"],
        },
        {
          num: "03",
          name: "Shift and Schedule",
          problem: "Shift labels meant different things to different users. Approximate times created timesheet disputes every week.",
          decision: "Exact time ranges replace labels, and those times feed directly into downstream validation.",
          images: ["/case-studies/nexusforce/Shift & Schedule/01 - Shift & Schedule.png", "/case-studies/nexusforce/Shift & Schedule/02 - Shift & Schedule.png"],
        },
        {
          num: "04",
          name: "Compensation",
          problem: "Bill rates need to be visible in the client portal. Vendor rates must never be.",
          decision: "Bill rates are displayed, vendor rates are computed server-side, and never rendered in the client portal.",
          images: ["/case-studies/nexusforce/Compensation/01 - Compensation.png", "/case-studies/nexusforce/Compensation/02 - Compensation.png"],
        },
        {
          num: "05",
          name: "Compliance and Submission",
          problem: "Compliance checklists were often added last and skipped under pressure. That delay created non-compliant placements.",
          decision: "Checklist attachment is the final required step, and a job cannot exist without one.",
          images: ["/case-studies/nexusforce/Compliance & Submission Rules/01 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/02 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/03 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/04 - Compliance & Submission Rules.png"],
        },
        {
          num: "06",
          name: "Review Template",
          problem: "Users were submitting requisitions without a final check, and errors only surfaced after the job went live.",
          decision: "A read-only summary shows all entered details before submission, so the final step forces intent.",
          images: ["/case-studies/nexusforce/Review Template/Review Template.png"],
        },
        {
          num: "07",
          name: "Job Posting",
          problem: "After submission, users had no clear signal that the job was live. Some checked manually and posted twice.",
          decision: "The user lands on a posting screen with one action: Post Job, followed by an immediate success state.",
          images: ["/case-studies/nexusforce/Job Posting/01 - Job Posting.png", "/case-studies/nexusforce/Job Posting/02 - Job Posting.png", "/case-studies/nexusforce/Job Posting/03 - Job Posting.png"],
        },
      ],
    },
    {
      title: "Where the System's Own Rules Get Tested",
      scenarios: [
        {
          num: "01",
          name: "Compliance Regulation Changes at State Level",
          problem: "A state-level compliance requirement changes after some jobs are already active. Updating the checklist retroactively would wrongly flag workers who were compliant when they were placed.",
          solution: "The system separates future updates from active placements. Admins can update the checklist for future jobs immediately, while active placements require an explicit, logged override decision.",
          image: "/case-studies/nexusforce/Compliance Regulation Changes at State Level/Compliance Regulation Changes at State Level.png",
        },
        {
          num: "02",
          name: "Bill Rate Negotiated After Job Is Live",
          problem: "An ICU job goes live at $250 per hour. After three vendors submit candidates, procurement renegotiates the rate to $300 per hour, but the live job cannot be updated.",
          solution: "The system allows bill rate changes on live jobs, but only through approval. Once approved, future invoices use the updated rate, past invoices stay unchanged, and the change is fully logged.",
          images: ["/case-studies/nexusforce/Bill Rate Negotiated After Job Is Live/Bill Rate Amendment - 01.png", "/case-studies/nexusforce/Bill Rate Negotiated After Job Is Live/Bill Rate Amendment - 02.png"],
        },
        {
          num: "03",
          name: "Same Template Used Across Fiscal Year Boundary",
          body: "A template is created in December 2025 with a $10,000 signing bonus. The same template is used to post jobs in January 2026 after tax rules change. Finance flags incorrect withholding three months later.",
          tension: "The Snapshot Rule correctly froze the template data at job creation. But it could not account for a tax rule that changed after the template was originally built.",
          resolution: "The system flags templates that have not been reviewed in over 90 days with a banner at the point of job creation, not after. Before the job goes live, the user is prompted to confirm the template details are still accurate for the current period. It is not a block. It is a forced moment of awareness before the job posts.",
          image: "/case-studies/nexusforce/Same Template Used Across Fiscal Year Boundary/Template Fiscal Year Review.png",
        },
        {
          num: "04",
          name: "Job Posted During a Hiring Freeze",
          body: "James posts an ICU job. The CFO approved a hiring freeze for Critical Care the same morning. The platform has no connection to budget approval systems. The job goes live. A candidate is placed. Finance rejects the placement weeks later.",
          tension: "The platform cannot know what it was never told. A hiring freeze that lives in a finance system the platform does not talk to is invisible to every check the platform can run.",
          resolution: "The confirmation screen before job posting surfaces a checklist the user must acknowledge: budget approval confirmed, department is not under a hiring freeze, headcount is approved. It is not a system verification because the system cannot make that verification. It is a legal and operational acknowledgement that shifts accountability to the right person before the job goes live.",
          images: ["/case-studies/nexusforce/Job Posted During a Hiring Freeze/Hiring Freeze Confirmation - 01.png", "/case-studies/nexusforce/Job Posted During a Hiring Freeze/Hiring Freeze Confirmation - 02.png"],
        },
      ],
    },
  ];

  return (
    <div className="pt-20 min-h-screen" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />
      
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <AnimatedSection>
          <motion.button 
            onClick={() => router.push("/case-studies")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors group"
            whileHover={{ x: -4 }}
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Case Studies
          </motion.button>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <motion.span 
            className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Healthcare Staffing · B2B SaaS
          </motion.span>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Eliminating the 48-Hour Compliance Gap That Puts Healthcare Organizations at Legal Risk
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-6 max-w-3xl">
            Redesigning compliance verification to prevent non-compliant placements before they occur, reducing manual verification overhead by 40+ hours per week and eliminating post-placement audit risk.
          </p>
          <a
            href="https://www.figma.com/proto/d3flG936CO8wKQd9woX1xe/NexusForce---Heizen?node-id=1-8674&p=f&viewport=378%2C-393%2C0.03&t=Q23yZ3GNZvDLxJ3r-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A8674&page-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors mb-12"
          >
            View Prototype ↗
          </a>
        </AnimatedSection>
        
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
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[
                "/case-studies/nexusforce/hero/Step1-3.png",
                "/case-studies/nexusforce/hero/Step3-3.png",
                "/case-studies/nexusforce/hero/Step5-5.png",
                "/case-studies/nexusforce/hero/Step6-01.png",
              ].concat([
                "/case-studies/nexusforce/hero/Step1-3.png",
                "/case-studies/nexusforce/hero/Step3-3.png",
                "/case-studies/nexusforce/hero/Step5-5.png",
                "/case-studies/nexusforce/hero/Step6-01.png",
              ]).map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-[400px] md:w-[600px]">
                  <Image 
                    src={src}
                    alt={`NexusForce Dashboard ${idx + 1}`}
                    width={600}
                    height={340}
                    className="w-full h-auto rounded-lg border border-gray-200"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="rounded-2xl border border-gray-900 bg-gray-900 mb-16 overflow-hidden">
            <div className="px-6 py-8 md:px-10 md:py-12 border-b border-white/10">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What success looks like
              </motion.h2>
              <FadeInOnScroll>
                <p className="text-sm text-gray-400 text-center mt-3 max-w-xl mx-auto">
                  Outcomes enforced by the system, not by someone catching mistakes later.
                </p>
              </FadeInOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                {
                  num: "100%",
                  label: "Compliance gate",
                  text: "Document verification before the worker walks in",
                },
                {
                  num: "Zero",
                  label: "Rate exposure",
                  text: "Vendor rate exposures, enforced at the data layer, not a hidden field",
                },
                {
                  num: "One",
                  label: "Placement path",
                  text: "Mandatory path from requisition to placement, no shortcuts, no gaps",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col p-6 md:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7AB8F5] mb-4">
                    {String(i + 1).padStart(2, "0")} · {item.label}
                  </span>
                  <p className="text-4xl md:text-[2.75rem] font-bold text-white tracking-tight leading-none mb-4">
                    {item.num}
                  </p>
                  <div className="w-10 h-px bg-[#2E90FA]/50 mb-4" aria-hidden />
                  <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The Compliance Gap
            </motion.h2>
            <FadeInOnScroll className="space-y-4">
              <p className="text-base text-gray-500 leading-relaxed">
                Most healthcare staffing platforms check compliance after a worker is already placed. By the time missing documents are found, the worker may already be on the floor. This isn't an exception, it's the default workflow. The real problem was simple: compliance was treated as a check, not a gate.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              What Existing Platforms Do vs What NexusForce Does
            </motion.h2>
            <FadeInOnScroll>
              <p className="text-base text-gray-500 mb-10 max-w-2xl">
                Same features on paper. Different enforcement at the system layer.
              </p>
            </FadeInOnScroll>

            <div className="relative">
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-[11px] font-bold tracking-widest text-gray-400">
                VS
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-0 md:rounded-2xl md:overflow-hidden md:border md:border-gray-200">
                <FadeInOnScroll className="h-full">
                  <div className="h-full rounded-2xl md:rounded-none border border-gray-200 md:border-0 bg-gradient-to-b from-rose-50/90 via-white to-white p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-800 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden />
                      Industry default
                    </span>
                    <p className="text-sm font-medium text-gray-500 mb-5">What existing platforms do</p>
                    <ul className="space-y-3">
                      {[
                        "Check compliance after placement.",
                        "Hide vendor rates in the UI only.",
                        "Let template edits affect active jobs.",
                        "Create placements manually.",
                      ].map((item, i) => (
                        <motion.li
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-white/70 border border-rose-100/80 px-4 py-3.5"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08, duration: 0.45 }}
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600" aria-hidden>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-current stroke-[2]">
                              <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" strokeLinecap="round" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-700 leading-snug pt-0.5">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </FadeInOnScroll>

                <FadeInOnScroll className="h-full">
                  <motion.div
                    className="h-full rounded-2xl md:rounded-none border border-gray-900 md:border-0 bg-gray-900 text-white p-6 md:p-8 relative overflow-hidden"
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,255,255,0.14), transparent 55%)",
                      }}
                      aria-hidden
                    />
                    <span className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#7AB8F5] mb-6 ring-1 ring-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E90FA]" aria-hidden />
                      NexusForce
                    </span>
                    <p className="relative text-sm font-medium text-gray-400 mb-5">What NexusForce does</p>
                    <ul className="relative space-y-3">
                      {[
                        "Block non-compliant placements at creation.",
                        "Keep vendor rates server-side.",
                        "Freeze templates at job creation.",
                        "Auto-create placements on offer acceptance.",
                      ].map((item, i) => (
                        <motion.li
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3.5 backdrop-blur-sm"
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08, duration: 0.45 }}
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2E90FA]/20 text-[#7AB8F5]" aria-hidden>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-current stroke-[2]">
                              <path d="M2.5 6.5l2.25 2.25L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-100 leading-snug pt-0.5">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              I reviewed six enterprise workforce platforms. All had compliance checklists and role-based controls. None solved either at the data layer.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Compliance was always checked after placement. Rate separation was always handled in the UI. The shared assumption: someone would catch it in time.
            </p>
            <p className="text-base text-gray-900 font-semibold border-l-4 border-gray-900 pl-4 py-2">
              In healthcare staffing, that assumption is a liability.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The Three Gaps
            </motion.h2>
            <FadeInOnScroll>
              <p className="text-base text-gray-500 mb-8 md:mb-10 max-w-2xl">
                Every platform had the checklist, but none enforced it at the right moment.
              </p>
            </FadeInOnScroll>

            <div className="rounded-2xl bg-gray-100 p-2 md:p-2.5 space-y-2">
              <ol className="space-y-2 list-none m-0 p-0">
              {[
                {
                  label: "Timing",
                  lead: "Compliance was checked after placement,",
                  emphasis: "not before.",
                },
                {
                  label: "Architecture",
                  lead: "Rate separation lived in the UI,",
                  emphasis: "not the data layer.",
                },
                {
                  label: "Integrity",
                  lead: "Template changes could affect active jobs,",
                  emphasis: "because there was no snapshot system.",
                },
              ].map((gap, i) => (
                <motion.li
                  key={gap.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 rounded-xl bg-white px-5 py-5 md:px-8 md:py-6"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1 sm:min-w-[6.5rem] shrink-0">
                    <span className="text-2xl font-bold text-gray-900 tabular-nums leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                      {gap.label}
                    </span>
                  </div>
                  <p className="text-[15px] md:text-base text-gray-600 leading-relaxed">
                    {gap.lead}{" "}
                    <span className="text-gray-900 font-semibold">{gap.emphasis}</span>
                  </p>
                </motion.li>
              ))}
              </ol>

              <FadeInOnScroll>
                <div className="rounded-xl bg-gray-900 px-5 py-5 md:px-8 md:py-6">
                  <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                    The real gap was{" "}
                    <span className="text-gray-300">timing and architecture</span>, not capability.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The People
            </motion.h2>
            <FadeInOnScroll>
              <p className="text-base text-gray-500 mb-8 md:mb-10 max-w-2xl">
                Four parties. Four completely different agendas. One platform they all have to operate on without ever seeing what they should not.
              </p>
            </FadeInOnScroll>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0 mb-4 md:mb-5">
              {[
                { role: "Hospitals", need: "Compliance and role details." },
                { role: "Agencies", need: "Placements and margins." },
                { role: "Workers", need: "Job details and document status." },
                { role: "Admin", need: "Full visibility to manage the system." },
              ].map((party, i) => (
                <motion.li
                  key={party.role}
                  className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                >
                  <p className="text-[11px] font-bold text-[#2E90FA] tabular-nums tracking-wider mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-4">
                    {party.role}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-900">Need </span>
                    {party.need}
                  </p>
                </motion.li>
              ))}
            </ul>

            <FadeInOnScroll>
              <div className="rounded-2xl border border-gray-900 bg-gray-900 px-6 py-8 md:px-10 md:py-10">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#7AB8F5] mb-4 md:mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E90FA]" aria-hidden />
                  Insight
                </span>
                <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                  The problem was not trust. It was designing one platform for four very different needs.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <motion.div
              className="rounded-2xl border border-gray-900 bg-gray-900 px-6 py-10 md:px-10 md:py-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#7AB8F5] mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E90FA]" aria-hidden />
                North Star
              </span>
              <blockquote className="m-0">
                <p className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-white leading-snug tracking-tight">
                  Can every worker walk in on day one with all documents already verified, without anyone having to chase them?
                </p>
              </blockquote>
            </motion.div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The screens and the thinking behind each one</h2>
            <p className="text-lg text-gray-700 mb-12">One question drove every decision. If this is wrong, what breaks downstream?</p>
            
            <div className="space-y-20">
              {screens.map((screen, i) => (
                <FadeInOnScroll key={i}>
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{screen.title}</h3>
                      </div>
                    </div>
                    
                    {(() => {
                      if ('scenarios' in screen && screen.scenarios) {
                        return (
                          <div>
                            <p className="text-base text-gray-500 leading-relaxed mb-8">Good architecture handles the happy path. What separates a system that actually works in production is how it handles the moment its own rules conflict with the real world. These are four of those moments.</p>
                            <div className="space-y-16">
                              {screen.scenarios.map((scenario, si) => (
                                <div key={si}>
                                  <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">
                                      {scenario.num} &middot; {scenario.name}
                                    </span>
                                  </div>
                                  <div className="space-y-4 mb-5">
                                    {'problem' in scenario ? (
                                      <>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Problem</p>
                                          <p className="text-sm text-gray-700 leading-relaxed">{scenario.problem}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</p>
                                          <p className="text-sm text-gray-700 leading-relaxed">{scenario.solution}</p>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <p className="text-sm text-gray-600 leading-relaxed">{scenario.body}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="bg-gray-50 rounded-xl p-4">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">The tension</p>
                                            <p className="text-sm text-gray-700 leading-relaxed">{scenario.tension}</p>
                                          </div>
                                          <div className="bg-gray-50 rounded-xl p-4">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">The resolution</p>
                                            <p className="text-sm text-gray-700 leading-relaxed">{scenario.resolution}</p>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  {'images' in scenario && scenario.images ? (
                                    <div className="space-y-3">
                                      {scenario.images.map((img, imgIdx) => (
                                        <motion.div key={imgIdx} whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                                          <Image src={img} alt={`Scenario ${scenario.num} ${imgIdx + 1}`} width={1200} height={675} className="w-full h-auto" />
                                        </motion.div>
                                      ))}
                                    </div>
                                  ) : 'image' in scenario && scenario.image && (
                                    <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                                      <Image src={scenario.image} alt={`Scenario ${scenario.num}`} width={1200} height={675} className="w-full h-auto" />
                                    </motion.div>
                                  )}
                                  {si < screen.scenarios.length - 1 && <div className="w-full h-px bg-gray-100 mt-8" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      if ('steps' in screen && screen.steps) {
                        return (
                          <div className="space-y-16">
                            {screen.steps.map((step, si) => (
                              <div key={si}>
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">
                                    {step.num} &middot; {step.name}
                                  </span>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6 space-y-4">
                                  <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">The Problem</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.problem}</p>
                                  </div>
                                  <div className="border-l-4 border-gray-900 pl-4 py-2">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">The Design Decision</p>
                                    <p className="text-sm text-gray-800 leading-relaxed">{step.decision}</p>
                                  </div>
                                </div>
                                {step.images && (
                                  <div className="space-y-3">
                                    {step.images.map((img, imgIdx) => (
                                      <motion.div
                                        key={imgIdx}
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                                      >
                                        <Image 
                                          src={img} 
                                          alt={`${step.name} ${imgIdx + 1}`} 
                                          width={1200} 
                                          height={675} 
                                          className="w-full h-auto" 
                                        />
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                                {si < screen.steps.length - 1 && <div className="w-full h-px bg-gray-100 mt-8" />}
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return (
                        <>
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
                        </>
                      );
                    })()}
                    
                    {'insight' in screen && screen.insight && (
                      <div className="border-l-4 border-gray-900 pl-5 py-3">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{screen.insightLabel}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{screen.insight}</p>
                      </div>
                    )}
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reflection</h2>
            <div className="space-y-4">

              <div className="border-l-4 border-gray-900 pl-5 py-3 mt-6">
                <p className="text-base text-gray-900 font-medium leading-relaxed">
                  The insight that stayed with me: in a data-heavy platform, the most important design decisions are often the ones that never appear in a final screen. They live in data models, business rules, and constraints defined before a single frame is drawn. A case study that only shows the screens misses where the real design work happened.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

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
              href="/case-studies/accessiq"
              className="text-sm text-gray-900 hover:text-gray-600 font-medium transition-colors flex items-center gap-2 group"
            >
              Next Project: AccessIQ
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
