import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='my-16 relative text-center min-h-[500px] flex flex-col justify-center items-center'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <img src="https://i.ibb.co.com/jPWMy2bQ/banner.png" className='w-full h-[500px] opacity-100 rounded-lg' />
            </div>
            <div className='relative z-10'>
                <h1 className='text-white text-5xl font-bold'>Welcome to The Book Haven</h1>
                <h4 className='text-gray-300 my-4'>Your Personal Digital Library. Discover, Curate, and Create.</h4>
                <div className='flex gap-4 items-center justify-center mt-6'>
                    <Link to='/all-books' className='btn btn-primary rounded-lg font-bold hover:scale-105 transition-transform duration-100'>Explore All Books</Link>
                    <Link to='/add-book' className='banner-button-add'>Add a New Book</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;