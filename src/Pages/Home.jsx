import React from 'react';

import { Outlet } from 'react-router';

import Banner from '../Components/Banner';
import Featured from '../Components/Featured';
import Works from '../Components/Works';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>


      <Banner></Banner>
      <Featured></Featured>
      <Works></Works>
      <Testimonials></Testimonials>

    </div>
  );
};

export default Home;