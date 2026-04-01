import { FaShippingFast, FaHeadset, FaLock, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9f7]">

      {/* 🔥 VIDEO HERO SECTION */}
      <div className="relative w-full h-[90vh] overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl text-sm sm:text-base">
            Experience premium shopping with high-quality products for men and women.
            We bring style, comfort, and affordability together.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 bg-[#4C643B] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-xl hover:scale-105 transition shadow-lg"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mt-16 px-4">
        <h2 className="text-3xl font-bold text-[#4C643B]">What We Offer</h2>
        <p className="text-gray-500 mt-2">
          We provide the best experience for your shopping journey
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <FaShippingFast className="text-3xl text-[#4C643B] mx-auto" />
          <h3 className="mt-4 text-lg font-semibold text-[#4C643B]">Fast Delivery</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Get your products delivered quickly and safely at your doorstep.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <FaHeadset className="text-3xl text-[#4C643B] mx-auto" />
          <h3 className="mt-4 text-lg font-semibold text-[#4C643B]">24/7 Support</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Our support team is always available to help you anytime.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <FaLock className="text-3xl text-[#4C643B] mx-auto" />
          <h3 className="mt-4 text-lg font-semibold text-[#4C643B]">Secure Payment</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Your transactions are safe and protected with secure systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <FaTags className="text-3xl text-[#4C643B] mx-auto" />
          <h3 className="mt-4 text-lg font-semibold text-[#4C643B]">Best Offers</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Enjoy exclusive deals and discounts on premium products.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center px-4 pb-10">
        <h2 className="text-2xl font-semibold text-[#4C643B]">
          Start Exploring Our Collection
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-[#4C643B] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-xl hover:scale-105 hover:shadow-lg transition"
        >
          Explore Products
        </button>
      </div>

    </div>
  );
}