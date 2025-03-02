import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Import JSON file using default import
import pharmaceuticalsData from "@/data/IndustryExpertise/aboutPharmaceuticals.json";

// Extract necessary data
const aboutPharmaceuticalsData = pharmaceuticalsData.aboutPharmaceuticalsData;
const SAPSolutionLifeSciences = pharmaceuticalsData.SAPSolutionLifeSciences;
const benefitsPharmaceuticals = pharmaceuticalsData.benefitsPharmaceuticals;

const Pharmaceuticals = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutPharmaceuticalsData} />

      {/* SAP Solution Life Sciences */}
      <DoorComponent Data={SAPSolutionLifeSciences} />

      <div className="h-20"></div>

      {/* Benefits Pharmaceuticals */}
      <WhyChooseUs basis="textRight" whyChooseUsData={benefitsPharmaceuticals} />
    </div>
  );
};

export default Pharmaceuticals;
