import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="ml-4 mr-4 sm:ml-12 sm:mr-12 md:ml-64 md:mr-30 lg:ml-60 lg:mr-46 xl:ml-60 xl:mr-96 w-full flex items-start justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
