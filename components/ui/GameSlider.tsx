"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export const GameSlider = ({ games }: { games: any[] }) => {
  const swiperRef = useRef<any>(null);
  const isSlidingEnabled = games.length > 3;
  const isSlidingEnabledForMobile = games.length > 1;

  return (
    <div className="relative">
      {/* Left Arrow */}
      {isSlidingEnabled && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-20 p-5 rounded-full text-white text-6xl hidden md:block"
        >
          &#10094;
        </button>
      )}

      {/* Right Arrow */}
      {isSlidingEnabled && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-20 p-5 rounded-full text-white text-6xl hidden md:block"
        >
          &#10095;
        </button>
      )}

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        loop={isSlidingEnabled}
        autoplay={
          isSlidingEnabled
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides.forEach((slide: HTMLElement) => {
            slide.style.transform = "scale(0.85)";
            slide.style.transition = "transform 0.5s ease";
          });
          const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
          if (activeSlide) activeSlide.style.transform = "scale(1)";
        }}
        className="pb-16"
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: isSlidingEnabledForMobile,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: isSlidingEnabled,
          },
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="flex justify-center">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg w-full max-w-md transition-transform duration-500">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-56 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 bg-purple-400/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

              <div className="absolute bottom-3 left-3 z-10">
                <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                  {game.name}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-semibold bg-black/30 px-4 py-2 rounded-lg">
                  {game.plays} plays
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination absolute bottom-0 left-0 w-full flex justify-center gap-2"></div>
    </div>
  );
};
