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
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

// Extract JSON Objects
const { aboutUsJSON } = aboutUsData;
const { PortfolioJSON } = portfolioData;
const { KeyModules } = keyModulesData;
const { Data: ContractLifecycleData } = contractLifecycleData;
const { Data: SolutionCapabilities } = solutionCapabilitiesData;
const { collaborativeSourcing } = collaborativeSourcingData;

const SAPSRMAriba = async() => {

  // SolutionCapabilities.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
      aboutPage1,
      aboutPage2,
      doorComponent1,
      doorComponent2,
      doorComponent3,
      benefitsComponent1,
      benefitsComponent2
    } = (await getSolutionsGQL("6a1f2ddX4XrU4snlB5pzGM")).data.contentPage;
  
    if (
      !aboutPage1 ||
      !aboutPage2 ||
      !doorComponent1 ||
      !doorComponent2 ||
      !doorComponent3 ||
      !benefitsComponent1 ||
      !benefitsComponent2
    ) {
      return <div>NADA</div>;
    }
  
    const doorComponent11 = extractDoorComponent(doorComponent1);
    const doorComponent22 = extractDoorComponent(doorComponent2);
    const doorComponent33 = extractDoorComponent(doorComponent3);
    const benefits1 = getBenefitsComponent(benefitsComponent1);
    const benefits2 = getBenefitsComponent(benefitsComponent2);

  return (
    <div>
      {/* Why Choose Us */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      {/* Industries We Serve */}
      <IndustriesWeServe industriesWeServeData={doorComponent11} />

      <div className="h-20"></div>

      {/* Key Modules of SAP and Ariba Procurement Solutions */}
      <KeyFeatureSapImplementation Data={benefits1} />

      {/* Flexible Deployment Options */}
      <FlexibledeploymentOptions heading={aboutPage2.heading} description={aboutPage2.description} imageUrl={aboutPage2.whyChooseUsImage.url}/>

      {/* Optimized Contract Lifecycle Management */}
      <DoorComponent Data={doorComponent22} />

      <div className="h-20"></div>

      {/* Collaborative Sourcing */}
      <KeyFeatureSapImplementation Data={benefits2} />

      <div className="h-20"></div>

      {/* Solution Capabilities */}
      <DoorComponent Data={doorComponent33} />

      <div className="h-0 "></div>
    </div>
  );
};

export default SAPSRMAriba;
