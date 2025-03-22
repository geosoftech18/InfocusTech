'use client';

import { useState } from 'react';

const HoverAccordion: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-blue-300 text-lg transition-all duration-300 ease-in-out ${isHovered ? 'w-48 h-48' : 'w-24 h-24'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover Me
    </div>
  );
};

export default HoverAccordion;
