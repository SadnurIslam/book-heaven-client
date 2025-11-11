import React, { use } from 'react';
import { MdLocalLibrary } from "react-icons/md";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, loading, signOutUser } = use(AuthContext);


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.info(`Bye Bye! ${user.displayName}`, { autoClose: 1000 });
            })
            .catch(error => {
                toast.error('Sign out failed: ' + error.code, { autoClose: 2000 });
            });
    }

    const navLinks = <>
        <NavLink to='/' className='text-navlink'>Home</NavLink>
        <NavLink to='/all-books' className='text-navlink '>All Books</NavLink>
        <NavLink to='/add-book' className='text-navlink'>Add Book</NavLink>
        <NavLink to='/my-books' className='text-navlink '>My Books</NavLink>
        <ThemeToggle></ThemeToggle>
    </>

    const userLinks = <>
        <Link to='/register' className='my-button-primary'>Register</Link>
        <Link to='/login' className='my-button-secondary'>Login</Link>
    </>

    const loggedInUserLinks = <>
        <div className='h-10 w-10'>
            <a
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place='bottom'
            >
                <img className='rounded-full' src={user?.photoURL} alt={user?.displayName} />
            </a>
            
        </div>
        <button onClick={handleSignOut} className='my-button-secondary'>Logout</button>
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
                    {
                        loading ? <span>Loading...</span> :
                            (
                                user ? loggedInUserLinks : userLinks
                            )
                    }
                </div>
            </div>
            <Tooltip id="user-tooltip" className="bg-neutral-800! text-white! rounded-md! px-3! py-1! shadow-lg!"/>
        </div>
    );
};

export default Navbar;