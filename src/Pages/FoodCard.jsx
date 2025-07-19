// FoodCard.jsx
import React from 'react';
import { Link } from 'react-router';
import { MapPin, Clock3, Utensils } from 'lucide-react';

const FoodCard = ({ food }) => {
  const { _id, food_name, food_image, quantity, location, expiry } = food;

  return (
    <div className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <figure>
        <img src={food_image} alt={name} className="w-full skeleton h-56 object-cover" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-dark text-lg">{food_name}</h2>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <MapPin className='text-primary' size={16} /> {location}
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <Utensils className='text-primary' size={16} /> Quantity: {quantity}
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <Clock3 className='text-primary' size={16} /> Expiry: {expiry}
        </p>

        <div className="card-actions mt-4">
          <Link to={`/food-details/${_id}`}>
            <button className="btn btn-sm btn-primary text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
