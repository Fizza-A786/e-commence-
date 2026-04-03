import React from "react";
import bg from "../../assets/bg.png";

const DiscountBanner = () => {
  return (
    <div  className="max-w-6xl mx-auto py-6 px-4">
      <div data-aos="fade-up" className="bg-[#4C643B] rounded-xl flex flex-col md:flex-row flex-wrap items-center justify-between px-6 py-6 md:py-8 text-white">

        {/* Left Content */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Big Savings Await!
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="text-yellow-400 font-semibold">Shop Now</span> for
            unbeatable deals!
          </p>
          <button className="mt-4 py-2 px-6 bg-amber-50 text-[#4C643B] font-semibold rounded-full 
                             hover:bg-yellow-400 hover:text-white hover:scale-105 
                             transition duration-300 ease-in-out shadow-md cursor-pointer">
            Shop Now
          </button>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center my-4 md:my-0">
          <img
            src={bg}
            alt="Product"
            className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Right Discount */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
            50% OFF
          </h2>
          <span className="bg-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-md mt-2 inline-block">
            FLASH SALE
          </span>
        </div>

      </div>
    </div>
  );
};

export default DiscountBanner;