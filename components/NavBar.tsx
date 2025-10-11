"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/Banner.png"; // update path if different

export default function NavBar() {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#2F0F44] via-[#4A1D6E] via-[#D42A70] to-[#6B3B8E] py-0"
          : "bg-transparent py-[18px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="w-[15%] min-w-[100px]">
          <Image src={logo} alt="Logo" className="w-full bg-transparent" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {["home", "skills", "Games"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-white text-[18px] tracking-[0.8px] px-[25px] font-semibold opacity-100 
  transition-all duration-200 ease-in-out transform hover:text-[#FFB703] hover:scale-120`}
              onClick={() => onUpdateActiveLink(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {/* Button */}
          <a href="#connect">
            <button className="relative font-bold text-white border border-white py-[18px] px-[34px] text-[18px] ml-[18px] overflow-hidden transition duration-300 ease-in-out hover:border-[#FFB703] hover:text-[#FFB703]">
              <span className="relative z-10">Let’s Connect</span>
              <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out hover:w-full"></span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-[6px] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] flex flex-col items-center py-4 space-y-4">
          {["home", "skills", "Games"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-white text-lg"
              onClick={() => onUpdateActiveLink(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a href="#connect" onClick={() => setMenuOpen(false)}>
            <button className="relative font-bold text-white border border-white py-2 px-6 text-lg overflow-hidden transition duration-300 ease-in-out hover:text-[#121212]">
              <span className="relative z-10">Let’s Connect</span>
              <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out hover:w-full"></span>
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
