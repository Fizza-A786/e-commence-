import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Products" },
    { name: "Services" },
    { name: "Contact Us" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-[#4C643B] text-black sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">

          {/* Mobile Menu */}
          <FiMenu
            className="text-2xl cursor-pointer md:hidden text-[#f6f7f3]"
            onClick={() => setOpen(true)}
          />

          {/* Logo */}
          <h2 className="text-lg font-bold text-[#f6f7f3] logo-font">
            Shop<span className="text-black">Ease</span>
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[#f6f7f3] px-10 py-3">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="relative text-sm font-medium tracking-wide cursor-pointer group transition duration-300 hover:scale-105"
              >
                {item.name}

                {/* Hover Underline */}
                <span
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f6f7f3]
                  transform scale-x-0 origin-left transition-transform duration-300
                  group-hover:scale-x-100"
                ></span>
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5 text-[#f6f7f3]">

            <FiSearch className="text-xl cursor-pointer hover:scale-110 transition" />

            <FiUser className="text-xl cursor-pointer hover:scale-110 transition" />

            {/* Cart */}
            <div className="relative">
              <FiShoppingCart className="text-xl cursor-pointer hover:scale-110 transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[#f6f7f3] text-xs w-5 h-5 flex items-center justify-center rounded-full">
                7
              </span>
            </div>

          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#f6f7f3] z-50 shadow-lg transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-[#4C643B]">
            Shop<span className="text-black">Ease</span>
          </h2>

          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col mt-4 gap-2 px-3">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#4C643B] 
              hover:bg-[#4C643B]/10 transition"
            >
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Profile Section */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <FiUser className="text-3xl text-[#4C643B]" />
            <div>
              <p className="text-sm font-semibold">My Profile</p>
              <p className="text-xs text-gray-500">View account</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;