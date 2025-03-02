import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";

// Import JSON files using default imports
import aboutChemicalDataFile from "@/data/IndustryExpertise/aboutChemical.json";
import chemicalSapOfferingDataFile from "@/data/IndustryExpertise/ChemicalSAPOffering.json";
import benefitsChemicalDataFile from "@/data/IndustryExpertise/benefitsChemical.json";

// Extract necessary data
const aboutChemical = aboutChemicalDataFile.AboutChemical;
const chemicalSapOffering = chemicalSapOfferingDataFile.ChemicalSapOffering;
const benefitsChemical = benefitsChemicalDataFile.BenefitChemical;

const Chemical = () => {
  return (
    <>
      <WhyChooseUs whyChooseUsData={aboutChemical} />
      <CustomerSuccessStory CustomerSuccessStoryData={chemicalSapOffering} />
      <BenefitsSapImplementation
        BenefitSapImplementationData={benefitsChemical}
      />
    </>
  );
};

export default Chemical;
