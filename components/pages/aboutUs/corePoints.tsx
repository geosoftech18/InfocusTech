"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import CountUp from "@/components/ui/countUp";
import CarousalBullets from "@/components/ui/carousalBullets";

export interface CorePointsData {
  title: string;
  subTitle: string;
  cardData: {
    number: string;
    symbol: string;
    caption: string;
    imagePath: string;
  }[];
}

interface CorePointsInterface {
  CorePointsData: CorePointsData;
}

const CorePoints: React.FC<CorePointsInterface> = ({ CorePointsData }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className="relative px-10 md:px-40 mt-20 py-10 text-white bg-cover"
      style={{
        backgroundColor: "#b00d07",
        backgroundImage: "url('/vectors/3.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="flex flex-col gap-5 mb-10">
          <div className="text-3xl max-w-4xl font-bold">
            {CorePointsData.title}
          </div>
          <div className="text-sm md:text-lg w-3/4">
            {CorePointsData.subTitle}
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          className="relative"
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
          <CarouselContent>
            {CorePointsData.cardData.map((data, index) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/5 relative"
                key={index}
              >
                <Card className="col-span-1 h-full p-5 flex items-center justify-start flex-col  bg-white text-black shadow-md">
                  <CardTitle className="mb-5">
                    <Image
                      src={data.imagePath}
                      width={100}
                      height={100}
                      alt=""
                      className="h-14 w-14 font-bold"
                    />
                  </CardTitle>
                  <CardContent className="flex p-0 flex-col gap-2 text-center ">
                    {/* <CountUp
                      initialValue={0}
                      finalValue={Number(data.number)}
                      symbol={data.symbol}
                    /> */}
                    <div className="text-xs md:text-sm font-medium">
                      {data.caption}
                    </div>
                    <div className="">{data.number}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          {/* {CorePointsData.cardData.length > 5 && (
            <>
              <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
              <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
            </>
          )} */}

          {/* Carousel Bullets */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {CorePointsData.cardData.map((_, index) => (
              <CarousalBullets key={index} current={current} index={index} />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CorePoints;
