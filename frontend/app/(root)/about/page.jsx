"use client";

import AccordionPage2 from "@/components/accordion";
import Accordion from "@/components/accordium";
import Benefit from "@/components/benefit";
import DividerPage from "@/components/divider";
import System from "@/components/how_system_work";
import { motion } from "framer-motion";
import { GoProject } from "react-icons/go";
import { SiTransmission } from "react-icons/si";

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
        className="hero-section text-center px-4 md:px-8 py-16 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            About the Real-Time Pandemic Monitoring System
          </h1>
          <h3 className="text-lg md:text-xl text-white">
            Empowering Awareness and Preparedness
          </h3>
          <p className="text-sm md:text-base text-white max-w-xl">
            Discover how our platform helps track, predict, and respond to
            health crises worldwide.
          </p>
          <a
            href="#learnmore"
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md text-sm md:text-lg shadow-lg hover:bg-transparent hover:ring-[1.5px] hover:ring-orange-700 transition-all"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Project Overview and Mission */}
      <motion.div
        className="px-4 md:px-8 pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="bg-white rounded-md shadow-lg px-6 py-8 text-center flex flex-col items-center gap-4">
          <GoProject className="text-4xl text-orange-600" />
          <h2 className="text-lg md:text-xl font-bold">Project Overview</h2>
          <p className="text-gray-700">
            The Real-Time Pandemic Monitoring System is a web-based platform
            that provides comprehensive, up-to-date information on pandemics
            globally. This system empowers users to stay informed and prepared
            for emerging health threats.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-lg px-6 py-8 text-center flex flex-col items-center gap-4">
          <SiTransmission className="text-4xl text-orange-600" />
          <h2 className="text-lg md:text-xl font-bold">Mission and Vision</h2>
          <p className="text-gray-700">
            Our mission is to empower individuals, health professionals, and
            organizations with timely, accurate pandemic information to support
            global public health preparedness.
          </p>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="px-4 md:px-12 mt-8">
        <h1 className="text-center text-lg md:text-2xl font-bold text-gray-800 mb-8">
          Key Features <span className="text-orange-600">of the system</span>
        </h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="bg-white px-6 py-8 rounded-md shadow-lg">
            <Accordion />
          </div>
          <div className="bg-white px-6 py-8 rounded-md shadow-lg">
            <AccordionPage2 />
          </div>
        </motion.div>
      </div>

      {/* Divider Section */}
      <motion.div
        className="px-4 md:px-8 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <DividerPage />
      </motion.div>

      {/* Benefit Section */}
      <div className="px-4 md:px-8 my-8 py-8 bg-white rounded-md shadow-lg text-center text-gray-800">
        <Benefit />
      </div>

      {/* How the system works section */}
      <div className="px-4 md:px-8 py-12 bg-gray-50">
        <System />
      </div>
    </div>
  );
};

export default AboutPage;
