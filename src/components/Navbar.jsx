import React, { useState, useEffect, useRef, useContext } from 'react';
import { MdLocalLibrary, MdMenu, MdClose } from "react-icons/md";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import { Tooltip } from 'react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import toast from "react-hot-toast";


const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success(`Bye Bye! ${user.displayName}`, { autoClose: 1000 });
      })
      .catch(error => {
        toast.error('Sign out failed: ' + error.code, { autoClose: 2000 });
      });
  };

  const navLinks = (
    <>
      <NavLink to='/' className='text-navlink' onClick={() => setMenuOpen(false)}>Home</NavLink>
      <NavLink to='/all-books' className='text-navlink' onClick={() => setMenuOpen(false)}>All Books</NavLink>
      {user && (
        <>
          <NavLink to='/add-book' className='text-navlink' onClick={() => setMenuOpen(false)}>Add Book</NavLink>
          <NavLink to='/my-books' className='text-navlink' onClick={() => setMenuOpen(false)}>My Books</NavLink>
        </>
      )}
    </>
  );

  const userLinks = (
    <>
      <Link to='/register' className='my-button-primary text-sm' onClick={() => setMenuOpen(false)}>Register</Link>
      <Link to='/login' className='my-button-secondary text-sm' onClick={() => setMenuOpen(false)}>Login</Link>
    </>
  );

  const loggedInUserLinks = (
    <div className='flex items-center gap-3'>
      <div className='h-10 w-10'>
        <a
          data-tooltip-id="user-tooltip"
          data-tooltip-content={user?.displayName}
          data-tooltip-place='bottom'
        >
          <img className='h-full w-full rounded-full ring-2 ring-blue-500/50' src={user?.photoURL} alt={user?.displayName} />
        </a>
      </div>
      <button onClick={handleSignOut} className='my-button-secondary text-sm'>Logout</button>
    </div>
  );



  return (
    <header className='my-navbar sticky top-0 z-50 bg-base-100 shadow-md px-4 md:px-8 py-2 flex justify-between items-center'>

      <Link to='/' className='flex items-center gap-2 font-bold text-xl md:text-2xl'>
        <MdLocalLibrary size={32} className='logo-color' />
        <span>The Book Haven</span>
      </Link>

      <nav className='hidden lg:flex items-center gap-8'>
        {navLinks}
        <ThemeToggle /> 
        {
          loading ? (
            <div className='flex items-center gap-5'>
              <div className='skeleton h-10 w-10 rounded-full'></div>
              <div className='skeleton w-16 btn rounded-md '></div>
            </div>
          ) : user ? loggedInUserLinks : userLinks

        }
      </nav>

      <button className='lg:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='absolute right-4 top-full mt-2 w-64 bg-base-100 shadow-lg rounded-lg flex flex-col gap-4 p-4 lg:hidden z-50'
          >
            <div className='flex flex-col gap-3'>
              {navLinks}
            </div>
            <div className='flex justify-between items-center mt-3'>
              <ThemeToggle /> 
              {user ? loggedInUserLinks : userLinks}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Tooltip id="user-tooltip" className="bg-gray-800! text-white! rounded-md! px-3! py-1! shadow-md" />
    </header>
  );
};

export default Navbar;
