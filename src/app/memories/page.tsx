"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/rajesh1.jpg",
  "/rajesh2.jpg",
  "/rajesh3.jpg",
  "/friends.jpg",
  "/party.jpg",
  "/college.jpg",
];

export default function Memories() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 p-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_70%)]" />

      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        🌟 Our Unforgettable Memories 🌟
      </motion.h1>

      {/* Polaroid-style photos */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative inline-block w-full group"
          >
            {/* Card with tilt effect */}
            <div className="transform transition duration-500 group-hover:rotate-3 group-hover:scale-105">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`memory-${idx}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
                {/* Caption */}
                <p className="p-3 text-black font-semibold italic text-center">
                  Best Moments with Rajesh 💖
                </p>
              </div>
            </div>

            {/* Glow hover effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-indigo-500/40 blur-lg"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom carousel for extra vibe */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="overflow-x-auto flex gap-6 py-4 px-2 scrollbar-hide">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt="carousel"
              width={300}
              height={200}
              className="rounded-xl shadow-lg hover:scale-110 transition"
            />
          ))}
        </div>
      </motion.div>

      {/* Next Button */}
      <Link href="/messages">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-12 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-pink-500/50"
        >
          Read Messages 💌
        </motion.button>
      </Link>
    </div>
  );
}
