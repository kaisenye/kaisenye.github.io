import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="ml-20 mr-20 md:ml-64 md:mr-40 lg:ml-80 lg:mr-80 w-full flex items-start justify-center">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout; 