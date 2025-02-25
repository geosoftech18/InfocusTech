import DoorComponent from "@/components/pages/home/whatWeOffer";
import {Data} from "@/data/IndustryExpertise/transportationDoorComponent.json"

import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import {TransportationLogisticsData} from "@/data/IndustryExpertise/aboutTransportationandLogistics.json"

import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import {TruckingIndustry} from "@/data/IndustryExpertise/truckingIndustry.json"

import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

import {keyBenefitsTransportation} from "@/data/IndustryExpertise/keyBenefitsTransportation.json"

const TransportationandLogistics = () => {
    return ( 
        <div>
            <CustomerSuccessStory CustomerSuccessStoryData={TransportationLogisticsData}/>
            {/* SAP Software for Freight Forwarding and Third-Party Logistics Companies */}
            <DoorComponent Data={Data}/>
            <div className="h-20"></div>
            {/* Software for Trucking Companies */}
            <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={TruckingIndustry}/>
            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={keyBenefitsTransportation}/>
        </div>
     );
}
 
export default TransportationandLogistics;