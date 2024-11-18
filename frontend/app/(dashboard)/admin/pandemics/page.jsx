"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Skull, Heart, Globe, Calendar } from "lucide-react";

const Pandemics = () => {
  const [pandemics, setPandemics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchPandemics = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pandemics");
        const data = await response.json();
        setPandemics(data);
      } catch (error) {
        console.error("Error fetching pandemics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPandemics();
  }, []);

  const formatNumber = (value) => {
    return value ? value.toLocaleString() : "N/A";
  };

  const handleCardClick = (pandemicId) => {
    setSelectedCard(selectedCard === pandemicId ? null : pandemicId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100">
            Pandemics Data
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <Card
                key={n}
                className="w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100"
        >
          History of pandemics
        </motion.h1>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {pandemics.map((pandemic) => (
              <motion.div
                key={pandemic.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Card
                  className={`w-full transition-all duration-300 hover:shadow-xl cursor-pointer 
                    bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700
                    hover:bg-white/80 dark:hover:bg-slate-800/80 
                    ${
                      selectedCard === pandemic.id
                        ? "ring-2 ring-blue-500 dark:ring-blue-400"
                        : ""
                    }`}
                  onClick={() => handleCardClick(pandemic.id)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {pandemic.name || ""}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Skull className="w-5 h-5 text-red-500" />
                        <span>
                          Death Toll:{" "}
                          {formatNumber(pandemic.death_toll || "30M+")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Heart className="w-5 h-5 text-green-500" />
                        <span>
                          Recovered:{" "}
                          {formatNumber(pandemic.recovered || "17M+")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span>
                          Survivors:{" "}
                          {formatNumber(pandemic.survivors || "30M+")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <span>Start Year: {pandemic.start_year || "1988"}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <Globe className="w-5 h-5 text-orange-500" />
                        <span>
                          Affected Countries:{" "}
                          {pandemic.countries_affected || "Global"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pandemics;
