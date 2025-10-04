"use client";

import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Contactus: React.FC = () => {
  // ✅ State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ✅ Handle input changes
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Example API call (replace with your backend)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(null);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="relative p-6 lg:p-4 w-full bg-gradient-to-r from-[#8E2DE2] via-[#6A11CB] to-[#3A0CA3]">
      <div className="mx-auto w-7xl max-w-maxContent flex flex-col lg:flex-row justify-between gap-10 text-richblack-500 mt-28">
        {/* Left side - Office Info */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <TrackVisibility once>
            {({ isVisible }) => (
              <img
                src="/assets/contact-img.svg"
                alt="Contact Us"
                className={`w-full h-auto max-w-md rounded-lg ${
                  isVisible ? "animate__animated animate__zoomIn" : ""
                }`}
              />
            )}
          </TrackVisibility>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full lg:w-1/2">
          <form
            className="flex flex-col gap-4 w-full mx-auto p-6 lg:p-4 rounded-lg shadow-lg max-w-lg "
            onSubmit={handleOnSubmit}
          >
            <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>

            {/* Success/Failure Messages */}
            {successMessage && (
              <p className="text-green-200 text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-200 text-sm">{errorMessage}</p>
            )}

            {/* First + Last Name */}
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-3 rounded-xl border border-white/50 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded-xl border border-white/50 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="flex gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-1/2 p-3 rounded-xl border border-white/50 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                className="w-1/2 p-3 rounded-xl border border-white/50 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 rounded-xl border border-white/50 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              rows={5}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="relative inline-flex h-12 w-32 md:w-40 overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              {/* Animated gradient border */}
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
    bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              />

              {/* Inner content */}
              <span
                className="inline-flex h-full w-full items-center justify-center rounded-xl
      bg-[#2C1492] px-7 text-base font-semibold text-white backdrop-blur-3xl"
              >
                Send
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
