"use client"
import { Card, CardContent } from "@/components/ui/card";
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
import React from "react";

interface client{
  name:string,
  imagePath:string,
  title:string,
  description:string
}

interface ClientsProps{
  domesticClients:client[],
  internationalClients:client[]
}
const Clients:React.FC<ClientsProps> = ({
  domesticClients,
  internationalClients
}) => {

  const clientsCombined = [...domesticClients, ...internationalClients];


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
    <div className="my-20 mx-40">
      <Carousel
       setApi={setApi}
        className="mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <div className="flex items-center justify-between mb-10 mt-48 lg:mt-10">
          <div className="text-4xl font-semibold">
            Choose the Right Migration Approach With Us!
          </div>
          <div className="absolute top-5 right-2 lg:top-2 lg:right-10 flex gap-2">
          <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" /> 
          <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
          </div>
        </div>
        <CarouselContent>
          {clientsCombined.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-2">
                    <Image src={item.imagePath} alt="" width={1000} height={1000  } className="max-h-full"/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 m-2">
        {Array.from({ length: 10 }).map((_, index) => (
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

export default Clients;
