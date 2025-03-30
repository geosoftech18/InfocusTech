import { FilteredNewsItem } from "@/app/NewsandEvent/components/newsPage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const getFilteredNewsData = (newsData: {
  items: {
    title: { json: any };
    content: { json: any };
    image: { url: string };
    sys: { id: string };
    date: string;
  }[];
}): FilteredNewsItem[] => {
  return newsData.items.map((item) => ({
    title: documentToReactComponents(item.title.json),
    content: documentToReactComponents(item.content.json),
    id: item.sys.id,
    date: new Date(item.date).toLocaleString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
    imageUrl: item.image.url,
  }));
};
