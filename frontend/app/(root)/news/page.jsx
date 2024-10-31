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
    <main className="pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Adjust amount to trigger animation
        variants={fadeUp}
      >
        <div className="pt-[8rem]">
          <h1 className="text-center mb-8 font-bold text-[2rem]">
            Latest <span className="text-orange-600">News</span>
          </h1>
          <div className="grid grid-cols-3 gap-8 px-8">
            {paginatedItems.map((item, index) => (
              <Link
                key={index}
                href={`/news/${item.path.replace(/[^a-zA-Z0-9-_]/g, "-")}`}
                passHref
              >
                <div className="bg-white rounded-md">
                  <img
                    src={
                      item.images && item.images[0]
                        ? item.images[0].url
                        : "https://dims.apnews.com/dims4/default/854bc47/2147483647/strip/true/crop/5000x3333+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fba%2Fea%2F34946c9593d5bc744086b5c9af9d%2Faebce365f3764a0eb2a53dca322b8d78"
                    }
                    alt={item.title}
                    layout="responsive"
                    className="mb-4"
                  />
                  <h2 className="px-2 mb-4 font-bold text-lg">{item.title}</h2>
                  <p className="px-2 tracking-wider pb-3">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="relative">
          {page > 1 && (
            <button
              className="absolute right-28 top-[-0.5rem] mt-4 px-4 py-2 rounded-md text-white bg-orange-600"
              onClick={() => router.push(`/news?page=${page - 1}`)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => router.push(`/news?page=${page + 1}`)}
              className="absolute right-0 bg-orange-600 top-[-0.5rem] mr-8 my-4 px-4 py-2 rounded-md text-white"
            >
              Next
            </button>
          )}
        </div>
      </motion.div>
    </main>
  );
}
