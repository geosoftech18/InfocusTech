import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

interface HeroCarousalItem{
  title: string;
  boldTitle: string;
  description: string;
  cta_button_text:string
}

interface HeroCarousalProps {
  HeroItems:HeroCarousalItem[]
}


const HeroCarousal:React.FC<HeroCarousalProps>=({HeroItems})=> {
  return (
    <Carousel
      className="w-screen max-w-full mx-auto "
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {HeroItems.map((item, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="w-screen flex items-center gap-5 lg:gap-5 pt-5 lg:pt-10  flex-col bg-gray-400">
                <CardTitle className="text-3xl lg:text-6xl flex items-center justify-center flex-col">
                  <div>{item.title}</div>
                  <div className="font-semibold text-gray-900">
                    {item.boldTitle}
                  </div>
                </CardTitle>
                <CardContent className="flex items-center flex-col lg:gap-5 justify-center lg:p-6">
                  <span className="text-md sm:text-lg lg:text-lg text-2xl font-medium text-center max-w-2xl">
                    {item.description}
                  </span>
                  <Button variant={"default"} size={"lg"} className="w-2/4 mt-5 lg:w-2/4">{item.cta_button_text}</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 shadow-md hover:bg-gray-700" /> */}
      {/* <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 shadow-md hover:bg-gray-700" /> */}
    </Carousel>
  );
}

export default HeroCarousal


