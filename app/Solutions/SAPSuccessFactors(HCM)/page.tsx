// Import Components
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import WhySAPUpgradeandMigration from "@/components/pages/services/WhySAPUpgradeandMigration";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON Data
import aboutUsData from "@/data/Solutions/SAPSuccessFactors/about.json";
import coreHRData from "@/data/Solutions/SAPSuccessFactors/coreHR.json";
import hcmSuiteData from "@/data/Solutions/SAPSuccessFactors/HCMSuite.json";
import uniqueCompetitiveAdvantageData from "@/data/Solutions/SAPSuccessFactors/UniqueCompetitiveAdvantage.json";
import keyCapabilitiesData from "@/data/Solutions/SAPSuccessFactors/keyCapabilities.json";

// Extract JSON Objects
const { aboutUsJSON } = aboutUsData;
const { CoreHR } = coreHRData;
const { HCMSuite } = hcmSuiteData;
const { UniqueCompetitiveAdvantageJSON } = uniqueCompetitiveAdvantageData;
const { Data: KeyCapabilities } = keyCapabilitiesData;

const SAPSuccessFactors = () => {
  return (
    <div>
      {/* Why Choose Us */}
      <WhyChooseUs whyChooseUsData={aboutUsJSON} />
      <WhyChooseUs basis="textRight" whyChooseUsData={UniqueCompetitiveAdvantageJSON} />

      {/* HCM Suite */}
      <BenefitsSapImplementation BenefitSapImplementationData={HCMSuite} />

      <div className="md:h-10"></div>

      {/* Core HR - SAP Upgrade & Migration */}
      <WhySAPUpgradeandMigration WhySAPUpgradeandMigrationData={CoreHR} />

      <div className="h-10"></div>

      {/* Key Capabilities */}
      <DoorComponent Data={KeyCapabilities} />
    </div>
  );
};

export default SAPSuccessFactors;
