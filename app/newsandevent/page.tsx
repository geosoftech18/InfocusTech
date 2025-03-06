import { fetchNews } from "@/actions/email/fetchNews";
import NewsPage from "./components/newsPage";

const NewsAndEvents = async () => {
  const newsData: NewsData = await fetchNews();

  // console.log(newsData.data?.items);

  const extractText = (richText: RichText) => {
    return (
      richText?.content
        ?.map((block) =>
          block.content?.map((textNode) => textNode.value).join("")
        )
        .join("\n") || ""
    );
  };

  const filteredData = newsData.data?.items.map((item) => {
    // console.log(index);, index
    const title = extractText(item.fields?.title);
    const content = extractText(item.fields?.content);
    const id = item.sys.id;

    // console.log(title, content);
    const date = item.fields?.date || "";

    const imageId = item.fields?.image?.sys?.id;
    const imageAsset = newsData.data?.includes?.Asset.find(
      (asset) => asset.sys.id === imageId
    );
    const imageUrl = imageAsset?.fields?.file?.url
      ? `https:${imageAsset?.fields?.file?.url}`
      : "";

    return { title, content, date, imageUrl, id ,imageId };
  });

  if (!filteredData) {
    return <p className="text-gray-500">No news found.</p>;
  }

  // console.log(filteredData);

  return <NewsPage NewsData={filteredData} />;
};

export default NewsAndEvents;
