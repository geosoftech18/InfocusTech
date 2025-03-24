import AboutUs from "@/components/aboutUs";
import Clients from "@/components/pages/home/clients";
import FAQs from "@/components/pages/home/FAQ";
import IndustriesWeServe from "@/components/pages/home/industriesWeServe";
import Testimonial from "@/components/pages/home/testimonials";
import WhatWeOffer from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { getHomePageGQL } from "@/lib/graphql/extractHomepageGQL";
import { HomePagePropsExpected } from "@/types/homepage";


// import aboutUsDataFile from "@/data/aboutUs.json";
// import clientsData from "@/data/clients/data.json";
// import FAQdata from "@/data/faqs.json";
// import industriesWeServeData from "@/data/industriesWeServe.json";
// import whatWeOfferData from "@/data/whatWeOffer.json";
// import whyChooseUsData from "@/data/whyChooseUs.json";




export default async function Home() {

  // const FAQsdata=FAQdata.FAQs
  // const {aboutUsData,visionMissionQualityData} = aboutUsDataFile
  // const whyChooseUsJSON = whyChooseUsData.whyChooseUsJSON
  // const whatWeOfferJSON = whatWeOfferData.whatWeOfferJSON
  // const industriesWeServeJSON = industriesWeServeData.industriesWeServeJSON
  // const {domesticClients,internationalClients} = clientsData

  const homepageData:HomePagePropsExpected | null = await getHomePageGQL();
    
    if (!homepageData) return;

    const {
      heroData,
      aboutUsData,
      visionMissionQualityData,
      whyChooseUsData,
      doorComponentData,
      IndustriesWeServeData,
      TestimonialsData,
      domesticClients,
      internationalClients,
      faqsData,
    } = homepageData;

    // console.log(IndustriesWeServeData)

  
  return (
    <div>
      {/* <HeroCarousal HeroItems={HeroItems}/> */}
      <AboutUs AboutUsData={aboutUsData} visionMissionQualityData={visionMissionQualityData}/>
      <WhyChooseUs isHomepage={true} whyChooseUsData={whyChooseUsData}/>
      <WhatWeOffer arrowRight={true} bookNowButton={true} Data={doorComponentData}/>
      <IndustriesWeServe isHomePage={true} industriesWeServeData={IndustriesWeServeData}/>
      <Testimonial TestimonialItems={ TestimonialsData}/>
      <Clients domesticClients={domesticClients} internationalClients={internationalClients} />
      <FAQs FAQData={faqsData} />
    </div>
  );
}
