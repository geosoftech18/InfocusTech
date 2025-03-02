import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default import
import powerData from "@/data/IndustryExpertise/Power.json";
import powerBenefitsData from "@/data/IndustryExpertise/PowerBenefits.json";

// Extract necessary data
const CustomerSuccessStoryDataPower = powerData.CustomerSuccessStoryDataPower;
const PowerBenefits = powerBenefitsData.PowerBenefits;

const Power = () => {
  return (
    <>
      <CustomerSuccessStory CustomerSuccessStoryData={CustomerSuccessStoryDataPower} />

      {/* Benefits of SAP Solutions for the Energy & Utilities Sector */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={PowerBenefits} />
    </>
  );
};

export default Power;
