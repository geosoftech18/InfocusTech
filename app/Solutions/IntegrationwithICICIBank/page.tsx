import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import {aboutJSON} from "@/data/Solutions/IntegrationwithICICIBank/about.json"

const IntegrationwithICICIBank = () => {
    return (
        <div>
            <WhyChooseUs whyChooseUsData={aboutJSON}/>
        </div>
      );
}
 
export default IntegrationwithICICIBank;