"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  { name: "Midnight", primary: "#6366F1", secondary: "#8B5CF6", accent: "#EC4899", bg: "#FFFFFF", text: "#0F172A", surface: "#F8FAFC", border: "#E2E8F0" },
  { name: "Ocean", primary: "#0EA5E9", secondary: "#06B6D4", accent: "#F59E0B", bg: "#FFFFFF", text: "#0C4A6E", surface: "#F0F9FF", border: "#BAE6FD" },
  { name: "Forest", primary: "#059669", secondary: "#10B981", accent: "#F59E0B", bg: "#FFFFFF", text: "#064E3B", surface: "#ECFDF5", border: "#A7F3D0" },
  { name: "Berry", primary: "#DB2777", secondary: "#C026D3", accent: "#FACC15", bg: "#FFFFFF", text: "#831843", surface: "#FDF2F8", border: "#FBCFE8" },
  { name: "Sunset", primary: "#F97316", secondary: "#EF4444", accent: "#8B5CF6", bg: "#FFFFFF", text: "#78350F", surface: "#FFFBEB", border: "#FED7AA" },
];

const componentCategories = [
  { id: "buttons", name: "Buttons" },
  { id: "inputs", name: "Form Inputs" },
  { id: "cards", name: "Cards" },
  { id: "badges", name: "Badges" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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
  const [previewComponent, setPreviewComponent] = useState("buttons");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [toggleOn, setToggleOn] = useState(false);

  const generateTokens = () => {
    return JSON.stringify({
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.bg,
        foreground: colors.text,
        surface: colors.surface,
        border: colors.border,
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
    }, null, 2);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
  };

  const exportToCSS = () => {
    return `:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.bg};
  --color-foreground: ${colors.text};
  --color-surface: ${colors.surface};
  --color-border: ${colors.border};
  
  --font-family: ${fontFamily.value};
  --font-size-base: ${baseSize}px;
  --font-size-sm: ${baseSize * 0.875}px;
  --font-size-lg: ${baseSize * 1.25}px;
  --font-size-xl: ${baseSize * 1.5}px;
  
  --spacing-xs: ${spacingScale}px;
  --spacing-sm: ${spacingScale * 2}px;
  --spacing-md: ${spacingScale * 4}px;
  --spacing-lg: ${spacingScale * 8}px;
  --spacing-xl: ${spacingScale * 16}px;
  
  --radius-sm: ${spacingScale}px;
  --radius-md: ${spacingScale * 2}px;
  --radius-lg: ${spacingScale * 3}px;
  --radius-full: 9999px;
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
        surface: '${colors.surface}',
        foreground: '${colors.text}',
      },
      fontFamily: {
        sans: ['${fontFamily.name}', 'sans-serif'],
      },
      spacing: {
        xs: '${spacingScale}px',
        sm: '${spacingScale * 2}px',
        md: '${spacingScale * 4}px',
        lg: '${spacingScale * 8}px',
        xl: '${spacingScale * 16}px',
      },
      borderRadius: {
        sm: '${spacingScale}px',
        md: '${spacingScale * 2}px',
        lg: '${spacingScale * 3}px',
      },
    },
  },
}`;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
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
          <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
            Generate production-ready design tokens from your brand guidelines. 
            Customize colors, typography, and spacing to create a consistent design system.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Controls Panel */}
          <AnimatedSection delay={0.1} className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden sticky top-24">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {(["colors", "typography", "spacing"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3.5 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "text-gray-900 border-b-2 border-gray-900 bg-gray-50"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Colors Tab */}
                <AnimatePresence mode="wait">
                  {activeTab === "colors" && (
                    <motion.div
                      key="colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Color Presets</label>
                        <div className="grid grid-cols-5 gap-2">
                          {colorPalettes.map((palette) => (
                            <button
                              key={palette.name}
                              onClick={() => setColors(palette)}
                              className={`group relative p-2 rounded-xl border-2 transition-all ${
                                colors.name === palette.name ? "border-gray-900" : "border-gray-100 hover:border-gray-300"
                              }`}
                            >
                              <div className="flex flex-col gap-1">
                                <div className="w-full h-8 rounded-lg" style={{ backgroundColor: palette.primary }} />
                                <div className="w-full h-8 rounded-lg" style={{ backgroundColor: palette.secondary }} />
                                <div className="w-full h-8 rounded-lg" style={{ backgroundColor: palette.accent }} />
                              </div>
                              <span className="text-[9px] text-gray-500 mt-1.5 block text-center">{palette.name}</span>
                              {colors.name === palette.name && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          { key: "primary", label: "Primary", color: colors.primary, desc: "Main actions, CTAs" },
                          { key: "secondary", label: "Secondary", color: colors.secondary, desc: "Secondary actions" },
                          { key: "accent", label: "Accent", color: colors.accent, desc: "Highlights, badges" },
                          { key: "text", label: "Text", color: colors.text, desc: "Primary text color" },
                          { key: "surface", label: "Surface", color: colors.surface, desc: "Card backgrounds" },
                          { key: "border", label: "Border", color: colors.border, desc: "Dividers, outlines" },
                        ].map((item) => (
                          <div key={item.key} className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <input
                                type="color"
                                value={item.color}
                                onChange={(e) => setColors({ ...colors, [item.key]: e.target.value })}
                                className="w-10 h-10 rounded-xl cursor-pointer border-0 bg-transparent"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                <span className="text-xs text-gray-400 font-mono">{item.color}</span>
                              </div>
                              <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Typography Tab */}
                  {activeTab === "typography" && (
                    <motion.div
                      key="typography"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Font Family</label>
                        <div className="grid grid-cols-2 gap-2">
                          {fontFamilies.map((font) => (
                            <button
                              key={font.name}
                              onClick={() => setFontFamily(font)}
                              className={`px-4 py-3 text-sm rounded-xl border transition-all ${
                                fontFamily.name === font.name
                                  ? "border-gray-900 bg-gray-900 text-white"
                                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                              style={{ fontFamily: font.value }}
                            >
                              <span className="block text-left">{font.name}</span>
                              <span className={`text-[10px] ${fontFamily.name === font.name ? "text-gray-400" : "text-gray-400"}`}>
                                Aa Bb Cc 123
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm font-medium text-gray-700">Base Font Size</label>
                          <span className="text-sm font-mono text-gray-900">{baseSize}px</span>
                        </div>
                        <input
                          type="range"
                          min="12"
                          max="20"
                          value={baseSize}
                          onChange={(e) => setBaseSize(Number(e.target.value))}
                          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-gray-900"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                          <span>12px (Small)</span>
                          <span>20px (Large)</span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="block text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Preview</label>
                        <div style={{ fontFamily: fontFamily.value, fontSize: `${baseSize}px` }}>
                          <p className="text-gray-900 font-bold" style={{ fontSize: `${baseSize * 2}px` }}>
                            Heading 1
                          </p>
                          <p className="text-gray-700 font-semibold mt-1" style={{ fontSize: `${baseSize * 1.5}px` }}>
                            Heading 2
                          </p>
                          <p className="text-gray-600 mt-1" style={{ fontSize: `${baseSize * 1.125}px` }}>
                            Heading 3
                          </p>
                          <p className="text-gray-500 mt-2" style={{ fontSize: `${baseSize}px` }}>
                            Body text - The quick brown fox jumps over the lazy dog.
                          </p>
                          <p className="text-gray-400 mt-1" style={{ fontSize: `${baseSize * 0.875}px` }}>
                            Small text - Additional details and captions.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Spacing Tab */}
                  {activeTab === "spacing" && (
                    <motion.div
                      key="spacing"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm font-medium text-gray-700">Base Unit</label>
                          <span className="text-sm font-mono text-gray-900">{spacingScale}px</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="8"
                          value={spacingScale}
                          onChange={(e) => setSpacingScale(Number(e.target.value))}
                          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-gray-900"
                        />
                        <p className="text-xs text-gray-400 mt-2">
                          All spacing values are multiples of this base unit
                        </p>
                      </div>

                      <div className="space-y-3">
                        {[
                          { name: "2xs", size: spacingScale * 0.5, desc: "Icon gaps" },
                          { name: "xs", size: spacingScale, desc: "Tight spacing" },
                          { name: "sm", size: spacingScale * 2, desc: "Component internal" },
                          { name: "md", size: spacingScale * 4, desc: "Section gaps" },
                          { name: "lg", size: spacingScale * 6, desc: "Card padding" },
                          { name: "xl", size: spacingScale * 8, desc: "Section spacing" },
                          { name: "2xl", size: spacingScale * 12, desc: "Page margins" },
                        ].map((spacing) => (
                          <div key={spacing.name} className="flex items-center gap-3">
                            <span className="text-xs font-mono text-gray-500 w-10">{spacing.name}</span>
                            <div className="flex-1 flex items-center gap-3">
                              <div 
                                className="h-5 bg-gray-900 rounded"
                                style={{ width: `${Math.max(4, Math.min(spacing.size * 1.5, 80))}px` }}
                              />
                              <span className="text-xs text-gray-400 w-16">{spacing.size}px</span>
                            </div>
                            <span className="text-xs text-gray-400 hidden sm:block">{spacing.desc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl">
                        <label className="block text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Visual Demo</label>
                        <div className="flex items-center gap-2">
                          <div className="h-8 px-3 flex items-center bg-gray-900 text-white text-xs rounded" style={{ padding: `${spacingScale}px ${spacingScale * 2}px` }}>
                            Button
                          </div>
                          <div className="h-8 px-3 flex items-center border border-gray-200 text-xs rounded" style={{ padding: `${spacingScale}px ${spacingScale * 2}px` }}>
                            Outlined
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>

          {/* Preview Panel */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <div className="space-y-6">
              {/* Live Preview */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-gray-400">Preview</span>
                  </div>
                  <div className="flex gap-1">
                    {componentCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setPreviewComponent(cat.id)}
                        className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                          previewComponent === cat.id
                            ? "bg-gray-900 text-white"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div 
                  className="p-8 min-h-[500px]"
                  style={{ 
                    backgroundColor: colors.bg, 
                    fontFamily: fontFamily.value,
                    color: colors.text
                  }}
                >
                  <AnimatePresence mode="wait">
                    {previewComponent === "buttons" && (
                      <motion.div
                        key="buttons"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">Primary Buttons</p>
                          <div className="flex flex-wrap gap-3">
                            <button 
                              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all hover:opacity-90"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Primary
                            </button>
                            <button 
                              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium opacity-75"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Disabled
                            </button>
                            <button 
                              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium flex items-center gap-2"
                              style={{ backgroundColor: colors.primary }}
                            >
                              <span>With Icon</span>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">Secondary Buttons</p>
                          <div className="flex flex-wrap gap-3">
                            <button 
                              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium transition-all hover:opacity-90"
                              style={{ backgroundColor: colors.secondary }}
                            >
                              Secondary
                            </button>
                            <button 
                              className="px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all"
                              style={{ borderColor: colors.secondary, color: colors.secondary }}
                            >
                              Outlined
                            </button>
                            <button 
                              className="px-5 py-2.5 rounded-xl text-sm font-medium"
                              style={{ backgroundColor: colors.surface, color: colors.text }}
                            >
                              Ghost
                            </button>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">Sizes</p>
                          <div className="flex items-center gap-3">
                            <button 
                              className="px-3 py-1.5 rounded-lg text-white text-xs font-medium"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Small
                            </button>
                            <button 
                              className="px-4 py-2 rounded-xl text-white text-sm font-medium"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Medium
                            </button>
                            <button 
                              className="px-6 py-3 rounded-xl text-white text-base font-medium"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Large
                            </button>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">With Accent</p>
                          <div className="flex flex-wrap gap-3">
                            <button 
                              className="px-5 py-2.5 rounded-xl text-white text-sm font-medium"
                              style={{ backgroundColor: colors.accent }}
                            >
                              Accent
                            </button>
                            <button 
                              className="px-5 py-2.5 rounded-xl text-sm font-medium border-2"
                              style={{ borderColor: colors.accent, color: colors.accent }}
                            >
                              Accent Outline
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {previewComponent === "inputs" && (
                      <motion.div
                        key="inputs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6 max-w-md"
                      >
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2"
                            style={{ 
                              borderColor: colors.border,
                              backgroundColor: colors.surface,
                              color: colors.text,
                              "--tw-ring-color": colors.primary,
                            } as any}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
                            Select Option
                          </label>
                          <div className="space-y-2">
                            {["Option A", "Option B", "Option C"].map((option) => (
                              <button
                                key={option}
                                onClick={() => setSelectedOption(option)}
                                className="w-full px-4 py-3 rounded-xl border text-sm text-left flex items-center justify-between transition-all"
                                style={{ 
                                  borderColor: selectedOption === option ? colors.primary : colors.border,
                                  backgroundColor: selectedOption === option ? colors.primary + "10" : colors.surface,
                                  color: colors.text,
                                }}
                              >
                                <span>{option}</span>
                                {selectedOption === option && (
                                  <svg className="w-5 h-5" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                          <span className="text-sm font-medium" style={{ color: colors.text }}>Enable notifications</span>
                          <button
                            onClick={() => setToggleOn(!toggleOn)}
                            className="relative w-12 h-6 rounded-full transition-all"
                            style={{ backgroundColor: toggleOn ? colors.primary : colors.border }}
                          >
                            <div 
                              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all"
                              style={{ left: toggleOn ? "26px" : "2px" }}
                            />
                          </button>
                        </div>

                        <button 
                          className="w-full px-5 py-3 rounded-xl text-white text-sm font-medium"
                          style={{ backgroundColor: colors.primary }}
                        >
                          Submit Form
                        </button>
                      </motion.div>
                    )}

                    {previewComponent === "cards" && (
                      <motion.div
                        key="cards"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="p-5 rounded-2xl border" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primary + "20" }}>
                            <svg className="w-5 h-5" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-semibold mb-1" style={{ fontSize: `${baseSize}px` }}>Fast Loading</h3>
                          <p className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>Optimized for speed and performance</p>
                        </div>

                        <div className="p-5 rounded-2xl border" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                          <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: colors.secondary + "20" }}>
                            <svg className="w-5 h-5" style={{ color: colors.secondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="font-semibold mb-1" style={{ fontSize: `${baseSize}px` }}>Secure</h3>
                          <p className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>Enterprise-grade security built-in</p>
                        </div>

                        <div className="col-span-2 p-5 rounded-2xl border" style={{ borderColor: colors.primary, backgroundColor: colors.surface }}>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: colors.accent }} />
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1" style={{ fontSize: `${baseSize}px` }}>Featured Card</h3>
                              <p className="text-sm mb-3" style={{ color: colors.text, opacity: 0.7 }}>
                                A larger card component for highlighting important content or featured items.
                              </p>
                              <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: colors.primary }}>
                                  Learn More
                                </button>
                                <button className="px-4 py-2 rounded-lg text-xs font-medium border" style={{ borderColor: colors.border, color: colors.text }}>
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {previewComponent === "badges" && (
                      <motion.div
                        key="badges"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Status Badges</p>
                          <div className="flex flex-wrap gap-2">
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: colors.primary + "20", color: colors.primary }}
                            >
                              Primary
                            </span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: colors.secondary + "20", color: colors.secondary }}
                            >
                              Secondary
                            </span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: colors.accent + "20", color: colors.accent }}
                            >
                              Accent
                            </span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700"
                            >
                              Success
                            </span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700"
                            >
                              Warning
                            </span>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700"
                            >
                              Error
                            </span>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Pill Badges</p>
                          <div className="flex flex-wrap gap-2">
                            <span 
                              className="px-3 py-1.5 rounded-xl text-xs font-medium border"
                              style={{ borderColor: colors.border, color: colors.text }}
                            >
                              Outline
                            </span>
                            <span 
                              className="px-3 py-1.5 rounded-xl text-xs font-medium"
                              style={{ backgroundColor: colors.surface, color: colors.text }}
                            >
                              Subtle
                            </span>
                            <span 
                              className="px-3 py-1.5 rounded-xl text-xs font-medium text-white"
                              style={{ backgroundColor: colors.primary }}
                            >
                              Solid
                            </span>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">With Icons</p>
                          <div className="flex flex-wrap gap-2">
                            <span 
                              className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5"
                              style={{ backgroundColor: colors.primary + "20", color: colors.primary }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }} />
                              Live
                            </span>
                            <span 
                              className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5"
                              style={{ backgroundColor: colors.secondary + "20", color: colors.secondary }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.secondary }} />
                              Updated
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Export Panel */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Export Design Tokens</h3>
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => copyToClipboard(exportToCSS(), "css")}
                    className="flex-1 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    {copied === "css" ? "✓ Copied!" : "CSS Variables"}
                  </button>
                  <button
                    onClick={() => copyToClipboard(exportToTailwind(), "tailwind")}
                    className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    {copied === "tailwind" ? "✓ Copied!" : "Tailwind Config"}
                  </button>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 overflow-auto max-h-48">
                  <pre className="text-xs text-green-400 font-mono leading-relaxed">
                    {copied === "css" ? exportToCSS() : copied === "tailwind" ? exportToTailwind() : generateTokens()}
                  </pre>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Want the Full Version?</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Get the Figma plugin to generate complete design systems with AI-powered component suggestions.
                    </p>
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Get the Plugin
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
