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

const SAPBW = () => {
  return (
    <div>
      {/* Why Choose Us Section */}
      <WhyChooseUs whyChooseUsData={AboutUsJSON} />
      <WhyChooseUs basis="textRight" whyChooseUsData={expertAnalysisJSON} />

      {/* BW/4HANA Offerings */}
      <DoorComponent Data={bw4HanaJSON} />
      <div className="h-20"></div>

      {/* Key Highlights */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyHighlightsSAPBWJSON}
      />
      <div className="h-20"></div>

      {/* Why BW/4HANA? */}
      <DoorComponent Data={whyBW4HanaJSON} />
    </div>
  );
};

export default SAPBW;
