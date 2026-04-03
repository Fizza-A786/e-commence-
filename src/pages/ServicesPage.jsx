import { FaShippingFast, FaHeadset, FaLock, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9f7]">

      {/* 🔥 VIDEO HERO */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl">
            Experience premium shopping with high-quality products for men and women.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 bg-[#4C643B] text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
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

      {/* ⭐ PREMIUM SERVICES CARDS */}
      <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          {
            icon: <FaShippingFast />,
            title: "Fast Delivery",
            desc: "Quick and reliable delivery at your doorstep."
          },
          {
            icon: <FaHeadset />,
            title: "24/7 Support",
            desc: "We are always here to help you anytime."
          },
          {
            icon: <FaLock />,
            title: "Secure Payment",
            desc: "Safe and protected payment methods."
          },
          {
            icon: <FaTags />,
            title: "Best Offers",
            desc: "Exclusive deals and amazing discounts."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-500 text-center overflow-hidden border border-gray-100 hover:-translate-y-3 hover:scale-[1.03]"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4C643B]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Icon */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#4C643B]/10 text-[#4C643B] text-2xl group-hover:bg-[#4C643B] group-hover:text-white transition duration-300 shadow-inner">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-semibold text-gray-800 group-hover:text-[#4C643B] transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Bottom line */}
            <div className="mt-4 h-[2px] w-0 bg-[#4C643B] mx-auto group-hover:w-12 transition-all duration-300"></div>
          </div>
        ))}

      </div>

      {/* ⭐ HOW IT WORKS (IMPROVED) */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center text-[#4C643B] mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {[
            "Browse Products",
            "Add to Cart",
            "Secure Checkout",
            "Fast Delivery"
          ].map((step, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#4C643B] text-white font-bold group-hover:scale-110 transition">
                {i + 1}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#4C643B]">
                {step}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Simple and smooth process for better experience.
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center px-4 pb-10">
        <h2 className="text-2xl font-semibold text-[#4C643B]">
          Start Exploring Our Collection
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-[#4C643B] text-white px-6 py-3 rounded-xl hover:scale-105 hover:shadow-lg transition"
        >
          Explore Products
        </button>
      </div>

    </div>
  );
}