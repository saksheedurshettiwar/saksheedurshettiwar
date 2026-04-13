"use client";

interface HatchingPatternProps {
  className?: string;
  lineColor?: string;
  opacity?: number;
  angle?: number;
  spacing?: number;
}

export function HatchingPattern({
  className = "",
  lineColor = "#d1d5db",
  opacity = 0.3,
  angle = 45,
  spacing = 8,
}: HatchingPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(${angle}deg, ${lineColor} 1px, transparent 1px),
          linear-gradient(${-angle}deg, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
      }}
    />
  );
}
