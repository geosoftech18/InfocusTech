"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

interface FAQItem {
  title: string;
  description: string;
}

interface FAQsProps {
  FAQData: FAQItem[];
}

const FAQs: React.FC<FAQsProps> = ({ FAQData }) => {
  return (
    <div className="my-20 mx-10 md:mx-40 flex flex-col justify-center  gap-5">
      {/* Header Section */}
      <div className="text-center mb-10 flex gap-5 flex-col" >
        <h3 className="text-xl">FAQs</h3>
        <h2 className="text-xl md:text-4xl font-semibold ">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-sm md:text-lg">
          This FAQ section includes frequently asked questions that can help
          provide clear and concise answers.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FAQData.map((faq, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem className="border-gray-400 border-b-2 rounded-b-lg" value={`item-${index}`} key={index}>
              <AccordionTrigger className="ml-3">{faq.title}</AccordionTrigger>
              <AccordionContent className="bg-gray-200 text-md p-4 text-gray-800 font-semibold rounded-b-lg">{faq.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center mt-10 gap-5">
        <h3 className="text-2xl font-semibold">Need More Information?</h3>
        <p className="text-gray-600">Contact us for additional questions.</p>
        <Button variant="default" size="lg">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FAQs;
