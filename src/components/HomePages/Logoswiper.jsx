import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "./Swiper.css";

const logos = [
    "https://i.pinimg.com/736x/bf/3a/db/bf3adbdb3678777a7d80addc06a29db1.jpg",
    "https://i.pinimg.com/736x/8d/2b/f1/8d2bf1294ab0a9db2c6423e28761431b.jpg",
    "https://i.pinimg.com/1200x/5b/15/a5/5b15a52b1981878e0b580d6b62b10866.jpg",
    "https://i.pinimg.com/736x/ee/dc/4e/eedc4ed5f8789ee94dbf1955566ea64b.jpg",
    "https://i.pinimg.com/736x/6d/7e/81/6d7e813994be35d3a0703e8a70715f80.jpg",
    "https://i.pinimg.com/1200x/48/3e/9d/483e9dcbe63d4f44a6109a91f0dd81d0.jpg",
    "https://i.pinimg.com/1200x/8f/87/1c/8f871cb288626f112ae0dc243dd88192.jpg",
    "https://i.pinimg.com/1200x/a2/01/40/a20140ff5257f0cd3b3facfef4d62401.jpg",
    "https://i.pinimg.com/1200x/6b/25/6d/6b256d695531d3d032ae5f4ca833598e.jpg"
];

const Logoswiper = () => {
    return (
        <div className="w-full bg-white py-8 px-4 sm:px-8">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000} 
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 25 },
                    768: { slidesPerView: 4, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 35 },
                    1280: { slidesPerView: 6, spaceBetween: 40 },
                }}
                className="flex items-center"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center px-2">
                        <img
                            src={logo}
                            alt={`brand logo ${index + 1}`}
                            className="h-12 sm:h-16 md:h-20  hover:saturate-150 hover:hue-rotate-60 object-contain  grayscale hover:grayscale-0 hover:scale-120 transition-all duration-300"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Logoswiper;