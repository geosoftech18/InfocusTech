import AboutUs from "@/components/aboutUs";
import CorePoints from "@/components/pages/aboutUs/corePoints";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import ManagementTeam from "@/components/pages/aboutUs/managementTeam";
import Clients from "@/components/pages/home/clients";

// Import JSON files using default imports
import aboutUsDataFile from "@/data/aboutUs.json";
import corePointsDataFile from "@/data/AboutUs/corePoints.json";
import whyChooseUsDataFile from "@/data/whyChooseUs.json";
import managementTeamDataFile from "@/data/AboutUs/ManagementTeam.json";

// Extract necessary data
const aboutUsData = aboutUsDataFile.aboutUsData;
const visionMissionQualityData = aboutUsDataFile.visionMissionQualityData;
const corePointsJSON = corePointsDataFile.CorePointsJSON;
const whyChooseUsJSON = whyChooseUsDataFile.whyChooseUsJSON;
const managementTeamJSON = managementTeamDataFile.ManagementTeamJSON;

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs
        AboutUsData={aboutUsData}
        visionMissionQualityData={visionMissionQualityData}
      />
      <CorePoints CorePointsData={corePointsJSON} />
      <WhyChooseUs whyChooseUsData={whyChooseUsJSON} />
      <ManagementTeam ManagementTeamData={managementTeamJSON} />
      <Clients />
    </div>
  );
};

export default AboutUsPage;
