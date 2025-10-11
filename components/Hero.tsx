"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import RotatingText from "./ui/RotatingText";
import { motion } from "framer-motion";
import AnimatedBackground from "./ui/AnimatedBackground";

const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Scale increases slightly with scroll (capped at 1.2)
      const newScale = 1 + Math.min(scrollY / 2000, 0.2);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-20 pt-36 h-screen relative">
      <AnimatedBackground />
      {/* Background Image */}
      <div className="absolute inset-0 h-screen overflow-hidden">
        <Image
          src="/assets/banner-bg.png"
          alt="Background"
          fill
          priority
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out", // smooth scaling
          }}
          className="object-cover object-center"
        />

        {/* Optional dark overlay */}
        {/* <div className="absolute inset-0 bg-[#45089D]/80" /> */}
      </div>

      {/* Spotlight effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start justify-center text-white z-10">
          <TextGenerateEffect
            className="text-center lg:text-left text-[10px] md:text-2xl lg:text-3xl"
            words="Hey! I'm ECO CRASHED"
          />
          <h1 className="text-center lg:text-left text-[30px] md:text-4xl lg:text-5xl font-bold">
            I'm
            <span className="text-[#FFB703]">
              <RotatingText words={[" Video Game Devloper"]} period={1000} />
            </span>
          </h1>
          <p className="text-center lg:text-left md:tracking-wider my-6 text-sm md:text-lg lg:text-2xl">
            I specialize in programming and user interface designing. You can
            find more about me below!{" :)"}
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Column with floating animation */}
        <motion.div
          className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          animate={{
            rotateX: [0, 10, 0, -10, 0],
            rotateY: [0, -10, 0, 10, 0],
            translateX: [0, 5, 0, -5, 0],
            translateY: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/PfpPng.png"
            alt="Hero"
            width={300}
            height={300}
            className="rounded-lg shadow-lg sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
            priority
          />
        </motion.div>
      </div>
      {/* <div className="flex items-center justify-center min-h-screen bg-black"> */}
      <h1
        className="absolute -bottom-8 left-[10%]
        text-5xl md:text-xl lg:text-9xl font-black uppercase tracking-[6px]
        text-transparent
        [font-family:'Arial_Black',sans-serif]
        bg-clip-text
        [-webkit-background-clip:text]
      "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #45089D 0px, #4B0082 2px, transparent 2px, transparent 8px)",
        }}
      >
        ECO CRASHED
      </h1>

      {/* </div> */}
    </div>
  );
};

export default Hero;
