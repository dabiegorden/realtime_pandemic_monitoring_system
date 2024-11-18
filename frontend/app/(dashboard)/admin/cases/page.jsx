"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const CasesPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch("/api/pandemic_cases");
        if (!response.ok) {
          throw new Error(`Failed to fetch cases: ${response.statusText}`);
        }
        const data = await response.json();
        setCases(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600 bg-red-50 min-h-screen">
        <h2 className="text-2xl font-bold">Error Fetching Data</h2>
        <p className="mt-4">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-800 mb-8"
      >
        Pandemic Cases <span className="text-red1">Tracker</span>
      </motion.h1>

      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cases:</span>
                    <span className="font-bold text-blue-600">
                      {item.cases.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span>{new Date(item.date_time).toLocaleDateString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="text-right">
                      {item.city ? `${item.city}, ` : ""}
                      {item.state ? `${item.state}, ` : ""}
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CasesPage;
