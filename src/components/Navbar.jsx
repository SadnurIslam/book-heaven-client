import React from 'react';
import { MdLocalLibrary } from "react-icons/md";
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/' className='text-navlink'>Home</NavLink>
        <NavLink to='/all-books' className='text-navlink '>All Books</NavLink>
        <NavLink to='/add-book' className='text-navlink'>Add Book</NavLink>
        <NavLink to='/my-books' className='text-navlink '>My Books</NavLink>
    </>

    const userLinks = <>
        <Link to='/register' className='my-button-primary'>Register</Link>
        <Link to='/login' className='my-button-secondary'>Login</Link>
    </>

    return (
        <div className='my-navbar'>
            <div>
                <Link to='/' className='flex items-center gap-2 font-bold text-2xl'>
                    <MdLocalLibrary size={40} className='logo-color'></MdLocalLibrary>
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