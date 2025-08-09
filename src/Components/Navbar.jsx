import React, { use } from 'react';
import logo from '../assets/logo1.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import userProfile from '../assets/userProfile.png';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
      })
      .catch(error => {
        console.log(error.message);
      })
  }

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
                <NavLink to={'/'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
                }><li className='text-lg px-2'>Home</li></NavLink>
                <NavLink to={'/available-foods'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
                }><li className='text-lg px-2'>Available Foods</li></NavLink>
                <NavLink to={'/add-food'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
                }><li className='text-lg px-2'>Add Food</li></NavLink>
                <NavLink to={'/my-foods'} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
                }><li className='text-lg px-2'>My Foods</li></NavLink>
                <NavLink to={"/requested-food"} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
                }><li className='text-lg px-2'>My Request</li></NavLink>
              </ul>
            </div>
            <div>
              <NavLink to={'/'}>
                <img
                  className='w-48'
                  src={logo} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex" >
            <ul className="menu menu-horizontal px-1 flex gap-4">
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
              <NavLink to={"#impact"} className={({ isActive }) => isActive ? " border-b-2 border-primary text-primary pb-1 font-bold" : "font-normal"
              }><li className='text-lg '>Impact</li></NavLink>

            </ul>
          </div>
          {
            user ? <div className='flex items-center navbar-end'>
              <button onClick={handleSignOut} className='btn btn-primary text-white mr-2'>Logout</button>
              <div className='avatar'>
                <div className="w-12 rounded-full">
                  <img
                    alt="User Profile IMG"
                    src={user.photoURL || userProfile} />
                </div>
              </div>
            </div> : <div className="navbar-end">
              <NavLink to={'/login'}><button className='btn btn-primary text-white mr-2'>Login</button></NavLink>
              <NavLink to={'/sign-up'}><button className='btn text-white hover:bg-[#9dc66e] bg-[#a9d872]'>Sign Up</button></NavLink>
            </div>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;