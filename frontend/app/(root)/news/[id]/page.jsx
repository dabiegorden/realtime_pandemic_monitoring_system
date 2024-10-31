import { fetchLatestNews } from "@/lib/fetchLatestNews";
import Link from "next/link";

export default async function NewsDetailPage({ params }) {
  const { id } = params;
  let newsItem = null;

  try {
    // Fetch all news and find the specific item by `path`
    const newsItems = await fetchLatestNews();
    newsItem = newsItems.find(
      (item) => item.path.replace(/[^a-zA-Z0-9-_]/g, "-") === id
    );

    if (!newsItem) {
      throw new Error("News item not found");
    }
  } catch (error) {
    console.error("Failed to load news item:", error);
    return <p>Sorry, news item not found.</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <main className="flex justify-center items-center flex-col mt-8 mb-8 w-[50%] bg-white">
        {newsItem.images && newsItem.images[0] && (
          <img
            src={newsItem.images[0].url}
            alt={newsItem.title}
            layout="responsive"
            className="mb-4"
          />
        )}
        <h1 className="my-4 px-2">{newsItem.title}</h1>

        <p className="my-2 px-2">{newsItem.excerpt}</p>
        <p className="my-2 px-2">{newsItem.content}</p>
        <Link
          href={newsItem.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 px-4 py-2 bg-orange-600 text-white font-bold text-lg rounded-md"
        >
          Read full article
        </Link>
      </main>
    </div>
  );
}
