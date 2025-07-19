import React from 'react';
import errorAnimation from '.././assets/Animations/Lonely 404.json'
import Lottie from 'lottie-react';

const Error = () => {
  return (
    <div className='mx-auto max-w-screen-xl flex min-h-screen'>
      <Lottie
        animationData={errorAnimation}
        loop={true}
        className='md:w-1/2 mx-auto'
      />

    </div>
  );
};

export default Error;