"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface KeyFeatureSapImplementationProps {
  KeyFeatureSapImplementationData: {
    tag: string;
    keyFeatures: {
      imagePath: string;
      title: string;
      description: string;
    }[];
  };
}

const KeyFeatureSapImplementation: React.FC<
  KeyFeatureSapImplementationProps
> = ({ KeyFeatureSapImplementationData }) => {
  return (
    <Carousel
      className="flex flex-col border border-none gap-20 items-center justify-center mx-10 md:mx-28 overflow-hidden"
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
      <div className="text-black text-2xl md:text-3xl font-semibold">
        {KeyFeatureSapImplementationData.tag}
      </div>
      <CarouselContent className="border border-none">
        {KeyFeatureSapImplementationData.keyFeatures.map((item, index) => (
          <CarouselItem
            className="mx-auto sm:basis-3/4 md:basis-1/2 lg:basis-1/4 "
            key={index}
          >
            <Card className="flex flex-col items-center justify-center rounded-lg rounded-b-[50px]  py-5 h-96">
              <CardContent className="flex items-center justify-between flex-col font-semibold text-2xl text-center h-full">
                <Image
                  alt="People working"
                  height={100}
                  width={100}
                  src={item.imagePath}
                  className=" h-1/3 w-1/3"
                />
                <div className="flex items-center gap-5 flex-col h-2/4">
                  <div className="">{item.title}</div>
                  <div className="text-gray-400 text-sm text-center">
                    {item.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default KeyFeatureSapImplementation;
