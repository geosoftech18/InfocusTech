import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import {aboutPharmaceuticalsData,SAPSolutionLifeSciences,benefitsPharmaceuticals} from "@/data/IndustryExpertise/aboutPharmaceuticals.json"

const Pharmaceuticals = () => {
    return ( 
        <div>
            <WhyChooseUs whyChooseUsData={aboutPharmaceuticalsData}/>
            {/* SAPSolutionLifeSciences */}
            <DoorComponent Data={SAPSolutionLifeSciences}/>
            {/* benefitsPharmaceuticals */}
            <div className="h-20"></div>
            <WhyChooseUs basis="textRight" whyChooseUsData={benefitsPharmaceuticals}/>
        </div>
     );
}
 
export default Pharmaceuticals;