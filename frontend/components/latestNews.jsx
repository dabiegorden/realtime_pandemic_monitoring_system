import Link from "next/link";
import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import SubLatestNews from "./SubLatestNews";

const LatestNews = () => {
  return (
    <main>
      <section className="flex justify-between mt-7 mb-8 border_bottom px-8">
        <div className="mb-4">
          <h1 className="text-[1.5rem] font-bold tracking-wide">
            Latest <span className="text-blue-500">News</span>
          </h1>
        </div>
        <div className="underline">
          <Link
            href={"/"}
            className="flex gap-2 items-center font-bold text-[1.3rem] text-blue-500"
          >
            All <FaArrowRightLong />
          </Link>
        </div>
      </section>
      <SubLatestNews />
    </main>
  );
};

export default LatestNews;
