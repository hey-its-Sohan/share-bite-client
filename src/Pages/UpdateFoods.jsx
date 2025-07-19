import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const UpdateFoods = () => {

  const { user } = use(AuthContext)
  const foodData = useLoaderData()

  const handleUpdateFood = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const updatedPost = Object.fromEntries(formData.entries())

    // send data to DB
    axios.put(`http://localhost:3000/update-food/${foodData._id}`, updatedPost)
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Food Updated Successfully!",
            icon: "success",
            draggable: true
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update food.");
      });
  }


  return (
    <div className='bg-gray-100 py-7'>
      <div className="max-w-screen-xl mx-auto my-10 bg-white shadow-md p-7">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-3">Update Food</h1>
          <p className="text-gray-600">Modify the existing food information below.</p>
        </div>

        <form onSubmit={handleUpdateFood} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-medium">Food Name</label>
              <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter Food Name" defaultValue={foodData.food_name} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Food Image URL</label>
              <input type="text" name="food_image" className="input input-bordered w-full" placeholder="Image URL" defaultValue={foodData.food_image} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Food Quantity</label>
              <input type="text" name="quantity" className="input input-bordered w-full" placeholder="No. of Quantity" defaultValue={foodData.quantity} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Availability</label>
              <select defaultValue="Available" name="availability" className="select select-bordered w-full">
                <option disabled={true}>Choose Availability</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-medium">Pickup Location</label>
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Pickup Location" defaultValue={foodData.location} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Expiry Date & Time</label>
              <input type="datetime-local" name="expiry" className="input input-bordered w-full" defaultValue={foodData.expiry} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Additional Notes</label>
              <input type="text" name="notes" className="input input-bordered w-full" placeholder="Any special info" defaultValue={foodData.notes} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Donor Name</label>
              <input type="text" name="donor_name" className="input input-bordered w-full" placeholder="Your Name" readOnly defaultValue={foodData.name} />
            </div>

            <div className="form-control">
              <label className="label font-medium">Donor Email</label>
              <input type="email" name="email" className="input input-bordered w-full" placeholder="Your Email" readOnly defaultValue={user.email} />
            </div>
            <div className="form-control">
              <label className="label font-medium">Donor Image URL</label>
              <input type="text" name="donor_img" className="input input-bordered w-full" placeholder="Profile Photo URL" readOnly defaultValue={user.photoURL} />
            </div>
          </div>



          <button type="submit" className="btn btn-primary w-full mt-6 text-white text-lg">
            Update Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFoods;