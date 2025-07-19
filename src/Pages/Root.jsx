import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../Contexts/AuthContext';

const Root = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center text-primary'>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  );
};

export default Root;