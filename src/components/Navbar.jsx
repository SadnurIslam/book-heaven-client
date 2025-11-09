import React from 'react';
import { MdLocalLibrary } from "react-icons/md";
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/all-books'>All Books</NavLink>
        <NavLink to='/add-book'>Add Book</NavLink>
        <NavLink to='/my-books'>My Books</NavLink>
    </>

    const userLinks = <>
        <Link to='/register' className='btn btn-primary font-bold rounded-lg px-5'>Register</Link>
        <Link to='/login' className='btn btn-soft hover:bg-[#41454D] font-bold rounded-lg px-5'>Login</Link>
    </>

    return (
        <div className='flex items-center justify-between py-4 border-b border-gray-700'>
            <div>
                <Link to='/' className='flex items-center gap-2 font-bold text-2xl'>
                    <MdLocalLibrary size={40} color='#1754CF'></MdLocalLibrary>
                    <span>The Book Haven</span>
                </Link>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex items-center justify-end gap-6'>
                    {navLinks}
                </div>
                <div className='flex items-center justify-end gap-4'>
                    {userLinks}
                </div>
            </div>
        </div>
    );
};

export default Navbar;