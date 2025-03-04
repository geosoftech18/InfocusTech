"use client";

import AboutUs from "@/components/aboutUs";
import Clients from "@/components/pages/home/clients";
import FAQs from "@/components/pages/home/FAQ";
import IndustriesWeServe from "@/components/pages/home/industriesWeServe";
import Testimonial from "@/components/pages/home/testimonials";
import WhatWeOffer from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import aboutUsDataFile from "@/data/aboutUs.json";
import FAQdata from "@/data/faqs.json";
import industriesWeServeData from "@/data/industriesWeServe.json";
import whatWeOfferData from "@/data/whatWeOffer.json";
import whyChooseUsData from "@/data/whyChooseUs.json";
import clientsData from "@/data/clients/data.json"




export default function Home() {

  const FAQsdata=FAQdata.FAQs
  const {aboutUsData,visionMissionQualityData} = aboutUsDataFile
  const whyChooseUsJSON = whyChooseUsData.whyChooseUsJSON
  const whatWeOfferJSON = whatWeOfferData.whatWeOfferJSON
  const industriesWeServeJSON = industriesWeServeData.industriesWeServeJSON
  const {domesticClients,internationalClients} = clientsData

  return (
    <div>
      {/* <HeroCarousal HeroItems={HeroItems}/> */}
      <AboutUs AboutUsData={aboutUsData} visionMissionQualityData={visionMissionQualityData}/>
      <WhyChooseUs whyChooseUsData={whyChooseUsJSON}/>
      <WhatWeOffer Data={whatWeOfferJSON}/>
      <IndustriesWeServe industriesWeServeData={industriesWeServeJSON}/>
      <Testimonial />
      <Clients domesticClients={domesticClients} internationalClients={internationalClients} />
      <FAQs FAQData={FAQsdata} />
    </div>
  );
}
