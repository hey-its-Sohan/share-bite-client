import axios from 'axios';
import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { div } from 'framer-motion/client';

const AvailableFoods = () => {

  const [allFoods, setAllFoods] = useState([])
  axios.get("http://localhost:3000/all-foods").then(res => setAllFoods(res.data))

  return (
    <div className='bg-gray-100'>
      <div className='max-w-screen-xl mx-auto px-5 lg:px-0  py-10'>
        <h1 className='text-4xl lg:text-5xl font-bold text-black mb-7'>All Available Foods</h1>
        <div className='grid lg:grid-cols-3 gap-5'>
          {
            allFoods.map(food => <FoodCard food={food}></FoodCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;