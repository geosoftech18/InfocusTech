// Import Components
import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON Data
// import aboutUsData from "@/data/Solutions/S4RisePrivateCloud/about.json";
import benefitsData from "@/data/Solutions/S4RisePrivateCloud/benefits.json";
// import keyPointsData from "@/data/Solutions/S4RisePrivateCloud/keyPoints.json";
import keyBenefitsData from "@/data/Solutions/S4RisePrivateCloud/keyBenefits.json";
// import keyHighlightsData from "@/data/Solutions/S4RisePrivateCloud/keyHighlights.json";
import { itemsUploader } from "@/lib/uploader/uploader";
import {
  getBenefitsComponent,
  getSolutionsGQL,
  getToolsandTechnology,
} from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

// Extract relevant JSON objects
// const { AboutUsJSON } = aboutUsData;
const { BenefitsJSON } = benefitsData;
// const { Data } = keyPointsData;
const { KeyBenefits } = keyBenefitsData;
// const { KeyHighlights } = keyHighlightsData;

const S4RisePrivateCloud = async () => {

  // BenefitsJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const { aboutPage1, doorComponent1, doorComponent2 ,benefitsComponent1,benefitsComponent2} = (
    await getSolutionsGQL("2NA0KWWJOTBjn3eNaFTKG9")
  ).data.contentPage;

  if (!aboutPage1 || !doorComponent1 || !doorComponent2 || !benefitsComponent1 || !benefitsComponent2) {
    return <div>NADA</div>;
  }

  const doorComponent11 = extractDoorComponent(doorComponent1);
  const toolsandTechnology = getToolsandTechnology(doorComponent2);
  const benefits1=getBenefitsComponent(benefitsComponent1);
  const benefits2=getBenefitsComponent(benefitsComponent2)
  return (
    <div>
      {/* Why Choose Us? */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      {/* Benefits of Using an In-Memory Platform with SAP S/4HANA */}
      <BenefitsSapImplementation Data={benefits1} />

      <div className="h-32"></div>

      {/* SAP S/4HANA: Immediate. Intelligent. Integrated. */}
      <DoorComponent Data={doorComponent11} />

      <div className="md:h-20"></div>

      {/* Key Benefits of SAP S/4HANA */}
      <KeyFeatureSapImplementation
        Data={benefits2}
      />

      {/* Key Highlights of SAP S/4HANA */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={toolsandTechnology}
      />
    </div>
  );
};

export default S4RisePrivateCloud;
