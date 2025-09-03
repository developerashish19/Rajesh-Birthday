"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const messages = [
  "🎂 Happy Birthday Rajesh! May this year be your best yet!",
  "💖 You are not just my best friend, you are my family.",
  "🙏 Thank you for being with me in every moment of life.",
  "🚀 Let’s chase our dreams together & make more memories!",
];

export default function Messages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 sm:p-6 text-center flex flex-col items-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl font-extrabold mb-10 sm:mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent"
      >
        💌 Special Messages
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.3 }}
            className="p-4 sm:p-6 bg-gradient-to-r from-pink-500/80 via-purple-600/80 to-indigo-700/80 rounded-2xl sm:rounded-3xl shadow-xl text-white font-medium sm:font-semibold text-base sm:text-lg backdrop-blur-md border border-white/20 hover:scale-105 transition"
          >
            {msg}
          </motion.div>
        ))}
      </div>

      <Link href="/special">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 sm:mt-12 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-pink-400/50"
        >
          Go to Surprise 🎁
        </motion.button>
      </Link>
    </div>
  );
}
