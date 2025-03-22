import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

// Import JSON files using default imports
import aboutData from "@/data/IndustryExpertise/about.json";
import adhunikData from "@/data/IndustryExpertise/Adhunik.json";
import jindalData from "@/data/IndustryExpertise/Jindal.json";
import { customerSuccessStoryUploader } from "@/lib/uploader/uploader";
import { getCustomerSuccessStory, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Extract necessary data
const aboutIronandSteelJSON = aboutData.aboutIronandSteelJSON;
const CustomerSuccessStoryDataAdhunik = adhunikData.CustomerSuccessStoryDataAdhunik;
const CustomerSuccessStoryDataJindal = jindalData.CustomerSuccessStoryDataJindal;

const IronandSteel = async() => {

  // await customerSuccessStoryUploader({CustomerSuccessStoryData:CustomerSuccessStoryDataJindal})
const { customerSuccessStory, aboutPage1,customerSuccessStory1 } = (
    await getSolutionsGQL("IuMvWbAlxAJshdA73jGdc")
  ).data.contentPage;

  if (!aboutPage1 || !customerSuccessStory1 || !customerSuccessStory) {
    return <div>NADA</div>;
  }
  const customerSuccess = getCustomerSuccessStory(customerSuccessStory);
  const customerSuccess1 = getCustomerSuccessStory(customerSuccessStory1);
  return (
    <>
      {/* <AboutSapImplementation AboutSapImplementationData={aboutIronandSteelJSON} /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>
      <CustomerSuccessStory CustomerSuccessStoryData={customerSuccess} />
      <CustomerSuccessStory CustomerSuccessStoryData={customerSuccess1} />
    </>
  );
};

export default IronandSteel;
