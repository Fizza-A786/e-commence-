import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ec] to-[#dfe7db] px-4">

      {/* MAIN CARD */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* LEFT SIDE (Brand / Image Area) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#4C643B] text-white p-10 space-y-4">
          <h1 className="text-3xl font-bold">ShopEase</h1>
          <p className="text-sm text-center opacity-80">
            Create your account and start shopping your favorite products today.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="p-8 md:p-10">

          <h2 className="text-2xl font-bold text-[#2f3e2c] mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Sign up to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#4C643B]">
              <FiUser className="text-gray-400 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#4C643B]">
              <FiMail className="text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#4C643B]">
              <FiLock className="text-gray-400 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#4C643B] text-white py-3 rounded-xl font-semibold hover:bg-[#3b4f2f] transition"
            >
              Sign Up
            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#4C643B] font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Signup;