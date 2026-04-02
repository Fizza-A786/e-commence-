import { FaTruck, FaCreditCard, FaUndo, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#4C643B]">About Us</h1>
        <p className="text-gray-500 mt-3">
          Learn more about our journey and what makes us special
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-2xl shadow-md group">
          <img
            src="https://i.pinimg.com/736x/93/94/86/9394860a94b91e6b77b780d036cd2da1.jpg"
            alt="about"
            className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#4C643B]">
            Who We Are
          </h2>
          <p className="text-gray-600">
            We are a modern e-commerce platform providing a seamless shopping experience.
          </p>

          <h2 className="text-2xl font-semibold text-[#4C643B]">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Deliver premium products with a smooth and user-friendly experience.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg">
          <FaTruck className="mx-auto text-2xl text-[#4C643B]" />
          <h3 className="mt-2">Fast Delivery</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg">
          <FaCreditCard className="mx-auto text-2xl text-[#4C643B]" />
          <h3 className="mt-2">Secure Payment</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg">
          <FaUndo className="mx-auto text-2xl text-[#4C643B]" />
          <h3 className="mt-2">Easy Returns</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg">
          <FaStar className="mx-auto text-2xl text-[#4C643B]" />
          <h3 className="mt-2">Quality Products</h3>
        </div>
      </div>

      {/* ⭐ Testimonials Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#4C643B] mb-10">
          Customer Reviews
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
   
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {[1, 2, 3, 4, 5].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm italic">
                  "This store is amazing! The quality is top-notch and delivery was fast."
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    className="w-12 h-12 rounded-full object-cover"
                    alt="user"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#4C643B]">
                      Customer {index + 1}
                    </h4>
                    <p className="text-xs text-gray-400">Happy Buyer</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#4C643B]">
          Explore Our Products
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-[#4C643B] text-white px-6 py-2 rounded-xl hover:scale-105 transition"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}