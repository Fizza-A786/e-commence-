import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-white shadow-md flex items-center justify-between px-6">

      {/* LEFT - TITLE */}
      <h1 className="text-xl font-semibold text-gray-700">
        Dashboard
      </h1>

      {/* CENTER - SEARCH */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-[300px]">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* RIGHT - ICONS */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell className="text-xl text-gray-600 hover:text-black transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="hidden sm:block text-sm font-medium">
            Admin
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;