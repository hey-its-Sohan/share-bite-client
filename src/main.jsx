import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />

  </StrictMode>,
)
