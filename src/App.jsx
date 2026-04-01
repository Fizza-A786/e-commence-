import React from "react";
import Navbaar from "./components/common/Navbaar";
import Footer from "./components/common/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/dashboard/common/Navbar";
import Sidebaar from "./components/dashboard/common/Sidebaar";
import Overview from "./pages/dashboard/Overview";
import AllUsers from "./pages/dashboard/AllUsers";

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
    <>
      <Navbar />
      <Outlet />
      <Sidebaar />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
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
