import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, Repeat, Trash } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import Image from "next/image";

interface WhatWeOfferProps {
  whatWeOfferData: {
    name: string;
    imagePath: string;
    description: string;
  }[];
}
const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ whatWeOfferData }) => {
  const [openCards, setOpenCards] = useState<{ [key: number]: boolean }>({});

  const toggleDoor = (id: number) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="bg-gray-300 px-10 lg:px-40 mb-40 lg:mb-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pt-10 lg:pt-20">
        {/* top left heading */}
        <div className="flex-1 flex-col items-start justify-center gap-10">
          <div className="font-semibold">Our Services</div>
          <div className="text-5xl w-96 font-bold">
            End-to-End SAP & IT Solutions
          </div>
        </div>
        {/* top right content and button */}
        <div className="flex flex-col lg:flex-row items-center text-justify justify-center lg:justify-end gap-20 lg:ml-5">
          <div className=" tracking-tighter text-gray-600 text-md lg:text-left">
            We provide comprehensive SAP services, including implementation,
            maintenance, upgrades, and migration, alongside AWS consulting,
            custom software development, and resource staffing. Our offerings
            also include SAP auditing, training, and S/4HANA solutions on
            private and public clouds. With a focus on innovation and
            efficiency, we help businesses optimize operations, embrace digital
            transformation, and grow sustainably. Partner with us to unlock your
            business's full potential.
          </div>
          <Button variant={"default"} size={"lg"}>
            Book Now <Repeat className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Carousel
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
          {whatWeOfferData.map((item, index) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/4 mr-4 relative"
              key={index}
            >
              <Card
                className="flex items-start h-full px-10 gap-10 pt-5 flex-col z-10 bg-gray-100 mt-12 mx-auto [perspective:4000px]"
                onMouseEnter={() => {
                  toggleDoor(index);
                }}
                onMouseLeave={() => {
                  toggleDoor(index);
                }}
              >
                <Button
                  variant={"default"}
                  className="rounded-full z-50 p-6 absolute bottom-12 right-2 shadow-lg"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <CardTitle className="text-3xl flex items-start justify-center flex-col">
                  <div className="font-semibold  flex flex-col gap-10 text-gray-900">
                    <Image
                      className="h-20 w-20"
                      src={item.imagePath}
                      alt=""
                      height={1000}
                      width={1000}
                    />
                    <div>{item.name}</div>
                  </div>
                </CardTitle>
                <CardContent className="pl-0">
                  <span className="  max-w-2xl">{item.description}</span>
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
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
      </Carousel>
    </div>
  );
};

export default WhatWeOffer;
