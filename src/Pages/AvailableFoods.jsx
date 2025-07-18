import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { AuthContext } from '../Contexts/AuthContext';

const AvailableFoods = () => {
  const { user } = use(AuthContext);
  const [allFoods, setAllFoods] = useState([]);
  // const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    // Fetch available foods
    const config = {};

    if (user?.accessToken) {
      config.headers = {
        Authorization: `Bearer ${user.accessToken}`
      };
    }

    axios.get("http://localhost:3000/all-foods", config)
      .then(res => setAllFoods(res.data))
      .catch(err => {
        console.error("Failed to fetch foods:", err);
      });

    // Fetch user-specific requests
    // if (user?.accessToken) {
    //   axios.get("http://localhost:3000/my-requests", {
    //     headers: {
    //       Authorization: `Bearer ${user.accessToken}`
    //     }
    //   })
    //     .then(res => setUserRequests(res.data));
    // }
  }, [user]);

  // Get food IDs the user has already requested
  // const requestedFoodIds = new Set(userRequests.map(req => req.food_id));

  return (
    <div className='bg-gray-100'>
      <div className='max-w-screen-xl mx-auto px-5 lg:px-0 py-10'>
        <h1 className='text-4xl lg:text-5xl font-bold text-black mb-7'>All Available Foods</h1>
        <div className='grid lg:grid-cols-3 gap-5'>
          {allFoods.map(food => (
            <FoodCard
              key={food._id}
              food={food}
            // requested={requestedFoodIds.has(food._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
