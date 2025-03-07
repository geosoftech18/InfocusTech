"use server";

const base_URL = process.env.CONTENTFUL_CDN_BASE_URL;
const space_ID = process.env.SPACE_ID;
const env_ID = process.env.ENVIRONMENT_ID;
const cdn_access_token = process.env.ACCESS_TOKEN_CDN;

import { CareersHeroProps } from "@/app/carrers/components/carrerHero";
import { Job } from "@/app/carrers/components/carrerTable";
import { Event } from "@/contentfulTypes";
import * as contentful from "contentful";

export async function FetchCarrerData() {
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

  try {
    const response = await client.getEntries({
      content_type: "carrerpage",
    });
    if (!response) {
      return {
        success: false,
        error: "Carrer response is null",
      };
    }
    // console.log(response);
    const extractedResponse=extractCareerData(response)
    // console.log(extractedResponse)
    return { success: true, data: extractedResponse };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

function extractCareerData(data: ContentfulResponse): {
  carrerHeroData: CareersHeroProps;
  carrerTableData: Job[];
} | null {
  if (!data?.items || data.items.length === 0) {
    return null;
  }

  const item = data.items[0];
  const content = item.fields?.content || {};
  const jobTable = item.fields?.jobTable?.jobs || [];
  const imageAsset = item.fields?.carrerHeroImage?.fields?.file?.url || null;

  return {
    carrerHeroData: {
      company: content.company || "",
      description: content.description || "",
      bullets: content.bullets || [],
      extraDescription: content.extraDescription || "",
      imageUrl: imageAsset ? `https:${imageAsset}` : null,
    },

    carrerTableData: jobTable.map((job) => ({
      competencyGroup: job.competencyGroup || "",
      jobDescription: job.jobDescription || "",
      yearsOfExperience: job.yearsOfExperience || "",
      location: job.location || "",
      vacancies: job.vacancies || 0,
    })),
  };
}

type ContentfulResponse = {
  items?: {
    fields?: {
      content?: {
        company?: string;
        description?: string;
        bullets?: string[];
        extraDescription?: string;
      };
      carrerHeroImage?: {
        fields?: {
          file?: {
            url?: string;
          };
        };
      };
      jobTable?: {
        jobs?: Job[];
      };
    };
  }[];
};
