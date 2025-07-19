import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { AuthContext } from '../Contexts/AuthContext';
import { Search } from 'lucide-react';

const AvailableFoods = () => {
  const { user, loading } = use(AuthContext);
  const [allFoods, setAllFoods] = useState([]);
  const [searchedFoods, setSearchedFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isThreeCol, setIsThreeCol] = useState(true);

  useEffect(() => {
    const config = {};

    if (user?.accessToken) {
      config.headers = {
        Authorization: `Bearer ${user.accessToken}`
      };
    }

    axios.get("https://sharebite-server-five.vercel.app/all-foods", config)
      .then(res => {
        setAllFoods(res.data);
        setSearchedFoods(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch foods:", err);
      });
  }, [user, loading]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);

    const filtered = allFoods.filter(food => {
      const name = (food.food_name || '').toLowerCase();
      return queryWords.every(word => name.includes(word));
    });

    setSearchedFoods(filtered);
  };

  const toggleLayout = () => {
    setIsThreeCol(prev => !prev);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='max-w-screen-xl mx-auto px-5 lg:px-0 py-10'>
        <div className=' mb-6'>
          <h1 className='text-4xl lg:text-5xl font-bold text-black'>All Available Foods</h1>

        </div>

        <div className='flex items-center justify-between mb-6 gap-4 flex-wrap'>
          <div className='flex gap-3 items-center flex-grow'>
            <h3 className='text-primary text-xl font-bold whitespace-nowrap'>Search Food:</h3>
            <div className="input input-bordered flex items-center gap-2 w-full max-w-md">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Search food by name"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          <button className="btn btn-outline btn-primary whitespace-nowrap" onClick={toggleLayout}>
            Change Layout
          </button>
        </div>

        {searchedFoods.length > 0 ? (
          <div className={`grid ${isThreeCol ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
            {searchedFoods.map(food => (
              <FoodCard
                key={food._id}
                food={food}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-4xl font-semibold text-accent py-20">
            No food found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
