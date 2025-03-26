"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

interface SlicerSliderProps {
    children: React.ReactNode;
    slices?: number;
    direction?: "horizontal" | "vertical";
    intensity?: number;
    duration?: number;
    delay?: number;
    trigger?: boolean; // Add this
  }

const SlicerSlider: React.FC<SlicerSliderProps> = ({
  children,
  slices = 10,
  direction = "horizontal",
  intensity = 50,
  duration = 1,
  delay = 0,
  trigger = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      const timer = setTimeout(() => setIsActive(false), duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);


  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getClipPath = (index: number) => {
    if (direction === "horizontal") {
      return `polygon(
        ${(index / slices) * 100}% 0%, 
        ${((index + 1) / slices) * 100}% 0%, 
        ${((index + 1) / slices) * 100}% 100%, 
        ${(index / slices) * 100}% 100%
      )`;
    } else {
      return `polygon(
        0% ${(index / slices) * 100}%, 
        100% ${(index / slices) * 100}%, 
        100% ${((index + 1) / slices) * 100}%, 
        0% ${((index + 1) / slices) * 100}%
      )`;
    }
  };

  const getTransform = (index: number) => {
    const isEven = index % 2 === 0;
    const sign = isEven ? 1 : -1;
    
    if (direction === "horizontal") {
      return `translateX(${sign * intensity}px) rotateY(${sign * 15}deg)`;
    } else {
      return `translateY(${sign * intensity}px) rotateX(${sign * -15}deg)`;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div ref={ref} className="absolute inset-0" />
      
      <AnimatePresence>
        {inView && (
          <div className="relative w-full h-full">
            {Array.from({ length: slices }).map((_, index) => {
              const sliceDelay = delay + index * (duration / slices);
              
              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    clipPath: getClipPath(index),
                    transformStyle: "preserve-3d",
                  }}
                  initial={{
                    opacity: 0,
                    transform: getTransform(index),
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0) rotateY(0) translateY(0) rotateX(0)",
                  }}
                  exit={{
                    opacity: 0,
                    transform: getTransform(index),
                  }}
                  transition={{
                    duration: duration * 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: sliceDelay,
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      background: "inherit",
                    }}
                    initial={{
                      scale: 1.2,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: duration * 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: sliceDelay,
                    }}
                    
                  >
                    {children}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlicerSlider;