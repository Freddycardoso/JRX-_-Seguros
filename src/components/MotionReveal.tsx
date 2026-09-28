'use client';

import React from 'react';
import { motion } from 'motion/react';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.32, 0.72, 0, 1] // Custom cubic-bezier from the design system
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
