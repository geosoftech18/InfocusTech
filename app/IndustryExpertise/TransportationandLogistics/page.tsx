import DoorComponent from "@/components/pages/home/whatWeOffer";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

// Import JSON files
import transportationDoorData from "@/data/IndustryExpertise/transportationDoorComponent.json";
import transportationLogisticsData from "@/data/IndustryExpertise/aboutTransportationandLogistics.json";
import truckingIndustryData from "@/data/IndustryExpertise/truckingIndustry.json";
import keyBenefitsTransportationData from "@/data/IndustryExpertise/keyBenefitsTransportation.json";
import {
  customerSuccessStoryUploader,
  itemsUploader,
} from "@/lib/uploader/uploader";
import { getBenefitsComponent, getCustomerSuccessStory, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

// Extract necessary properties
const TransportationDoorComponentData = transportationDoorData.Data;
const TransportationLogisticsData =
  transportationLogisticsData.TransportationLogisticsData;
const TruckingIndustryData = truckingIndustryData.TruckingIndustry;
const KeyBenefitsTransportation =
  keyBenefitsTransportationData.keyBenefitsTransportation;

const TransportationandLogistics = async () => {
  // TruckingIndustryData.Tool.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  //  await customerSuccessStoryUploader({CustomerSuccessStoryData:TransportationLogisticsData})

   const {
        doorComponent1,
        doorComponent2,
        customerSuccessStory,
        benefitsComponent1
      } = (await getSolutionsGQL("6auAShg6GPMEg3HA2N7mCp")).data.contentPage;
    
      if (
        !(
          doorComponent1 &&
          customerSuccessStory &&
          doorComponent2 &&
          benefitsComponent1
        )
      ) {
        return <div>NADA</div>;
      }
  
       const customerSuccess = getCustomerSuccessStory(customerSuccessStory);
       const door = extractDoorComponent(doorComponent1)
    
      const tool1 = getToolsandTechnology(doorComponent2);
      const benefits = getBenefitsComponent(benefitsComponent1)
  return (
    <div>
      <CustomerSuccessStory
        CustomerSuccessStoryData={customerSuccess}
      />

      {/* SAP Software for Freight Forwarding and Third-Party Logistics Companies */}
      <DoorComponent Data={door} />
      <div className="h-20"></div>

      {/* Software for Trucking Companies */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={tool1}
      />

      <KeyFeatureSapImplementation Data={benefits} />
    </div>
  );
};

export default TransportationandLogistics;
