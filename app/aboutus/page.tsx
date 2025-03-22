import AboutUs from "@/components/aboutUs";
import CorePoints from "@/components/pages/aboutUs/corePoints";
import ManagementTeam from "@/components/pages/aboutUs/managementTeam";
import Clients from "@/components/pages/home/clients";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Import JSON files using default imports
// import corePointsDataFile from "@/data/AboutUs/corePoints.json";
// import managementTeamDataFile from "@/data/AboutUs/ManagementTeam.json";
import extractAboutUsPage from "@/lib/extractAboutUsPage";
import { extractHomePage } from "@/lib/extractHomepage";
import { getHomePageGQL } from "@/lib/graphql/extractHomepageGQL";

// Extract necessary data
// const aboutUsData = aboutUsDataFile.aboutUsData;
// const visionMissionQualityData = aboutUsDataFile.visionMissionQualityData;
// const corePointsJSON = corePointsDataFile.CorePointsJSON;
// const whyChooseUsJSON = whyChooseUsDataFile.whyChooseUsJSON;
// const managementTeamJSON = managementTeamDataFile.ManagementTeamJSON;


const AboutUsPage = async() => {

  // const {domesticClients,internationalClients} = clientsData

  const homepageData = await getHomePageGQL();
  
    if (!homepageData) return;
  
    const {aboutUsData,visionMissionQualityData,domesticClients,internationalClients,whyChooseUsData} = homepageData
    const {corePointsData,ManagementTeamData}=await extractAboutUsPage()

  return (
    <div>
      <AboutUs
        AboutUsData={aboutUsData}
        visionMissionQualityData={visionMissionQualityData}
      />
      <CorePoints CorePointsData={corePointsData} />
      <WhyChooseUs whyChooseUsData={whyChooseUsData} />
      <ManagementTeam ManagementTeamData={ManagementTeamData} />
      <Clients  domesticClients={domesticClients} internationalClients={internationalClients}/>
    </div>
  );
};

export default AboutUsPage;
