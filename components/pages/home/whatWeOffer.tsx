"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import React, { useState } from "react";
import Image from "next/image";

interface DoorComponentProps {
  Data: {
    tag: string;
    heading: string;
    description: string;
    items: {
      name: string;
      imagePath: string;
      description: string;
    }[];
  };
}
const DoorComponent: React.FC<DoorComponentProps> = ({ Data }) => {
  const [openCards, setOpenCards] = useState<{ [key: number]: boolean }>({});

  const toggleDoor = (id: number) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
    <div className="bg-gray-300 px-10 lg:px-40 mb-40 lg:mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-10 lg:pt-20">
        {/* top left heading */}
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="font-semibold">{Data.tag}</div>
          <div className="text-3xl w-96 font-semibold">{Data.heading}</div>
        </div>
        {/* top right content and button */}
        <div className="flex flex-col lg:flex-row items-center text-justify justify-center lg:justify-end gap-10">
          <div className=" tracking-tighter text-gray-600 text-md lg:text-left">
            {Data.description}
          </div>
          <Button variant={"default"} size={"lg"}>
            Book Now <Repeat className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Carousel
      setApi={setApi}
        className="relative top-20 mx-auto"
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
              className="md:basis-1/2 lg:basis-1/4  relative"
              key={index}
            >
              <Card
                className="flex items-start h-96 px-10 gap-10 pt-5 flex-col z-10 bg-gray-100 mt-12 mx-auto [perspective:4000px]"
                onMouseEnter={() => {
                  toggleDoor(index);
                }}
                onMouseLeave={() => {
                  toggleDoor(index);
                }}
              >
                <Button
                  variant={"default"}
                  className={`rounded-full z-50 p-6 absolute bottom-2 right-2 shadow-lg ${
                    openCards[index]
                      ? "bg-black text-white"
                      : "bg-transparent border border-1 text-black "
                  }`}
                >
                  <ArrowRight className="h-5 w-2" />
                </Button>
                <CardTitle className=" flex items-start justify-center flex-col">
                  <div className="  flex flex-col gap-2 text-gray-900">
                    <Image
                      className="h-20 w-20"
                      src={item.imagePath}
                      alt=""
                      height={1000}
                      width={1000}
                    />
                    <div className="text-2xl font-semibold">{item.name}</div>
                    <span className="max-w-2xl font-normal text-gray-600 text-base   mt-2 p-2">
                      {item.description}
                    </span>
                  </div>
                </CardTitle>
                {/* Door */}
                <div
                  className={`absolute -z-10 rounded-lg top-0 left-0 opacity-80 w-full h-full bg-gray-400 transform origin-left transition-all duration-1000 ease-in-out ${
                    openCards[index]
                      ? "[transform:rotateY(0deg)]"
                      : "[transform:rotateY(90deg)]"
                  }`}
                ></div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
        <div className="flex items-center justify-center gap-2 mt-10">
        {Data.items.map((_, index) => (
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
    </div>
  );
};

export default DoorComponent;
