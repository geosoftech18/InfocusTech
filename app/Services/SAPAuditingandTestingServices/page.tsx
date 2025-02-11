import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

import { AboutJSON } from "@/data/Services/SAPAuditingandTestingServices/about.json";

import DoorComponent from "@/components/pages/home/whatWeOffer";
import { SAPTestingServicesOfferingsJSON } from "@/data/Services/SAPAuditingandTestingServices/SAPTestingServicesOfferings.json";

import { SAPTestingServicesJSON } from "@/data/Services/SAPAuditingandTestingServices/SAPTestingTools.json";

const SAPAuditingandTestingServices = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={AboutJSON}
      />

      {/* SAPTestingServicesOfferings */}

      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={SAPTestingServicesOfferingsJSON}
      />
      <div className="h-20"></div>
      <DoorComponent Data={SAPTestingServicesJSON}/>
    </div>
  );
};

export default SAPAuditingandTestingServices;
