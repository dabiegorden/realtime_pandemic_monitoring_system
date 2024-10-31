"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { fetchStats } from "@/lib/fetchStats";

import image3 from "@/public/assets/image-3.jpg";
import image4 from "@/public/assets/image-4.jpg";
import image5 from "@/public/assets/image-5.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const contentStyle = {
  height: "100vh",
  width: "100%",
  position: "relative",
};

const captionStyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "1.5rem 4.5rem",
  borderRadius: "10px",
  width: "70%",
  height: "60vh",
};

// Function to format time in HH:MM AM/PM
const formatTime = (timeString) => {
  const date = new Date(timeString);
  let hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, and handle 0 as 12
  return `${hours}:${minutes} ${ampm}`;
};

export default async function Hero() {
  let stats;

  try {
    stats = await fetchStats();
    // console.log(stats);
  } catch (error) {
    console.error("Error fetching covid stats:", error);
  }

  // Get the first 3 items without filtering out items with null continents
  const carouselItems = stats?.slice(0, 3);

  if (!carouselItems || carouselItems.length === 0) {
    return <div>No data available for display.</div>;
  }

  const images = [image3, image4, image5].slice(0, carouselItems.length);

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
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Adjust amount to trigger animation
        variants={fadeUp}
      >
        <Carousel autoplay autoplaySpeed={4000} className="flex">
          {carouselItems.map((item, index) => (
            <section className="section" key={index}>
              <div style={contentStyle}>
                <Image
                  src={images[index]} // Dynamically map the image to each item
                  layout="fill"
                  objectFit="cover"
                  alt="Home images"
                  priority
                />
                <div style={captionStyle}>
                  <h1 className="text-[2.5rem] font-bold mb-[1.4rem] tracking-wide text-white">
                    Get latest{" "}
                    <span className="text-orange-600 text-1.5rem font-bold">
                      news and updates{" "}
                    </span>
                    about pandemic
                    <span className="text-orange-600 text-1.5rem font-bold">
                      .
                    </span>
                  </h1>
                  <p className="text-[1.2rem] tracking-wider mb-8">
                    Stay update and get the real time news and update about some
                    possible pandemic outbreak to be able to stay active and
                    healthy and also to be able make informed decisions
                    <span className="text-orange-600 text-1.5rem font-bold">
                      .
                    </span>
                  </p>
                  <Link
                    href={"/news"}
                    className="px-8 py-4 rounded-md bg-orange-600 text-white text-[1.2rem] hover:text-white hover:bg-transparent hover:ring-[2px] hover:ring-orange-600"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </Carousel>
      </motion.div>
    </main>
  );
}
