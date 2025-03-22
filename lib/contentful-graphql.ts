export default async function fetchGraphQL(
    query: string,
    payload = {}
  ): Promise<any> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_CDN}`,
        },
        body: JSON.stringify({ query }),
        ...payload,
      }
    ).then((response) => response.json());
  }
  