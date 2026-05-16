"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  description2?: string;
  image: string;
  alt: string;
  href: string;
  delay?: number;
}

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

export default function CaseStudyCard({ tag, title, description, description2, image, alt, href, delay = 0 }: CaseStudyCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={href}>
        <motion.div
          className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer flex flex-col md:flex-row md:h-[320px]"
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-8 flex flex-col w-full md:w-1/2 justify-center overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                  {tag}
                </span>
              </div>
              <motion.span 
                className="text-gray-300"
                whileHover={{ scale: 1.2, x: 3 }}
              >
                ↗
              </motion.span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug line-clamp-3">
              {title}
            </h3>
            <div className="text-sm text-gray-500 leading-relaxed space-y-1">
              <p className="line-clamp-1">• {description}</p>
              {description2 && <p className="line-clamp-1">• {description2}</p>}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 flex-shrink-0 md:h-[320px] overflow-hidden">
            <div className="h-48 md:h-full">
              <Image 
                src={image}
                alt={alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`w-full h-full ${alt === 'Finco' ? 'object-contain' : 'object-cover'}`}
              />
            </div>
          </div>
        </motion.div>
      </Link>
    </AnimatedSection>
  );
}
