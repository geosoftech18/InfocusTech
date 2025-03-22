"use client";
import { Card, CardContent } from "@/components/ui/card";
import CarousalBullets from "@/components/ui/carousalBullets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export interface BenefitsData {
  tag: string;
  items: {
    imagePath: string;
    name: string;
    description: string;
  }[];
};

export interface BenefitsSapImplementationProps {
  Data:BenefitsData
}

const BenefitsSapImplementation: React.FC<BenefitsSapImplementationProps> = ({
  Data,
}) => {

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
    <div className="h-[40vh] md:h-screen lg:h-[40vh] my-32  relative bg-[#b00d07] px-10 xl:px-28">
      <div className="flex items-center justify-center text-gray-100 pt-10 text-3xl font-semibold">
        {Data.tag}
      </div>
      <Carousel
      setApi={setApi}
        className="absolute inset-0 top-1/2 px-10 lg:px-40"
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
        <CarouselContent>
          {Data.items.map((item, index) => (
            <CarouselItem
              key={index}
              className="mx-auto sm:basis-1 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="flex flex-col items-center justify-center rounded-lg rounded-b-[30px]  py-5 h-80">
                <CardContent className="flex items-center justify-between flex-col font-semibold text-2xl text-center  h-full">
                  <Image
                    alt="People working"
                    height={100}
                    width={100}
                    src={item.imagePath}
                    className=" h-1/3 w-1/3"
                  />
                  <div className="flex items-center justify-between gap-4 py-2 flex-col h-5/6">
                    <div className="">{item.name}</div>
                    <div className="text-gray-600 overflow-y-scroll no-scrollbar flex items-start justify-center h-full text-xs md:text-sm font-normal text-center">
                      {item.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-0 md:right-20 text-black bg-gray-200 rounded-full p-2 shadow-md " />
        <CarouselPrevious className="left-0 md:left-20 text-black bg-gray-200 rounded-full p-2 shadow-md " />

        <div className="flex items-center justify-center m-10 lg:m-2 lg:mt-8 gap-2">
        {Data.items.map((_, index) => (
         <CarousalBullets key={index} index={index} current={current}/>
        ))}
      </div>
      </Carousel>
    </div>
  );
};

export default BenefitsSapImplementation;
