import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import PISuccessStory from "@/components/pages/Solutions/PISuccessStory";
import { aboutJSON } from "@/data/Solutions/SAPPIXI/about.json";
import { aboutSAPXI } from "@/data/Solutions/SAPPIXI/aboutXI.json";

const SAPPIXI = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutJSON} />

      <WhyChooseUs basis="textRight" whyChooseUsData={aboutSAPXI} />

      <PISuccessStory />
    </div>
  );
};

export default SAPPIXI;
