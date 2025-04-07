import fetchGraphQL from "../contentful-graphql";

const query = `query{
    contactUsPage(id:"6x1NrwWCLFymyzXd65X0Op"){
      contactUsBg{
        url
      },
      formFieldsCollection{
        items{
          name,
          label,
          placeholder,
          type,
          services
        }
      }
    }
  }

`;

export async function getContactUs() {
  const result = await fetchGraphQL(query, { next: { revalidate: 0 } });
  // console.log("result", result);
  return transformContactUsData(result);
  // console.log(result);
}

export type TransformedData = {
  bgUrl: string;
  fields: {
    name: string;
    label: string | null;
    placeholder: string | null;
    type: string | null;
  }[];
  services: string[];
};

function transformContactUsData(data: any): TransformedData {
  const formFields =
    data?.data?.contactUsPage?.formFieldsCollection?.items || [];

  // Filter out null items
  const validFormFields = formFields.filter((field: any) => field !== null);
  // console.log("validFormFields", validFormFields);
  const servicesField = validFormFields.find(
    (field: any) => field.name === "services"
  );

  const bgUrl = data?.data?.contactUsPage?.contactUsBg?.url || "";

  const fields = validFormFields
    .filter((field: any) => field.name !== "services") // Exclude the "services" field
    .map((field: any) => ({
      name: field.name,
      label: field.label,
      placeholder: field.placeholder,
      type: field.type,
    }));

  const services = servicesField?.services || [];
    // console.log("services", services);
  return {
    bgUrl,
    fields,
    services,
  };
}
