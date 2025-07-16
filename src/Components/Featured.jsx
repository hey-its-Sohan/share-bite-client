import React from 'react';

const Featured = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-10 px-5 lg:px-0'>
      <h1 className='text-4xl lg:text-5xl font-bold text-dark mb-7'>Featured Foods</h1>
      <div className='my-16'>foods</div>
      <button className='btn btn-primary mb-7 text-white'>Show All</button>
    </div>
  );
};

export default Featured;