import React from 'react';
import logo from '../assets/logo1.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li className='text-lg '>Home</li>
                <li className='text-lg '>Available Foods</li>
                <li className='text-lg '>Add Food</li>
                <li className='text-lg '>Manage Foods</li>
                <li className='text-lg '>My Request</li>
              </ul>
            </div>
            <div>
              <img
                className='w-48'
                src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex" >
            <ul className="menu menu-horizontal px-1 flex gap-4">
              <li className='text-lg '>Home</li>
              <li className='text-lg '>Available Foods</li>
              <li className='text-lg '>Add Food</li>
              <li className='text-lg '>Manage Foods</li>
              <li className='text-lg '>My Request</li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink to={'/login'}><button className='btn bg-secondary mr-2'>Login</button></NavLink>
            <NavLink to={'/sign-up'}><button className='btn bg-[#AED581]'>Sign Up</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;