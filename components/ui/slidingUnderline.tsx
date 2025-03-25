"use client";

import { ReactNode } from "react";

interface UnderlineAnimationProps {
  children: ReactNode;
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({ children  }) => {
  return (
    <div className="">
      <div  className="relative group transition-all cursor-pointer">
        {children}
        <span className="absolute left-[-10px] bottom-0 w-1/2 opacity-0 border-b-2 border-red-600 transition-all duration-300 group-hover:opacity-100 group-hover:left-0 group-hover:w-full"></span>
      </div>
    </div>
  );
};

export default UnderlineAnimation;
