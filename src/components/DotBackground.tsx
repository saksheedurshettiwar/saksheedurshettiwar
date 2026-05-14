"use client";

import { useEffect, useRef } from "react";

interface DotBackgroundProps {
  className?: string;
  dotSize?: number;
  dotGap?: number;
  color?: string;
  maxOpacity?: number;
}

export function DotBackground({
  className = "",
  dotSize = 1.5,
  dotGap = 16,
  color = "#d1d5db",
  maxOpacity = 0.4,
}: DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.8;
      const progress = Math.min(scrollY / fadeStart, 1);
      const opacity = maxOpacity * (1 - progress * 0.7);

      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const cols = Math.ceil(rect.width / dotGap) + 1;
      const rows = Math.ceil(rect.height / dotGap) + 1;
      const offsetX = (rect.width - (cols - 1) * dotGap) / 2;
      const offsetY = (rect.height - (rows - 1) * dotGap) / 2;

      ctx.fillStyle = color;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * dotGap;
          const y = offsetY + row * dotGap;
          
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      draw();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", draw);
    };
  }, [dotSize, dotGap, color, maxOpacity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}