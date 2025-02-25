import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
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
      className="w-screen max-w-full mx-auto h-[60vh] relative"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="h-full">
        {HeroItems.map((item, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="w-screen flex items-center gap-5 lg:gap-5 pt-5 lg:pt-10 h-[50vh] flex-col bg-gray-400">
                <CardTitle className="text-3xl flex items-center justify-center flex-col">
                  <div>{item.title}</div>
                  <div className="font-semibold text-gray-900">
                    {item.boldTitle}
                  </div>
                </CardTitle>
                <CardContent className="flex items-center flex-col lg:gap-5 justify-center lg:p-6">
                  <span className="text-md sm:text-lg lg:text-lg text-2xl font-medium text-center text-gray-800 max-w-2xl">
                    {item.description}
                  </span>
                  <Button
                    variant={"default"}
                    size={"lg"}
                    className="w-2/4 mt-5 lg:w-2/4"
                  >
                    {item.cta_button_text}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 shadow-md hover:bg-gray-700" /> */}
      {/* <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 shadow-md hover:bg-gray-700" /> */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
        {HeroItems.map((item, index) => (
          <div
          key={index}
            className={`${
              current === index + 1 ? "bg-black scale-125  transition-all duration-200" : "bg-gray-600  border-black"
            } rounded-full h-2 w-2`}
          >
            {/* Slide {current},{index+1} of {count} */}
          </div>
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousal;
