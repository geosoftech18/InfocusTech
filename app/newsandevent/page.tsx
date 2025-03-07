import { fetchEvents, fetchNews } from "@/actions/email/fetchNews";
import * as contentful from "contentful";
import NewsPage from "./components/newsPage";

type EventEntrySkeleton = {
  contentTypeId: "event";
  fields: EventItem[];
};

const NewsAndEvents = async () => {
  const newsData: BEResponseFormat = await fetchNews();

  // console.log(newsData.data?.items);
  //@ts-ignore
  const eventData: {
    success: boolean;
    data?: contentful.EntryCollection<EventEntrySkeleton>;
    error?: string;
  } = await fetchEvents();

  // console.log(eventData.data?.items)

  if (!newsData.data || !eventData.data) {
    return <div>not found data</div>;
  }

  const filteredEvents = getFilteredEventData(eventData.data);

  const filteredNews = getFilteredNewsData(newsData.data);

  if (!filteredNews) {
    return <p className="text-gray-500">No news found.</p>;
  }

  // console.log(filteredNews);
  // console.log(filteredEvents);

  return (
    <div>
      <NewsPage NewsData={filteredNews} />;
      <NewsPage NewsData={filteredEvents} />;
    </div>
  );
};

export default NewsAndEvents;

const extractText = (richText: RichText) => {
  return (
    richText?.content
      ?.map((block) =>
        block.content?.map((textNode) => textNode.value).join("")
      )
      .join("\n") || ""
  );
};

const getFilteredNewsData = (newsData: data) => {
  return (
    newsData.items
      .filter((item) => item.sys.contentType.sys.id === "news")
      .map((item) => {
        const title = extractText(item.fields?.title);
        const content = extractText(item.fields?.content);
        const id = item.sys.id;
        const date = item.fields?.date || "";

        const imageId = item.fields?.image?.sys?.id;
        const imageAsset = newsData.includes?.Asset.find(
          (asset) => asset.sys.id === imageId
        );
        const imageUrl = imageAsset?.fields?.file?.url
          ? `https:${imageAsset.fields.file.url}`
          : "";

        return { title, content, date, imageUrl, id, imageId };
      }) || []
  );
};

const getFilteredEventData = (
  eventData: contentful.EntryCollection<EventEntrySkeleton>
) => {
  return (
    eventData.items.map((item) => {
      //@ts-ignore
      const title = extractText(item.fields.title);
      //@ts-ignore
      const content = extractText(item.fields.content);
      const id = item.sys.id;
      //@ts-ignore
      const date = item.fields.date || "";
      //@ts-ignore
      const imageId = item.fields.image[0].sys.id;
//@ts-ignore
      const imageUrl = `https:${item.fields.image[0].fields.file.url}`;

      return { title, content, date, imageUrl, id, imageId };
    }) || []
  );
};
