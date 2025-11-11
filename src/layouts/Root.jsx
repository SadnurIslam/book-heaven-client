import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

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
            <Toaster/>
        </div>
    );
};

export default Root;