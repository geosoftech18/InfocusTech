// Import Components
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import IndustriesWeServe from "@/components/pages/home/industriesWeServe";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import FlexibledeploymentOptions from "@/components/pages/Solutions/FlexibledeploymentOptions";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON Data
import aboutUsData from "@/data/Solutions/SAPSRMAriba/about.json";
import portfolioData from "@/data/Solutions/SAPSRMAriba/portfolio.json";
import keyModulesData from "@/data/Solutions/SAPSRMAriba/keyModules.json";
import contractLifecycleData from "@/data/Solutions/SAPSRMAriba/ContractLifecycleManagement.json";
import solutionCapabilitiesData from "@/data/Solutions/SAPSRMAriba/solutionCapabilities.json";
import collaborativeSourcingData from "@/data/Solutions/SAPSRMAriba/CollaborativeSourcing.json";

// Extract JSON Objects
const { aboutUsJSON } = aboutUsData;
const { PortfolioJSON } = portfolioData;
const { KeyModules } = keyModulesData;
const { Data: ContractLifecycleData } = contractLifecycleData;
const { Data: SolutionCapabilities } = solutionCapabilitiesData;
const { collaborativeSourcing } = collaborativeSourcingData;

const SAPSRMAriba = () => {
  return (
    <div>
      {/* Why Choose Us */}
      <WhyChooseUs whyChooseUsData={aboutUsJSON} />

      {/* Industries We Serve */}
      <IndustriesWeServe industriesWeServeData={PortfolioJSON} />

      <div className="h-20"></div>

      {/* Key Modules of SAP and Ariba Procurement Solutions */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={KeyModules} />

      {/* Flexible Deployment Options */}
      <FlexibledeploymentOptions />

      {/* Optimized Contract Lifecycle Management */}
      <DoorComponent Data={ContractLifecycleData} />

      <div className="h-20"></div>

      {/* Collaborative Sourcing */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={collaborativeSourcing} />

      <div className="h-20"></div>

      {/* Solution Capabilities */}
      <DoorComponent Data={SolutionCapabilities} />

      <div className="h-0 md:h-20"></div>
    </div>
  );
};

export default SAPSRMAriba;
