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

const KeyFeatureSapImplementation: React.FC<
  KeyFeatureSapImplementationProps
> = ({ KeyFeatureSapImplementationData }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="flex flex-col gap-10 items-center justify-center mx-10 md:mx-40 overflow-hidden"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <div className="text-black text-2xl md:text-3xl font-semibold">
        {KeyFeatureSapImplementationData.tag}
      </div>
      <CarouselContent>
        {KeyFeatureSapImplementationData.keyFeatures.map((item, index) => (
          <CarouselItem
            className="mx-auto sm:basis-1 md:basis-1/2 lg:basis-1/4"
            key={index}
          >
            <Card className="flex flex-col items-center justify-center rounded-lg bg-gray-200 py-5 h-80">
              <CardContent className="flex flex-col items-center justify-between text-center h-full px-4">
                <Image
                  alt="People working"
                  height={100}
                  width={100}
                  src={item.imagePath}
                  className="h-24 w-h-24 object-contain pb-2"
                />
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-gray-600 text-sm text-center px-2">
                    {item.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute " />
      <CarouselNext className="absolute" />

      <div className="flex items-center justify-center gap-2 m-2">
        {KeyFeatureSapImplementationData.keyFeatures.map((_, index) => (
          <div
            key={index}
            className={`${
              current === index + 1
                ? "bg-black scale-125 transition-all duration-200"
                : "bg-gray-400"
            } rounded-full h-2 w-2`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default KeyFeatureSapImplementation;
