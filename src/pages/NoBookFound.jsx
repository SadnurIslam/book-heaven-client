import React from 'react';
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const NoBookFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
            <div className=" rounded-2xl shadow-lg p-8 text-center max-w-md">
                <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                <h1 className="text-2xl font-bold  mb-2">No Book Found</h1>
                <p className="opacity-70 mb-6">
                    Oops! The book you are looking for does not exist. It might have been removed or the URL is incorrect.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NoBookFound;