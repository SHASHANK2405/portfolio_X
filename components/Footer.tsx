import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full md:mb-2 p-10" id="contact">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <Image
          src="/assets/footer-bg.png"
          alt="Footer Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl md:text-6xl text-center z-10 text-white lg:max-w-[45vw]">
          Don't miss <span className="text-[#FFB703]">out!</span>
        </h1>
        <p className="text-white md:mt-10 my-5 text-center z-10 text-xl">
          Drop us a follow to stay up to date with <br />
          our latest news and game launches.
        </p>
        <a href="mailto:robloxians90@gmail.com?subject=Collaboration%20Request&body=Hi%20there,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light z-10 text-white">
          Copyright © 2024 ECO CRASHED
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              href={profile.link}
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg backdrop-filter saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={`icon ${profile.id}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
