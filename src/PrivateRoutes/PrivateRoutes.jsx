import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';


const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
  if (loading) {
    return <div className='max-w-screen-xl mx-auto text-center text-primary my-[400px]'><span className="loading loading-dots loading-xl"></span></div>
  }
  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRoutes;