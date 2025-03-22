import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default imports
import miningData from "@/data/IndustryExpertise/mining.json";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import {
  getBenefitsComponent,
  getSolutionsGQL,
  getToolsandTechnology,
} from "@/lib/graphql/extractSolutionsPages";
import { itemsUploader } from "@/lib/uploader/uploader";

// Extract necessary data
const aboutMining = miningData.aboutMining;
const SAPforMining = miningData.SAPforMining;
const ComoditySCM = miningData.ComoditySCM;
const howSAPSolutionsHelp = miningData.howSAPSolutionsHelp;
const benefitsMining = miningData.benefitsMining;

const Mining = async () => {
  // benefitsMining.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  //  await customerSuccessStoryUploader({CustomerSuccessStoryData:chemicalSapOffering})

  const {
    aboutPage1,
    aboutPage2,
    doorComponent1,
    doorComponent2,
    benefitsComponent1,
  } = (await getSolutionsGQL("5JX3p1atyhsbszGCZN0Mqy")).data.contentPage;

  if (
    !(
      aboutPage1 &&
      aboutPage2 &&
      doorComponent1 &&
      doorComponent2 &&
      benefitsComponent1
    )
  ) {
    return <div>NADA</div>;
  }

  const tool1 = getToolsandTechnology(doorComponent1);
  const door2 = extractDoorComponent(doorComponent2);
  const benefits = getBenefitsComponent(benefitsComponent1)

  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      {/* Commodity SCM */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={tool1}
      />

      {/* How SAP solutions help */}
      <DoorComponent Data={door2} />

      <div className="h-20"></div>

      <KeyFeatureSapImplementation Data={benefits} />

      <WhyChooseUs whyChooseUsData={aboutPage2} />
    </div>
  );
};

export default Mining;
