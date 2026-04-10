"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fontFamilies = [
  { name: "Inter", value: "Inter, sans-serif", google: true },
  { name: "Playfair Display", value: "Playfair Display, serif", google: true },
  { name: "Space Grotesk", value: "Space Grotesk, sans-serif", google: true },
  { name: "DM Sans", value: "DM Sans, sans-serif", google: true },
  { name: "Outfit", value: "Outfit, sans-serif", google: true },
  { name: "Sora", value: "Sora, sans-serif", google: true },
];

const colorPalettes = [
  { name: "Midnight", primary: "#6366F1", secondary: "#8B5CF6", accent: "#EC4899", bg: "#0F172A", text: "#F8FAFC" },
  { name: "Forest", primary: "#059669", secondary: "#10B981", accent: "#F59E0B", bg: "#ECFDF5", text: "#064E3B" },
  { name: "Sunset", primary: "#F97316", secondary: "#EF4444", accent: "#8B5CF6", bg: "#FFFBEB", text: "#78350F" },
  { name: "Ocean", primary: "#0EA5E9", secondary: "#06B6D4", accent: "#8B5CF6", bg: "#F0F9FF", text: "#0C4A6E" },
  { name: "Berry", primary: "#DB2777", secondary: "#C026D3", accent: "#FACC15", bg: "#FDF2F8", text: "#831843" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function DesignSystemGenerator() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "spacing" | "preview">("colors");
  const [colors, setColors] = useState(colorPalettes[0]);
  const [fontFamily, setFontFamily] = useState(fontFamilies[0]);
  const [baseSize, setBaseSize] = useState(16);
  const [spacingScale, setSpacingScale] = useState(4);
  const [copied, setCopied] = useState<string | null>(null);
  const [generatedTokens, setGeneratedTokens] = useState("");

  const generateTokens = () => {
    const tokens = {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.bg,
        foreground: colors.text,
      },
      typography: {
        fontFamily: fontFamily.value,
        baseSize: `${baseSize}px`,
      },
      spacing: {
        scale: spacingScale,
        xs: `${spacingScale}px`,
        sm: `${spacingScale * 2}px`,
        md: `${spacingScale * 4}px`,
        lg: `${spacingScale * 8}px`,
        xl: `${spacingScale * 16}px`,
      },
    };
    return JSON.stringify(tokens, null, 2);
  };

  useEffect(() => {
    setGeneratedTokens(generateTokens());
  }, [colors, fontFamily, baseSize, spacingScale]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const exportToCSS = () => {
    return `:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.bg};
  --color-foreground: ${colors.text};
  --font-family: ${fontFamily.value};
  --font-size-base: ${baseSize}px;
  --spacing-xs: ${spacingScale}px;
  --spacing-sm: ${spacingScale * 2}px;
  --spacing-md: ${spacingScale * 4}px;
  --spacing-lg: ${spacingScale * 8}px;
  --spacing-xl: ${spacingScale * 16}px;
}`;
  };

  const exportToTailwind = () => {
    return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${colors.primary}',
        secondary: '${colors.secondary}',
        accent: '${colors.accent}',
      },
      fontFamily: {
        sans: ['${fontFamily.name}', 'sans-serif'],
      },
      spacing: {
        'xs': '${spacingScale}px',
        'sm': '${spacingScale * 2}px',
        'md': '${spacingScale * 4}px',
        'lg': '${spacingScale * 8}px',
        'xl': '${spacingScale * 16}px',
      },
      fontSize: {
        'base': '${baseSize}px',
      },
    },
  },
}`;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <AnimatedSection>
          <button 
            onClick={() => router.push("/experiments")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors"
          >
            <span>←</span> Back to Experiments
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
              AI · Figma Plugin
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Design System Generator
          </h1>
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-8">
            Generate production-ready design tokens from your brand guidelines. 
            Customize colors, typography, and spacing to create a consistent design system.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
              {/* Tabs */}
              <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
                {(["colors", "typography", "spacing"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all ${
                      activeTab === tab
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Colors Tab */}
              {activeTab === "colors" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Color Palette</label>
                    <div className="grid grid-cols-5 gap-2">
                      {colorPalettes.map((palette) => (
                        <button
                          key={palette.name}
                          onClick={() => setColors(palette)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            colors.name === palette.name ? "border-gray-900" : "border-gray-100"
                          }`}
                        >
                          <div className="flex flex-col gap-1">
                            <div className="w-full h-6 rounded" style={{ backgroundColor: palette.primary }} />
                            <div className="w-full h-6 rounded" style={{ backgroundColor: palette.secondary }} />
                            <div className="w-full h-6 rounded" style={{ backgroundColor: palette.accent }} />
                          </div>
                          <span className="text-[10px] text-gray-500 mt-1 block">{palette.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Primary</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colors.primary}
                          onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                          className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={colors.primary}
                          onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Secondary</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colors.secondary}
                          onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                          className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={colors.secondary}
                          onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Accent</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colors.accent}
                          onChange={(e) => setColors({ ...colors, accent: e.target.value })}
                          className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={colors.accent}
                          onChange={(e) => setColors({ ...colors, accent: e.target.value })}
                          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-2">Background</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colors.bg}
                          onChange={(e) => setColors({ ...colors, bg: e.target.value })}
                          className="w-10 h-10 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={colors.bg}
                          onChange={(e) => setColors({ ...colors, bg: e.target.value })}
                          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Typography Tab */}
              {activeTab === "typography" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Font Family</label>
                    <div className="grid grid-cols-2 gap-2">
                      {fontFamilies.map((font) => (
                        <button
                          key={font.name}
                          onClick={() => setFontFamily(font)}
                          className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                            fontFamily.name === font.name
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          style={{ fontFamily: font.value }}
                        >
                          {font.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Base Font Size: {baseSize}px
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="20"
                      value={baseSize}
                      onChange={(e) => setBaseSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>12px</span>
                      <span>20px</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Typography Preview
                    </label>
                    <div className="p-4 bg-gray-50 rounded-lg" style={{ fontFamily: fontFamily.value }}>
                      <p style={{ fontSize: `${baseSize}px` }} className="text-gray-900 mb-2">
                        Heading 1 - {baseSize * 2.5}px
                      </p>
                      <p style={{ fontSize: `${baseSize * 1.5}px` }} className="text-gray-700 mb-2">
                        Heading 2 - {baseSize * 1.5}px
                      </p>
                      <p style={{ fontSize: `${baseSize}px` }} className="text-gray-600">
                        Body text - {baseSize}px
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Spacing Tab */}
              {activeTab === "spacing" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Base Spacing Unit: {spacingScale}px
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={spacingScale}
                      onChange={(e) => setSpacingScale(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>2px</span>
                      <span>8px</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Spacing Scale Preview
                    </label>
                    <div className="space-y-2">
                      {[
                        { name: "xs", size: spacingScale },
                        { name: "sm", size: spacingScale * 2 },
                        { name: "md", size: spacingScale * 4 },
                        { name: "lg", size: spacingScale * 8 },
                        { name: "xl", size: spacingScale * 16 },
                      ].map((spacing) => (
                        <div key={spacing.name} className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 w-8">{spacing.name}</span>
                          <div 
                            className="h-4 bg-gray-900 rounded"
                            style={{ width: `${Math.min(spacing.size * 2, 120)}px` }}
                          />
                          <span className="text-xs text-gray-400">{spacing.size}px</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Preview & Export Panel */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {/* Live Preview */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Live Preview</h3>
                <div 
                  className="rounded-xl p-6 border border-gray-200"
                  style={{ backgroundColor: colors.bg, fontFamily: fontFamily.value }}
                >
                  <h1 
                    className="text-2xl font-bold mb-2"
                    style={{ color: colors.text }}
                  >
                    Design System Components
                  </h1>
                  <p 
                    className="text-sm mb-6"
                    style={{ color: colors.text, opacity: 0.7 }}
                  >
                    Preview of your generated design system with current settings.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <button 
                      className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Primary Button
                    </button>
                    <button 
                      className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      Secondary Button
                    </button>
                    <button 
                      className="px-4 py-2 rounded-lg text-sm font-medium border-2"
                      style={{ borderColor: colors.accent, color: colors.accent }}
                    >
                      Accent Button
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primary, opacity: 0.1 }}>
                      <p className="text-xs font-medium" style={{ color: colors.primary }}>Primary</p>
                      <p className="text-lg font-bold" style={{ color: colors.primary }}>67%</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.secondary, opacity: 0.1 }}>
                      <p className="text-xs font-medium" style={{ color: colors.secondary }}>Secondary</p>
                      <p className="text-lg font-bold" style={{ color: colors.secondary }}>89%</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.accent, opacity: 0.1 }}>
                      <p className="text-xs font-medium" style={{ color: colors.accent }}>Accent</p>
                      <p className="text-lg font-bold" style={{ color: colors.accent }}>42%</p>
                    </div>
                  </div>

                  <input 
                    type="text"
                    placeholder="Input field placeholder..."
                    className="w-full px-4 py-2 rounded-lg border text-sm"
                    style={{ 
                      borderColor: colors.primary,
                      color: colors.text,
                      backgroundColor: "transparent"
                    }}
                  />
                </div>
              </div>

              {/* Export Options */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Export Design Tokens</h3>
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => copyToClipboard(exportToCSS(), "css")}
                    className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {copied === "css" ? "Copied!" : "CSS Variables"}
                  </button>
                  <button
                    onClick={() => copyToClipboard(exportToTailwind(), "tailwind")}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copied === "tailwind" ? "Copied!" : "Tailwind Config"}
                  </button>
                  <button
                    onClick={() => copyToClipboard(generatedTokens, "json")}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copied === "json" ? "Copied!" : "JSON"}
                  </button>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-48">
                  <pre className="text-xs text-green-400 font-mono">
                    {copied === "css" ? exportToCSS() : copied === "tailwind" ? exportToTailwind() : generatedTokens}
                  </pre>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "🎨", title: "Color Palettes", desc: "Pre-built or custom" },
                    { icon: "✍️", title: "Typography", desc: "Google Fonts ready" },
                    { icon: "📏", title: "Spacing Scale", desc: "Consistent rhythm" },
                    { icon: "📦", title: "Components", desc: "Buttons, cards, inputs" },
                    { icon: "💾", title: "Export", desc: "CSS, Tailwind, JSON" },
                    { icon: "⚡", title: "AI Powered", desc: "Smart suggestions" },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <span className="text-lg">{feature.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{feature.title}</p>
                        <p className="text-xs text-gray-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Want the Full Version?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Get the Figma plugin to generate complete design systems with AI-powered component suggestions.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get the Plugin ↗
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
