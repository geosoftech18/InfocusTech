import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Import JSON file using default import
import pharmaceuticalsData from "@/data/IndustryExpertise/aboutPharmaceuticals.json";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import { getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import { itemsUploader } from "@/lib/uploader/uploader";

// Extract necessary data
const aboutPharmaceuticalsData = pharmaceuticalsData.aboutPharmaceuticalsData;
const SAPSolutionLifeSciences = pharmaceuticalsData.SAPSolutionLifeSciences;
const benefitsPharmaceuticals = pharmaceuticalsData.benefitsPharmaceuticals;

const Pharmaceuticals = async() => {
  // SAPSolutionLifeSciences.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
      aboutPage1,
      aboutPage2,
      doorComponent1
    } = (await getSolutionsGQL("7GUmAHlXBY8mrZXyeBwZyH")).data.contentPage;
  
    if (
      !(
        aboutPage1 &&
        aboutPage2 &&
        doorComponent1 
      )
    ) {
      return <div>NADA</div>;
    }
  
    const door = extractDoorComponent(doorComponent1);


  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      {/* SAP Solution Life Sciences */}
      <DoorComponent Data={door} />

      <div className="h-20"></div>

      {/* Benefits Pharmaceuticals */}
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />
    </div>
  );
};

export default Pharmaceuticals;
