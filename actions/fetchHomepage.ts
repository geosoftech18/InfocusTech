"use server";

import * as contentful from "contentful";

const base_URL = process.env.CONTENTFUL_CDN_BASE_URL;
const space_ID = process.env.SPACE_ID;
const env_ID = process.env.ENVIRONMENT_ID;
const cdn_access_token = process.env.ACCESS_TOKEN_CDN;


export async function getHomePage() {
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
        // type EventEntrySkeleton = {
        //   contentTypeId: "event";
        //   fields: EventItem;
        // };
    
        try {
          const response = await client.getEntry("5wyHnlpY8asmjyc3PAnn0S");
          // const response = await client.getEntries({
          //   content_type: "homePage",
          // });
          if (!response) {
            return {
              success: false,
              error: "Homepage response is null",
            };
          }
        //   console.log(response);
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

export async function getEntryByID(id:string) {
  {
      if (!(space_ID && env_ID && cdn_access_token && id)) {
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
      // type EventEntrySkeleton = {
      //   contentTypeId: "event";
      //   fields: EventItem;
      // };
  
      try {
        const response = await client.getEntry(id);
        // const response = await client.getEntries({
        //   content_type: "homePage",
        // });
        if (!response) {
          return {
            success: false,
            error: "Homepage response is null",
          };
        }
      //   console.log(response);
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