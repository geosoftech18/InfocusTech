"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ForcedScrollProps {
  scrollAmount: number; 
  children: React.ReactNode;
}

const ForcedScroll: React.FC<ForcedScrollProps> = ({ scrollAmount, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

  useEffect(() => {
    async function animateScroll() {
      if (inView) {
        await controls.start({
          y: -scrollAmount,
          transition: { duration: 0.5},
        });
        await new Promise(resolve => setTimeout(resolve, 500));
        await controls.start({
          y: 0,
          transition: { duration: 0.5},
        });
      }
    }
    animateScroll();
  }, [inView, controls, scrollAmount]);

  return (
    <motion.div 
      className="overflow-y-scroll no-scrollbar col-span-2" 
      ref={ref} 
      animate={controls} 
      initial={{ y: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default ForcedScroll;
