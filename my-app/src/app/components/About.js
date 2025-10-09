"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutGif from "./assets/about.gif";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-gradient-to-br from-[#fafafa] via-[#ffffff] to-[#f6f6f6] overflow-hidden">
      {/* Subtle Background Accent Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 top-1/4 -left-40"
      />

      {/* Left: Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center z-10 mb-10 md:mb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="relative"
        >
          <Image
            src={aboutGif}
            alt="About Illustration"
            className="rounded-3xl shadow-xl shadow-gray-300 border border-gray-100 w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] hover:shadow-2xl transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent  opacity-30" />
        </motion.div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1b1b1b] leading-tight tracking-tight">
          Unlock Your Best <br />
          <span className="text-[#47634e]">Self</span>{" "}
          <span className="bg-yellow-300 px-3 py-1 rounded-lg text-[#1b1b1b] text-2xl align-middle">
            (FAQs)
          </span>
        </h2>

        <p className="text-gray-600 mt-6 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
          Discover everything about our app — its features, mindfulness tools,
          and how it empowers you to nurture mental wellness and personal growth
          through intelligent insights and holistic support.
        </p>

        {/* Decorative Line + CTA */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[3px] bg-yellow-400 mt-6 mb-6 rounded-full mx-auto md:mx-0"
        />

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#47634e] text-white px-6 py-3 rounded-2xl font-medium shadow-md hover:shadow-xl transition-all"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
