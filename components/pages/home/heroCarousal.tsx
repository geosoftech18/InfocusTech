import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import { type CarouselApi } from "@/components/ui/carousel";

interface HeroCarousalItem {
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
      className="w-full mx-auto h-full flex items-start pt-32 justify-center relative"
      opts={{
        align: "start",
        loop: true,
      }}
      // plugins={[
      //   Autoplay({
      //     delay: 3000,
      //   }),
      // ]}
    >
      <CarouselContent className="h-full">
        {HeroItems.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center  items-center">
            <Card className="w-full border-none rounded-none flex flex-col items-center gap-3 sm:gap-10 py-5  bg-transparent">
              <CardTitle className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center z-20  text-white">
                {item.title} <br />
                <span className="font-bold">{item.boldTitle}</span>
              </CardTitle>
              <CardContent className="flex flex-col items-center text-center gap-10 px-4  max-w-3xl">
                <span className="text-sm sm:text-lg lg:text-xl font-medium text-white ">
                  {item.description}
                </span>
                <Button
                  variant="default"
                  size="lg"
                  className="w-3/4 sm:w-2/4 lg:w-1/3"
                >
                  {item.cta_button_text}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-1/4  left-1/2 -translate-x-1/2 flex items-center gap-2">
        {HeroItems.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-200 ${
              current === index + 1 ? "bg-black scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousal;
