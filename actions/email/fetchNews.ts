"use server";

const base_URL = process.env.NEXT_PUBLIC_CONTENTFUL_CDN_BASE_URL;
const space_ID = process.env.NEXT_PUBLIC_SPACE_ID;
const env_ID = process.env.NEXT_PUBLIC_ENVIRONMENT_ID;
const cdn_access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN_CDN;

import * as contentful from "contentful";

export async function fetchNews() {
  // const NEWS_URL = process.env.NEXT_PUBLIC_NEWS_URL;

  const news_URL = `${base_URL}/spaces/${space_ID}/environments/${env_ID}/entries?access_token=${cdn_access_token}`;

  if (!news_URL) {
    return {
      success: false,
      error: "News URL is not defined in environment variables",
    };
  }

  try {
    const response = await fetch(news_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch news: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }
}

export async function fetchNewsById(newsId: string) {
  if (!newsId || newsId.length < 0) {
    return {
      success: false,
      error: "News ID not found",
    };
  }

  // url with specific entryID (newsID)
  if (!(space_ID && env_ID && cdn_access_token)) {
    return {
      success: false,
      error: "News environment variables not defined ",
    };
  }

  const news_URL = `${base_URL}/spaces/${space_ID}/environments/${env_ID}/entries/${newsId}?access_token=${cdn_access_token}&include=2`;

  if (!news_URL) {
    return {
      success: false,
      error: "News URL is not defined in environment variables",
    };
  }


  try {
    const response = await fetch(news_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch news: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }

  // using the npm packeage function

 

  // const client = await contentful.createClient({
  //   space: space_ID,
  //   environment: env_ID,
  //   accessToken: cdn_access_token,
  // });

  // try {
  //   const response = await client.getEntry(newsId);
  //   if (!response) {
  //     return {
  //       success: false,
  //       error: "News response is null",
  //     };
  //   }
  //   console.log(response.fields.title)
  //   return { success: true, data: response };
  // } catch (error) {
  //   return {
  //     success: false,
  //     error: error instanceof Error ? error.message : "An unknown error occurred",
  //   };
  // }

}


export async function fetchAssetById(assetId:string) {
  if (!assetId || assetId.length < 0) {
    return {
      success: false,
      error: "News ID not found",
    };
  }

  // url with specific entryID (assetId)
  if (!(space_ID && env_ID && cdn_access_token)) {
    return {
      success: false,
      error: "News environment variables not defined ",
    };
  }

  const asset_URL = `${base_URL}/spaces/${space_ID}/environments/${env_ID}/assets/${assetId}?access_token=${cdn_access_token}&include=2`;




  try {
    const response = await fetch(asset_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch news: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }

  
}