import React from "react";
import Navbaar from "./components/common/Navbaar";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import DashboardNavbar from "./components/dashboard/common/Navbar";
import Sidebaar from "./components/dashboard/common/Sidebaar";

import Overview from "./pages/dashboard/Overview";
import AllUsers from "./pages/dashboard/AllUsers";
import ProductPage from "./pages/ProductPage";
import ServicesPage from "./pages/ServicesPage";

/* ---------------- MAIN LAYOUT ---------------- */
const MainLayout = () => {
  return (
    <div>
      <Navbaar />
      <Outlet />
      <Footer />
    </div>
  );
};
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

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },   // ✅ default route fix
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      {path:"/products" , element: <ProductPage/>},
      {path:"/Services" , element: <ServicesPage/>}
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