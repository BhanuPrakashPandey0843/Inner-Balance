"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <Image src={logo} alt="Logo" width={50} height={40} />
          <h2 className="text-lg font-bold text-gray-800">Inner Balance</h2>
        </motion.div>

        {/* Centered Menu */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex space-x-12 text-sm font-semibold text-gray-700 mx-auto"
        >
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="transition-colors text-gray-700 group-hover:text-yellow-500">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </motion.ul>

        {/* Help Button on Extreme Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="px-4 py-1 border-2 border-yellow-500 text-yellow-500 rounded bg-transparent hover:underline transition">
            Help ?
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
