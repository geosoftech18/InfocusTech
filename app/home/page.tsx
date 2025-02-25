"use client";

import AboutUs from "@/components/aboutUs";
import Clients from "@/components/pages/home/clients";
import FAQs from "@/components/pages/home/FAQ";
import IndustriesWeServe from "@/components/pages/home/industriesWeServe";
import Testimonial from "@/components/pages/home/testimonials";
import WhatWeOffer from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import FAQdata from "@/data/faqs.json";
import HeroData from "@/data/hero.json"
import HeroCarousal from "@/components/pages/home/heroCarousal";
import {aboutUsData,visionMissionQualityData} from "@/data/aboutUs.json"
import {whyChooseUsJSON} from "@/data/whyChooseUs.json"
import {whatWeOfferJSON} from "@/data/whatWeOffer.json"
import {industriesWeServeJSON} from "@/data/industriesWeServe.json"
import Container from "@/components/container";



export default function Home() {

  const FAQsdata=FAQdata.FAQs
  const HeroItems=HeroData.HeroData
  

  return (
    <Container>
      <HeroCarousal HeroItems={HeroItems}/>
      <AboutUs AboutUsData={aboutUsData} visionMissionQualityData={visionMissionQualityData}/>
      <WhyChooseUs whyChooseUsData={whyChooseUsJSON}/>
      <WhatWeOffer Data={whatWeOfferJSON}/>
      <IndustriesWeServe industriesWeServeData={industriesWeServeJSON}/>
      <Testimonial />
      <Clients />
      <FAQs FAQData={FAQsdata} />
    </Container>
  );
}
