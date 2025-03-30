"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import footerData from "@/data/footer.json";
import ContactUsForm from "./components/form";
import GoogleMapEmbed from "@/components/map";

const ContactUs = () => {
  const locations = footerData.FooterData.locations;
  const socialIcons = [
    { icon: <Linkedin />, color: "blue-600", hoverColor: "white" },
    { icon: <Twitter />, color: "blue-600", hoverColor: "white" },
    { icon: <Facebook />, color: "blue-500", hoverColor: "white" },
    { icon: <Mail />, color: "red-500", hoverColor: "white" },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
        Contact Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full gap-6">
        {/* Contact Form */}
        <ContactUsForm />

        {/* Locations & Emails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 gap-4 p-4 sm:p-6 bg-white shadow-md rounded-lg">
          {locations.map((loc, i) => (
            <LocationBlock key={i} location={loc} />
          ))}

          {/* Email Section */}
          <div className="col-span-1 sm:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              Emails
            </h3>
            <div className="space-y-3">
              {[
                { label: "Sales & Marketing", email: "sales@infocus-in.com", icon: <Send /> },
                { label: "Careers", email: "career@infocus-in.com", icon: <Send /> },
                { label: "Support", email: "support@infocus-in.com", icon: <Send /> },
                { label: "Others", email: "info@infocus-in.com", icon: <Send /> },
              ].map(({ label, email, icon }, index) => (
                <div key={index} className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg shadow-sm border "
                  >
                    {React.cloneElement(icon, {
                      className: "w-5 h-5 "
                    })}
                  </motion.div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-gray-700">{label}:</span>
                    <span className="text-blue-600">{email}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialIcons.map(({ icon, color, hoverColor }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-white shadow-sm border text-${color} hover:bg-${color} hover:text-${hoverColor} transition-colors`}
                  >
                    {React.cloneElement(icon, { className: "w-6 h-6" })}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 w-full">
          <GoogleMapEmbed/>
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
      
      <div className="flex items-start gap-2 mb-2">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-white text-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white"
        >
          <MapPin className="w-5 h-5 " />
        </motion.div>
        <div>
          {addressLines.map((line, idx) => (
            <p key={idx} className="text-sm text-gray-600">{line}</p>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-3 ">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-white rounded-md shadow-sm  text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          <Phone className="w-5 h-5 " />
        </motion.div>
        <p className="text-sm">
          <span className="font-semibold text-gray-700">Phone:</span>{" "}
          <span className="text-blue-600">{phone}</span>
        </p>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-white rounded-md shadow-sm text-green-500 hover:bg-green-500 hover:text-white"
        >
          <Mail className="w-5 h-5 " />
        </motion.div>
        <p className="text-sm">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          <span className="text-blue-600">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;