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

const SAPUpgradeandMigration = () => {
  return (
    <div>
      {/* About SAP Upgrade & Migration */}
      <AboutSapImplementation AboutSapImplementationData={aboutSAPUpgradeandMigration} />

      {/* Why SAP Upgrade and Migration? */}
      <WhySAPUpgradeandMigration WhySAPUpgradeandMigrationData={WhySAPUpgradeandMigrationJSON} />

      {/* Key Features of SAP Upgrade & Migration */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={keyFeaturesSAPUpgaradeandMigrationJSON} />

      <div className="h-40"></div>

      {/* Our Approach to SAP Upgrade & Migration */}
      <SapImplementationProcess SapImplemetationProcessData={SAPUpgaradeandMigrationProcessJSON} />

      <div className="h-1"></div>

      {/* Challenges Addressed */}
      <BenefitsSapImplementation BenefitSapImplementationData={SAPUpgradeandMigrationChallengesJSON} />

      <div className="h-1"></div>

      {/* Tools & Technologies for SAP Upgrade & Migration */}
      <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={toolsAndTechSAPUpgradationandMigrationJSON} />
    </div>
  );
};

export default SAPUpgradeandMigration;
