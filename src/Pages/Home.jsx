import React from 'react';

import { Outlet } from 'react-router';

import Banner from '../Components/Banner';
import Featured from '../Components/Featured';
import Works from '../Components/Works';
import Testimonials from '../Components/Testimonials';
import Impact from '../Components/Impact';
import CTA from '../Components/CTA';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>


      <Banner></Banner>
      <Featured></Featured>
      <Works></Works>
      <Impact></Impact>
      <Testimonials></Testimonials>
      <CTA></CTA>

    </div>
  );
};

export default Home;