"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat } from "lucide-react";
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
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CarousalBullets from "@/components/ui/carousalBullets";
import { AnimatedButton } from "@/components/ui/animatedButton";

export interface DoorComponentData {
  tag: string;
  heading: string;
  subheading?: string;
  description: string;

  items: {
    name: string;
    imagePath?: string;
    description: string;
    link?: string;
  }[];
}

interface DoorComponentProps {
  bookNowButton?: boolean;
  arrowRight?: boolean;
  Data: DoorComponentData;
}
const DoorComponent: React.FC<DoorComponentProps> = ({
  Data,
  bookNowButton,
  arrowRight,
}) => {
  const [openCards, setOpenCards] = useState<{ [key: number]: boolean }>({});

  const toggleDoor = (id: number) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleReadMore = (id: number) => {
    setExpandedDescriptions((prev) => ({ ...prev, [id]: !prev[id] }));
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
    <div className=" px-10 lg:px-40 mb-40 lg:mb-20 relative">
      <Image
        alt=""
        src="/vectors/1.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 -z-10  "
      />
      <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between gap-10 pt-10 lg:pt-20">
        {/* top left heading */}
        <div className="flex flex-col items-start justify-center gap-10">
          <div className="font-semibold">{Data.tag}</div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:w-96 font-semibold">{Data.heading}</div>
            {Data.subheading && (
              <div className="text-2xl md:w-96 text-gray-600 font-semibold">
                {Data.subheading}
              </div>
            )}
          </div>
        </div>
        {/* top right content and button */}
        <div className="flex flex-col lg:flex-row items-start md:items-center text-justify justify-center lg:justify-end gap-10">
          <div className="text-gray-900 text-base lg:text-left">
            {Data.description}
          </div>
          {bookNowButton && bookNowButton === true && (
            <Link href={"/contactus"}>
              <AnimatedButton variant={"default"} size={"lg"}>
                Book Now <Repeat className="h-5 w-5" />
              </AnimatedButton>
            </Link>
          )}
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
                className="flex items-start h-80 px-10 gap-10 group  flex-col z-10 bg-gray-100 mt-12 mx-auto [perspective:4000px]"
                onMouseEnter={() => {
                  toggleDoor(index);
                }}
                onMouseLeave={() => {
                  toggleDoor(index);
                }}
              >
                {!expandedDescriptions[index] ? (
                  <Link href={`${item.link}`}>
                    {arrowRight && (
                      <Button
                        variant={"default"}
                        className={`rounded-full z-50  absolute bottom-2 right-2 shadow-lg ${
                          openCards[index]
                            ? "bg-black text-white"
                            : "bg-transparent border border-1 text-black "
                        }`}
                      >
                        <ArrowRight className="h-5 w-2" />
                      </Button>
                    )}
                  </Link>
                ) : (
                  <div className="hidden"></div>
                )}
                <CardTitle className=" flex items-start justify-center flex-col">
                  <div className="  flex flex-col gap-2 text-gray-900">
                    <Image
                      className="h-16 w-16 group-hover:scale-125 transition-transform duration-300"
                      src={item.imagePath || ""}
                      alt=""
                      height={1000}
                      width={1000}
                    />
                    <div className="text-xl font-semibold">{item.name}</div>
                  </div>
                </CardTitle>
                <CardContent className="text-sm text-gray-600 overflow-y-scroll no-scrollbar mb-2 w-full px-0">
                  {item.description.length < 150 ? (
                    item.description
                  ) : expandedDescriptions[index] ? (
                    <>
                      {item.description}
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="ml-1 text-black hover:text-blue-500 hover:underline"
                      >
                        Read less
                      </button>
                    </>
                  ) : (
                    <>
                      {item.description.slice(0, 150)}...
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="ml-1 text-black hover:text-blue-500 hover:underline"
                      >
                        Read more
                      </button>
                    </>
                  )}
                </CardContent>
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
        {Data.items.length > 4 && (
          <>
            <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
            <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:scale-125 transition-transform duration-300 " />
          </>
        )}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Data.items.map((_, index) => (
            <CarousalBullets key={index} current={current} index={index} />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default DoorComponent;
