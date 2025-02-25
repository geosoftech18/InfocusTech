import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import { CustomerSuccessStoryDataPower } from "@/data/IndustryExpertise/Power.json";

import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import { PowerBenefits } from "@/data/IndustryExpertise/PowerBenefits.json";
const Power = () => {
  return (
    <>
      <CustomerSuccessStory
        CustomerSuccessStoryData={CustomerSuccessStoryDataPower}
      />
      {/* Benefits of SAP Solutions for the Energy & Utilities Sector */}
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={PowerBenefits}
      />
    </>
  );
};

export default Power;
