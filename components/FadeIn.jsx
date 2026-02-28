"use client";

import { motion } from "framer-motion";

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  as: Tag = "div",
  direction = "up"
}) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
