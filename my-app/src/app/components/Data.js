"use client";
import React from "react";
import { motion } from "framer-motion";
import datagif from "./assets/data.gif";

const Data = () => {
  return (
    <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-24 px-6 sm:px-16 text-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What Our Users{" "}
          <span className="bg-yellow-300 px-2 rounded-md shadow-sm">
            Say
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-600 mb-20 text-lg leading-relaxed"
        >
          Real feedback from researchers, engineers, and water specialists who
          rely on <span className="font-semibold text-black">Neer Nirikshan</span> for
          groundwater quality monitoring and risk assessment.
        </motion.p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-left space-y-6 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Pay a low flat fee for both live sessions as well as messaging
              with your therapist. Therapy doesn't have to be expensive.
            </p>
           

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Testimonial 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <p className="text-gray-700 italic">
                  "The accuracy and visualization tools are game-changing. It
                  has streamlined our water data monitoring completely!"
                </p>
                <h4 className="mt-4 font-semibold text-black">
                  — Dr. Meera Sharma
                </h4>
                <p className="text-sm text-gray-500">Hydrologist, IIT Delhi</p>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <p className="text-gray-700 italic">
                  "Neer Nirikshan helped us make faster and more accurate
                  assessments. Excellent interface and smooth data handling."
                </p>
                <h4 className="mt-4 font-semibold text-black">
                  — Rajesh Verma
                </h4>
                <p className="text-sm text-gray-500">Environmental Engineer</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={datagif.src}
                alt="Data Visualization"
                className="relative w-full max-w-md rounded-2xl shadow-xl border border-yellow-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Data;
