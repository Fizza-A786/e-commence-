import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
   const navigate = useNavigate()
  return (
    <div className=" py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-2xl shadow-lg w-[460px] h-[320px] group">
            <img
              src="https://i.pinimg.com/1200x/83/a8/f8/83a8f84809a4e679adcd6c01aabbab8c.jpg"
              alt="about"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-widest text-[#4C643B] font-semibold">
            About Our Brand
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            We Create Premium Shopping Experiences
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our platform is designed to deliver high-quality products with a smooth, 
            reliable, and modern shopping experience.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We combine elegance, comfort, and trust to redefine online shopping.
          </p>

          {/* Button */}
          <button
             onClick={() => navigate("/about")}
          className="mt-3 bg-[#4C643B] text-white px-6 py-2.5 rounded-lg hover:scale-105 transition shadow-md">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;