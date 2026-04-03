import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our Products
        </h1>

        <p className="text-gray-200 mt-4 max-w-xl">
          Experience premium shopping with high-quality products women.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-[#4C643B] text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};