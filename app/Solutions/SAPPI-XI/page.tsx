// Import JSON data
import aboutData from "@/data/Solutions/SAPPIXI/about.json";
import aboutXIData from "@/data/Solutions/SAPPIXI/aboutXI.json";

// Extract relevant data
const { aboutJSON } = aboutData;
const { aboutSAPXI } = aboutXIData;

// Import Components
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import PISuccessStory from "@/components/pages/Solutions/PISuccessStory";

const SAPPIXI = () => {
  return (
    <div>
      {/* Introduction to SAP PI/XI */}
      <WhyChooseUs whyChooseUsData={aboutJSON} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutSAPXI} />

      {/* PI Success Story */}
      <PISuccessStory />
    </div>
  );
};

export default SAPPIXI;
