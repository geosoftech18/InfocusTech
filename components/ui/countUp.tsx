"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  initialValue: number;
  finalValue: number;
  symbol?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  initialValue,
  finalValue,
  symbol,
}) => {
  const [val, setVal] = useState(initialValue);

  const timeJump = 2000 / (finalValue - initialValue);

  useEffect(() => {
    let i = initialValue;
    const timer = setInterval(() => {
      setVal(i++);
      if (i > finalValue) {
        clearInterval(timer);
      }
    }, timeJump);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="text-3xl flex items-center justify-center gap-0 font-bold">
      <div>{val}</div> <div>{symbol}</div>
    </div>
  );
};

export default CountUp;
