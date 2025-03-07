import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface AccordionCardProps {
  imagePath?: string;
  name?: string;
  title: string;
  description: string | { point: string }[];
  index?: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({
  imagePath,
  name,
  title,
  description,
  index,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md  mx-auto">
      <Card className="">
        <AccordionItem value={index || "item-1"} className="">
          <CardTitle className="text-sm md:text-lg font-semibold text-gray-800">
            <AccordionTrigger className="flex flex-col items-center justify-start h-full w-full text-sm md:text-lg font-medium pt-0 bg-gray-100 border border-b-4 border-b-gray-600  rounded-t-md focus:outline-none">
              {imagePath && (
                <Image
                  src={imagePath}
                  alt={"name"}
                  height={100}
                  width={100}
                  className="w-full aspect-video"
                />
              )}
              {name && (
                <div className="text-sm md:text-lg font-semibold text-gray-800">
                  {name}
                </div>
              )}
              <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
                {title}
              </div>
            </AccordionTrigger>
          </CardTitle>
          <AccordionContent className="p-4 border border-t-0 border-gray-200 rounded-b-md">
            <CardContent className="text-gray-700">
              {typeof description === "string" ? (
                <div className="relative flex items-center justify-center h-full">
                  {/* <Quote className="h-5 w-5 md:h-10 md:w-10 absolute top-2 left-2" /> */}
                  <p className=" font-semibold text-sm flex justify-center items-center w-full">
                    {description}
                  </p>
                  {/* <Quote className="h-5 w-5 md:h-10 md:w-10 absolute bottom-2 right-2 " /> */}
                </div>
              ) : Array.isArray(description) ? (
                description.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 border-b last:border-b-0 flex items-center justify-around w-full"
                  >
                    <CheckCircle className="h-5 w-5 bg-[#b00d07] text-white rounded-full" />

                    <div className="w-10/12 md:w-11/12 text-xs md:text-base font-semibold">
                      {item.point}{" "}
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
};

export default AccordionCard;
