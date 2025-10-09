"use client";
import React from "react";
import { motion } from "framer-motion";
import bgImage from "./assets/bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 w-full overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%", 
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-center items-center -mt-10" // ⬅️ Moves content slightly up
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-bold text-[#000] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          Find Your Inner <span className="bg-yellow-300 px-2 rounded-md">Balance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-black mt-4 text-lg max-w-2xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.4)]"
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
      </motion.div>
    </section>
  );
};

export default Hero;
