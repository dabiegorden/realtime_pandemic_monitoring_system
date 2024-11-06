import { fetchLatestNews } from "@/lib/fetchLatestNews";
import Link from "next/link";

export default async function NewsDetailPage({ params }) {
  const { id } = params;
  let newsItem = null;
  let recommendedNews = [];

  try {
    // Fetch all news items
    const newsItems = await fetchLatestNews();

    // Find the main news item based on the ID from the URL
    newsItem = newsItems.find(
      (item) => item.path.replace(/[^a-zA-Z0-9-_]/g, "-") === id
    );

    if (!newsItem) {
      throw new Error("News item not found");
    }

    // Filter out the main news item for recommendations
    recommendedNews = newsItems
      .filter((item) => item.path.replace(/[^a-zA-Z0-9-_]/g, "-") !== id)
      .slice(0, 4); // Display only 4 recommended articles
  } catch (error) {
    console.error("Failed to load news item:", error);
    return <p>Sorry, news item not found.</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-20 min-h-screen px-4">
      <main className="flex flex-col mt-8 mb-8 w-full sm:w-[75%] md:w-[50%] bg-white p-4 rounded-lg shadow-lg">
        {newsItem.images && newsItem.images[0] && (
          <img
            src={newsItem.images[0].url}
            alt={newsItem.title}
            className="mb-4 rounded-md"
          />
        )}
        <h1 className="my-4 text-2xl md:text-3xl font-bold px-2">
          {newsItem.title}
        </h1>
        <p className="my-2 px-2 text-lg text-gray-700">{newsItem.excerpt}</p>
        <p className="my-2 px-2 text-gray-800">{newsItem.content}</p>
        <Link
          href={newsItem.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center mt-4 mb-4 px-4 py-2 bg-orange-600 text-white font-bold text-lg rounded-md hover:ring-[2px] hover:ring-orange-600 hover:bg-transparent hover:text-black hover:shadow-xl transition"
        >
          Read full article
        </Link>
      </main>

      {/* Recommended News Section */}
      <section className="w-full sm:w-[75%] md:w-[50%] bg-white mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Recommended News
        </h2>
        <ul className="space-y-4">
          {recommendedNews.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Link
                href={`/news/${item.path.replace(/[^a-zA-Z0-9-_]/g, "-")}`}
                passHref
              >
                <div className="cursor-pointer">
                  <img
                    src={
                      item.images && item.images[0]
                        ? item.images[0].url
                        : "https://via.placeholder.com/150"
                    }
                    alt={item.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                </div>
              </Link>
              <div>
                <Link
                  href={`/news/${item.path.replace(/[^a-zA-Z0-9-_]/g, "-")}`}
                  passHref
                >
                  <h2 className="text-blue-600 hover:underline font-semibold">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm">
                  {item.excerpt.slice(0, 80)}...
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/"
        className="mt-8 mb-16 px-4 py-2 bg-orange-600 text-white font-bold text-lg rounded-md hover:ring-[2px] hover:ring-orange-600 hover:bg-transparent hover:text-black hover:shadow-xl transition"
      >
        Go back home
      </Link>
    </div>
  );
}
