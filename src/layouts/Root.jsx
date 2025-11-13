import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className='custom-bg flex flex-col'>
      <Navbar />
      <main className='flex-grow md:w-11/12 min-h-screen mx-auto px-4 py-5'>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Root;
