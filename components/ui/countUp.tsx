"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  initialValue: number;
  finalValue: number;
  symbol?: string;
}

const CountUp: React.FC<CountUpProps> = ({ initialValue, finalValue, symbol }) => {
  const [val, setVal] = useState(initialValue);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const timeJump = 2000 / (finalValue - initialValue);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.5 } // Adjust threshold if needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = initialValue;
    const timer = setInterval(() => {
      setVal((prev) => (prev < finalValue ? prev + 1 : prev));
      if (i >= finalValue) {
        clearInterval(timer);
      }
      i++;
    }, timeJump);

    return () => clearInterval(timer);
  }, [isVisible, initialValue, finalValue, timeJump]);

  return (
    <div ref={ref} className="text-3xl flex items-center justify-center gap-0 font-bold">
      <div>{val}</div> <div>{symbol}</div>
    </div>
  );
};

export default CountUp;
