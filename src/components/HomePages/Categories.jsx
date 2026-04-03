import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Face Lotion",
    category: "skincare",
    image:
      "https://i.pinimg.com/736x/99/fe/33/99fe338260c364d0bff6d73aa6ee389b.jpg",
  },
  {
    id: 2,
    name: "Glow Serum",
    category: "skincare",
    image:
      "https://i.pinimg.com/736x/85/cf/c8/85cfc83279d17abdc68bdf81a706ab90.jpg",
  },
  {
    id: 3,
    name: "Hydrating Cream",
    category: "skincare",
    image:
      "https://i.pinimg.com/736x/d8/12/92/d81292c76d3c4bb3b3190413789b6d64.jpg",
  },
  {
    id: 4,
    name: "Face Oil",
    category: "skincare",
    image:
      "https://i.pinimg.com/736x/f4/cf/8e/f4cf8edc75a0cdf7c18cc62ed1cd7c67.jpg",
  },
  {
    id: 5,
    name: "Night Cream",
    category: "skincare",
    image:
      "https://i.pinimg.com/736x/86/b4/b2/86b4b2323ce81fe3f0637a42c020d8d5.jpg",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-[#4C643B]">
        Top Categories
      </h1>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={16}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            
            <div className="relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition duration-500">
              
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-4">
                
                <h2 className="text-white font-semibold text-lg mb-2">
                  {product.name}
                </h2>

                <button
                  onClick={() =>
                    navigate(`/products?category=${product.category}`)
                  }
                  className="bg-[#4C643B] hover:bg-[#3a4f2b] text-white px-4 py-2 rounded-full text-sm font-medium transition hover:scale-105"
                >
                  Shop Now
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