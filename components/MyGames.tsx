"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  containerDrop,
  letterDrop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import "swiper/css";
import "swiper/css/navigation";
import { GameSlider } from "./ui/GameSlider";
import { AllGames } from "@/data";

const MyGames = () => {
  const text = "MY GAMES";
  console.log("AllGames ", AllGames);
  const liveGames = AllGames.filter((game) => game.liveLink);
  console.log("live games ", liveGames);
  return (
    <div className="relative max-w-7xl mx-auto py-12 px-4 overflow-visible">
      {/* Heading with underline */}
      <div className="flex flex-col items-center justify-center mb-12">
        <motion.div
          variants={containerDrop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white font-extrabold uppercase text-4xl md:text-5xl tracking-wide text-center"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterDrop}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5 h-[10px] w-4xl bg-white rounded-full origin-left"
        />
      </div>

      <div className="space-y-32">
        {/* Live Games - Left side */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative -ml-32" // push left outside 7xl
        >
          <h2 className="text-white font-extrabold uppercase text-2xl md:text-3xl mb-4 tracking-wide text-left">
            LIVE GAMES
          </h2>
          <GameSlider games={liveGames} />
        </motion.div>

        {/* Past Games - Right side */}
        <motion.div
          variants={slideInFromRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative -mr-32 flex justify-end" // push right outside 7xl
        >
          <div className="w-full">
            <h2 className="text-white font-extrabold uppercase text-2xl md:text-3xl mb-4 tracking-wide text-right">
              ALL GAMES
            </h2>
            <GameSlider games={AllGames} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyGames;
