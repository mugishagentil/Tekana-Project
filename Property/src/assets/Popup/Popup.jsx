import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Popup.css'

function Popup() {
  const [scrollCount, setScrollCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleScroll = () => {
    setScrollCount(prev => prev + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (scrollCount >= 100) {
      setShowPopup(true);
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password, number, name, location);
    setShowPopup(false); 
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'popup-container') {
      setShowPopup(false);
    }
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container"  onClick={handleOutsideClick}>
          <div className="popup-box" id='pop-div'>
            <div className="my-PopupContent">
              <h4 style={{ color: '#4b48ac' }} id='why-property'>Hi!. I'm Tekana Property Management!😎</h4>
              <p id='property-managers'>See why property managers and Tenants love Tekana.</p>
              {/* Close button for mobile */}
              <button className="mobile-close-btn" onClick={handleCloseClick}>X</button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="input-group">
                <label htmlFor="text">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />  
              </div>
              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />  
              </div>
              {/* Location */}
              <div className="input-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  placeholder="City"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />  
              </div>
              {/* Number */}
              <div className="input-group">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="number"
                  id="number"
                  value={number}
                  placeholder="Enter Your Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              {/* Property Selector */}
              <div className="input-group">
                <Form.Select>
                  <option>Type Of Property</option>
                  <option>Apartment</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                  <option>Student Property</option>
                  <option>Parking</option>
                </Form.Select>
              </div>
              <button type="submit" className="login-btn">Ready! Get In Touch Now</button>
              <p className='No-Account2'>Have Account? <Link to='/signup' style={{ color: '#4b48ac' }}>Click here to Signin</Link></p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
