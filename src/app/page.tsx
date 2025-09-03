"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold drop-shadow-lg"
      >
        🎉 Happy Birthday Rajesh 🎂
      </motion.h1>

      <p className="mt-6 text-xl">Wishing you a day full of happiness and surprises!</p>

      <Link href="/memories">
        <button className="mt-10 px-6 py-3 bg-white text-pink-600 font-bold rounded-2xl shadow-lg hover:scale-105 transition">
          Start the Journey 🚀
        </button>
      </Link>
    </div>
  );
}
