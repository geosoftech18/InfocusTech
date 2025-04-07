"use client"
import { ReactNode, useState } from "react";
import NewsCard from "./newsCard";
import { ItemText } from "@radix-ui/react-select";

export interface FilteredNewsItem {
    title: ReactNode;
    content: ReactNode;
    date: string;
    imageUrl: string;
    id:string;
    type?:'news'|'event';
  }

  
interface NewsPageProps {
    type:'news'|'event';
    NewsData:FilteredNewsItem[]
}
const NewsPage:React.FC<NewsPageProps> = ({NewsData,type}) => {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredNews = NewsData
    // ?.filter((item) =>
    //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );
  
    return (
      <div className="mx-10 md:mx-28">
        {/* Search Bar */}
        {/* <div className="my-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
  
        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews && filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <NewsCard
                type={type}
                key={index}
                title={item.title}
                content={item.content}
                date={item.date}
                imageUrl={item.imageUrl}
                id={item.id}
              />
            ))
          ) : (
            <div className="text-gray-500">No news found.</div>
          )}
        </div>
      </div>
    );
}
 
export default NewsPage;