import React from 'react';
import Lottie from "lottie-react";
import SignupAnimation from "../assets/Animations/signUp.json"; // Replace with your animation

const Signup = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Animation */}
        <div className="p-8 hidden lg:flex justify-center">
          <Lottie animationData={SignupAnimation} loop={true} className="w-full max-w-md" />
        </div>

        {/* Signup Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-6">Create an Account</h2>
          <form className="space-y-4">
            <div>
              <label className="label font-medium">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your full name" />
            </div>
            <div>
              <label className="label font-medium">Email</label>
              <input type="email" className="input input-bordered w-full" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label font-medium">Photo URL</label>
              <input type="url" className="input input-bordered w-full" placeholder="https://example.com/photo.jpg" />
            </div>
            <div>
              <label className="label font-medium">Password</label>
              <input type="password" className="input input-bordered w-full" placeholder="Your secure password" />
            </div>
            <button className="btn btn-primary w-full mt-2">Sign Up</button>
            <p className="text-center text-sm mt-2">Already have an account?
              <a href="/login" className="link link-primary ml-1">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
