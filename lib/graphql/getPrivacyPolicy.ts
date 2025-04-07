import fetchGraphQL from "../contentful-graphql";

// Incoming JSON Types
type PrivacyPolicyAPIResponse = {
  data: {
    privacyPolicyCollection: {
      items: {
        title: string;
        sectionsCollection: {
          items: {
            title: string;
            description: string | null;
            morePoints: string[] | null;
          }[];
        };
      }[];
    };
  };
};

// Desired Return Type
type PrivacyPolicySection = {
  heading: string;
  description: string | null;
  content: string[];
};

export type PrivacyPolicyData = {
  title: string;
  sections: PrivacyPolicySection[];
};

const query = `query{
  privacyPolicyCollection(limit:1){
    items{
      title,
      sectionsCollection{
        items{
          title,
          description,
          morePoints
        }
      }
    }
    
  }
}`;

export async function getPrivacyPolicy() {
  const result = await fetchGraphQL(query, { next: { revalidate: 0 } });

  return transformPrivacyPolicyData(result as PrivacyPolicyAPIResponse);
  //   console.log(result)
  //   return result
}

function transformPrivacyPolicyData(
  apiResponse: PrivacyPolicyAPIResponse
): PrivacyPolicyData | null {
  const item = apiResponse?.data?.privacyPolicyCollection?.items?.[0];
  if (!item) return null;

  const title = item.title;
  const sections = item.sectionsCollection.items.map(
    (section): PrivacyPolicySection => {
      const heading = section.title;

      const content: string[] = [];

      

      if (section.morePoints && section.morePoints.length > 0) {
        content.push(...section.morePoints);
      }

      const description = section.description || null;

      return { heading, content ,description };
    }
  );

  return { title, sections };
}
