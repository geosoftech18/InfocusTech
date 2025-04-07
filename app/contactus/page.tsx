import React from "react";
import ContactUsClient from "./components/ContactUsClient";
import { getContactUs, TransformedData } from "@/lib/graphql/getContactUs";

const ContactUs = async () => {
  const res:TransformedData = await getContactUs()
  return <ContactUsClient {...res}/>;
};

export default ContactUs;