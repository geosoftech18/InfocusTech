"use client"
import { useState } from "react";
import NewsCard from "./newsCard";

export interface FilteredNewsItem {
    title: string;
    content: string;
    date: string;
    imageUrl: string;
    id:string;
    imageId:string
  }

  
interface NewsPageProps {
    NewsData:FilteredNewsItem[]
}
const NewsPage:React.FC<NewsPageProps> = ({NewsData}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNews = NewsData?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="mx-10 md:mx-40">
        {/* Search Bar */}
        <div className="my-4">
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews && filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                content={item.content}
                date={item.date}
                imageUrl={item.imageUrl}
                imageId={item.imageId}
                id={item.id}
              />
            ))
          ) : (
            <p className="text-gray-500">No news found.</p>
          )}
        </div>
      </div>
    );
}
 
export default NewsPage;