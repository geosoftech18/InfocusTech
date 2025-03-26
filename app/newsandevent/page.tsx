import { fetchEvents, fetchNews } from "@/actions/email/fetchNews";
import NewsPage from "./components/newsPage";
import { getFilteredNewsData } from "@/lib/filterEvents";
import Image from "next/image";
// import SlicerSlider from "@/components/ui/sliderslider";

const NewsAndEvents = async () => {
  const newsData = await fetchNews();
  //@ts-ignore
  const eventData = await fetchEvents();

  if (!newsData || !eventData) {
    return <div className="text-gray-500 text-center mt-10">No data found.</div>;
  }

  const filteredEvents = getFilteredNewsData(eventData);
  const filteredNews = getFilteredNewsData(newsData);

  if (!filteredNews?.length && !filteredEvents?.length) {
    return <div className="text-gray-500 text-center mt-10">No news or events found.</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full flex items-center justify-start bg-black/40">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="/blog.jpg"
          alt="News and Events"
          layout="fill"
          priority
        />
        <div className="relative text-white font-bold text-2xl  px-4 py-2 rounded-lg flex items-center justify-center">
          <div className="text-[#b00d07] mr-2">{'Home '}</div> 
          <div>{' > News and Events'}</div>
        </div>
      </div>

      {/* News and Events Sections */}
      <div className="mt-10 px-4 md:px-10">
        <NewsPage type="news" NewsData={filteredNews} />
        <NewsPage type="event" NewsData={filteredEvents} />
        {/* <SlicerSlider/>  */}
      </div>
    </div>
  );
};

export default NewsAndEvents;
