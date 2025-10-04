import { Variants } from "framer-motion";

export const slideInFromLeft = (delay = 0): Variants => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
};

// animations.js
export const slideInFromRight = (delay = 0): Variants => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut", // ✅ valid easing keyword
      },
    },
  };
};

export const slideInFromTop = (delay = 0): Variants => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
};

export const containerDrop: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each letter
    },
  },
};

export const letterDrop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
