"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface GridFillProps {
  className?: string;
  cellSize?: number;
  gap?: number;
  fillColor?: string;
  baseColor?: string;
  fillDuration?: number;
}

export function GridFill({
  className = "",
  cellSize = 40,
  gap = 1,
  fillColor = "#374151",
  baseColor = "#e5e7eb",
  fillDuration = 400,
}: GridFillProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filledCells, setFilledCells] = useState<Set<string>>(new Set());
  const timeoutRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const getGridPosition = useCallback((x: number, y: number) => {
    const cellTotal = cellSize + gap;
    const col = Math.floor(x / cellTotal);
    const row = Math.floor(y / cellTotal);
    return `${col}-${row}`;
  }, [cellSize, gap]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pos = getGridPosition(x, y);

    setFilledCells((prev) => {
      if (prev.has(pos)) return prev;
      const next = new Set(prev);
      next.add(pos);
      return next;
    });

    if (timeoutRef.current.has(pos)) {
      clearTimeout(timeoutRef.current.get(pos));
    }

    const timeout = setTimeout(() => {
      setFilledCells((prev) => {
        const next = new Set(prev);
        next.delete(pos);
        timeoutRef.current.delete(pos);
        return next;
      });
    }, fillDuration);

    timeoutRef.current.set(pos, timeout);
  }, [getGridPosition, fillDuration]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      timeoutRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, rgba(243, 244, 246, 1) 0%, transparent 100%)
        `,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, ${cellSize}px)`,
          gridTemplateRows: `repeat(auto-fill, ${cellSize}px)`,
          gap: `${gap}px`,
          padding: gap,
        }}
      >
        {Array.from({ length: 400 }).map((_, i) => {
          const col = i % 20;
          const row = Math.floor(i / 20);
          const key = `${col}-${row}`;
          const isFilled = filledCells.has(key);

          return (
            <div
              key={i}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: isFilled ? fillColor : baseColor,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
