import React from 'react';

import { Outlet } from 'react-router';

import Banner from '../Components/Banner';

const Home = () => {
  return (
    <div className='bg-gray-100'>


      <Banner></Banner>

    </div>
  );
};

export default Home;