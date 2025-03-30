"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "./card";

interface FlipCardProps {
  imagePath?: string;
  name?: string;
  title: string;
  description: string;
  index?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imagePath,
  name,
  title,
  description,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(!isFlipped)}
      onClick={() => setIsFlipped(!isFlipped)}
      className="p-4 relative shadow-lg rounded-xl transition-transform duration-300 ease-in-out"
    >
      <div className="absolute inset-0 bg-[url('/vectors/5.png')] bg-cover bg-center opacity-[5%]"></div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* FRONT SIDE */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          {imagePath && (
            <Image
              src={imagePath}
              alt={name || "Image"}
              height={1000}
              width={1000}
              className="w-full h-full rounded-lg object-cover"
            />
          )}
          {name && (
            <div className="text-lg font-semibold text-gray-900">{name}</div>
          )}
          <div className="text-sm text-gray-600">{title}</div>
        </div>

        {/* BACK SIDE */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <CardContent className="text-gray-700 text-sm md:text-base font-medium">
            {description}
          </CardContent>
          {/* <CheckCircle className="text-green-500 mt-3" size={24} /> */}
        </div>
      </ReactCardFlip>
    </Card>
  );
};

export default FlipCard;
