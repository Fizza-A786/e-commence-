import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Products", path: "/dashboard/products", icon: <FaBoxOpen /> },
    { name: "Orders", path: "/dashboard/orders", icon: <FaShoppingCart /> },
    { name: "users", path: "/dashboard/users", icon: <FaUsers /> },
  ];

  return (
    <div className="w-[250px] min-h-screen bg-[#2f3e2c] text-white flex flex-col">

      {/* LOGO */}
      <div className="p-6 text-2xl font-bold border-b border-white/10">
        Admin Panel
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-2 p-4">
        {menu.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 
              ${
                isActive
                  ? "bg-white text-[#2f3e2c] font-semibold shadow-md"
                  : "hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-auto p-4 border-t border-white/10 text-sm text-white/60">
        © 2026 Fizza
      </div>
    </div>
  );
};

export default Sidebar;