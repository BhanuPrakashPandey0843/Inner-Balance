"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "Inner Balance helps you enhance your mental well-being through guided consultations, AI insights, and mindfulness practices.",
  },
  {
    question: "How can expert consultations help me?",
    answer:
      "You can connect with mental health professionals to receive personalized advice and support for your wellness journey.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, the basic version is free! Premium plans unlock additional expert sessions and advanced tracking features.",
  },
  {
    question: "Can I customize my wellness journey?",
    answer:
      "Absolutely. The app adapts to your lifestyle, preferences, and goals to create a wellness path that works best for you.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "You can monitor your daily mood, mindfulness progress, and consultation history directly from your dashboard.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20 px-6 sm:px-16 text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Small Animated Icon */}
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="https://media.tenor.com/r2l6ol9HRqIAAAAi/question-mark-question.gif"
              alt="Question Icon"
              width={55}
              height={55}
              className="rounded-full"
              unoptimized
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Frequently Asked <br></br> Questions{" "}
            <span className="bg-yellow-300 px-2 rounded-md">(FAQs)</span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-4 max-w-md">
            Find everything you need to know about the app, features, and how it
            helps you on your wellness journey.
          </p>

          {/* Search box */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full sm:w-80 border border-gray-300 rounded-full px-5 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
          </div>
        </motion.div>

        {/* Right Side - FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium hover:text-yellow-500 transition-colors"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-2 text-sm"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

