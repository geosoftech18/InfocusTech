import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";

// Import JSON files using default imports
import aboutChemicalDataFile from "@/data/IndustryExpertise/aboutChemical.json";
import chemicalSapOfferingDataFile from "@/data/IndustryExpertise/ChemicalSAPOffering.json";
import benefitsChemicalDataFile from "@/data/IndustryExpertise/benefitsChemical.json";
import {
  customerSuccessStoryUploader,
  itemsUploader,
} from "@/lib/uploader/uploader";
import {
  getBenefitsComponent,
  getCustomerSuccessStory,
  getSolutionsGQL,
} from "@/lib/graphql/extractSolutionsPages";

// Extract necessary data
const aboutChemical = aboutChemicalDataFile.AboutChemical;
const chemicalSapOffering = chemicalSapOfferingDataFile.ChemicalSapOffering;
const benefitsChemical = benefitsChemicalDataFile.BenefitChemical;

const Chemical = async () => {
  // benefitsChemical.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  //  await customerSuccessStoryUploader({CustomerSuccessStoryData:chemicalSapOffering})
  const { customerSuccessStory, aboutPage1, benefitsComponent1 } = (
    await getSolutionsGQL("1uPf5hkzHPCetlTeVyCI5u")
  ).data.contentPage;

  if (!aboutPage1 || !benefitsComponent1 || !customerSuccessStory) {
    return <div>NADA</div>;
  }
  const customerSuccessStory1 = getCustomerSuccessStory(customerSuccessStory);
  const benefitsData = getBenefitsComponent(benefitsComponent1);
  return (
    <div className="pb-20">
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <CustomerSuccessStory CustomerSuccessStoryData={customerSuccessStory1} />
      <BenefitsSapImplementation Data={benefitsData} />
    </div>
  );
};

export default Chemical;
