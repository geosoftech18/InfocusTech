"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Autoplay from "embla-carousel-autoplay";
import { Linkedin, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ManagementTeamData {
  tag: string;
  title: string;
  team: {
    name: string;
    role: string;
    imagePath: string;
    linkedinLink: string;
    youtubeLink?: string;
    twitterLink?: string;
  }[]
}

interface ManagementTeamProps {
  ManagementTeamData:ManagementTeamData
  };

const ManagementTeam: React.FC<ManagementTeamProps> = ({
  ManagementTeamData,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Carousel
      className="bg-gray-400  grid grid-cols-1 md:grid-cols-3 md:h-[75vh] items-center justify-center px-10 md:px-40 gap-20 md:gap-56 lg:gap-20 py-5 lg:py-0"
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
      <div className="col-span-1 relative flex items-start gap-10 flex-col md:h-4/6">
        <div className="rounded-full text-xl text-gray-300">
          {ManagementTeamData.tag}
        </div>
        <div className="font-semibold text-gray-100 text-4xl">
          {ManagementTeamData.title}
        </div>
        <div className="absolute -bottom-10 md:bottom-10 left-10 flex gap-2">
          <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md " />
          <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md " />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2">
        <CarouselContent>
          {ManagementTeamData.team.map((item, index) => (
            <CarouselItem
              className="mx-auto sm:basis-1 lg:basis-1/3 h-full"
              key={index}
            >
              <div className="relative h-full">
                <Card className="rounded-lg">
                  <div className="p-3">
                  <Image
                    alt="People working"
                    height={1000}
                    width={1000}
                    src={item.imagePath}
                    className="-z-10 rounded-lg  aspect-[3/4] h-full w-full"
                  />
                  </div>
                  <CardContent className="flex items-center justify-between mt-2 overflow-hidden">
                    <div>
                      <div className="font-bold text-xl w-3/4">{item.name}</div>
                      <div>{item.role}</div>
                    </div>
                    <div
                      className="relative inline-block"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <DropdownMenu open={hoveredIndex === index}>
                        <div
                          className={`bg-[url("/circle-2-bloat.svg")] h-24 w-24 -rotate-45 absolute -right-14 -bottom-14 p-1.5 flex items-start  justify-start cursor-pointer bg-contain bg-no-repeat`}
                        >
                          <DropdownMenuTrigger asChild>
                            <div className="bg-white rotate-45  font-extrabold p-2 rounded-full">
                              <Share2
                                fill="black"
                                className="h-5 w-5 text-black "
                              />
                            </div>
                          </DropdownMenuTrigger>
                          <div className="h-4 w-4"></div>
                        </div>

                        <DropdownMenuContent
                          side="top"
                          align="center"
                          className="bg-transparent border-0 shadow-none gap-3 flex flex-col items-center justify-center"
                        >
                          {item.linkedinLink.length > 0 && (
                            <DropdownMenuItem className="rounded-full p-2 bg-gray-100 font-bold">
                              <Link
                                href={item.linkedinLink}
                                className="h-full w-full"
                              >
                                <Linkedin className="w-5" />
                              </Link>
                            </DropdownMenuItem>
                          )}

                          {/* {item.twitterLink.length > 0 && (
                            <DropdownMenuItem className="rounded-full p-2 bg-gray-100 font-bold">
                              <Link
                                href={item.twitterLink}
                                className="h-full w-full"
                              >
                                <Twitter className="w-5" />
                              </Link>
                            </DropdownMenuItem>
                          )} */}

                          {/* {item.youtubeLink.length > 0 && (
                            <DropdownMenuItem className="rounded-full p-2 bg-gray-100 font-bold">
                              <Link
                                href={item.youtubeLink}
                                className="h-full w-full"
                              >
                                <Youtube className="w-5" />
                              </Link>
                            </DropdownMenuItem>
                          )} */}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default ManagementTeam;
