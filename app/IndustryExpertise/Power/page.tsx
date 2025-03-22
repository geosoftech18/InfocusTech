import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default import
import powerData from "@/data/IndustryExpertise/Power.json";
import powerBenefitsData from "@/data/IndustryExpertise/PowerBenefits.json";
import { getCustomerSuccessStory, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import {
  customerSuccessStoryUploader,
  itemsUploader,
} from "@/lib/uploader/uploader";

// Extract necessary data
const CustomerSuccessStoryDataPower = powerData.CustomerSuccessStoryDataPower;
const PowerBenefits = powerBenefitsData.PowerBenefits;

const Power = async () => {
  // PowerBenefits.Tool.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  //  await customerSuccessStoryUploader({CustomerSuccessStoryData:CustomerSuccessStoryDataPower})

  const {
      doorComponent1,
      customerSuccessStory
    } = (await getSolutionsGQL("70qsOviAEkCtFSwvCUcjHC")).data.contentPage;
  
    if (
      !(
        doorComponent1 &&
        customerSuccessStory
      )
    ) {
      return <div>NADA</div>;
    }

     const customerSuccess = getCustomerSuccessStory(customerSuccessStory);
  
    const tool1 = getToolsandTechnology(doorComponent1);

  return (
    <>
      <CustomerSuccessStory
        CustomerSuccessStoryData={customerSuccess}
      />

      {/* Benefits of SAP Solutions for the Energy & Utilities Sector */}
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={tool1}
      />
    </>
  );
};

export default Power;
