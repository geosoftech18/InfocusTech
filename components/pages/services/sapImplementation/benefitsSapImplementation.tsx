"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface BenefitsSapImplementationProps {
  BenefitSapImplementationData: {
    tag: string;
    benefits: {
      imagePath: string;
      name: string;
      description: string;
    }[];
  };
}

const BenefitsSapImplementation: React.FC<BenefitsSapImplementationProps> = ({
  BenefitSapImplementationData,
}) => {
  return (
    <div className="h-screen lg:h-[40vh]  my-52 relative bg-[#b00d07] px-10 lg:px-28">
      <div className="flex items-center justify-center text-gray-100 pt-10 text-3xl font-semibold">
        {BenefitSapImplementationData.tag}
      </div>
      <Carousel
        className="absolute inset-0 top-1/2 px-10 lg:px-28"
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
          {BenefitSapImplementationData.benefits.map((item, index) => (
            <CarouselItem
              key={index}
              className="mx-auto sm:basis-1 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="flex flex-col items-center justify-center rounded-lg rounded-b-[50px]  py-5 h-80">
                <CardContent className="flex items-center justify-between flex-col font-semibold text-2xl text-center h-full">
                  <Image
                    alt="People working"
                    height={100}
                    width={100}
                    src={item.imagePath}
                    className=" h-1/3 w-1/3"
                  />
                  <div className="flex items-center justify-between flex-col h-2/4">
                    <div className="">{item.name}</div>
                    <div className="text-gray-400 text-sm text-center">
                      {item.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-10" />
        <CarouselPrevious className="left-10" />
      </Carousel>
    </div>
  );
};

export default BenefitsSapImplementation;
