import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import careersImage from "@/public/carrerHero.png";
import { CornerDownRight } from "lucide-react";

export interface CareersHeroProps {
  company: string;
  description: string;
  bullets: string[];
  extraDescription: string;
  imageUrl: string;
}

export default function CareersHero({
  company,
  description,
  bullets,
  extraDescription,
  imageUrl,
}: CareersHeroProps) {
  return (
    <Card className="mx-auto bg-white overflow-hidden rounded-lg">
      {/* Hero Image */}
      <div className="relative h-[40vh] w-full flex items-center justify-start ">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={imageUrl || careersImage}
          alt="News and Events"
          layout="fill"
          priority
        />
        <div className="relative  font-bold text-2xl  px-4 py-2 rounded-lg flex items-center justify-center">
          <div className="text-[#b00d07] mr-2">{"Home "}</div>
          <div>{" > Carrers"}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="md:mx-40">
        <CardHeader className="p-8 text-center">
          <CardTitle className="text-4xl font-extrabold text-gray-900 dark:text-white">
            <span className="text-[#b00d07]">Join Our Team</span> at {company}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line flex flex-col gap-5">
            {description}
            <div>{extraDescription}</div>
            <div className="grid grid-cols-2 ">
              {bullets.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start text-base text-[#b00d07] font-semibold gap-2"
                >
                  {" "}
                  <CornerDownRight className="h-5 w-5 " />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
