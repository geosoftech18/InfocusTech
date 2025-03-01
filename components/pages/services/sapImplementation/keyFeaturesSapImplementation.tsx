"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

interface KeyFeatureSapImplementationProps {
  KeyFeatureSapImplementationData: {
    tag: string;
    keyFeatures: {
      imagePath: string;
      title: string;
      description: string;
    }[];
  };
}

const KeyFeatureSapImplementation: React.FC<KeyFeatureSapImplementationProps> = ({
  KeyFeatureSapImplementationData,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-screen-xl mx-auto px-10">
      <h2 className="text-black text-2xl md:text-3xl font-semibold text-center mb-6">
        {KeyFeatureSapImplementationData.tag}
      </h2>

      <Carousel
        setApi={setApi}
        className="relative flex flex-col gap-6"
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent className="flex mx-auto">
          {KeyFeatureSapImplementationData.keyFeatures.map((item, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1 md:basis-1/2 lg:basis-1/3 px-2"
            >
              <Card className="flex flex-col items-center justify-center rounded-xl bg-gray-100  py-6 h-80">
                <CardContent className="flex flex-col items-center justify-between text-center h-full px-6">
                  <Image
                    alt={item.title}
                    height={100}
                    width={100}
                    src={item.imagePath}
                    className="h-24 w-24 object-contain pb-2"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm text-center px-2 whitespace-pre-line">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute inset-y-1/2 -left-10 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition" />
        <CarouselNext className="absolute inset-y-1/2 -right-10 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition" />

        {/* Bullet Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {KeyFeatureSapImplementationData.keyFeatures.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                current === index + 1
                  ? "bg-black scale-125"
                  : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default KeyFeatureSapImplementation;
