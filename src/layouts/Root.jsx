import React from 'react';
import { Outlet } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='custom-bg min-h-screen'>
            <div className='max-w-7xl mx-auto px-4'>
                <Navbar></Navbar>
                <Outlet>

                </Outlet>
                <footer>footer</footer>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Root;