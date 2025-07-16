import React from 'react';
import { motion } from 'framer-motion';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg'; // Optional second image

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 lg:px-0  py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center ">

        {/* Left: Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
            Share Surplus. Spread Kindness.
          </h1>
          <p className="text-dark text-lg max-w-md">
            Join our food-sharing movement and help reduce waste in your community. One plate at a time, one person at a time.
          </p>
          <button className="btn btn-primary mt-6 text-white">Get Started</button>
        </motion.div>

        {/* Right: Floating Animated Images */}
        <motion.div
          className="flex-1 flex justify-center gap-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={banner1}
            alt="banner1"
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.img
            src={banner2}
            alt="banner2"
            className="w-48 h-48 object-cover rounded-xl shadow-lg hidden md:block"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
