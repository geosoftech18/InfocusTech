import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import careersImage from "@/public/carrerHero.png";
import { CornerDownRight } from "lucide-react";

export interface CareersHeroProps {
  company: string;
  description: string;
  bullets: string[];
  extraDescription: string;
  imageUrl: string | null;
}

export default function CareersHero({
  company,
  description,
  bullets,
  extraDescription,
  imageUrl,
}: CareersHeroProps) {
  return (
    <Card className="mx-auto bg-white dark:bg-gray-900 overflow-hidden rounded-lg">
      {/* Hero Image */}
      <div className="relative w-full h-56 md:h-72 bg-gray-50 overflow-hidden">
        <Image
          src={imageUrl || careersImage}
          alt="Careers at Infocus"
          fill // This replaces layout="fill"
          className="object-cover opacity-90"
        />
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
          <div className="mt-6 flex justify-center">
            <button className="bg-[#b00d07] text-white px-6 py-3 rounded-md font-semibold text-lg  hover:bg-red-800 transition-all duration-300">
              Explore Careers
            </button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
