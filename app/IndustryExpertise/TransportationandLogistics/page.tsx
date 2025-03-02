import DoorComponent from "@/components/pages/home/whatWeOffer";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

// Import JSON files
import transportationDoorData from "@/data/IndustryExpertise/transportationDoorComponent.json";
import transportationLogisticsData from "@/data/IndustryExpertise/aboutTransportationandLogistics.json";
import truckingIndustryData from "@/data/IndustryExpertise/truckingIndustry.json";
import keyBenefitsTransportationData from "@/data/IndustryExpertise/keyBenefitsTransportation.json";

// Extract necessary properties
const TransportationDoorComponentData = transportationDoorData.Data;
const TransportationLogisticsData = transportationLogisticsData.TransportationLogisticsData;
const TruckingIndustryData = truckingIndustryData.TruckingIndustry;
const KeyBenefitsTransportation = keyBenefitsTransportationData.keyBenefitsTransportation;

const TransportationandLogistics = () => {
  return (
    <div>
      <CustomerSuccessStory CustomerSuccessStoryData={TransportationLogisticsData} />

      {/* SAP Software for Freight Forwarding and Third-Party Logistics Companies */}
      <DoorComponent Data={TransportationDoorComponentData} />
      <div className="h-20"></div>

      {/* Software for Trucking Companies */}
      <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={TruckingIndustryData} />

      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={KeyBenefitsTransportation} />
    </div>
  );
};

export default TransportationandLogistics;
