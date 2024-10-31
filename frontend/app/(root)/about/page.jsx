"use client";

import AccordionPage2 from "@/components/accordion";
import Accordion from "@/components/accordium";
import Benefit from "@/components/benefit";
import DividerPage from "@/components/divider";
import System from "@/components/how_system_work";
import { motion } from "framer-motion";
// import Image from "next/image";
import { GoProject } from "react-icons/go";
import { SiTransmission } from "react-icons/si";
// import how_it_work_image from "@/public/assets/about.jpg";

const AboutPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex justify-center items-center flex-col gap-8">
          <h1 className="text-4xl font-bold text-white shadow-2xl">
            About the Real-Time Pandemic Monitoring System
          </h1>
          <h3 className="text-[1.4rem] shadow-md text-white">
            Empowering Awareness and Preparedness
          </h3>
          <p className="text-white tracking-wide text-[1.1rem] shadow-md">
            Discover how our platform helps track, predict, and respond to
            health crises worldwide.
          </p>
          <a
            href={"#learnmore"}
            className="px-4 py-2 bg-orange-600 text-white rounded-md text-lg shadow-2xl hover:bg-transparent hover:ring-[1.5px] hover:ring-orange-700 hover:duration-300 hover:transition hover:shadow-2xl"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Project Overview and Mission */}
      <motion.div
        className="px-8 pt-16 pb-16 grid grid-cols-2 gap-8 place-content-center place-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="bg-white rounded-md shadow-xl px-4 py-4 w-fit h-fit grid place-content-center place-items-center gap-4 text-center">
          <GoProject className="text-[2rem] font-bold text-orange-600" />
          <h2 className="text-xl font-bold text-black">Project Overview</h2>
          <h4 className="text-[1.1rem] text-[#222]">
            Our system is designed to provide real-time data on pandemics
            globally.
          </h4>
          <p className="tracking-wide text-[#222] leading-[1.5rem]">
            The Real-Time Pandemic Monitoring System is an innovative web-based
            platform designed to provide comprehensive and up-to-date
            information on pandemics across the globe. This system offers users
            real-time data on pandemic trends, case counts, and other critical
            information, empowering them to stay informed and prepared for
            emerging health threats.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-xl px-4 py-4 w-fit h-fit grid place-content-center place-items-center gap-4 text-center">
          <SiTransmission className="text-[2rem] font-bold text-orange-600" />
          <h2 className="text-xl font-bold text-black">Mission and Vision</h2>
          <h4 className="text-[1.1rem] text-[#222]">
            To empower individuals, health professionals, and organizations.
          </h4>
          <p className="tracking-wide text-[#222] leading-[1.5rem]">
            To empower individuals, health professionals, and organizations with
            timely, accurate pandemic information and predictions, contributing
            to global public health preparedness. A globally connected platform
            where information flows freely, fostering proactive responses to
            pandemics and helping communities, organizations, and governments
            mitigate the impact of health crises.
          </p>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="mt-8 relative">
        <h1 className="text-center mb-8 font-bold text-2xl text-[#222]">
          Key features <span className="text-orange-600">of the system</span>
          <div className="bottom_underline"></div>
        </h1>
        <motion.div
          className="grid grid-cols-2 gap-8 px-12 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="bg-white px-4 py-4 rounded-md shadow-2xl mt-8">
            <Accordion />
          </div>
          <div className="bg-white px-4 py-4 rounded-md shadow-2xl mt-8">
            <AccordionPage2 />
          </div>
        </motion.div>
        {/* Add additional feature cards with the same motion settings */}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="px-8 py-12">
          <DividerPage />
        </div>
      </motion.div>

      <div className="my-12 mx-8 py-12 px-8 text-[#222] bg-white rounded-md shadow-xl text-center">
        <Benefit />
      </div>

      {/* How the system works section */}
      <div className="px-8 py-16">
        <System />
      </div>
    </div>
  );
};

export default AboutPage;
