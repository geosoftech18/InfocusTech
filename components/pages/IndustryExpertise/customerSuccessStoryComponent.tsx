"use client";

import AccordionCard from "@/components/accordionCard";
import { CheckCircle, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface item {
  point: string;
}

export interface CustomerSuccessStoryData{
  tag: string;
  title: string;
  description: string;
  items: {
    title: string;
    content: string | item[];
  }[];
};

export interface CustomerSuccessStoryProps {
  CustomerSuccessStoryData:CustomerSuccessStoryData
}

interface HeadingComponentProps {
  tag: string;
  title: string;
  description: string;
}

export interface SelectComponentProps {
  items: {
    title: string;
    content: string | item[];
  }[];
}

const CustomerSuccessStory: React.FC<CustomerSuccessStoryProps> = ({
  CustomerSuccessStoryData,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20 mx-10 md:mx-20 xl:mx-40">
      <HeadingComponent
        tag={CustomerSuccessStoryData.tag}
        title={CustomerSuccessStoryData.title}
        description={CustomerSuccessStoryData.description}
      />
      <SelectComponent items={CustomerSuccessStoryData.items} />
    </div>
  );
};

const HeadingComponent: React.FC<HeadingComponentProps> = ({
  tag,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* left part */}
      <div className="flex items-center md:items-start md:justify-start gap-10 flex-col">
        {/* tag */}
        <div>{tag}</div>
        {/* title */}
        <div className="text-4xl font-semibold md:w-9/12">{title}</div>
      </div>
      {/* right part */}
      <div className="text-gray-600 text-md text-justify h-full flex items-start md:pr-10 justify-center">
        {description}
      </div>
    </div>
  );
};

const SelectComponent: React.FC<SelectComponentProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
    <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-20 w-full rounded-[50px] bg-black md:px-0 overflow-hidden  md:max-h-[70vh]" >
      <div className="flex col-span-1 md:col-span-4 flex-col gap-10 items-start justify-start md:py-10 max-h-[20vh] md:max-h-[70vh] overflow-y-scroll no-scrollbar">
        {items.map((item, index) => (
          <div
            className={`text-white ${
              activeItem===index? "bg-gray-500":"bg-gray-800"
            } p-5 pl-10 rounded-r-full w-full relative ` }
            key={index}
            onClick={() => {
              setActiveItem(index);
            }}
          >
            <div className="text-sm md:text-lg font-semibold w-10/12">{item.title}</div>
            <div className="bg-black absolute right-4 top-1/2  -translate-y-1/2 text-white rounded-full">
              <ChevronRight className="h-12 w-12" />
            </div>
          </div>
        ))}
      </div>
      <div className=" border rounded-r-[50px] col-span-1 md:col-span-8 bg-gray-200 flex flex-col p-5 xl:px-20 xl:py-10 items-start justify-start gap-10 md:max-h-[70vh] overflow-y-scroll no-scrollbar">
        {typeof items[activeItem].content === "string" ? (
          <div className="relative flex items-center justify-center h-full">
            <Quote className="h-5 w-5 md:h-10 md:w-10 absolute top-2 left-2" />
            <p className=" font-semibold text-xs md:text-base py-5 md:py-0 flex justify-center items-center px-10 w-full">
              {items[activeItem].content}
            </p>
            <Quote className="h-5 w-5 md:h-10 md:w-10 absolute bottom-2 right-2 " />
          </div>
        ) : Array.isArray(items[activeItem].content) ? (
          items[activeItem].content.map((item, index) => (
            <div
              key={index}
              className="p-2 border-b last:border-b-0 flex items-center justify-around w-full"
            >
              <CheckCircle className="h-5 w-5 bg-[#b00d07] text-white rounded-full" />

              <div className="w-10/12 md:w-11/12 text-xs md:text-base font-semibold">
              {item.point} </div>
            </div>
          ))
        ) : null}
      </div>
    </div>

    {/* accordion card only for mobile screen */}
    <div className="md:hidden grid grid-cols-1 gap-2">
        {items.map((item,index)=>(
          <AccordionCard key={index} title={item.title} description={item.content} />
        ))}
    </div>  
    </>
  );
};




export default CustomerSuccessStory;
