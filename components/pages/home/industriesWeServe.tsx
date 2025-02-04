import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IndustriesWeServeProps {
  industriesWeServeData: {
    heading: string;
    description: string;
    industry_wise_expertise: {
      industry: string;
      imagePath:string;
      description: string;
    }[];
  };
}

const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  industriesWeServeData,
}) => {
  const [openCards, setOpenCards] = useState<{ [key: number]: boolean }>({});

  const toggleDoor = (id: number) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#B00D07] px-10 lg:px-40 mt-20 sm:mt-30 md:mt-40 mb-40 lg:mb-20 pt-10 flex flex-col gap-3 items-start justify-center">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-40">
        <div>
          <div className=" font-semibold text-gray-100">
            Industries We Serve
          </div>
          <div className="text-4xl sm:text-4xl md:text-5xl font-bold  text-gray-100 mt-2">
            {industriesWeServeData.heading}
          </div>
        </div>
        <div className="tracking-tighter text-gray-300 text-justify text-md">{industriesWeServeData.description}</div>
      </div>
      <Carousel
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
          {industriesWeServeData.industry_wise_expertise.map((item, index) => (
            <CarouselItem
              className="mx-auto sm:basis-3/4 md:basis-1/2 lg:basis-1/4"
              key={index}
            >
              <div className="relative h-full">
                <Card
                  className="flex relative items-center h-full overflow-hidden bg-gray-100 flex-col z-10"
                  onMouseEnter={() => toggleDoor(index)}
                  onMouseLeave={() => toggleDoor(index)}
                >
                  <div className="relative w-full">
                    {/* Image */}
                    <Image
                      alt="People working"
                      height={1000}
                      width={1000}
                      src={item.imagePath}
                      className="-z-10 ml-2 mt-2 h-20 w-20" // Keeps the image behind the overlay
                    />

                    {/* Sliding overlay */}
                    <div
                      className={`${
                        openCards[index] ? "translate-x-0" : "-translate-x-full"
                      } absolute bg-[#E60000] opacity-50 z-10 top-0 right-0 w-full h-full transform transition-transform duration-1000 ease-in-out origin-bottom`}
                    />
                  </div>

                  <CardTitle className="text-3xl z-20 flex items-center justify-center flex-col">
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
                      <div className="h-16 flex items-center justify-center mt-5">{item.industry}</div>
                    </div>
                  </CardTitle>
                  <CardContent className="flex tracking-tighter z-20 py-5 items-center justify-center">
                    <span className="text-md  text-center max-w-2xl">
                      {item.description}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
        <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
      </Carousel>
    </div>
  );
};

export default IndustriesWeServe;
