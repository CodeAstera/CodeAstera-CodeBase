'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TextHoverEffectProps {
  text: string;
  duration?: number;
}

const TextHoverEffect: React.FC<TextHoverEffectProps> = ({ text }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 100"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
      style={{
        filter: isAnimationComplete ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' : 'none'
      }}
    >
      <defs>
        <linearGradient id={`textGradient-${text}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#f9cb28" />
        </linearGradient>
      </defs>
      
      {/* Base text (invisible until animation completes) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold text-7xl"
        style={{
          fill: isAnimationComplete ? `url(#textGradient-${text})` : 'transparent',
          transition: 'fill 0.5s ease',
        }}
      >
        {text}
      </text>
      
      {/* Animated stroke text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.7"
        className="font-bold text-7xl"
        style={{
          stroke: 'white',
          fill: 'transparent',
        }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
        }}
        transition={{

          duration: 4,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          setIsAnimationComplete(true);
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};

export default TextHoverEffect;