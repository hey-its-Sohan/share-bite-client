import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FoodCard from '../Pages/FoodCard';
import { Link } from 'react-router';

const Featured = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sharebite-server-five.vercel.app/featured-foods")
      .then(res => {
        setFeaturedFoods(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching featured foods:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='max-w-screen-xl mx-auto text-center text-primary my-[400px]'><span className="loading loading-dots loading-xl"></span></div>
    );
  }

  return (
    <div className='max-w-screen-xl mx-auto my-10 px-5 lg:px-0'>
      <h1 className='text-4xl lg:text-5xl font-bold text-dark mb-7'>Featured Foods</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
          featuredFoods.map(food => (
            <FoodCard key={food._id} food={food} />
          ))
        }
      </div>
      <div className='text-center'>
        <Link to={"/available-foods"}>
          <button className='btn btn-primary my-7 text-white'>Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
