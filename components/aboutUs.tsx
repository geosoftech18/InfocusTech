import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CountUp from "./ui/countUp";

interface AccordionProps {
  title: string;
  description: string | AccordionProps[];
}

interface AboutUsProps {
  AboutUsData: {
    heading: string;
    description: string;
  };
  visionMissionQualityData: AccordionProps[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  AboutUsData,
  visionMissionQualityData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:px-40 p-10">
      <div className="col-span-1 lg:col-span-6 flex flex-col gap-2">
        <div className="font-bold">About InFocusTech</div>
        <div className="text-3xl font-semibold ">{AboutUsData.heading}</div>
        <div className="text-justify tracking-tighter text-gray-600 font-semibold w-11/12">
          {AboutUsData.description}
        </div>
        <Button className="w-2/4 lg:w-1/4 my-5" variant={"default"}>
          Discover More
        </Button>
        <div className="flex flex-col gap-2 items-start lg:items-center mr-12 lg:flex-row">
          <div className="flex items-start justify-center  flex-col  border-black">
            <CountUp initialValue={0} finalValue={18} symbol="+" />
            <div>Years of collective expericence</div>
          </div>
          <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div>
          <div className="flex items-start justify-center flex-col  border-black">
            <CountUp initialValue={0} finalValue={95} symbol="%" />
            <div>Remarkable client satisfaction rate</div>
          </div>
          <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div>
          <div className="flex items-start justify-center flex-col  border-black">
            <CountUp initialValue={0} finalValue={300} symbol="+" />
            <div>successfully created projects</div>
          </div>
          {/* <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div> */}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-6 grid grid-rows-12">
        <div className="bg-[url('/wokringEmp.jpg')] rounded-lg bg-cover row-span-7 text-gray-200 font-semibold flex flex-col justify-end p-5">
          {/* <div>Your goals are our top priority</div>
          <div>Luke Bider - CEO</div> */}
        </div>

        {/* Accordion Section */}
        <div className="flex items-center justify-center row-span-5 flex-col w-full">
          <Accordion type="single" className="w-full" collapsible>
            {visionMissionQualityData.map((item, index) => (
              <AccordionItem
                key={index}
                className="w-full"
                value={`item-${index}`}
              >
                <AccordionTrigger className="font-bold text-lg">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {typeof item.description === "string" ? (
                    <p>{item.description}</p>
                  ) : (
                    <Accordion type="single" collapsible>
                      {item.description.map((subItem, subIndex) => (
                        <AccordionItem
                          key={subIndex}
                          value={`sub-item-${subIndex}`}
                        >
                          <AccordionTrigger>{subItem.title}</AccordionTrigger>
                          <AccordionContent>
                            {typeof subItem.description === "string" ? (
                              <p>{subItem.description}</p>
                            ) : null}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
