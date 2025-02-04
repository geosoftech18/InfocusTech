import AboutUs from "@/components/aboutUs";
import CorePoints from "@/components/pages/aboutUs/corePoints";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { aboutUsData, visionMissionQualityData } from "@/data/aboutUs.json";
import { CorePointsJSON } from "@/data/corePoints.json";
import {whyChooseUsJSON} from "@/data/whyChooseUs.json"

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs
        AboutUsData={aboutUsData}
        visionMissionQualityData={visionMissionQualityData}
      />
      <CorePoints CorePointsData={CorePointsJSON}/>
      <WhyChooseUs whyChooseUsData={whyChooseUsJSON}/>
    </div>
  );
};

export default AboutUsPage;
