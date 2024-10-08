import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollToTop from './assets/ScrollToTop.jsx'; // Import ScrollToTop

import HomePage from './assets/Home/HomePage.jsx';
import Login from './assets/Form/Signin.jsx';
import Signup from './assets/Form/Signup.jsx';
import OnlineRent from './assets/Online/Component.jsx';
import Residential from './assets/Residential-Page/Residential.jsx';
import Renter from './assets/Rental-Page/Rental.jsx';
import Pricing from './assets/Pricing/Pricing.jsx';
import Commercial from './assets/Commercial/Commercial.jsx';
import Apartment from './assets/Apartment/Apartment.jsx';
import Maintenance from './assets/Maintenance/Maintenance.jsx';
import Expenses from './assets/Expenses/Expenses.jsx';
import Tenant from './assets/Tenant-Communication/Communication.jsx';
import Credit from './assets/Tenant-Credit/Tenant.jsx';
import Privecy from './assets/Privecy/Privecy.jsx';
import Property from './assets/Properties/Property.jsx';
import Student from './assets/Student/Student.jsx';
import Parking from './assets/Parking/Parking.jsx';
import About from './assets/AboutUs-Page/Aboutus.jsx';
import Contact from './assets/Contact/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/OnlineRent', element: <OnlineRent /> },
  { path: '/Residential', element: <Residential /> },
  { path: '/Renter', element: <Renter /> },
  { path: '/Pricing', element: <Pricing /> },
  { path: '/commercial', element: <Commercial /> },
  { path: '/apartment', element: <Apartment /> },
  { path: '/maintenance', element: <Maintenance /> },
  { path: '/expenses', element: <Expenses /> },
  { path: '/tenant', element: <Tenant /> },
  { path: '/credit', element: <Credit /> },
  { path: '/privecy', element: <Privecy /> },
  { path: '/property', element: <Property /> },
  { path: '/student', element: <Student /> },
  { path: '/Parking', element: <Parking /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ScrollToTop component is wrapped around the router */}
    <RouterProvider router={router}>
    <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);




