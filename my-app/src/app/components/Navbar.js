"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Features", "Contact"];

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
          <Image src={logo} alt="Logo" width={45} height={35} />
          <h2 className="text-lg font-bold text-gray-800">Inner Balance</h2>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex space-x-10 text-sm font-semibold text-gray-700"
        >
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="transition-colors text-gray-700 group-hover:text-yellow-500">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </motion.ul>

        {/* Help Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:block"
        >
          <button className="px-4 py-1 border-2 border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
            Help ?
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 font-semibold text-gray-700">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-yellow-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
              <li>
                <button className="px-4 py-1 border-2 border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition">
                  Help ?
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
