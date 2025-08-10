import React, { use, useState } from 'react';
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import userProfile from '../assets/userProfile.png';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [active, setActive] = useState('home');

  const handleSignOut = () => {
    signOutUser().catch(error => console.log(error.message));
  };

  // Logged-out links (smooth scroll to sections)
  const loggedOutLinks = (
    <>
      <li
        onClick={() => setActive('home')}
        className={`text-lg ${active === 'home' ? 'border-b-2 border-primary text-primary pb-1 font-bold' : ''}`}
      >
        <a href="/">Home</a>
      </li>
      <li
        onClick={() => setActive('how-it-works')}
        className={`text-lg ${active === 'how-it-works' ? 'border-b-2 border-primary text-primary pb-1 font-bold' : ''}`}
      >
        <a href="#how-it-works">How It Works</a>
      </li>
      <li
        onClick={() => setActive('featured-foods')}
        className={`text-lg ${active === 'featured-foods' ? 'border-b-2 border-primary text-primary pb-1 font-bold' : ''}`}
      >
        <a href="#featured-foods">Featured Foods</a>
      </li>
      <li
        onClick={() => setActive('impact')}
        className={`text-lg ${active === 'impact' ? 'border-b-2 border-primary text-primary pb-1 font-bold' : ''}`}
      >
        <a href="#impact">Impact</a>
      </li>
      <li
        onClick={() => setActive('faq')}
        className={`text-lg ${active === 'faq' ? 'border-b-2 border-primary text-primary pb-1 font-bold' : ''}`}
      >
        <a href="#faq">FAQ</a>
      </li>
    </>
  );

  // Logged-in links (routes)
  const loggedInLinks = (
    <>
      <NavLink to={'/'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
      }><li className='text-lg '>Home</li></NavLink>
      <NavLink to={'/available-foods'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
      }><li className='text-lg '>Available Foods</li></NavLink>
      <NavLink to={'/add-food'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
      }><li className='text-lg '>Add Food</li></NavLink>
      <NavLink to={'/my-foods'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
      }><li className='text-lg '>My Foods</li></NavLink>
      <NavLink to={"/requested-food"} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
      }><li className='text-lg '>My Request</li></NavLink>

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
