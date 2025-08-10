import React, { use } from 'react';
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import userProfile from '../assets/userProfile.png';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser().catch(error => console.log(error.message));
  };

  // Logged-out links (smooth scroll to sections)
  const loggedOutLinks = (
    <>
      <a href="/" className="text-lg px-2">Home</a>
      <a href="#how-it-works" className="text-lg px-2">How It Works</a>
      <a href="#featured-foods" className="text-lg px-2">Featured Foods</a>
      <a href="#impact" className="text-lg px-2">Impact</a>
      <a href="#faq" className="text-lg px-2">FAQ</a>
    </>
  );

  // Logged-in links (routes)
  const loggedInLinks = (
    <>
      <NavLink to="/" className="text-lg px-2">Home</NavLink>
      <NavLink to="/available-foods" className="text-lg px-2">Available Foods</NavLink>
      <NavLink to="/add-food" className="text-lg px-2">Add Food</NavLink>
      <NavLink to="/my-foods" className="text-lg px-2">My Foods</NavLink>
      <NavLink to="/requested-food" className="text-lg px-2">My Requests</NavLink>

    </>
  );

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">

          {/* Mobile Menu Button */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {user ? loggedInLinks : loggedOutLinks}
              </ul>
            </div>

            {/* Logo */}
            <NavLink to="/" >
              <img src={logo} alt="Logo" className="w-38" />
            </NavLink>
          </div>

          {/* Large screen menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-4">
              {user ? loggedInLinks : loggedOutLinks}
            </ul>
          </div>

          {/* Profile Menu */}
          <div className="navbar-end">
            {user ? (
              <div className='flex items-center gap-3'>
                <h4 className='text-lg '>{user.displayName}</h4>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL || userProfile} alt="Profile" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><button onClick={handleSignOut}>Logout</button></li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <NavLink to="/sign-up" className="btn btn-primary text-white mr-2">Sign Up</NavLink>
                <NavLink to="/login" className="btn btn-primary btn-outline">Log In</NavLink>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
