"use client";

import { color } from "framer-motion";
import { ReactNode } from "react";

interface UnderlineAnimationProps {
  children: ReactNode;
  colour?: string;
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({
  children,colour
}) => {
  return (
    <div className="">
      <div className="relative group inline-block transition-all cursor-pointer">
        {children}
        <span
          className={`absolute left-[-10px] bottom-0 w-1/2 
          ${ colour==="white"? 'border-white' : 'border-red-600' }
            opacity-0 border-b-2  transition-all duration-300 group-hover:opacity-100 group-hover:left-0 group-hover:w-full`}
        ></span>
      </div>
    </div>
  );
};
//  ${color ? `border-[${color}]` : "border-red-600 "} 
export default UnderlineAnimation;
