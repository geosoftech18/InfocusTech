import { getPrivacyPolicy, PrivacyPolicyData } from "@/lib/graphql/getPrivacyPolicy";
import { bulletPointsUploader } from "@/lib/uploader/uploader";
import React from "react";

// const privacyPolicyData = {
//   title: "Privacy Policy",
//   sections: [
//     {
//       heading: "What this Privacy Policy Covers",
//       content: [
//         "This Privacy Policy covers our treatment of personally identifiable information that we collect when you are on our site, and when you use our services.",
//         "This policy also covers our treatment of any personally identifiable information that third parties share with us.",
//         "This policy does not apply to the practices of organizations that we do not own or control, or to people that we do not employ or manage.",
//       ],
//     },
//     {
//       heading: "Changes to this Privacy Policy",
//       content: [
//         "The privacy policy is subject to modification from time to time.",
//         "If we decide to change our privacy policy, we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone.",
//         "Any significant changes to our privacy policy will be announced on our home page.",
//         "If you do not agree with the changes in our policy you can simply discontinue to visit our website.",
//       ],
//     },
//     {
//       heading: "Information Sharing and Disclosure",
//       content: [
//         "We will not sell or rent your personally identifiable information to anyone.",
//       ],
//     },
//     {
//       heading: "Questions or Suggestions",
//       content: ["If you have questions or suggestions send an email to us."],
//     },
//     {
//       heading: "Terms And Condition Of Use Definition",
//       content: [
//         "The term 'LOCUS' refers to our products and services as well as to our websites, social-media sites, and event-registration or landing page.",
//         "The term 'personal data' means any information relating to an identified or identifiable natural person...",
//       ],
//     },
//     {
//       heading: "Information Collection And Use",
//       content: [
//         "We collect several different types of information for various purposes to provide and improve our Service to you.",
//       ],
//     },
//     {
//       heading: "What Personal Data We Collect",
//       content: [
//         "We may solicit the following data from you:",
//         "First Name",
//         "Last Name",
//         "Job Title",
//         "Company Name",
//         "Email Address",
//         "Telephone Number",
//         "Mailing Address",
//         "Feedback About Our Products and Services",
//         "Messaging Preferences",
//         "If you decline to provide personal data that we need to perform a contract with you, we may not be able to perform the contract. If data that you have supplied to us changes during our relationship, please let us know so we can update our records.",
//         "We may collect the following data about you automatically:",
//         "Links You Click To Get To Our Website",
//         "Pages You View On Our Website",
//         "Links You Click To Leave Our Website",
//         "Device IP Address",
//         "Browser Type And Version",
//         "Browser Plug-In Types And Versions",
//         "Device Time-Zone",
//         "Device Operating System",
//         "Device Hardware",
//         "Device Configuration",
//         "Metrics About Your Usage Of Our Products And Services",
//         "Details About Your Purchases Of Our Products And Services",
//         "Details About Your Payments For Our Products And Services",
//       ],
//     },
//     {
//       heading: "Disclosures Of Personal Data",
//       content: [
//         "We do not process or disclose personal data other than as set forth in this Policy. In particular, we never sell, license, or otherwise disclose your contact information to third parties for their promotional use.",
//         "However, we may disclose your personal data under the following circumstances:",
//         "To Comply With Court Orders Or Other Legal Requirements.",
//         "If We Sell Our Business Or Any Portion Of It, We May Disclose Your Personal Data To The Purchaser. We May Also Disclose Your Personal Data To A Prospective Purchaser During A Due-Diligence Period Preceding Sale, Subject To A Nondisclosure Agreement That Protects Your Personal Data From Misuse.",
//         "Likewise, If We Acquire Another Business, We May Disclose Your Personal Data To The Acquired Business. In The Event Of Such Sale Or Acquisition, The New Owners Or Affiliates May Use Your Personal Data In The Same Ways As Described In This Policy.",
//         "From Time To Time, We May Engage Service Providers To Assist In Managing Or Operating Our Business (For Example, To Provide Customer Service). We May Disclose Your Personal Data To Such Service Providers As Needed To Accomplish Our Purposes, As Described Above.",
//         "We Require Our Service Providers To Maintain The Confidentiality Of Your Personal Data And To Treat It In Accordance With The Law. We Do Not Permit Our Service Providers To Use Your Personal Data For Their Own Purposes Or To Process Your Personal Data Other Than In Accordance With Our Instructions.",
//         "From time to time, a Polestar business partner or supplier may give us information about you so that we can contact you to provide information you have requested. We comply with all terms and conditions under which such information is disclosed to us.",
//         "We may disclose certain information concerning the status of such information requests to those partners or suppliers who introduced you to us.",
//       ],
//     },
//     {
//       heading: "Our Legal Bases For Processing Personal Data",
//       content: [
//         "Our legal bases for processing your personal data as set forth above include:",
//         "To Perform A Contract With You",
//         "To Protect Our Legitimate Interests, Namely, To Operate Our Business, To Keep Our Records Up-To-Date, To Administer Our IT Systems, To Maintain Security, To Prevent Fraud, And To Collect Amounts Owed To Us",
//         "To Comply With Legal Requirements",
//         "Your Consent",
//         "For more information about our legal bases for processing your personal data, please contact us as set forth below.",
//       ],
//     },
//     {
//       heading: "SECURITY",
//       content: [
//         "We maintain appropriate security measures designed to protect your personal data from loss as well as from being accessed, altered, used, or disclosed without authorization.",
//         "We limit access to your personal data to those of our employees, agents, representatives, and service providers who have a need to know in order to accomplish the purposes for which we use your personal data.",
//         "We require that such persons process your personal data solely in accordance with our instructions and not for other purposes.",
//         "We maintain appropriate procedures to deal with any actual or suspected data breach. We will notify you and any regulators having jurisdiction over such a breach whenever we are required by law to do so.",
//         "Polestar products and services may contain links or references to resources controlled by third parties with whom we do not have a relationship. We do not control such third parties and are not responsible for them.",
//         "When you access resources controlled by third parties, you should exercise caution and familiarize yourself with the controller’s data-privacy practices.",
//       ],
//     },
//     {
//       heading: "Your Legal Rights",
//       content: [
//         "If you are located in the EU or in another jurisdiction that confers similar protections, you may have the following rights in relation to your personal data:",
//         "To Request Access",
//         "To Request Correction Of Any Incomplete Or Inaccurate Personal Data",
//         "To Request Erasure When There Is No Legal Basis For Our Processing Or Retention Or When Local Law So Requires",
//         "To Object To Processing When You Feel It Adversely Impacts You",
//         "To Request Restriction Of Processing To Verify The Accuracy Of Your Personal Data",
//         "To Request Restriction Of Processing Pending An Objection Or Other Legal Proceeding",
//         "To Request Transfer To A Third Party",
//         "To Withdraw Your Consent To Our Retention Or Processing",
//         "If you wish to exercise any of the rights described above, please contact us as set forth below.",
//         "We may need specific information from you to help us confirm your identity. (This is a security measure to ensure that your personal data is not disclosed to unauthorized persons.)",
//         "In general, you will not have to pay any fee to access your personal data or to exercise any other right accorded to you by law.",
//         "We try to respond to all legitimate requests within one month. Occasionally it may take us longer if your request is complex or if you make numerous requests. In such case, we will notify you and keep you updated.",
//       ],
//     },
//     {
//       heading: "MODIFICATIONS",
//       content: [
//         "We reserve the right to modify this Policy at any time.",
//         "If we make material changes to this Policy, we will notify you here, by email, or by posting a notice on our website home page.",
//       ],
//     },
//   ],
// };

const PrivacyPolicyPage: React.FC =async () => {
  const privacyPolicyData:PrivacyPolicyData | null = await getPrivacyPolicy();


//   console.log(privacyPolicyData);
  if (!privacyPolicyData) {
    return <div>Privacy Policy not found</div>;
  }
  return (
    <div className=" text-gray-800 py-12 px-6 md:px-16 lg:px-32">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        {privacyPolicyData.title}
      </h1>

      {/* Sections */}
      <div className="space-y-12">
        {privacyPolicyData.sections.map((section, index) => (
          <Section
            heading={section.heading}
            content={section.content}
            descripiton={section.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const Section: React.FC<{ heading: string; content: string[] ,descripiton:string | null }> = ({
  heading,
  content,
  descripiton
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        {heading}
      </h2>
      <div>
        {descripiton && (
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            {descripiton}
            </p>
        )}
      </div>
      {content.map((paragraph, idx) => (
        <div key={idx} className="flex items-center gap- w-full">
          {/* Bullet Point */}
          <div className="min-w-6">
            <div className="h-2 w-2  rounded-full bg-red-600 mt-1"></div>
          </div>
          {/* Paragraph Content */}
          <div className="text-gray-700 text-base leading-relaxed">
            {paragraph}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;
