import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { fetchStats } from "@/lib/fetchStats";

import image3 from "@/public/assets/image-3.jpg";
import image4 from "@/public/assets/image-4.jpg";
import image5 from "@/public/assets/image-5.jpg";

const contentStyle = {
  height: "100vh",
  width: "100%",
  position: "relative", // This makes the parent container relative for positioning the caption
};

const captionStyle = {
  position: "absolute",
  top: "55%", // Center vertically
  left: "50%", // Center horizontally
  transform: "translate(-50%, -50%)", // Shift back 50% to the left and top to perfectly center
  color: "#fff", // White text for contrast
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "1.5rem 4.5rem",
  borderRadius: "10px",
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
  const carouselItems = stats?.slice(0, 3); // Adjust to get first 3 regardless of continent

  if (!carouselItems || carouselItems.length === 0) {
    return <div>No data available for display.</div>;
  }

  const images = [image3, image4, image5].slice(0, carouselItems.length);

  return (
    <main>
      <Carousel autoplay className="flex">
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
                <h1 className="text-[5rem] font-bold mb-[1.4rem] tracking-wide text-white">
                  {item.continent || ""}
                </h1>
                <h2 className="text-xl tracking-wide mb-4">{item.country}</h2>
                <p className="text-[1.1rem] tracking-wider">
                  Population: {item.population || "N/A"}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Cases: {item.cases.total || 0}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Active Cases: {item.cases.active || 0}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Deaths: {item.deaths.total || 0}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Recoveries: {item.cases.recovered || 0}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Date: {item.day || ""}
                </p>
                <p className="text-[1.1rem] tracking-wider">
                  Time: {formatTime(item.time) || ""}
                </p>
              </div>
            </div>
          </section>
        ))}
      </Carousel>
    </main>
  );
}
