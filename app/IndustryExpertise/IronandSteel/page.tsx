import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import { aboutIronandSteelJSON } from "@/data/IndustryExpertise/about.json";

import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

import { CustomerSuccessStoryDataAdhunik } from "@/data/IndustryExpertise/Adhunik.json";
import { CustomerSuccessStoryDataJindal } from "@/data/IndustryExpertise/Jindal.json";

const IronandSteel = () => {
  return (
    <>
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutIronandSteelJSON}
      />
      <CustomerSuccessStory
        CustomerSuccessStoryData={CustomerSuccessStoryDataAdhunik}
      />

      <CustomerSuccessStory
        CustomerSuccessStoryData={CustomerSuccessStoryDataJindal}
      />
    </>
  );
};

export default IronandSteel;
