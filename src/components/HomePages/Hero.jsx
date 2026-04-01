import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper-custom.css";

const Hero = () => {

  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/71/7f/e6/717fe65788e080a6b823986540626210.jpg",
      title: "Nourishing Face & Body Lotion",
      description: "Lightweight lotion for soft, hydrated skin.",
      buttonText: "Order Now",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/a1/51/b3/a151b351f59a0f322d1676bde4804eba.jpg",
      title: "Glow Skin Serum",
      description: "Boosts glow and keeps skin smooth.",
      buttonText: "Order Now",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/52/24/ff/5224ff378cc98d8039407341eddf2f33.jpg",
      title: "Hydrating Skincare Cream",
      description: "Deep hydration for healthy skin.",
      buttonText: "Order Now",
    },
  ];

  return (
    <div className="h-[88vh] w-full relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // ✅ arrows enable
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#4C643B]/20"></div>

              {/* Content */}
              <div className="relative text-center px-6 md:px-10 max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-light mb-4 font-monoCustom text-white">
                  {slide.title}
                </h2>

                <div className="flex items-center gap-3">
                  <div className="h-px w-16 bg-[#4C643B] -mt-4"></div>

                  <p className="text-lg md:text-2xl mb-6 font-monoCustom text-[#4C643B]">
                    {slide.description}
                  </p>

                  <div className="h-px w-16 bg-[#4C643B] -mt-4"></div>
                </div>

                {/* ✅ FIXED BUTTON */}
                <button
                  className="bg-[#4C643B] hover:bg-[#3a4f2b] cursor-pointer text-white px-6 py-3 rounded-4xl text-[15px] font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;