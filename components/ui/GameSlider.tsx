"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const GameSlider = ({ games }: { games: any[] }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides.forEach((slide) => {
            slide.style.transform = "scale(0.85)";
            slide.style.transition = "transform 0.4s ease";
          });
          const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
          if (activeSlide) activeSlide.style.transform = "scale(1)";
        }}
        className="pb-16"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md">
              {/* Game image */}
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-56 object-cover"
              />

              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Game name text overlay */}
              <div className="absolute bottom-3 left-3">
                <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                  {game.name}
                </h3>
                <p className="text-sm text-gray-200">{game.plays}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="custom-pagination absolute bottom-0 left-0 w-full flex justify-center gap-2"></div>
    </div>
  );
};
