import React from 'react';
import errorAnimation from '.././assets/Animations/Lonely 404.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='mx-auto max-w-screen-xl flex flex-col items-center justify-center min-h-screen'>
      <Lottie
        animationData={errorAnimation}
        loop={true}
        className='md:w-1/2 mx-auto'
      />
      <Link to={'/'}><button className='btn btn-primary text-lg text-white'>Back to home</button></Link>

    </div>
  );
};

export default Error;