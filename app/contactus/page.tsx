"use client";

import React from "react";
import footerData from "@/data/footer.json";
import ContactUsForm from "./components/form";

const ContactUs = () => {
  const locations = footerData.FooterData.locations;

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
        Contact Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full gap-6">
        {/* Contact Form */}
        <ContactUsForm />

        {/* Locations & Emails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 bg-white shadow-md rounded-lg">
          {locations.map((loc, i) => (
            <LocationBlock key={i} location={loc} />
          ))}

          {/* Email Section (Spans both columns on medium screens) */}
          <div className="col-span-1 sm:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              Emails
            </h3>
            <div className="space-y-3">
              {[
                { label: "Sales & Marketing", email: "sales@infocus-in.com" },
                { label: "Careers", email: "career@infocus-in.com" },
                { label: "Support", email: "support@infocus-in.com" },
                { label: "Others", email: "info@infocus-in.com" },
              ].map(({ label, email }, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gray-700">{label}:</span>
                  <span className="text-blue-600">{email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Location Block Component
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
        <p key={idx} className="text-sm text-gray-600">{line}</p>
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
