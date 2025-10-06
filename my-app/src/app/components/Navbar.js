"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={logo} alt="Logo" width={130} height={70} />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex space-x-8 text-sm font-semibold text-gray-700"
        >
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <li
              key={index}
              className="hover:text-yellow-500 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
