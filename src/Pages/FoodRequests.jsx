import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { Clock3, MapPin, CalendarDays, User } from 'lucide-react';


const FoodRequests = () => {
  const { user, loading } = use(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user || loading) return;
    axios.get("https://sharebite-server-five.vercel.app/my-requests", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    }).then(res => {
      setRequests(res.data);
    });
  }, [user, loading]);
  console.log(requests);

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-10 text-dark">My Food Requests</h2>

        {requests.length > 0 ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((req, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-primary">
              <h3 className="text-2xl font-semibold text-primary mb-2">{req.food_name}</h3>
              <p className="text-sm text-gray-500 mb-2">Request ID: {req._id}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <User size={18} /> Donor: <span className="font-medium">{req.name}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} /> Location: <span className="font-medium">{req.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CalendarDays size={18} /> Expires: <span className="font-medium">{req.expiry}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock3 size={18} /> Requested At: <span className="font-medium">{req.request_date}</span>
                </li>
              </ul>
              {req.notes && (
                <p className="mt-4 text-gray-600 text-sm italic">Note: {req.notes}</p>
              )}
            </div>
          ))}
        </div> :
          <div>
            <h1 className='text-accent text-2xl'>No request found</h1>
          </div>}


      </div>
    </div>
  );
};

export default FoodRequests;
