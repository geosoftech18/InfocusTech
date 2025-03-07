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
      className="w-full mx-auto h-full flex items-center justify-start pt-16 xl:pt-32 flex-col relative"
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
      <CarouselContent className="h-full max-w-[100vw]">
        {HeroItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center  items-center"
          >
            <Card className="w-full h-full border-none rounded-none flex flex-col items-center gap-3 sm:gap-10 py-5 3xl:gap-20  bg-transparent">
              <CardTitle className="text-2xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl font-semibold text-center z-20  text-white">
                {item.title} <br />
                <span className="font-bold">{item.boldTitle}</span>
              </CardTitle>
              <CardContent className="flex px-10 flex-col items-center text-center gap-10 3xl:gap-20  max-w-3xl">
                <span className="text-sm lg:text-md 2xl:text-xl 3xl:text-2xl font-medium text-white ">
                  {item.description}
                </span>
                <Button
                  variant="default"
                  size="lg"
                  className="sm:w-2/4 lg:w-1/3 lg:h-8 3xl:w-3/4 3xl:h-14"
                >
                  {item.cta_button_text}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2">
        {HeroItems.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1  2xl:h-2 2xl:w-2 rounded-full transition-all duration-200 ${
              current === index + 1 ? "bg-black scale-[200%]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousal;
