"use server";

const base_URL = process.env.CONTENTFUL_CDN_BASE_URL;
const space_ID = process.env.SPACE_ID;
const env_ID = process.env.ENVIRONMENT_ID;
const cdn_access_token = process.env.ACCESS_TOKEN_CDN;

import { Event } from "@/contentfulTypes";
import fetchGraphQL from "@/lib/contentful-graphql";
import * as contentful from "contentful";

export async function fetchNews() {
  const result = await fetchGraphQL(
    `query{
    newsCollection{
      items{
      sys{
        id
      }
        title{
          json
        },
        content{
          json
        }
        date,
        image{
          url
        }
      }
    }
  }`,
    { next: { revalidate: 60 } }
  );
  // console.log(result.data.newsCollection);

  return result.data.newsCollection;
}

export async function fetchNewsById(newsId: string) {

  const result = await fetchGraphQL(
    `query{
  news(id:"${newsId}"){
   sys{
        id
      }
      title{
        json
      },
      content{
        json
      }
      date,
      image{
        url
      }
    }
}`,
    { next: { revalidate: 60 } }
  );
    return result.data.news;
  
}

export async function fetchEventById(eventId: string) {

  const result = await fetchGraphQL(
    `query{
  event(id:"${eventId}"){
   sys{
        id
      }
      title{
        json
      },
      content{
        json
      }
      date,
      image{
        url
      }
    }
}`,
    { next: { revalidate: 60 } }
  );
    return result.data.event;
  
}

export async function fetchEvents() {
  const result = await fetchGraphQL(
    `query{
  eventCollection{
    
    items{
      sys{
        id
      }
      title{
        json
      },
      content{
        json
      }
      date,
      image{
        url
      }
    }
  }
}


`,
    { next: { revalidate: 60 } }
  );
  // console.log(result.data.newsCollection);

  return result.data.eventCollection;
}
