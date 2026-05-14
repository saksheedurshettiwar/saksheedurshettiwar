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
      problem: "Four parties sharing one platform, each with strict boundaries around what they can see and do. Most platforms manage this with role-based field visibility: one shared data model, filtered differently per user type. It works in the main UI. It breaks the moment someone builds a report, exports data, or adds a new screen without applying the filter.",
      decision: "Vendor rates are never included in the client portal's API response. Not filtered at render. Not hidden with CSS. Not disabled at the component level. Never sent. If the data is not in the response, no UI mistake downstream can expose it.\n\nNavigation follows the same logic. If a role has no access to a module, the module does not appear in the navigation at all. Not greyed out. Not locked with a tooltip. Absent. A user cannot accidentally navigate to something they should not see.",
      insight: "The most common rate exposure incident in MSP platforms does not come from the main UI. It comes from report export templates built once and never audited again. Keeping vendor rates out of the client portal data model entirely is the only architecture that survives over time.",
      insightLabel: "Research insight",
      image: "/case-studies/nexusforce/Ecosystem Information Architecture.png",
    },
    {
      title: "Compliance Logic",
      problem: "Workforce compliance has three distinct failure modes: documents verified too late, template changes breaking active placements, and compliance tasks that ignore what a candidate already has on file. Existing platforms address each one with a separate UI control. None enforce all three at the system level.",
      decision: "Three rules implemented before any screen is designed.\n\nThe Snapshot Rule: When a job is created from a requisition template, the template data is frozen into the job record at that moment. Subsequent edits to the template have zero effect on existing jobs.\n\nThe Immutability Rule: The same logic applies to compliance checklists. Once attached to a job, edits to the checklist template do not affect the job's requirements. Active placements are protected from retroactive changes.\n\nThe Union Rule: A placement's compliance task list is computed automatically as the union of the candidate's existing document wallet and the job's checklist requirements. Candidates are never asked to re-upload what they have already submitted. No required document is missed.",
      insight: "The Immutability Rule was the hardest to defend. The instinct is to want compliance updates to push to active jobs. The risk is that this creates false violations for workers who were fully compliant under the original requirements. Immutability protects placement integrity. New requirements apply only to new jobs.",
      insightLabel: "Research insight",
      image: "/case-studies/nexusforce/Data Relationship & Compliance Mapping.png",
    },
    {
      title: "The Requisition Flow",
      steps: [
        {
          num: "01",
          name: "Type Selection",
          problem: "Job type determines which fields, shift structures, and compensation options appear across every step that follows. Getting this wrong at the start cascades through the entire flow.",
          decision: "Four types presented as visual selections before any details are entered. Long-Term Order, Per Diem, Permanent, Internal Flex Pool. Type selection gates the rest of the form. Everything adapts to what was chosen here.",
          images: ["/case-studies/nexusforce/Type Selection/02 - Type Selection.png", "/case-studies/nexusforce/Type Selection/01 - Type Selection.png"],
        },
        {
          num: "02",
          name: "Details",
          problem: "Occupation, specialty, and location determine which compliance checklist gets attached downstream. Inconsistent entries mean the wrong checklist, which means a non-compliant placement.",
          decision: "Controlled vocabularies where precision matters: Occupation, Specialty, Department, and free text only where flexibility is genuinely needed. Multi-select benefits surface only when the job type supports them.",
          images: ["/case-studies/nexusforce/Details/02 - Details.png", "/case-studies/nexusforce/Details/01 - Details.png"],
        },
        {
          num: "03",
          name: "Shift and Schedule",
          problem: "Shift labels like Day Shift or Night Shift meant different things to different people. Approximate times created timesheet disputes that required manual resolution every single week.",
          decision: "Specific HH:MM time ranges, not labels. 07:00 to 19:00, not Day Shift. Exact times feed directly into timesheet validation downstream and eliminate disputes before they happen.",
          images: ["/case-studies/nexusforce/Shift & Schedule/01 - Shift & Schedule.png", "/case-studies/nexusforce/Shift & Schedule/02 - Shift & Schedule.png"],
        },
        {
          num: "04",
          name: "Compensation",
          problem: "Bill rates need to be visible in the client portal. Vendor rates must never be. In existing platforms both numbers sometimes appeared in the same compensation section managed only by a visibility toggle.",
          decision: "Bill rates displayed. Vendor rates computed server-side and never rendered anywhere in the client portal. Number of positions entered here gates how many candidates can be placed against this requisition.",
          images: ["/case-studies/nexusforce/Compensation/01 - Compensation.png", "/case-studies/nexusforce/Compensation/02 - Compensation.png"],
        },
        {
          num: "05",
          name: "Compliance and Submission",
          problem: "Compliance checklists were the last thing added to a job posting and the first thing skipped under deadline pressure. Non-compliant placements were the direct result.",
          decision: "Checklist attachment is the final step and cannot be skipped. A job cannot exist in the system without one. Approval workflow toggle surfaced here. Status at submission is Draft, Active, or Scheduled.",
          images: ["/case-studies/nexusforce/Compliance & Submission Rules/01 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/02 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/03 - Compliance & Submission Rules.png", "/case-studies/nexusforce/Compliance & Submission Rules/04 - Compliance & Submission Rules.png"],
        },
        {
          num: "06",
          name: "Review Template",
          problem: "Users were submitting requisitions without a final check, leading to errors that only surfaced after the job was already live and candidates had started applying.",
          decision: "Before the template is submitted, the user gets a full read-only summary of everything they entered across all five steps. Every field visible in one place. No editing here, that forces intent. If something is wrong, they go back to the specific step. Only when everything looks right does the submit button make sense.",
          images: ["/case-studies/nexusforce/Review Template/Review Template.png"],
        },
        {
          num: "07",
          name: "Job Posting",
          problem: "After a template was submitted, users had no clear signal that the job was live. They would go back into the system and manually check, sometimes posting the same job twice.",
          decision: "Once the template is reviewed and submitted, the user lands on a job posting screen with one action: Post Job. A success confirmation surfaces immediately after posting with a direct link to view submissions. No ambiguity about whether the job is live.",
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
          body: "California mandates a new document requirement for ICU nurses. The admin needs to update the compliance checklist immediately. But the Immutability Rule exists precisely to protect active placements from retroactive changes. Updating the checklist would flag workers who were fully compliant when they were placed.",
          tension: "A legal obligation on one side, a system rule designed to protect placement integrity on the other.",
          resolution: "The system separates the two actions. The admin can update the checklist for all future jobs instantly. For active placements, the system surfaces a flagged alert asking the admin to explicitly choose: apply to active placements as a regulatory override, or save for future jobs only. The decision is forced, logged, and auditable. Neither path is automatic.",
          image: "/case-studies/nexusforce/Compliance Regulation Changes at State Level/Compliance Regulation Changes at State Level.png",
        },
        {
          num: "02",
          name: "Bill Rate Negotiated After Job Is Live",
          body: "An ICU job is posted at $250 per hour. Three vendors submit candidates. Procurement renegotiates the rate to $300 per hour. There is no mechanism to update the bill rate on a live job. Invoices will generate at the wrong number.",
          tension: "The Snapshot Rule freezes job data at creation to protect integrity. But a rate change is not a template error. It is a legitimate business event that downstream billing depends on.",
          resolution: "Bill rate updates on live jobs are allowed but gated. The change triggers an approval workflow before taking effect, notifying the hiring manager and operations. Once approved, all future invoices generate at the updated rate. Past invoices are untouched. The audit log captures exactly when the rate changed and who approved it.",
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
            Designing a Zero-Gap Compliance System That Ensures Every Healthcare Worker Is 100% Verified Before Day One
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-3xl">
            The post-hire operational layer hospitals rely on to guarantee that every worker who walks through their door is cleared to be there.
          </p>
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
                "/case-studies/nexusforce/hero/Step 1 - 3.png",
                "/case-studies/nexusforce/hero/Step 3 - 3.png",
                "/case-studies/nexusforce/hero/Step 5 - 5.png",
                "/case-studies/nexusforce/hero/Step 6 - 01.png",
              ].concat([
                "/case-studies/nexusforce/hero/Step 1 - 3.png",
                "/case-studies/nexusforce/hero/Step 3 - 3.png",
                "/case-studies/nexusforce/hero/Step 5 - 5.png",
                "/case-studies/nexusforce/hero/Step 6 - 01.png",
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
              { num: "100%", text: "Document verification before the worker walks in" },
              { num: "Zero", text: "Vendor rate exposures, enforced at the data layer, not a hidden field" },
              { num: "One", text: "Mandatory path from requisition to placement, no shortcuts, no gaps" },
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
                Here is how most healthcare staffing platforms handle compliance. A worker gets placed. Timesheets start. Someone manually checks whether the documents are in order. If something is missing, they chase the worker. The worker chases the agency. Meanwhile the worker is already on the floor.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                This is not an edge case. This is the default workflow.
              </p>
            </FadeInOnScroll>
            
            <FadeInOnScroll className="mt-8">
              <motion.blockquote 
                className="border-l-4 border-gray-900 pl-6 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-800 italic font-medium">
                  "By the time we caught the missing license, she had already done two shifts. We had no idea until the audit."
                </p>
              </motion.blockquote>
            </FadeInOnScroll>
            
            <FadeInOnScroll>
              <p className="text-base text-gray-700 leading-relaxed mt-6">
                The platform was not failing because nobody cared. It was failing because compliance was a check that happened after placement, not a gate that prevented a non-compliant placement from being created.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What Existing Platforms Do vs What NexusForce Does</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <FadeInOnScroll>
                  <p className="text-sm font-semibold text-gray-700 mb-3">What existing platforms do</p>
                </FadeInOnScroll>
                <div className="space-y-3">
                  {["Compliance documents checked manually after the placement is created", "Vendor rates separated by a UI toggle — the data still exists in the shared model", "Template changes propagate to active jobs, making workers compliant yesterday non-compliant today", "Placement creation is a manual step someone has to remember after an offer is accepted"].map((item, i) => (
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
                  <p className="text-sm font-semibold text-gray-700 mb-3">What NexusForce does instead</p>
                </FadeInOnScroll>
                <div className="space-y-3">
                  {["Compliance union computed automatically at the moment of placement creation — a non-compliant placement cannot be created", "Vendor rates computed server-side and never passed to the client portal's API response — not filtered, never sent", "Snapshot rule: template data frozen at job creation, edits have zero effect on active placements", "Placement auto-created on offer acceptance — no manual trigger, no gap between offer and placement record"].map((item, i) => (
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
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
            <p className="text-base text-gray-500 mb-4">What I found when I looked at how existing platforms handle this</p>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              I mapped six enterprise workforce and MSP platforms. Every single one had compliance checklists. Every single one had role-based visibility controls. Not one had solved either problem at the data layer.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Compliance was always a post-placement check. Rate separation was always a UI-level filter. The assumption baked into every platform was that someone, somewhere, would catch it before it became a problem.
            </p>
            <p className="text-base text-gray-900 font-semibold border-l-4 border-gray-900 pl-4 py-2">
              In healthcare staffing, that assumption is a patient safety risk.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">The Three Gaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { gap: "Gap 01", title: "Compliance Timing", subtitle: "Verified after placement, not before it", desc: "The highest-risk window in the entire staffing lifecycle, between offer accepted and first shift, has no system-level gate. A non-compliant worker can be placed, start work, and get caught in an audit weeks later." },
                { gap: "Gap 02", title: "Data Architecture", subtitle: "Rate separation lives at the UI layer", desc: "Vendor rates exist in the shared data model and are filtered at render time. One missed filter on a report template or a new screen and the number surfaces where it should never appear." },
                { gap: "Gap 03", title: "Template Integrity", subtitle: "No snapshot mechanism", desc: "Checklist updates propagate to active jobs. Workers who were compliant under the original requirements get retroactively flagged. Operations teams lose trust in templates and return to fully manual job creation." },
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
                The gap was not in what the platforms could do. It was in when and where they chose to enforce the rules.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The People</h2>
            <p className="text-base text-gray-500 mb-6">Four parties. Four completely different agendas. One platform they all have to operate on without ever seeing what they should not.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { 
                  role: "Hospital", initial: "H",
                  points: [
                    { label: "Know well", text: "Which roles need filling, what certifications are required, what their department compliance requirements are." },
                    { label: "Do not know", text: "What the staffing agency earns per placement. And the platform has to guarantee that." },
                  ]
                },
                { 
                  role: "Staffing Agency", initial: "A",
                  points: [
                    { label: "Know well", text: "Their candidate pool, placement history, their own margins." },
                    { label: "Do not know", text: "What the hospital is charged per hour. Also guaranteed by the platform." },
                  ]
                },
                { 
                  role: "Worker", initial: "W",
                  points: [
                    { label: "Need", text: "To know their placement details, which documents to upload, and when to show up." },
                    { label: "Instead", text: "They get emails from three different people asking for the same document in different formats, with no single place to track what is submitted and what is still missing." },
                  ]
                },
                { 
                  role: "Platform Ops", initial: "P",
                  points: [
                    { label: "Responsible for", text: "Configuring all portals, setting fees, auditing every action across the system." },
                    { label: "The only party", text: "That sees everything, and the only one for whom that is appropriate." },
                  ]
                },
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
                        <span className="text-white text-sm font-bold">{person.initial}</span>
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
                The problem was not that the parties did not trust each other. It was that the platform was built as if they all used the same screen.
              </p>
            </FadeInOnScroll>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">North Star</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug">
                Can a worker walk into a hospital on day one knowing every document is verified, without anyone having to chase them?
              </p>
            </div>
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
                                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{scenario.body}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">The tension</p>
                                      <p className="text-sm text-gray-700 leading-relaxed">{scenario.tension}</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4">
                                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">The resolution</p>
                                      <p className="text-sm text-gray-700 leading-relaxed">{scenario.resolution}</p>
                                    </div>
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
                                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-6">
                                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.problem}</p>
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
