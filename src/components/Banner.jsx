import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='my-16 relative text-center min-h-[500px] flex flex-col justify-center items-center overflow-hidden'>

            <div className='absolute top-0 left-0 w-full h-full'>
                <img 
                    src="https://i.ibb.co.com/jPWMy2bQ/banner.png" className='w-full h-[500px] object-cover opacity-100 rounded-lg'
                />
            </div>

            <motion.div
                className='relative z-10'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <h1 className='text-white text-5xl font-bold drop-shadow-xl'>
                    Welcome to The Book Haven
                </h1>

                <motion.h4
                    className='text-gray-200 my-4 drop-shadow-md'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Your Personal Digital Library. Discover, Curate, and Create.
                </motion.h4>

                <motion.div
                    className='flex gap-4 items-center justify-center mt-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/all-books' className='btn btn-primary rounded-lg font-bold transition-transform duration-100'>
                            Explore All Books
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/add-book' className='banner-button-add'>
                            Add a New Book
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;
