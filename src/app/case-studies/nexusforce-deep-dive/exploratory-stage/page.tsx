"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function JourneyMap({ src, title, nativeW = 1480, nativeH = 1800, className = "" }: { src: string; title: string; nativeW?: number; nativeH?: number; className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (wrapperRef.current) {
        const w = wrapperRef.current.offsetWidth;
        setScale(Math.min(1, w / nativeW));
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [nativeW]);

  return (
    <div className="mb-12 last:mb-0">
      <div
        ref={wrapperRef}
        className={"w-full overflow-hidden rounded-2xl " + className}
        style={{ height: nativeH * scale }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: nativeW,
            height: nativeH,
          }}
        >
          <iframe
            src={src}
            style={{ width: "100%", height: "100%", border: "none" }}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}

export default function ExploratoryStagePage() {
  return (
    <div className="min-h-screen pt-[52px]">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-8 transition-colors group"
          whileHover={{ x: -4 }}
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back
        </motion.button>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-10">
          Exploratory Stage
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Stakeholder Interviews
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/stakeholder-interviews.html"
          title="NexusForce Stakeholder Interviews"
          nativeW={1320}
          nativeH={2300}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-16">
          User Flows
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/user-flows.html"
          title="NexusForce User Flows"
          nativeW={1380}
          nativeH={3200}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-16">
          Journey Maps
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/nexusforce-journey-map-admin.html"
          title="NexusForce Admin Journey Map"
        />
        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/nexusforce-journey-map-gloria.html"
          title="NexusForce Gloria Journey Map"
        />
        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/nexusforce-journey-map-marcus.html"
          title="NexusForce Marcus Journey Map"
        />
        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/nexusforce-journey-map-sarah.html"
          title="NexusForce Sarah Journey Map"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-16">
          Deep Research Report
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/deep-research-report.html"
          title="NexusForce Deep Research Report"
          nativeW={1420}
          nativeH={8000}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-16">
          Competitor Landscape
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/competitor-landscape.html"
          title="NexusForce Competitor Landscape"
          nativeW={1360}
          nativeH={7000}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 mt-16">
          Lo-Fi Wireframes
        </h2>

        <JourneyMap
          src="/case-studies/nexusforce/Exploratory%20Stage/wireframes.html"
          title="NexusForce Lo-Fi Wireframes"
          nativeW={1100}
          nativeH={3400}
          className="border border-gray-300"
        />
      </section>
    </div>
  );
}
