import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CountUp from "./ui/countUp";
import Link from "next/link";
import UnderlineAnimation from "./ui/slidingUnderline";
import { AnimatedButton } from "./ui/animatedButton";

export interface AccordionProps {
  title: string;
  description: string | AccordionProps[];
}

export interface AboutUsData {
  tag: string;
  heading: string;
  description: string;
  imageUrl: string;
  yearsOfExperience: number;
  clientSatisfactionRate: number;
  projectsCreated: number;
}

export interface AboutUsProps {
  AboutUsData: AboutUsData;
  visionMissionQualityData: AccordionProps[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  AboutUsData,
  visionMissionQualityData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:px-40 p-10">
      <div className="col-span-1 lg:col-span-6 flex flex-col gap-2">
        <div className="font-bold">{AboutUsData.tag}</div>
        <div className="text-3xl font-semibold ">{AboutUsData.heading}</div>
        <div className="text-justify text-gray-600 font-semibold w-11/12">
          {AboutUsData.description}
        </div>
        <Link href={"/contactus"}>
          <AnimatedButton className="w-2/4 lg:w-1/4 " variant={"default"}>
            Discover More
          </AnimatedButton>
        </Link>
        <div className="flex gap-2 items-start md:items-center mr-12 flex-row">
          <div className="flex items-start justify-center  flex-col  border-black">
            <CountUp
              initialValue={0}
              finalValue={AboutUsData.yearsOfExperience}
              symbol="+"
            />
            <div>Years of collective expericence</div>
          </div>
          <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div>
          <div className="flex items-start justify-center flex-col  border-black">
            <CountUp
              initialValue={0}
              finalValue={AboutUsData.clientSatisfactionRate}
              symbol="%"
            />
            <div>Remarkable client satisfaction rate</div>
          </div>
          <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div>
          <div className="flex items-start justify-center flex-col  border-black">
            <CountUp
              initialValue={0}
              finalValue={AboutUsData.projectsCreated}
              symbol="+"
            />
            <div>successfully created projects</div>
          </div>
          {/* <div className="bg-gray-400 rounded-xl border border-r h-3/4 w-1 "></div> */}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-6 grid grid-rows-12">
        <div
          className={`bg-[url('/wokringEmp.jpg')] rounded-lg bg-cover row-span-7 text-gray-200 font-semibold flex flex-col justify-end p-5`}
        >
          {/* <div>Your goals are our top priority</div>
          <div>Luke Bider - CEO</div> */}
        </div>

        {/* Accordion Section */}
        <div className="flex items-center justify-center row-span-5 flex-col w-full">
          <Accordion type="single" className="w-full" collapsible>
            {visionMissionQualityData.map((item, index) => (
              <AccordionItem
                key={index}
                className="w-full data-[state=open]:border-none"
                value={`item-${index}`}
              >
                <AccordionTrigger className="font-bold text-lg hover:no-underline">
                  <UnderlineAnimation>{item.title} </UnderlineAnimation>
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
                          className="data-[state=open]:border-none"
                        >
                          <AccordionTrigger>
                            <UnderlineAnimation>
                              {subItem.title}
                            </UnderlineAnimation>
                          </AccordionTrigger>

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
