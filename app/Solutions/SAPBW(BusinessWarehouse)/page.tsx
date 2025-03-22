// Import JSON data
import bw4HanaData from "@/data/Solutions/SAPBW/BW4HANA.json";
import whyBW4HanaData from "@/data/Solutions/SAPBW/whyBW4HAHA.json";
import highlightsSAPBWData from "@/data/Solutions/SAPBW/highlightsSAPBW.json";
import aboutUsData from "@/data/Solutions/SAPBW/about.json";
import expertAnalysisData from "@/data/Solutions/SAPBW/expertAnalysis.json";

// Extract relevant data
const { Data: bw4HanaJSON } = bw4HanaData;
const { Data: whyBW4HanaJSON } = whyBW4HanaData;
const { KeyHighlightsSAPBWJSON } = highlightsSAPBWData;
const { AboutUsJSON } = aboutUsData;
const { expertAnalysisJSON } = expertAnalysisData;

// Import Components
import DoorComponent from "@/components/pages/home/whatWeOffer";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";

const SAPBW = async() => {

  // whyBW4HanaJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
const {
      aboutPage1,
      aboutPage2,
      doorComponent1,
      doorComponent2,
      benefitsComponent1,
    } = (await getSolutionsGQL("1z82TQ25IsMBTWOVg8WvDi")).data.contentPage;
  
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
      {/* Why Choose Us Section */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />

      {/* BW/4HANA Offerings */}
      <DoorComponent Data={doorComponent11} />
      <div className="h-20"></div>

      {/* Key Highlights */}
      <KeyFeatureSapImplementation
        Data={benefits1}
      />
      <div className="h-20"></div>

      {/* Why BW/4HANA? */}
      <DoorComponent Data={doorComponent22} />
    </div>
  );
};

export default SAPBW;
