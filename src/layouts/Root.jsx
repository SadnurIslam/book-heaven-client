import React from 'react';
import { Outlet } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='custom-bg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='min-h-screen'>
                    <Navbar></Navbar>
                    <Outlet>

                    </Outlet>
                </div>
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;