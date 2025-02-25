import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import {CustomerSuccessStoryDataCement} from "@/data/IndustryExpertise/Cement.json"

const Cement = () => {
    return ( 
        <CustomerSuccessStory CustomerSuccessStoryData={CustomerSuccessStoryDataCement}/>
     );
}
 
export default Cement;