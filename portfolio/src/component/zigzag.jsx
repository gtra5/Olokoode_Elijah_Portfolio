import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZigZagLine() {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate line drawing
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Color palette for each segment
  const colors = [
    "#D9F23D", // lime
    "#FF6B6B", // coral red
    "#4ECDC4", // turquoise
    "#FFE66D", // yellow
    "#A8DADC", // light blue
    "#F1C0E8", // pink
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 400 900"
        className="w-full h-full"
        fill="none"
      >
        {/* First segment - top to first zig */}
        <motion.path
          d="M 100 0 L 300 150"
          stroke={colors[0]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Second segment */}
        <motion.path
          d="M 300 150 L 100 300"
          stroke={colors[1]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Third segment */}
        <motion.path
          d="M 100 300 L 300 450"
          stroke={colors[2]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Fourth segment */}
        <motion.path
          d="M 300 450 L 100 600"
          stroke={colors[3]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Fifth segment */}
        <motion.path
          d="M 100 600 L 300 750"
          stroke={colors[4]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        
        {/* Sixth segment */}
        <motion.path
          d="M 300 750 L 100 900"
          stroke={colors[5]}
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
      </svg>
    </div>
  );
}