import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyFoods = () => {
  const { user, loading } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  console.log(myFoods);

  useEffect(() => {
    if (loading || !user) return;
    axios.get("http://localhost:3000/my-foods", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => {
        setMyFoods(res.data);
      });
  }, [user, loading]);

  const handleDeleteFood = (id) = {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://rent-buddy-server-six.vercel.app/details/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              // remainig List
              const remainigLists = myList.filter(list => list._id !== id)
              setMyList(remainigLists)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });


            }
          })
      }
    })

  }

  return (
    <div className='bg-gray-100'>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0 py-10 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-10 ">My Shared Foods</h2>
        <div className="overflow-x-auto border border-primary rounded-box shadow-md mb-20">
          <table className="table  ">
            <thead className="bg-white text-lg ">
              <tr className='border-primary'>
                <th></th>
                <th className="text-left text-primary">Food Name</th>
                <th className="text-left text-primary">Quantity</th>
                <th className="text-left text-primary">Location</th>
                <th className="text-left text-primary">Actions</th>
              </tr>
            </thead>
            <tbody className=' bg-white'>
              {myFoods.map(food => (
                <tr key={food._id} className="hover:bg-base-100 ">
                  <td><img className="size-12 rounded-box" src={food.food_image} /></td>
                  <td>{food.food_name}</td>
                  <td>{food.quantity}</td>
                  <td>{food.location}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link to={`/update-food/${food._id}`}><button className="btn btn-sm btn-outline btn-primary flex items-center gap-1">
                        <Pencil size={16} /> Update
                      </button></Link>
                      <Link>
                        <button onClick={() => handleDeleteFood(food._id)} className="btn btn-sm btn-outline btn-error flex items-center gap-1">
                          <Trash2 size={16} /> Delete
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoods;
