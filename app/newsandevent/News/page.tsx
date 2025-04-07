
import { fetchEvents, fetchNews } from "@/actions/email/fetchNews";
import NewsPage from "../../../components/pages/newsPage/newsPage";
import { getFilteredNewsData } from "@/lib/filterEvents";
import Image from "next/image";
// import SlicerSlider from "@/components/ui/sliderslider";

const NewsAndEvents = async () => {
  const newsData = await fetchNews();

  if (!newsData ) {
    return <div className="text-gray-500 text-center mt-10">No data found.</div>;
  }
  const filteredNews = getFilteredNewsData(newsData);

  if (!filteredNews?.length ) {
    return <div className="text-gray-500 text-center mt-10">No news found.</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full flex items-center justify-start bg-black/40">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="/blog.jpg"
          alt="News"
          layout="fill"
          priority
        />
        <div className="relative text-white font-bold text-2xl  px-4 py-2 rounded-lg flex items-center justify-center">
          <div className="text-[#b00d07] mr-2">{'Home '}</div> 
          <div>{' > News'}</div>
        </div>
      </div>

      {/* News and Events Sections */}
      <div className="mt-10 px-4 md:px-10">
        <NewsPage type="news" NewsData={filteredNews} />
      </div>
    </div>
  );
};

export default NewsAndEvents;
