// Import JSON data
import aboutData from "@/data/Services/SapImplementation/aboutSapImplementation.json";
import keyFeaturesData from "@/data/Services/SapImplementation/KeyFeatureSapImplementation.json";
import toolsTechnologiesData from "@/data/Services/SapImplementation/tools&TechnologiesWeUse.json";
import benefitsData from "@/data/Services/SapImplementation/BenefitsSapImplementation.json";
import implementationProcessData from "@/data/Services/SapImplementation/sapImplementationProcess.json";

// Extract relevant data
const { aboutSAPImplementationJSON } = aboutData;
const { KeyFeatureSapImplementationJSON } = keyFeaturesData;
const { toolsTechnologiesWeUseJSON } = toolsTechnologiesData;
const { BenefitsSapImplementationJSON } = benefitsData;
const { SapImplementationProcessJSON } = implementationProcessData;

// Import Components
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

const SapImplementation = async() => {

  // SapImplementationProcessJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
        aboutPage1,
        doorComponent1,
        doorComponent2,
        benefitsComponent1,
        benefitsComponent2
      } = (await getSolutionsGQL("2fO3uHxhtPOaygSXwyFToS")).data.contentPage;
    
      if (
        !aboutPage1 ||
        !doorComponent1 ||
        !doorComponent2 ||
        !benefitsComponent1 ||
        !benefitsComponent2
      ) {
        return <div>NADA</div>;
      }
    
      const doorComponent11 = getToolsandTechnology(doorComponent1);
      const doorComponent22 = extractDoorComponent(doorComponent2);
      const benefits1 = getBenefitsComponent(benefitsComponent1);
      const benefits2 = getBenefitsComponent(benefitsComponent2);
  
  return (
    <div>
      {/* About SAP Implementation */}
      {/* <AboutSapImplementation AboutSapImplementationData={aboutPage1} /> */}

      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* Key Features */}
      <KeyFeatureSapImplementation Data={benefits1} />

      {/* Tools & Technologies We Use */}
      <ToolsAndTechnologiesWeUse scroll ToolsAndTechnologiesWeUseData={doorComponent11} />

      {/* Business Benefits */}
      <BenefitsSapImplementation Data={benefits2} />

      <div className="h-32"></div>

      {/* SAP Implementation Process */}
      <SapImplementationProcess SapImplemetationProcessData={doorComponent22} />

      <div className="h-20"></div>
    </div>
  );
};

export default SapImplementation;
