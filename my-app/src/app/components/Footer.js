"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Instagram, Youtube } from "lucide-react";

import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black flex flex-col items-center relative overflow-hidden">
      {/* Top black line */}
      <div className="w-full h-[0.5px] bg-black" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <Image
          src={logo}
          alt="Logo"
          width={140}
          height={80}
          className="object-contain"
        />
      </motion.div>

      {/* Subheading */}
      <div className="text-center mt-6 space-y-2">
        <p className="text-lg font-medium">
          Enter your email address to consult a doctor
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Get Started on your journey to a <br />
          <span className="font-semibold">healthier & happier life.</span>
        </p>
      </div>

      {/* Email Subscription Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-3 w-72 sm:w-80 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-200"
        >
          Get App
        </motion.button>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-5 mt-8 text-sm font-medium"
      >
        {[
          "Feature",
          "Benefits",
          "About Us",
          "Terms",
          "Privacy",
          "Contact",
          "Helpline",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-8 mt-6 mb-6"
      >
        <a href="#" className="hover:text-yellow-500 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="mailto:someone@example.com" className="hover:text-yellow-500">
          <Mail size={24} />
        </a>
        <a href="#" className="hover:text-yellow-500 transition-colors">
          <Youtube size={24} />
        </a>
      </motion.div>

      {/* Bottom yellow line with leaf sitting ON it */}
      <div className="relative w-full h-[3px] bg-yellow-400">
       <motion.div
          initial={{ opacity: 0, x: 20, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-4 bottom-[2px]" // 👈 image sits ON the yellow line
        >
          <Image
            src="https://png.pngtree.com/png-clipart/20220921/original/pngtree-hand-drawing-leaf-vector-illustration-png-image_8625416.png"
            alt="Leaf Illustration"
            width={120}
            height={120}
            className="object-contain animate-bounce-slow"
            unoptimized
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-4 bottom-[2px]" // 👈 image sits ON the yellow line
        >
          <Image
            src="https://png.pngtree.com/png-clipart/20220921/original/pngtree-hand-drawing-leaf-vector-illustration-png-image_8625416.png"
            alt="Leaf Illustration"
            width={120}
            height={120}
            className="object-contain animate-bounce-slow"
            unoptimized
          />
        </motion.div>
      </div>

      {/* Custom slow bounce animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
