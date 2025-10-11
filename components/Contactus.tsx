"use client";

import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Contactus: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "robloxians90@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  return (
    <div
      className="relative p-6 sm:p-8 lg:p-4 w-full bg-gradient-to-r from-[#8E2DE2] via-[#6A11CB] to-[#3A0CA3]"
      id="connect"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 text-white my-10">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <TrackVisibility once>
            {({ isVisible }) => (
              <img
                src="/assets/contact-img.svg"
                alt="Contact Us"
                className={`w-full max-w-[300px] sm:max-w-sm md:max-w-md rounded-lg ${
                  isVisible ? "animate__animated animate__zoomIn" : ""
                }`}
              />
            )}
          </TrackVisibility>
        </div>

        {/* Right side - Copy Email Box */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative px-4 sm:px-0 py-4 sm:py-0">
          <BackgroundGradientAnimation />

          {/* Title */}
          <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 z-10 max-w-full sm:max-w-[400px]">
            Do you want to start a project together?
          </div>

          {/* Copy Email Button */}
          <div className="relative z-10">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
