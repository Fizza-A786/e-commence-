import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const menuItems = ["Home", "About", "Products", "Services", "Contact Us"];
  const supportLinks = ["FAQs", "Shipping", "Returns", "Privacy Policy"];

  return (
    <footer className="bg-[#4C643B] text-[#f6f7f3]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-lg font-bold mb-2">
            Shop<span className="text-black">Ease</span>
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed mb-3">
            Your trusted online store for quality products. We provide the best shopping experience with secure payments and fast delivery.
          </p>

          {/* Contact */}
          <div className="text-sm text-gray-200 space-y-1">
            <p className="flex items-center gap-2 hover:text-yellow-400 hover:translate-x-1.5 duration-300 transition-all">
              <FiMail /> support@shopease.com
            </p>
            <p className="flex  hover:text-yellow-400 hover:translate-x-1.5 duration-300 transition-all items-center gap-2">
              <FiPhone /> +92 300 1234567
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase tracking-wide">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-sm text-gray-200 hover:text-yellow-400   hover:text-yellow-400 hover:translate-x-1.5 duration-300 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase tracking-wide">
            Customer Care
          </h3>
          <div className="flex flex-col gap-2">
            {supportLinks.map((item, i) => (
              <Link
                key={i}
                to="/"
                className="text-sm  hover:text-yellow-400 hover:translate-x-1.5 duration-300 transition-all text-gray-200 hover:text-yellow-400 "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase tracking-wide">
            Stay Connected
          </h3>

          {/* Social Icons */}
       <div className="flex gap-4 mb-4">
  {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
    <div
      key={i}
      className="w-9 h-9 flex  items-center justify-center rounded-full bg-white/10 backdrop-blur-sm cursor-pointer transition hover:scale-115 hover:bg-yellow-400"
    >
      <Icon className="w-4 h-4 text-white hover:text-black" />
    </div>
  ))}
</div>

          {/* Newsletter */}
          <div className="relative w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 pr-24 rounded-full text-black text-sm outline-none border border-gray-300"
            />
            <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 px-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;