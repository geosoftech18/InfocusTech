import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import {aboutUsJSON} from "@/data/Solutions/SAPFIORI/about.json"

import {whyJSON} from "@/data/Solutions/SAPFIORI/why.json"
import {keyBenefits} from "@/data/Solutions/SAPFIORI/keyBenefits.json"

const SAPFIORI = () => {
    return ( 
        <div>
            <WhyChooseUs whyChooseUsData={aboutUsJSON}/>
            <WhyChooseUs basis="textRight" whyChooseUsData={whyJSON}/>
            <BenefitsSapImplementation BenefitSapImplementationData={keyBenefits}/>
        </div>
     );
}
 
export default SAPFIORI;