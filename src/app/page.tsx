"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-4 sm:px-6 bg-gradient-to-br from-pink-600 via-purple-800 to-indigo-900">
      {/* Floating glow orbs */}
      <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-pink-400/30 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
      <div className="absolute w-44 h-44 sm:w-80 sm:h-80 bg-purple-400/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        🎉 Happy Birthday Rajesh 🎂
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-base sm:text-lg md:text-2xl text-gray-200 max-w-md sm:max-w-xl"
      >
        A journey of laughter, friendship & memories — let’s relive them 💖
      </motion.p>

      <Link href="/memories">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-yellow-400/40"
        >
          Start the Journey 🚀
        </motion.button>
      </Link>
    </div>
  );
}
