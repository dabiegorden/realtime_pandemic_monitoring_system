import Hero from "@/components/hero";
import LatestNews from "@/components/latestNews";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
    </>
  );
};

export default Home;
