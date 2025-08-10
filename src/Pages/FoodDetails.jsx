import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const FoodDetails = () => {

  const { user } = use(AuthContext)
  const food = useLoaderData()
  const [note, setNote] = useState("");
  const [isRequested, setIsRequested] = useState(false);

  const handleRequest = () => {
    const requestData = {
      ...food,
      userEmail: user.email,
      request_date: new Date().toLocaleString(),
      availability: "Requested",
      notes: note
    }

    axios.post(`https://sharebite-server-five.vercel.app/requested-food`, requestData, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    })

    // axios.patch(`https://sharebite-server-five.vercel.app/update-availability/${food._id}`, {
    //   notes: note,
    //   availability: "Requested",
    // }, {
    //   headers: {
    //     Authorization: `Bearer ${user.accessToken}`
    //   }
    // });

    toast.success("Food requested successfully!");
    setIsRequested(true);
  }

  return (
    <div className='bg-gray-100 py-10'>
      <div className='w-10/12 md:w-2/3 mx-auto my-18 shadow-md'>
        <div className="bg-white  shadow-md flex items-center flex-col md:flex-row gap-6">
          <div className=' lg:w-2/3'>
            <img
              src={food.food_image}
              alt={food.food_image}
              className='w-full h-full object-cover'
            />
          </div>
          <div className="flex-1 space-y-2 px-4 mb-2">
            <h2 className="text-3xl font-semibold text-primary">{food.food_name}</h2>
            <p className='text-lg'><strong>Quantity:</strong> {food.quantity}</p>
            <p className='text-lg'><strong>Location:</strong> {food.location}</p>
            <p className='text-lg'><strong>Expires:</strong> {food.expiry}</p>
            <p className='text-lg'><strong>Donor:</strong> {food.name} ({food.email})</p>
            <p className="text-gray-600 italic text-lg">{food.notes}</p>

            {/* Request Modal Trigger */}
            {
              user ? <div>
                {isRequested ? (
                  <button className="btn btn-success mt-4" disabled>Requested</button>
                ) : (
                  <label htmlFor="request-modal" className="btn btn-primary text-white mt-4">Request Food</label>
                )}
              </div> : <div>
                <label disabled className="btn btn-primary text-white mt-4">Request Food</label>
                <p className='text-primary text-sm mt-2'>*Login to request food</p>
              </div>
            }


            {/* Modal */}
            <input type="checkbox" id="request-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box max-w-2xl">
                <h3 className="font-bold text-lg mb-4">Confirm Food Request</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" value={food.food_name} readOnly className="input input-bordered w-full" placeholder="Food Name" />
                  <input type="text" value={food.food_image} readOnly className="input input-bordered w-full" placeholder="Food Image" />
                  <input type="text" value={food._id} readOnly className="input input-bordered w-full" placeholder="Food ID" />
                  <input type="text" value={food.email} readOnly className="input input-bordered w-full" placeholder="Donor Email" />
                  <input type="text" value={food.name} readOnly className="input input-bordered w-full" placeholder="Donor Name" />
                  <input type="text" value={new Date().toLocaleString()} readOnly className="input input-bordered w-full" placeholder="Request Date" />
                  <input type="text" value={food.location} readOnly className="input input-bordered w-full" placeholder="Pickup Location" />
                  <input type="text" value={food.expiry} readOnly className="input input-bordered w-full" placeholder="Expiry Date" />
                </div>
                <textarea
                  className="textarea textarea-bordered w-full mt-4"
                  placeholder="Additional Notes"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
                <div className="modal-action">
                  <label htmlFor="request-modal" className="btn" onClick={handleRequest} >Request</label>
                  <label htmlFor="request-modal" className="btn btn-outline">Cancel</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;