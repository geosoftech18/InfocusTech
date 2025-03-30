"use client";
import { CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionCardProps {
  imagePath?: string;
  name?: string;
  title: string;
  description: string | { point: string }[];
  index?: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({
  imagePath,
  title,
  description,
  index,
}) => {
  return (
    <Card className="overflow-hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${index}`} className="border-b-0">
          <div className="flex flex-col">
            {/* Card Header (always visible) */}
            <CardHeader className="p-2">
              {/* {imagePath && (
                <Image
                  src={imagePath}
                  alt={"card image"}
                  height={100}
                  width={100}
                  className="w-full aspect-video object-cover rounded-t-lg"
                />
              )} */}
              <AccordionTrigger className="">
                <div className="flex flex-col items-center justify-center w-full">
                 
                  <p className="text-xs md:text-sm text-gray-600 font-medium text-center">
                    {title}
                  </p>
                </div>
              </AccordionTrigger>
            </CardHeader>

            {/* Accordion Content (collapsible) */}
            <AccordionContent className="pt-0">
              <CardContent className="text-gray-700 p-0">
                {typeof description === "string" ? (
                  <div className="relative p-4">
                    <p className="font-semibold text-sm">{description}</p>
                  </div>
                ) : Array.isArray(description) ? (
                  <div className="divide-y">
                    {description.map((item, idx) => (
                      <div key={idx} className="p-3 flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 bg-[#b00d07] text-white rounded-full flex-shrink-0 mt-0.5" />
                        <div className="text-xs md:text-base font-semibold">
                          {item.point}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default AccordionCard;
