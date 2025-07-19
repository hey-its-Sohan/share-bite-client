import React, { use, useState } from 'react';
import Lottie from "lottie-react";
import LoginAnimation from "../assets/Animations/login page.json";
import { AuthContext } from '../Contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {

  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      setError('');
      setLoading(true);

      await signInUser(email, password);

      toast.success('Login Successfully.');
      navigate(location?.state || '/');

    } catch (error) {
      console.error("Error signing in:", error.code, error.message);
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      toast.success('Login Successful!');
      navigate(location?.state || '/');
    } catch (error) {
      console.error("Google login error:", error);
      toast.error('Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Animation Section */}
        <div className="p-8 hidden lg:flex justify-center">
          <Lottie animationData={LoginAnimation} loop={true} className="w-full max-w-md" />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-6">Welcome Back 👋</h2>
          <form onSubmit={handleSignIn} className="space-y-4">

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name='email'
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="label font-medium">Password</label>
              <input
                type="password"
                name='password'
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="text-primary text-sm font-medium mt-1">
                {error}
              </div>
            )}

            <div className="text-right text-sm">
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>

            <button
              type="submit"
              className={`btn btn-primary text-white w-full mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="divider text-sm text-slate-400 my-4">Or</div>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className={`btn w-full btn-outline btn-primary flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-center text-sm mt-2">
              Don't have an account?
              <a href="/sign-up" className="link link-primary ml-1">Sign Up here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
