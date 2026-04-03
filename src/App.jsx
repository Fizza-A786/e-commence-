import React, { useEffect } from "react"; // ✅ FIX: useEffect import
import Navbaar from "./components/common/Navbaar";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductPage from "./components/ProductPage/ProductPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import DashboardNavbar from "./components/dashboard/common/Navbar";
import Sidebaar from "./components/dashboard/common/Sidebaar";

import Overview from "./pages/dashboard/Overview";
import AllUsers from "./pages/dashboard/AllUsers";
import CartPage from "./Redux/Features/CartPage";
import ScrollToTop from "./ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./pages/Products";

/* ---------------- MAIN LAYOUT ---------------- */
const MainLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbaar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

/* ---------------- DASHBOARD LAYOUT ---------------- */
const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebaar />

      <div className="flex-1">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

/* ---------------- ROUTER ---------------- */
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products/> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Overview /> },
      { path: "/dashboard/users", element: <AllUsers /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;