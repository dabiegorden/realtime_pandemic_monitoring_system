"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchLatestNews } from "@/lib/fetchLatestNews";

export default function NewsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 6;

  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLatestNews();
        if (Array.isArray(data)) {
          setNewsItems(data);
        } else {
          console.error("Invalid news data format");
        }
      } catch (error) {
        console.error("Failed to load news items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate paginated news items
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = newsItems.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;

  // Framer motion
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="news__bg_image">
          <div className="flex justify-center items-center flex-col gap-4 md:gap-8 text-center pt-10 md:pt-20 px-4">
            <h1 className="text-3xl md:text-5xl text-white shadow-sm">
              Stay Informed with the Latest Pandemic News
            </h1>
            <p className="text-white tracking-wide leading-6 md:leading-8 shadow-sm text-base md:text-xl max-w-2xl mx-auto">
              Get real-time updates, essential news, and valuable insights about
              pandemics around the world. Stay ahead with timely information to
              protect yourself, your loved ones, and your community. Our team
              curates reliable information to help you stay prepared and make
              informed decisions.
            </p>
            <a
              href="#readmore"
              className="bg-orange-600 px-4 py-2 md:px-5 md:py-3 rounded-md text-white hover:bg-transparent hover:ring-[1.5px] hover:ring-orange-600 hover:shadow-lg text-sm md:text-base"
            >
              Read More
            </a>
          </div>
        </div>
      </motion.div>
      <main className="pb-8 min-h-screen" id="readmore">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="pt-16 md:pt-[8rem]">
            <h1 className="text-center mb-8 md:mb-16 font-bold text-xl md:text-2xl">
              Latest <span className="text-orange-600">News</span>
              <div className="news_bottom_underline"></div>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8">
              {paginatedItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/news/${item.path.replace(/[^a-zA-Z0-9-_]/g, "-")}`}
                  passHref
                >
                  <div className="bg-white rounded-md shadow-lg">
                    <img
                      src={
                        item.images && item.images[0]
                          ? item.images[0].url
                          : "https://dims.apnews.com/dims4/default/854bc47/2147483647/strip/true/crop/5000x3333+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fba%2Fea%2F34946c9593d5bc744086b5c9af9d%2Faebce365f3764a0eb2a53dca322b8d78"
                      }
                      alt={item.title}
                      layout="responsive"
                      className="mb-4 rounded-t-md"
                    />
                    <h2 className="px-4 mb-2 font-bold text-lg md:text-xl">
                      {item.title}
                    </h2>
                    <p className="px-4 text-sm md:text-base text-gray-700 tracking-wider pb-4">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            {page > 1 && (
              <button
                className="px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                onClick={() => router.push(`/news?page=${page - 1}`)}
              >
                Previous
              </button>
            )}

            {page < totalPages && (
              <button
                onClick={() => router.push(`/news?page=${page + 1}`)}
                className="px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </motion.div>
      </main>
    </section>
  );
}
