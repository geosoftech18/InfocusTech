import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { aboutUsJSON } from "@/data/Solutions/SAPSRMAriba/about.json";

import IndustriesWeServe from "@/components/pages/home/industriesWeServe";
import { PortfolioJSON } from "@/data/Solutions/SAPSRMAriba/portfolio.json";

import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import { KeyModules } from "@/data/Solutions/SAPSRMAriba/keyModules.json";

import FlexibledeploymentOptions from "@/components/pages/Solutions/FlexibledeploymentOptions";
import DoorComponent from "@/components/pages/home/whatWeOffer";

import { Data } from "@/data/Solutions/SAPSRMAriba/ContractLifecycleManagement.json";

import { Data as solutionCapabilities } from "@/data/Solutions/SAPSRMAriba/solutionCapabilities.json";

import { collaborativeSourcing } from "@/data/Solutions/SAPSRMAriba/CollaborativeSourcing.json";

const SAPSRMAriba = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutUsJSON} />

      {/* portfolio */}
      <IndustriesWeServe industriesWeServeData={PortfolioJSON} />

      <div className="h-20"></div>
      {/* Key Modules of SAP and Ariba Procurement Solutions */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyModules}
      />
      <FlexibledeploymentOptions />

      {/* Optimized Contract Lifecycle Management */}
      <DoorComponent Data={Data} />

      <div className="h-20"></div>
      
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={collaborativeSourcing}
      />
      <div className="h-20"></div>
      <DoorComponent Data={solutionCapabilities} />
      <div className="h-20"></div>
    </div>
  );
};

export default SAPSRMAriba;
