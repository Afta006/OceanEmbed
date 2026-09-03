import { useEffect, useRef, useState } from "react";
import { C } from "../theme";

function AnimatedPath({ d, color, delay = 0 }) {
  const ref = useRef(null);
  const [length, setLength] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (ref.current) setLength(ref.current.getTotalLength());
  }, [d]);

  useEffect(() => {
    if (!length) return;
    if (reducedMotion.current) {
      setDrawn(true);
      return;
    }
    const t = setTimeout(() => setDrawn(true), delay);
    return () => clearTimeout(t);
  }, [length, delay]);

  return (
    <path
      ref={ref}
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      style={{
        strokeDasharray: length,
        strokeDashoffset: drawn ? 0 : length,
        transition: reducedMotion.current ? "none" : "stroke-dashoffset 1s ease",
      }}
    />
  );
}

export default function DepthChart({ series, xLabel = "Temperature (°C)", maxDepth = 1000, height = 300 }) {
  const width = 460;
  const padding = { top: 10, right: 16, bottom: 34, left: 46 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;
  const allValues = series.flatMap((s) => s.data.map((d) => d.value));
  const minX = Math.min(...allValues) - 0.5;
  const maxX = Math.max(...allValues) + 0.5;
  const xScale = (v) => padding.left + ((v - minX) / (maxX - minX)) * plotW;
  const yScale = (d) => padding.top + (d / maxDepth) * plotH;
  const depthTicks = [0, 100, 200, 300, 500, 700, 1000].filter((d) => d <= maxDepth);
  const xTicks = Array.from({ length: 5 }, (_, i) => minX + (i / 4) * (maxX - minX));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height}>
      {depthTicks.map((d) => (
        <g key={d}>
          <line x1={padding.left} x2={width - padding.right} y1={yScale(d)} y2={yScale(d)} stroke={C.border} strokeDasharray="3 3" />
          <text x={padding.left - 8} y={yScale(d) + 4} fontSize="10" fill={C.dim} textAnchor="end" fontFamily="'IBM Plex Mono', monospace">{d}m</text>
        </g>
      ))}
      {xTicks.map((v, i) => (
        <text key={i} x={xScale(v)} y={height - padding.bottom + 16} fontSize="10" fill={C.dim} textAnchor="middle" fontFamily="'IBM Plex Mono', monospace">{v.toFixed(1)}</text>
      ))}
      <text x={width / 2} y={height - 4} fontSize="11" fill={C.dim} textAnchor="middle">{xLabel}</text>
      {series.map((s, si) => {
        const sorted = [...s.data].sort((a, b) => a.depth - b.depth);
        const path = sorted.map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.value)} ${yScale(p.depth)}`).join(" ");
        return (
          <g key={s.name}>
            <AnimatedPath d={path} color={s.color} delay={si * 150} />
            {sorted.map((p, i) => (
              <circle
                key={i}
                cx={xScale(p.value)}
                cy={yScale(p.depth)}
                r="3"
                fill={s.color}
                style={{
                  opacity: 0,
                  animation: `oe-fade-in 0.4s ease ${si * 150 + 600 + i * 25}ms forwards`,
                }}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}