import React from 'react';

import { Outlet } from 'react-router';

import Banner from '../Components/Banner';
import Featured from '../Components/Featured';
import Works from '../Components/Works';
import Testimonials from '../Components/Testimonials';
import Impact from '../Components/Impact';
import CTA from '../Components/CTA';
import FAQ from '../Components/FAQ';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen mt-16' >


      <Banner></Banner>
      <Works></Works>
      <Featured></Featured>
      <Impact></Impact>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <FAQ></FAQ>

    </div>
  );
};

export default Home;