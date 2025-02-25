import DoorComponent from "@/components/pages/home/whatWeOffer";
import { Data } from "@/data/Solutions/SAPBW/BW4HANA.json";
import { Data as whyBW4HAHA } from "@/data/Solutions/SAPBW/whyBW4HAHA.json";

import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import { KeyHighlightsSAPBWJSON } from "@/data/Solutions/SAPBW/highlightsSAPBW.json";

import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { AboutUsJSON } from "@/data/Solutions/SAPBW/about.json";
import { expertAnalysisJSON } from "@/data/Solutions/SAPBW/expertAnalysis.json";

const SAPBW = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={AboutUsJSON} />
      <WhyChooseUs basis="textRight" whyChooseUsData={expertAnalysisJSON} />
      <DoorComponent Data={Data} />
      <div className="h-20"></div>
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyHighlightsSAPBWJSON}
      />
      <div className="h-20"></div>
      <DoorComponent Data={whyBW4HAHA} />
    </div>
  );
};

export default SAPBW;
