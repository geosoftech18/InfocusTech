import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

// Import JSON files using default imports
import aboutData from "@/data/IndustryExpertise/about.json";
import adhunikData from "@/data/IndustryExpertise/Adhunik.json";
import jindalData from "@/data/IndustryExpertise/Jindal.json";

// Extract necessary data
const aboutIronandSteelJSON = aboutData.aboutIronandSteelJSON;
const CustomerSuccessStoryDataAdhunik = adhunikData.CustomerSuccessStoryDataAdhunik;
const CustomerSuccessStoryDataJindal = jindalData.CustomerSuccessStoryDataJindal;

const IronandSteel = () => {
  return (
    <>
      <AboutSapImplementation AboutSapImplementationData={aboutIronandSteelJSON} />
      <CustomerSuccessStory CustomerSuccessStoryData={CustomerSuccessStoryDataAdhunik} />
      <CustomerSuccessStory CustomerSuccessStoryData={CustomerSuccessStoryDataJindal} />
    </>
  );
};

export default IronandSteel;
