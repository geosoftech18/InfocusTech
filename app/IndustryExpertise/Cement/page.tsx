import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

// Import JSON file using default import
import customerSuccessStoryDataFile from "@/data/IndustryExpertise/Cement.json";
import { getCustomerSuccessStory, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import { customerSuccessStoryUploader } from "@/lib/uploader/uploader";

// Extract necessary data
const customerSuccessStoryDataCement = customerSuccessStoryDataFile.CustomerSuccessStoryDataCement;

const Cement = async() => {
  const {
    customerSuccessStory
      } = (await getSolutionsGQL("7pZMbelGs2htcBggkMhBqc")).data.contentPage;
    
      if (
        !customerSuccessStory
      ) {
        return <div>NADA</div>;
      }
      const customerSuccessStory1= getCustomerSuccessStory(customerSuccessStory)
  // await customerSuccessStoryUploader({CustomerSuccessStoryData:customerSuccessStoryDataCement})
  return <CustomerSuccessStory CustomerSuccessStoryData={customerSuccessStory1} />;
};

export default Cement;
