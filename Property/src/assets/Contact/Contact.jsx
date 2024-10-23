
import Header from "../Header/Header.jsx";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

import React, { useState } from 'react';
import './Contact.css'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
     <Header />
      <div className="About">
        <h1 className="myTitle" style={{fontSize: '50px'}}>Contact Us</h1>
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}} id="myParagraph">
        We’re here to help you with any inquiries or support you may need regarding your property management experience. Whether you're a landlord, property manager, or tenant, Tekana is committed to providing timely assistance.
        </p>
      </div>
      <div className="link">
        <Link to="/" className="myLink">
          Home
        </Link>
        <p style={{ margin: "0 10px 0 10px" }}>/</p>
        <p className="myAbout">Contact</p>
      </div>
    <div className="contact-page">

      <div className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>We're here to help! Reach out to us for any inquiries or support.</p>
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><FaMapMarkerAlt /> Address: Kigali, Kacyiro</p>
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><FaPhone /> Phone: +250 798 814 109</p>
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><FaEnvelope /> Email: support@tekana.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
