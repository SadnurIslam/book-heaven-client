import React from 'react';
import { Outlet } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='custom-bg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='min-h-screen'>
                    <Navbar></Navbar>
                    <Outlet>

                    </Outlet>
                </div>
                <footer className='min-h-screen'>footer</footer>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Root;