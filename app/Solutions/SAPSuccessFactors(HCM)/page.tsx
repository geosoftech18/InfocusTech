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
import { itemsUploader } from "@/lib/uploader/uploader";
import {
  getBenefitsComponent,
  getSolutionsGQL,
} from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

// Extract JSON Objects
const { aboutUsJSON } = aboutUsData;
const { CoreHR } = coreHRData;
const { HCMSuite } = hcmSuiteData;
const { UniqueCompetitiveAdvantageJSON } = uniqueCompetitiveAdvantageData;
const { Data: KeyCapabilities } = keyCapabilitiesData;

const SAPSuccessFactors = async () => {
  // CoreHR.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
    aboutPage1,
    aboutPage2,
    doorComponent1,
    doorComponent2,
    benefitsComponent1,
  } = (await getSolutionsGQL("2h8mvQN82IpVJ3J92zbIhh")).data.contentPage;

  if (
    !aboutPage1 ||
    !aboutPage2 ||
    !doorComponent1 ||
    !doorComponent2 ||
    !benefitsComponent1
  ) {
    return <div>NADA</div>;
  }

  const doorComponent11 = extractDoorComponent(doorComponent1);
  const doorComponent22 = extractDoorComponent(doorComponent2);
  const benefits1 = getBenefitsComponent(benefitsComponent1);
  return (
    <div>
      {/* Why Choose Us */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />

      {/* HCM Suite */}
      <BenefitsSapImplementation Data={benefits1} />

      <div className="h-20 md:h-32"></div>

      {/* Core HR - SAP Upgrade & Migration */}
      <WhySAPUpgradeandMigration Data={doorComponent11} />

      <div className="h-32 lg:h-10"></div>

      {/* Key Capabilities */}
      <DoorComponent Data={doorComponent22} />
    </div>
  );
};

export default SAPSuccessFactors;
