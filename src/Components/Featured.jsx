import axios from 'axios';
import React, { useState } from 'react';
import FoodCard from '../Pages/FoodCard';
import { Link } from 'react-router';

const Featured = () => {
  const [featuredFoods, setFeaturedFoods] = useState([])
  axios.get("http://localhost:3000/featured-foods")
    .then(res => { setFeaturedFoods(res.data) })
  return (
    <div className='max-w-screen-xl mx-auto my-10 px-5 lg:px-0'>
      <h1 className='text-4xl lg:text-5xl font-bold text-dark mb-7'>Featured Foods</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          featuredFoods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
        }
      </div>
      <div className='text-center'>
        <Link to={"/available-foods"}><button className='btn btn-primary my-7 text-white'>Show All</button></Link>
      </div>
    </div>
  );
};

export default Featured;