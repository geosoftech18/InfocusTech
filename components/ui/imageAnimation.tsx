"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedImageProps {
  children: React.ReactNode;
  hoverScale?: number;
  animationDuration?: number;
  gradientIntensity?: string;
  gradientWidth?: string;
  className?: string;
}

const AnimatedImage = ({
  children
}: AnimatedImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
        initial={false}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden h-full"
      >
        {/* White shadow animation - Fixed version */}
        <motion.div
          initial={{ opacity: 0, left: "50%", right: "50%" }}
          animate={
            isHovered 
              ? { 
                  opacity: 1, 
                  left: "-100%", 
                  right: "-100%",
                  transition: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }
              : { 
                  opacity: 0, 
                  left: "100%", 
                  right: "100%",
                  transition: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }
          }
          className="absolute top-0 h-full bg-gradient-to-r from-white/30 via-transparent to-white/30 pointer-events-none"
        />
      {children}
    </motion.div>
  );
};

export default AnimatedImage;