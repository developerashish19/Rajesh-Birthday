"use client";
import { motion } from "framer-motion";

export default function Special() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6 bg-gradient-to-tr from-purple-900 via-pink-800 to-yellow-600 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_70%)] -z-10" />

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-xl"
      >
        🎂 Happy Birthday Rajesh 🎉❤️
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 sm:mt-8 text-base sm:text-lg md:text-2xl text-white/90 max-w-md sm:max-w-2xl md:max-w-3xl leading-relaxed"
      >
        You are the most amazing friend anyone could ask for.  
        I’m so lucky to have you in my life.  
        May this year bring endless happiness, success, and joy to you ✨.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 sm:mt-12 text-3xl sm:text-5xl animate-bounce"
      >
        🎁 🎉 🎂 💖
      </motion.div>

      <footer className="mt-14 sm:mt-20 text-xs sm:text-sm text-gray-200">
        Developed with ❤️ by your best friend — <span className="font-bold">DeveloperAshish</span>
      </footer>
    </div>
  );
}
