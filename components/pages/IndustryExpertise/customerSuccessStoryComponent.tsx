"use client";

import { CheckCircle, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface item {
  point: string;
}

interface CustomerSuccessStoryProps {
  CustomerSuccessStoryData: {
    tag: string;
    title: string;
    description: string;
    items: {
      title: string;
      content: string | item[];
    }[];
  };
}

interface HeadingComponentProps {
  tag: string;
  title: string;
  description: string;
}

interface SelectComponentProps {
  items: {
    title: string;
    content: string | item[];
  }[];
}

const CustomerSuccessStory: React.FC<CustomerSuccessStoryProps> = ({
  CustomerSuccessStoryData,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20 md:mx-40">
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
    <div className="grid grid-cols-2 gap-10">
      {/* left part */}
      <div className="flex items-start justify-start gap-10 flex-col">
        {/* tag */}
        <div>{tag}</div>
        {/* title */}
        <div className="text-4xl font-semibold w-9/12">{title}</div>
      </div>
      {/* right part */}
      <div className="text-gray-600 text-md text-justify h-full flex items-start pr-10 justify-center">
        {description}
      </div>
    </div>
  );
};

const SelectComponent: React.FC<SelectComponentProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className=" grid grid-cols-12 gap-20 w-full rounded-[50px] bg-black pl-10 max-h-screen" >
      <div className="flex flex-col gap-10 items-center justify-start col-span-4 py-10 max-h-[80vh] overflow-y-scroll no-scrollbar">
        {items.map((item, index) => (
          <div
            className={`text-white ${
              activeItem===index? "bg-gray-500":"bg-gray-800"
            } p-10 rounded-full w-full relative`}
            key={index}
            onClick={() => {
              setActiveItem(index);
            }}
          >
            <div className="text-lg font-semibold w-10/12">{item.title}</div>
            <div className="bg-black absolute right-4 top-1/2  -translate-y-1/2 text-white rounded-full">
              <ChevronRight className="h-12 w-12" />
            </div>
          </div>
        ))}
      </div>
      <div className=" border rounded-[50px] col-span-8 bg-gray-200 flex flex-col p-20 items-start justify-center gap-10">
        {typeof items[activeItem].content === "string" ? (
          <div className="relative flex items-center justify-center h-full">
            <Quote className="h-10 w-10 absolute top-2 left-2" />
            <p className=" font-semibold flex justify-center items-center px-10 w-full">
              {items[activeItem].content}
            </p>
            <Quote className="h-10 w-10 absolute bottom-2 right-2 " />
          </div>
        ) : Array.isArray(items[activeItem].content) ? (
          items[activeItem].content.map((item, index) => (
            <div
              key={index}
              className="p-2 border-b last:border-b-0 flex items-center justify-around"
            >
              <CheckCircle className="h-5 w-5 bg-[#b00d07] text-white rounded-full" />

              <div className="w-11/12 font-semibold">{item.point} </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default CustomerSuccessStory;
