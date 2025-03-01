import { Button } from "@/components/ui/button";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface WhyChooseUsProps {
  basis?: "textLeft" | "textRight";
  whyChooseUsData: {
    heading: string;
    description: string;
    bulletPoints: {
      title: string;
      description?: string;
    }[];
  };
}
const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  whyChooseUsData,
  basis,
}) => {
  return (
    <div className="grid  lg:grid-cols-2  lg:px-40 mb-20 p-10 gap-10">
      {/* <div
        className={`bg-[url('/WhyChooseUs.jpg')] bg-cover min-h-52 min-w-96 col-span-1 rounded-lg`}
      ></div> */}
      {(basis === "textLeft" || basis === undefined) && (
        <>
          <Image
            src={"/WhyChooseUs.jpg"}
            alt=""
            height={1000}
            width={1000}
            className="col-span-1 rounded-lg h-full"
          />

          <div className="flex items-start justify-center flex-col gap-4 col-span-1">
            {/* <div className="font-bold">Why Choose Us</div> */}
            <div className="text-2xl font-semibold  ">
              {whyChooseUsData.heading}
            </div>
            <div className="text-justify tracking-tighter  font-semibold text-gray-600">
              {whyChooseUsData.description}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-left w-full border-y-2">
              {whyChooseUsData.bulletPoints.map((item, index) => (
                <div className="col-span-1 p-2" key={index}>
                  <div className="flex items-center gap-2 justify-start">
                    <CheckBadgeIcon className="h-5 w-5" />
                    <div className="text-sm">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="w-full flex items-center justify-center"
              variant={"default"}
              size={"lg"}
            >
              Learn More
            </Button>
          </div>
        </>
      )}
      {basis === "textRight" && (
        <>
          <div className="flex items-start justify-center flex-col gap-4 col-span-1">
            {/* <div className="font-bold">Why Choose Us</div> */}
            <div className="text-2xl font-semibold  ">
              {whyChooseUsData.heading}
            </div>
            <div className="text-justify tracking-tighter font-semibold text-gray-600">
              {whyChooseUsData.description}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-left w-full border-y-2">
              {whyChooseUsData.bulletPoints.map((item, index) => (
                <div className="col-span-1 p-2" key={index}>
                  <div className="flex items-center gap-2 justify-start">
                    <CheckBadgeIcon className="h-5 w-5" />
                    <div className="text-sm">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full flex items-center justify-center"
              variant={"default"}
              size={"lg"}
            >
              Learn More
            </Button>
          </div>
          <Image
            src={"/WhyChooseUs.jpg"}
            alt=""
            height={1000}
            width={1000}
            className="col-span-1 rounded-lg h-full"
          />
        </>
      )}
    </div>
  );
};

export default WhyChooseUs;
