"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-6xl font-bold text-[#47634e]"
      >
        Find Your Inner Balance
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 mt-4 text-lg max-w-2xl"
      >
        Explore a new approach to mental well-being — combining AI insights with
        mindfulness to bring peace, clarity, and emotional health.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 bg-yellow-400 rounded-full text-black font-semibold shadow-md hover:shadow-lg transition"
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default Hero;
