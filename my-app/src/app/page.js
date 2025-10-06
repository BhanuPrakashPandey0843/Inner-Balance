"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow">
        <Hero />
      </div>

         {/* FAQ Section */}
      <div className="flex-grow">
        <Faq />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
