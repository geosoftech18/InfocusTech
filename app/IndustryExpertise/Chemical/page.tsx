import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { AboutChemical } from "@/data/IndustryExpertise/aboutChemical.json";

import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import { ChemicalSapOffering } from "@/data/IndustryExpertise/ChemicalSAPOffering.json";

import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import { BenefitChemical } from "@/data/IndustryExpertise/benefitsChemical.json";

const Chemical = () => {
  return (
    <>
      <WhyChooseUs whyChooseUsData={AboutChemical} />
      <CustomerSuccessStory CustomerSuccessStoryData={ChemicalSapOffering} />
      <BenefitsSapImplementation
        BenefitSapImplementationData={BenefitChemical}
      />
    </>
  );
};

export default Chemical;
