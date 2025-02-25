import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

import { aboutSAPUpgradeandMigration } from "@/data/Services/SAPUpgaradeandMigration/SAPUpgaradeandMigration.json";

import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import WhySAPUpgradeandMigration from "@/components/pages/services/WhySAPUpgradeandMigration";

import { WhySAPUpgradeandMigrationJSON } from "@/data/Services/SAPUpgaradeandMigration/WhySAPUpgradeandMigration.json";

import { keyFeaturesSAPUpgaradeandMigrationJSON } from "@/data/Services/SAPUpgaradeandMigration/keyFeaturesSAPUpgaradeandMigration.json";

import { SAPUpgaradeandMigrationProcessJSON } from "@/data/Services/SAPUpgaradeandMigration/SAPUpgaradeandMigrationProcess.json";

import { SAPUpgradeandMigrationChallengesJSON } from "@/data/Services/SAPUpgaradeandMigration/SAPUpgradeandMigrationChallenges.json";

import { toolsAndTechSAPUpgradationandMigrationJSON } from "@/data/Services/SAPUpgaradeandMigration/toolsAndTechSAPUpgradationandMigration.json";
const SAPUpgradeandMigration = () => {
  return (
    <div>
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutSAPUpgradeandMigration}
      />
      {/* why SAP Upgrade and Migration? */}

      <WhySAPUpgradeandMigration
        WhySAPUpgradeandMigrationData={WhySAPUpgradeandMigrationJSON}
      />

      {/* Key Features of SAP Upgrade & Migration */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={keyFeaturesSAPUpgaradeandMigrationJSON}
      />
      <div className="h-40"></div>
      {/* Our Approach to SAP Upgrade & Migration */}
      <SapImplementationProcess
        SapImplemetationProcessData={SAPUpgaradeandMigrationProcessJSON}
      />

      {/* challenges addressed */}

      <div className="h-1"></div>
      <BenefitsSapImplementation
        BenefitSapImplementationData={SAPUpgradeandMigrationChallengesJSON}
      />
      <div className="h-1"></div>

      {/* Tools & Technologies for SAP Upgrade & Migration */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={
          toolsAndTechSAPUpgradationandMigrationJSON
        }
      />
    </div>
  );
};

export default SAPUpgradeandMigration;
