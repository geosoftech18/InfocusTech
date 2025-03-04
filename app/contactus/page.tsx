"use client";

import React from "react";

import footerData from "@/data/footer.json";
import ContactUsForm from "./components/form";

const ContactUs = () => {
  const locations = footerData.FooterData.locations;

  return (
    <div className="flex flex-col  items-center py-10  md:mx-40 ">
      <h2 className="text-3xl font-bold text-blue-900">Contact Us</h2>
      <div className="grid grid-cols-2 mt-10 w-full gap-10">
        <ContactUsForm />

        <div className="col-span-1 grid grid-cols-2 gap-6 p-6 bg-white shadow-md rounded-lg">
          {locations.map((loc, i) => (
            <LocationBlock key={i} location={loc} />
          ))}
          <div className="col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Emails</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">
                  Sales & Marketing:
                </span>
                <span className="text-blue-600">sales@infocus-in.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Careers:</span>
                <span className="text-blue-600">career@infocus-in.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Support:</span>
                <span className="text-blue-600">support@infocus-in.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Others:</span>
                <span className="text-blue-600">info@infocus-in.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationBlock: React.FC<{
  location: {
    title: string;
    addressLines: string[];
    phone: string;
    email: string;
  };
}> = ({ location }) => {
  const { title, addressLines, phone, email } = location;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      {addressLines.map((line, idx) => (
        <p key={idx} className="text-sm text-gray-600">
          {line}
        </p>
      ))}
      <p className="text-sm mt-2">
        <span className="font-semibold text-gray-700">Phone:</span>{" "}
        <span className="text-blue-600">{phone}</span>
      </p>
      <p className="text-sm">
        <span className="font-semibold text-gray-700">Email:</span>{" "}
        <span className="text-blue-600">{email}</span>
      </p>
    </div>
  );
};
export default ContactUs;
