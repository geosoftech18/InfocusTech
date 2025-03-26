"use client";

import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CarousalBullets from "@/components/ui/carousalBullets";
import SlicerSlider from "@/components/ui/sliderslider";
import Link from "next/link";

export interface HeroCarousalItem {
  title: string;
  boldTitle: string;
  description: string;
  cta_button_text: string;
}

interface HeroCarousalProps {
  HeroItems: HeroCarousalItem[];
}

const HeroCarousal: React.FC<HeroCarousalProps> = ({ HeroItems }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [animationKey, setAnimationKey] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap() + 1;
      setCurrent(newIndex);
      setAnimationKey((prev) => prev + 1); // Force re-animation
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full mx-auto h-full flex items-center justify-start pt-16 xl:pt-32 flex-col relative"
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
      <CarouselContent className="h-full w-screen">
        {HeroItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center h-[500px]" // Fixed height
          >
            <div className="w-full h-full relative">
              <SlicerSlider
                key={`${animationKey}-${index}`} // Force re-render
                slices={10}
                direction="horizontal"
                intensity={40}
                duration={2}
                delay={0.1}
                trigger={current === index + 1} // Sync with carousel
              >
                <Card className="w-full h-full border-none rounded-none flex flex-col items-center gap-3 sm:gap-10 py-5 3xl:gap-20 bg-transparent backdrop-blur-sm">
                  <CardTitle className="text-2xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center z-20 text-white">
                    {item.title} <br />
                    <span className="font-bold">{item.boldTitle}</span>
                  </CardTitle>
                  <CardContent className="flex px-10 flex-col items-center text-center gap-10 3xl:gap-20 w-full">
                    <span className="text-sm lg:text-md 2xl:text-xl 3xl:text-2xl font-medium text-white">
                      {item.description}
                    </span>
                    <Link
                      className="sm:w-2/4 lg:w-1/3 lg:h-12  bg-black text-white rounded-lg py-2
                      flex items-center justify-center"
                      href={"/contactus"}
                    >
                      {item.cta_button_text}
                    </Link>
                  </CardContent>
                </Card>
              </SlicerSlider>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Pagination Dots */}
      <div className="absolute bottom-14 flex items-center gap-2">
        {HeroItems.map((_, index) => (
          <CarousalBullets key={index} current={current} index={index} />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousal;
