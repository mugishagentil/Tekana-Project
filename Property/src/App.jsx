import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './assets/ScrollToTop/ScrollToTop.jsx';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/OnlineRent" element={<OnlineRent />} />
        <Route path="/Residential" element={<Residential />} />
        <Route path="/Renter" element={<Renter />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/privecy" element={<Privecy />} />
        <Route path="/property" element={<Property />} />
        <Route path="/student" element={<Student />} />
        <Route path="/Parking" element={<Parking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
