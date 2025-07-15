import React from 'react';
import logo from '../assets/logo1.png'

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
                <li>Item 1</li>
                <li>Parent</li>
                <li>Item 3</li>
              </ul>
            </div>
            <div>
              <img
                className='w-48'
                src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex" >
            <ul className="menu menu-horizontal px-1 flex gap-3">
              <li className='text-xl '>Item 1</li>
              <li className='text-xl '>Parent</li>
              <li className='text-xl '>Item 3</li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className='btn bg-secondary mr-2'>Login</button>
            <button className='btn bg-[#AED581]'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;