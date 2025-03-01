import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/countUp";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface AboutSapImplementationProps {
  // for optional countup
  initialValue?: number;
  finalValue?: number;
  symbol?: string;
  AboutSapImplementationData: {
    heading: string;
    description: string;
    bulletPoints: {
      title: string;
    }[];
  };
}

const AboutSapImplementation: React.FC<AboutSapImplementationProps> = ({
  initialValue,
  finalValue,
  symbol,
  AboutSapImplementationData,
}) => {
  return (
    <div className={`grid lg:grid-cols-2 mb-20 md:mx-40 gap-10 items-stretch`}>
      <div className="relative h-full">
        <Image
          src={"/WhyChooseUs.jpg"}
          alt=""
          // height={1000}
          // width={1000}
          className="col-span-1 rounded-lg"
          objectFit="cover"
          layout="fill"
        />
        {initialValue !== undefined && finalValue !== undefined && (
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center font-semibold  bg-white p-2 rounded-tl-lg shadow-2xl z-50">
            <CountUp
              initialValue={initialValue}
              finalValue={finalValue}
              symbol={symbol}
            />
            <div>Years Of Experience</div>
          </div>
        )}
      </div>

      <div
        className={`flex items-start justify-center flex-col gap-4 col-span-1`}
      >
        <div className="font-bold">Overview</div>
        <div className="text-4xl font-semibold  ">
          {AboutSapImplementationData.heading}
        </div>
        <div className="text-justify tracking-tighter w-11/12 text-md font-semibold text-gray-600">
          {AboutSapImplementationData.description}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-left border-y-2">
          {AboutSapImplementationData.bulletPoints.map((item, index) => (
            <div className="col-span-1 p-2" key={index}>
              <div className="flex items-center gap-2 justify-start">
                <CheckBadgeIcon className="h-5 w-5" />
                <div className="text-sm w-10/12">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <Button variant={"default"} size={"lg"}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AboutSapImplementation;
