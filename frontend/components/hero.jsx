"use client";

import React, { useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
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
  padding: "2rem 4.5rem",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "700px",
  height: "auto",
  maxHeight: "70vh",
};

export default function Hero() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const images = [image3, image4, image5];

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
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <Carousel autoplay autoplaySpeed={5000} className="flex">
          {images.map((image, index) => (
            <section className="section" key={index}>
              <div style={contentStyle}>
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  alt="Home images"
                />
                <div style={captionStyle} className="p-8 sm:p-8 md:p-12">
                  <h1 className="text-[1.8rem] sm:text-[2.5rem] font-bold mb-[1rem] sm:mb-[1.4rem] tracking-wide text-white">
                    Get the latest{" "}
                    <span className="text-orange-600">news and updates </span>
                    about pandemic
                    <span className="text-orange-600">.</span>
                  </h1>
                  <p className="text-[1rem] sm:text-[1.2rem] tracking-wider mb-6 sm:mb-8 leading-6 sm:leading-8">
                    Stay updated and get real-time news on possible pandemic
                    outbreaks to stay active, healthy, and informed.
                    <span className="text-orange-600">.</span>
                  </p>
                  <Link
                    href={"/news"}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-orange-600 text-white text-[1rem] sm:text-[1.2rem] hover:text-white hover:bg-transparent hover:ring-[2px] hover:ring-orange-600"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </Carousel>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="my-16 sm:my-24 flex justify-center items-center gap-4 sm:gap-8 flex-col">
            <div className="flex gap-4 sm:gap-8 flex-col bg-white px-6 sm:px-8 py-6 sm:py-8 rounded-md shadow-md max-w-[700px] w-full">
              <h1 className="text-xl sm:text-2xl text-black tracking-wide text-center">
                Stay Updated with the{" "}
                <span className="text-orange-600">
                  Latest Pandemic Insights!
                </span>
              </h1>
              <p className="text-[0.95rem] sm:text-[1.05rem] tracking-wide leading-6 sm:leading-8 text-center">
                Join our community to receive real-time updates, important news,
                <br className="hidden sm:block" />
                and insights directly to your inbox.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center gap-4 400:flex 400:flex-col 400:gap-3"
              >
                <input
                  className="w-full input__subscribe px-4 py-2 rounded-md border focus:ring-[2px] focus:ring-orange-500 focus:shadow-md focus:outline-none"
                  type="email"
                  placeholder="Email..."
                  onChange={handleChange}
                  value={formData.email}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-orange-600 text-white text-[1rem]  hover:text-black hover:bg-transparent hover:ring-[2px] hover:ring-orange-600"
                >
                  Subscribe
                </button>
              </form>
              {submitted && (
                <p className="text-green-500 mt-4 text-center">
                  Subscription successful!
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
