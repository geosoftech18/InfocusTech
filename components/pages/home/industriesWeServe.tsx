"use client";
import { Button } from "@/components/ui/button";
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
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DoorComponentData } from "./whatWeOffer";

// export interface  industriesWeServeData {
//   tag:string,
//   heading: string;
//   description: string;
//   industry_wise_expertise: {
//     industry: string;
//     link?: string;
//     imagePath: string;
//     description: string;
//   }[];
// };

interface IndustriesWeServeProps {
  industriesWeServeData: DoorComponentData;
  isHomePage?: boolean;
}

const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  industriesWeServeData,
  isHomePage,
}) => {
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
    <div className="bg-[#B00D07] px-10 lg:px-40 mt-20 sm:mt-30 md:mt-40 mb-40 lg:mb-20 pt-10 flex flex-col gap-3 items-start justify-center">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
        <div>
          {isHomePage && (
            <div className=" font-semibold text-gray-100">
              Industries We Serve
            </div>
          )}
          <div className="text-4xl md:text-4xl font-semibold  text-gray-100 mt-2">
            {industriesWeServeData.heading}
          </div>
        </div>
        <div className="tracking-tighter text-gray-300 text-justify text-md">
          {industriesWeServeData.description}
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="relative top-20 mx-auto w-full"
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
          {industriesWeServeData.items.map((item, index) => (
            <CarouselItem
              className="mx-auto sm:basis-3/4 md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <div className="relative h-full">
                <Card
                  className="flex relative items-center group h-full overflow-hidden flex-col z-10"
                  onMouseEnter={() => toggleDoor(index)}
                  onMouseLeave={() => toggleDoor(index)}
                >
                  <div className="absolute inset-0 bg-[url('/vectors/2.jpg')] bg-cover bg-center opacity-50"></div>
                  <div className="relative flex items-center justify-center w-full">
                    {/* Image */}
                    <Image
                      alt="People working"
                      height={1000}
                      width={1000}
                      src={item.imagePath || ""}
                      className=" ml-2 mt-4 h-20 w-20 border-2 p-2 rounded-full border-[#E60000] group-hover:scale-125 transition-transform duration-300" // Keeps the image behind the overlay
                    />

                    {/* Sliding overlay */}
                    {/* <div
                      className={`${
                        openCards[index] ? "translate-y-0" : "-translate-y-full"
                      } absolute bg-[#E60000] opacity-50 z-10 top-0 right-0 w-full h-full transform transition-transform duration-1000 ease-in-out origin-bottom`}
                    /> */}
                  </div>

                  <CardTitle className="text-2xl z-20 flex items-center justify-center flex-col">
                    <div className="font-semibold text-center flex flex-col gap-10 text-gray-900">
                      {/* Trash Icon */}
                      {/* <div
                        className={`top-1 right-1 absolute p-5 rounded-lg transition-colors duration-1000 ${
                          openCards[index] ? "bg-black" : "bg-[#E60000]"
                        }`}
                      >
                        <Trash
                          className={`h-10 transition-colors duration-1000 ${
                            openCards[index] ? "text-gray-200" : "text-gray-200"
                          }`}
                        />
                      </div> */}
                      <div className="h-16 flex items-center justify-center mt-5">
                        {item.name}
                      </div>
                    </div>
                  </CardTitle>
                  <CardContent className="flex tracking-tighter z-20 items-center justify-between gap-5 h-full flex-col">
                    <span className="text-md text-gray-600 text-center max-w-2xl pb-10">
                      {item.description}
                    </span>
                    {isHomePage && (
                      <Link href={item.link || ""}>
                        <Button
                          variant={"default"}
                          className={`rounded-full z-50 p-6 absolute bottom-2 right-2 shadow-lg ${
                            openCards[index]
                              ? "bg-black text-white"
                              : "bg-transparent border border-1 text-black "
                          } transition-colors duration-200`}
                        >
                          Read More
                          <ArrowRight className="h-5 w-2" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2  text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2  text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
        <div className="flex items-center justify-center gap-2 m-2">
          {industriesWeServeData.items.map((_, index) => (
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

export default IndustriesWeServe;
