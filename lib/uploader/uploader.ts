import {
  CustomerSuccessStoryProps,
  SelectComponentProps,
} from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import { createClient, CreateEntryProps } from "contentful-management";

const accessToken = process.env.CMA_PAT;
const space_ID = process.env.SPACE_ID;
const env_ID = process.env.ENVIRONMENT_ID;

export async function itemsUploader({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link?: string;
}) {
  if (!(space_ID && env_ID && accessToken)) {
    return {
      success: false,
      error: "Environment variables not defined",
    };
  }
  console.log("control");
  try {
    const client = createClient({
      accessToken: accessToken,
    });

    const space = await client.getSpace(space_ID);
    const environment = await space.getEnvironment(env_ID);

    const newEntry: CreateEntryProps = {
      fields: {
        name: {
          "en-US": name,
        },
        description: {
          "en-US": description,
        },
        link: {
          "en-US": link,
        },
      },
    };

    const entry = await environment.createEntry("item", newEntry);
    await entry.publish();
    console.log(entry);
    return {
      success: true,
      entryId: entry.sys.id,
    };
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function customerSuccessStoryUploader({
  CustomerSuccessStoryData,
}: CustomerSuccessStoryProps) {
  if (!(space_ID && env_ID && accessToken)) {
    return {
      success: false,
      error: "Environment variables not defined",
    };
  }

  console.log("Uploading customerSuccessStory");
  
  try {
    const client = createClient({
      accessToken: accessToken,
    });

    const space = await client.getSpace(space_ID);
    const environment = await space.getEnvironment(env_ID);

    // Upload bulletPoints and get entry IDs
    const uploadedItems = await Promise.all(
      CustomerSuccessStoryData.items.map(async (item: any) => {
        const result = await bulletPointsUploader(item);
        return result.success ? { sys: { id: result.entryId, linkType: "Entry", type: "Link" } } : null;
      })
    );

    // Filter out failed uploads
    const linkedItems = uploadedItems.filter((item) => item !== null);

    const newEntry: CreateEntryProps = {
      fields: {
        tag: {
          "en-US": CustomerSuccessStoryData.tag,
        },
        title: {
          "en-US": CustomerSuccessStoryData.title,
        },
        description: {
          "en-US": CustomerSuccessStoryData.description,
        },
        items: {
          "en-US": linkedItems,
        },
      },
    };

    const entry = await environment.createEntry(
      "customerSuccessStory",
      newEntry
    );
    await entry.publish();
    console.log(entry);

    return {
      success: true,
      entryId: entry.sys.id,
    };
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function bulletPointsUploader({
  title,
  content,
}: {
  title: string;
  content:
    | string
    | {
        point: string;
      }[];
}) {
  if (!(space_ID && env_ID && accessToken)) {
    return {
      success: false,
      error: "Environment variables not defined",
    };
  }

  console.log("Uploading bulletPoints");

  try {
    const client = createClient({
      accessToken: accessToken,
    });

    const space = await client.getSpace(space_ID);
    const environment = await space.getEnvironment(env_ID);

    const newEntry: CreateEntryProps = {
      fields: {
        title: {
          "en-US": title,
        },
        ...(Array.isArray(content)
        ? { morePoints: { "en-US": content.map((item) => item.point) } }
        : { description: { "en-US": content } }),
      },
    };

    const entry = await environment.createEntry("bulletPoints", newEntry);
    await entry.publish();
    console.log(entry);

    return {
      success: true,
      entryId: entry.sys.id,
    };
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }
}
