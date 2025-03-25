// Import JSON data
import aboutData from "@/data/Services/SAPUpgaradeandMigration/SAPUpgaradeandMigration.json";
import whySAPUpgradeData from "@/data/Services/SAPUpgaradeandMigration/WhySAPUpgradeandMigration.json";
import keyFeaturesData from "@/data/Services/SAPUpgaradeandMigration/keyFeaturesSAPUpgaradeandMigration.json";
import processData from "@/data/Services/SAPUpgaradeandMigration/SAPUpgaradeandMigrationProcess.json";
import challengesData from "@/data/Services/SAPUpgaradeandMigration/SAPUpgradeandMigrationChallenges.json";
import toolsData from "@/data/Services/SAPUpgaradeandMigration/toolsAndTechSAPUpgradationandMigration.json";

// Extract relevant data
const { aboutSAPUpgradeandMigration } = aboutData;
const { WhySAPUpgradeandMigrationJSON } = whySAPUpgradeData;
const { keyFeaturesSAPUpgaradeandMigrationJSON } = keyFeaturesData;
const { SAPUpgaradeandMigrationProcessJSON } = processData;
const { SAPUpgradeandMigrationChallengesJSON } = challengesData;
const { toolsAndTechSAPUpgradationandMigrationJSON } = toolsData;

// Import Components
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import WhySAPUpgradeandMigration from "@/components/pages/services/WhySAPUpgradeandMigration";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

const SAPUpgradeandMigration = async() => {

  // toolsAndTechSAPUpgradationandMigrationJSON.Tool.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  const {
        aboutPage1,
        doorComponent1,
        doorComponent2,
        doorComponent3,
        benefitsComponent1,
        benefitsComponent2
      } = (await getSolutionsGQL("2AblH9ZByCq2GNqc1Uv1o9")).data.contentPage;
    
      if (
        !aboutPage1 ||
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
      const doorComponent33 = getToolsandTechnology(doorComponent3);
      const benefits1 = getBenefitsComponent(benefitsComponent1);
      const benefits2 = getBenefitsComponent(benefitsComponent2);


  return (
    <div>
      {/* About SAP Upgrade & Migration */}
      {/* <AboutSapImplementation AboutSapImplementationData={aboutSAPUpgradeandMigration} /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* Why SAP Upgrade and Migration? */}
      <WhySAPUpgradeandMigration Data={doorComponent11} />

      <div className="h-40 md:h-0"></div>

      {/* Key Features of SAP Upgrade & Migration */}
      <KeyFeatureSapImplementation Data={benefits1} />

      <div className="h-40"></div>

      {/* Our Approach to SAP Upgrade & Migration */}
      <SapImplementationProcess SapImplemetationProcessData={doorComponent22} />

      <div className="h-10 md:h-1 "></div>

      {/* Challenges Addressed */}
      <BenefitsSapImplementation Data={benefits2} />

      <div className="md:h-10"></div>

      {/* Tools & Technologies for SAP Upgrade & Migration */}
      <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={doorComponent33} />
    </div>
  );
};

export default SAPUpgradeandMigration;
