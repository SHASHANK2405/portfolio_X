"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  containerDrop,
  letterDrop,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import { GameSlider } from "./ui/GameSlider";
import { AllGames } from "@/data";

const MyGames = () => {
  const router = useRouter();
  const text = "MY GAMES";
  const liveGames = AllGames.filter((game) => game.liveLink);

  return (
    <div
      className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-visible"
      id="Games"
    >
      {/* Heading */}
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
        {/* Live Games */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <h2 className="text-white font-extrabold uppercase text-2xl md:text-3xl mb-4 tracking-wide text-left">
            LIVE GAMES
          </h2>
          <GameSlider games={liveGames} />
        </motion.div>

        {/* All Games */}
        <motion.div
          variants={slideInFromRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-end"
        >
          <div className="w-full">
            <h2 className="text-white font-extrabold uppercase text-2xl md:text-3xl mb-4 tracking-wide text-right">
              ALL GAMES
            </h2>
            <GameSlider games={AllGames} />
          </div>
        </motion.div>
      </div>

      {/* See All Games */}
      <div className="mt-12 text-center">
        <div className="cursor-pointer flex flex-col items-center">
          <Link href="/All-Games" className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white hover:text-purple-400 transition-colors">
              See All Games
            </h2>
            <span className="block w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mt-2"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyGames;
