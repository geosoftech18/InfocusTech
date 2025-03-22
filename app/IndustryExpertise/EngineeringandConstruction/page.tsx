import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default imports
import aboutECODataFile from "@/data/IndustryExpertise/aboutECO.json";
import { getBenefitsComponent, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { itemsUploader } from "@/lib/uploader/uploader";

// Extract necessary data
const aboutECO = aboutECODataFile.aboutECO;
const dynamicsECO = aboutECODataFile.dynamicsECO;
const challengesECO = aboutECODataFile.challengesECO;
const keyFeaturesECO = aboutECODataFile.KeyFeaturesECO;

const ECO = async() => {

  // keyFeaturesECO.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {  aboutPage1 ,aboutPage2, benefitsComponent1,doorComponent1 } = (
      await getSolutionsGQL("758BIa1wfIDPLPEropI8DT")
    ).data.contentPage;
  
    if (!aboutPage1 ||!aboutPage2 || !benefitsComponent1 || !doorComponent1) {
      return <div>NADA</div>;
    }
    const benefitsData = getBenefitsComponent(benefitsComponent1);
    const toolsData = getToolsandTechnology(doorComponent1)

  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />

      {/* challenges */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={toolsData}
      />
      <KeyFeatureSapImplementation
        Data={benefitsData}
      />
    </div>
  );
};

export default ECO;
