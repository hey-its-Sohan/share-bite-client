import React from 'react';

const AddFood = () => {
  return (
    <div className='bg-gray-100 py-7'>
      <div className="max-w-screen-xl mx-auto my-10 bg-white shadow-md p-7">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-3">Add Food</h1>
          <p className="text-gray-600">Fill out the form below to share surplus food with the community.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-medium">Food Name</label>
              <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter Food Name" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Food Image URL</label>
              <input type="text" name="food_image" className="input input-bordered w-full" placeholder="Image URL" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Food Quantity</label>
              <input type="text" name="quantity" className="input input-bordered w-full" placeholder="No. of Quantity" />
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
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Pickup Location" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Expiry Date & Time</label>
              <input type="datetime-local" name="expiry" className="input input-bordered w-full" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Additional Notes</label>
              <input type="text" name="notes" className="input input-bordered w-full" placeholder="Any special info" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Donor Name</label>
              <input type="text" name="donor_name" className="input input-bordered w-full" placeholder="Your Name" />
            </div>

            <div className="form-control">
              <label className="label font-medium">Donor Email</label>
              <input type="email" name="email" className="input input-bordered w-full" placeholder="Your Email" />
            </div>
            <div className="form-control">
              <label className="label font-medium">Donor Image URL</label>
              <input type="text" name="donor_img" className="input input-bordered w-full" placeholder="Profile Photo URL" />
            </div>
          </div>



          <button type="submit" className="btn btn-primary w-full mt-6 text-white text-lg">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
