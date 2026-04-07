import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful 🎉");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ec] to-[#dfe7db] px-4">

      <div className="max-w-5xl w-full grid md:grid-cols-2 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#4C643B] text-white p-10 space-y-5">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-center opacity-80 text-sm">
            Login to continue shopping your favorite products.
          </p>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12">

          <h2 className="text-3xl font-bold text-[#2f3e2c] mb-2">
            Login
          </h2>
          <p className="text-gray-500 mb-8">
            Access your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

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
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#4C643B] relative">
              <FiLock className="text-gray-400 mr-3" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer text-gray-400"
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#4C643B] text-white py-3 rounded-xl font-semibold hover:bg-[#3b4f2f] transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Login
            </button>

          </form>

          {/* SIGNUP LINK */}
          <p className="text-sm text-center text-gray-500 mt-8">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#4C643B] font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;