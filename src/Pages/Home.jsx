import React from 'react';

import { Outlet } from 'react-router';

import Banner from '../Components/Banner';
import Featured from '../Components/Featured';

const Home = () => {
  return (
    <div className='bg-gray-100'>


      <Banner></Banner>
      <Featured></Featured>

    </div>
  );
};

export default Home;