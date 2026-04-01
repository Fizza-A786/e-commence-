import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./categories.css"; // optional custom CSS

const products = [
  {
    id: 1,
    name: "Nourishing Face Lotion",
    image:
      "https://i.pinimg.com/736x/99/fe/33/99fe338260c364d0bff6d73aa6ee389b.jpg",
  },
  {
    id: 2,
    name: "Glow Skin Serum",
    image:
      "https://i.pinimg.com/736x/85/cf/c8/85cfc83279d17abdc68bdf81a706ab90.jpg",
  },
  {
    id: 3,
    name: "Hydrating Cream",
    image:
      "https://i.pinimg.com/736x/d8/12/92/d81292c76d3c4bb3b3190413789b6d64.jpg",
  },
  {
    id: 4,
    name: "Vitamin C Face Oil",
    image:
      "https://i.pinimg.com/736x/f4/cf/8e/f4cf8edc75a0cdf7c18cc62ed1cd7c67.jpg",
  },
  {
    id: 5,
    name: "Revitalizing Night Cream",
    image:
      "https://i.pinimg.com/736x/86/b4/b2/86b4b2323ce81fe3f0637a42c020d8d5.jpg",
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Categories </h1>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={16}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative overflow-hidden rounded-xl group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4">
                <h2 className="text-white font-semibold text-lg mb-2">
                  {product.name}
                </h2>
                <button className="bg-[#4C643B] hover:bg-[#3a4f2b] cursor-pointer text-white px-4 py-2 rounded-full text-sm font-medium">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;