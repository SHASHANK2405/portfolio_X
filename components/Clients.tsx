import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        Kind words from{" "}
        <span className="text-[#FFB703]">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
