import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4C643B] text-white pt-16 pb-8 relative">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Glow & Shine</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Premium skincare products to make your skin glow naturally. Shop the best products online with safe, high-quality formulas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 ">
            {["Home", "About", "Products", "Services", "Contact us"].map((link, index) => (
              <li
                key={index}
                className="cursor-pointer relative group hover:translate-x-2 hover: transition-all duration-300 hover:text-yellow-400"
              >
                {link}
             
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200 mb-2">Email: <span className="hover:text-yellow-400 transition cursor-pointer">support@glowshine.com</span></p>
          <p className="text-gray-200 mb-2">Phone: <span className="hover:text-yellow-400 transition cursor-pointer">+92 300 1234567</span></p>
          <p className="text-gray-200">Address: Karachi, Pakistan</p>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow & Subscribe</h3>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <Icon
                key={i}
                className="text-white w-6 h-6 cursor-pointer transition-transform transform hover:scale-125 hover:text-yellow-400"
              />
            ))}
          </div>

          {/* Newsletter */}
         {/* Newsletter with button inside input */}
<div className="relative w-full max-w-sm mx-auto">
  <input
    type="email"
    placeholder="Your email"
    className="w-full px-4 py-2 pr-32 rounded-full text-black outline-none focus:ring-2 focus:ring-yellow-400"
  />
  <button
    className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-transform transform hover:scale-105"
  >
    Subscribe
  </button>
</div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-4 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;