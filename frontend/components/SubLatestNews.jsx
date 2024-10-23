import { fetchLatestNews } from "@/lib/fetchLatestNews";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  let news;

  try {
    news = await fetchLatestNews(); // Fetch news on the server side
    // console.log(news);
  } catch (error) {
    return <div>Failed to load news. Please try again later.</div>;
  }

  if (!news || !news.news) {
    return <div>No news available at the moment.</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-8 mt-8">
        {news.news?.map((item) => (
          <main key={item.title} className="news-card">
            <Card key={item.title} className="bg-white">
              <CardHeader key={item.title}>
                <CardTitle key={item.title}>
                  <h1
                    key={item.title}
                    className="mb-2 text-[1.3rem] text-gray-900"
                  >
                    {item?.title}
                  </h1>
                  <div className="border_bottom mt-5" key={item.id}></div>
                </CardTitle>
                <CardDescription key={item.title}>
                  <p key={item.id} className="text-[1.09rem] text-orange-600">
                    Latest pandemic news update
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent key={item.title}>
                <p key={item.excerpt} className="text-gray-800 tracking-wider">
                  {item?.excerpt}
                </p>
              </CardContent>
              <CardFooter key={item.title}>
                <Link
                  key={item.id}
                  href={`/news`}
                  className="bg bg-orange-600 py-2 px-2 rounded-md text-white text-[1.09rem] cursor-pointer hover:bg-gradient-to-br hover:from-indigo-500 hover:to-orange-500 "
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          </main>
        ))}
      </div>
    </div>
  );
}
