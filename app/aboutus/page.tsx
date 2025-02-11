import AboutUs from "@/components/aboutUs";
import CorePoints from "@/components/pages/aboutUs/corePoints";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { aboutUsData, visionMissionQualityData } from "@/data/aboutUs.json";
import { CorePointsJSON } from "@/data/AboutUs/corePoints.json";
import { whyChooseUsJSON } from "@/data/whyChooseUs.json";
import { ManagementTeamJSON } from "@/data/AboutUs/ManagementTeam.json";
import ManagementTeam from "@/components/pages/aboutUs/managementTeam";
import Clients from "@/components/pages/home/clients";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs
        AboutUsData={aboutUsData}
        visionMissionQualityData={visionMissionQualityData}
      />
      <CorePoints CorePointsData={CorePointsJSON} />
      <WhyChooseUs whyChooseUsData={whyChooseUsJSON} />
      <ManagementTeam ManagementTeamData={ManagementTeamJSON} />
      <Clients />
    </div>
  );
};

export default AboutUsPage;
