import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { aboutUsJSON } from "@/data/Solutions/SAPSuccessFactors/about.json";

import WhySAPUpgradeandMigration from "@/components/pages/services/WhySAPUpgradeandMigration";
import { CoreHR } from "@/data/Solutions/SAPSuccessFactors/coreHR.json";

import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import { HCMSuite } from "@/data/Solutions/SAPSuccessFactors/HCMSuite.json";

import { UniqueCompetitiveAdvantageJSON } from "@/data/Solutions/SAPSuccessFactors/UniqueCompetitiveAdvantage.json";
import DoorComponent from "@/components/pages/home/whatWeOffer";

import {Data} from "@/data/Solutions/SAPSuccessFactors/keyCapabilities.json"

const SAPSuccessFactors = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutUsJSON} />
      <WhyChooseUs
        basis="textRight"
        whyChooseUsData={UniqueCompetitiveAdvantageJSON}
      />
      {/* HCM suite */}
      <BenefitsSapImplementation BenefitSapImplementationData={HCMSuite} />
      <div className="h-10"></div>
      <WhySAPUpgradeandMigration WhySAPUpgradeandMigrationData={CoreHR} />
      <div className="h-10"></div>
        {/* Key Capabilities */}
      <DoorComponent Data={Data}/>
    </div>
  );
};

export default SAPSuccessFactors;
