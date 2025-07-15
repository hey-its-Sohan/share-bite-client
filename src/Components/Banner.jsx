import React from 'react';
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex items-center py-7'>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat id fugit obcaecati sunt nam laboriosam eius! Voluptatum perferendis quas ipsam!</h1>
        <div>
          <img className='w-96' src={banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;