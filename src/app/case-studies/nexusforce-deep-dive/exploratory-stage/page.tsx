"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ExploratoryStagePage() {
  return (
    <div className="min-h-screen pt-[52px]">
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors group"
          whileHover={{ x: -4 }}
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back
        </motion.button>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Exploratory Stage
        </h1>
        <p className="text-lg text-gray-500">Content coming soon.</p>
      </section>
    </div>
  );
}
