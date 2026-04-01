import { FaTruck, FaCreditCard, FaUndo, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image with Hover */}
        <div className="overflow-hidden rounded-2xl shadow-md group">
          <img
            src="https://i.pinimg.com/736x/93/94/86/9394860a94b91e6b77b780d036cd2da1.jpg"
            alt="about"
            className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#4C643B]">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a modern e-commerce platform created to provide a seamless
            and enjoyable online shopping experience. Our store offers a wide
            range of products for both men and women, focusing on quality,
            style, and affordability.
          </p>

          <h2 className="text-2xl font-semibold text-[#4C643B]">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver premium products with a simple and
            user-friendly shopping experience. We aim to continuously improve
            and bring innovation to online shopping.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-lg transition">
          <FaTruck className="text-2xl text-[#4C643B]" />
          <h3 className="mt-2 font-medium text-[#4C643B]">Fast Delivery</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-lg transition">
          <FaCreditCard className="text-2xl text-[#4C643B]" />
          <h3 className="mt-2 font-medium text-[#4C643B]">Secure Payment</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-lg transition">
          <FaUndo className="text-2xl text-[#4C643B]" />
          <h3 className="mt-2 font-medium text-[#4C643B]">Easy Returns</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-lg transition">
          <FaStar className="text-2xl text-[#4C643B]" />
          <h3 className="mt-2 font-medium text-[#4C643B]">Quality Products</h3>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#4C643B]">
          Explore Our Products
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-[#4C643B] text-white px-6 py-2 rounded-xl hover:scale-105 hover:shadow-lg transition"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}