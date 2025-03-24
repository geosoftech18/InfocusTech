import { fetchEvents, fetchNews } from "@/actions/email/fetchNews";
import NewsPage, { FilteredNewsItem } from "./components/newsPage";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getFilteredNewsData } from "@/lib/filterEvents";

const NewsAndEvents = async () => {
  const newsData = await fetchNews();

  // console.log(newsData.data?.items);
  //@ts-ignore
  const eventData = await fetchEvents();

  // console.log(eventData.data?.items)

  if (!newsData || !eventData) {
    return <div>not found data</div>;
  }

  const filteredEvents = getFilteredNewsData(eventData);

  const filteredNews = getFilteredNewsData(newsData);

  if (!filteredNews||!filteredEvents) {
    return <div className="text-gray-500">No news found.</div>;
  }

  // console.log(filteredNews);
  // console.log(filteredEvents);

  return (
    <div className="pt-10">
      <NewsPage type={'news'} key={1} NewsData={filteredNews} />;
      <NewsPage type={'event'} key={2} NewsData={filteredEvents} />;
    </div>
  );
};

export default NewsAndEvents;