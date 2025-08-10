import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FoodCard from '../Pages/FoodCard';
import { Link } from 'react-router';
import { MapPin, Clock3, Utensils } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    <div id="featured-foods" className='max-w-screen-xl mx-auto scroll-mt-14 py-16 px-5 lg:px-0'>
      <h1 className='text-4xl font-bold text-dark mb-10'>Featured Foods</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>

        {
          featuredFoods.map((food, index) => (
            <div key={food._id} >

              <div
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">

                <LazyLoadImage
                  src={food.food_image}
                  alt={food.food_name}
                  effect="blur"
                  threshold={100}
                  visibleByDefault={false}
                  className="w-full h-64 object-cover"
                />

                {/* <figure>
        <img loading="lazy" src={food_image} alt={name} className="w-full  h-56 object-cover" />
      </figure> */}
                <div className="card-body space-y-2">
                  <h2 className="card-title text-dark text-lg">{food.food_name}</h2>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className='text-primary' size={16} /> {food.location}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Utensils className='text-primary' size={16} /> Quantity: {food.quantity}
                  </p>

                  <div className="card-actions mt-4">
                    <Link to={`/food-details/${food._id}`}>
                      <button className="btn btn-sm btn-primary text-white">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
