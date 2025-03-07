"use server";

const base_URL = process.env.CONTENTFUL_CDN_BASE_URL;
const space_ID = process.env.SPACE_ID;
const env_ID = process.env.ENVIRONMENT_ID;
const cdn_access_token = process.env.ACCESS_TOKEN_CDN;

import { Event } from "@/contentfulTypes";
import * as contentful from "contentful";


export async function fetchNews() {
  // const NEWS_URL = process.env.NEWS_URL;

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
  // method using CDN
  // {
  //   if (!newsId || newsId.length < 0) {
  //     return {
  //       success: false,
  //       error: "News ID not found",
  //     };
  //   }

  //   // url with specific entryID (newsID)
  //   if (!(space_ID && env_ID && cdn_access_token)) {
  //     return {
  //       success: false,
  //       error: "News environment variables not defined ",
  //     };
  //   }

  //   const news_URL = `${base_URL}/spaces/${space_ID}/environments/${env_ID}/entries/${newsId}?access_token=${cdn_access_token}&include=2`;

  //   if (!news_URL) {
  //     return {
  //       success: false,
  //       error: "News URL is not defined in environment variables",
  //     };
  //   }

  //   try {
  //     const response = await fetch(news_URL, { cache: "no-store" });

  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch news: ${response.status} ${response.statusText}`
  //       );
  //     }

  //     const data = await response.json();
  //     return { success: true, data };
  //   } catch (error) {
  //     const errorMessage =
  //       error instanceof Error ? error.message : "An unknown error occurred";
  //     return { success: false, error: errorMessage };
  //   }
  // }

  // using the npm packeage function

  {
    if (!(space_ID && env_ID && cdn_access_token)) {
      return {
        success: false,
        error: "News environment variables not defined ",
      };
    }

    const client = await contentful.createClient({
      space: space_ID,
      environment: env_ID,
      accessToken: cdn_access_token,
    });
    type EventEntrySkeleton = {
      contentTypeId: "event";
      fields: EventItem;
    };

    try {
      const response = await client.getEntry<EventEntrySkeleton>(newsId);
      if (!response) {
        return {
          success: false,
          error: "News response is null",
        };
      }
      // console.log(response);
      return { success: true, data: response };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      };
    }
  }
}

export async function fetchAssetById(assetId: string) {
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

export async function fetchEvents() {
  if (!(space_ID && env_ID && cdn_access_token)) {
    return {
      success: false,
      error: "News environment variables not defined ",
    };
  }

  var client = contentful.createClient({
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: cdn_access_token,
    // This is the space ID. A space is like a project folder in Contentful terms
    space: space_ID,

    host: base_URL,
    environment: env_ID,
  });

  type EventEntrySkeleton = {
    contentTypeId: "event";
    fields: EventItem[];
  };
  const response = await client.getEntries<EventEntrySkeleton>({
    content_type: "event",
  });
  // const contenttypes=await client.getContentTypes()

  // console.log(contenttypes)
  if (!response) {
    return {
      success: false,
      error: "empty response",
    };
  }
  // console.log(response);

  return {
    success: true,
    data: response,
  };
}
