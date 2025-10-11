// app/All-Games/page.tsx
"use client";

import React from "react";
import { AllGames } from "@/data";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const AllGamesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#45089D] to-[#6A11CB]">
      {/* Content Container */}
      <div className="py-12 px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-white font-extrabold uppercase text-5xl md:text-6xl tracking-wide text-center">
            All Games
          </h1>
          <div className="mt-5 h-[6px] w-32 bg-white rounded-full" />
        </div>

        {/* Grid for all devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllGames.map((game, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={game.image || "/placeholder.png"}
                alt={game.name}
                className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/50 to-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white font-extrabold text-xl">
                  {game.name}
                </h3>

                {game.liveLink && (
                  <a
                    href={game.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-2 bg-purple-600 rounded-lg text-white text-sm text-center font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Play Now
                  </a>
                )}
              </div>

              {game.plays && (
                <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <p className="text-white text-sm bg-black/50 p-2 rounded">
                    {game.plays}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer full width */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AllGamesPage;
