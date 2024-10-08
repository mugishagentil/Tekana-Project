import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './assets/Home/HomePage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './assets/Home/HomePage.jsx'
import Login from './assets/Form/Signin.jsx'
import Signup from './assets/Form/Signup.jsx'
import OnlineRent from './assets/Online/Component.jsx'
import Residential from './assets/Residential-Page/Residential.jsx'
import Renter from './assets/Rental-Page/Rental.jsx'
import Pricing from './assets/Pricing/Pricing.jsx'


const router = createBrowserRouter([
  {path: '/', element: < HomePage />},
  {path: '/login', element: < Login />},
  {path: '/signup', element: < Signup />},
  {path: '/OnlineRent', element: < OnlineRent />},
  {path: '/Residential', element: < Residential />},
  {path: '/Renter', element: < Renter />},
  {path: '/Pricing', element: < Pricing />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)