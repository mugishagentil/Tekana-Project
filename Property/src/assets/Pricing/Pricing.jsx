
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricing.css';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Reviews from '../Reviewss/Review.jsx';
import Pay from '../imagess/Pricing.png';
import { MdPayments } from "react-icons/md";
// import { useState } from 'react';
import React, { useState } from 'react';
// Popup
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Pricing(){
  const [showDivisions, setShowDivisions] = useState(false);
  const [showDivisions2, setShowDivisions2] = useState(false);

  const toggleDropdown = () => {
    setShowDivisions(!showDivisions);
  };
  const toggleDropdown2 = () => {
    setShowDivisions(!showDivisions2);
  };

  // This will keep track of which question is open
  const [activeIndex, setActiveIndex] = useState(null);

  // List of FAQs (can also be fetched from an API)
  const faqs = [
    {
      question: "What is the pricing structure for Tekana?",
      answer:
        "Tekana offers flexible pricing based on the number of properties you manage. Contact us for a personalized quote tailored to your property management needs.",
    },
    {
      question: "Do I need to pay a setup fee?",
      answer:
        "No, Tekana does not charge any setup fees. You only pay for the services you use.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, Tekana operates with complete transparency. All fees are clearly outlined in your service agreement, and there are no hidden charges.",
    },
    {
      question: "Can I get a discount for managing multiple properties?",
      answer:
        "Yes, we offer discounts for clients managing multiple properties. The more properties you manage, the lower your per-property cost. Reach out for more details.",
    },
  ];

  // Toggle the selected FAQ index
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return(
        <>
        <Header/>
        <div className="Price-Content">
            <h1 className="Simple slide-right">Simple. Powerful. <span style={{color: '#4b48ac'}}>Free</span></h1>
            <img src={Pay} alt="" className='Pricing'/>
        <div className="Pricing-Icons">
        <div className="left-icons" style={{display: 'flex'}}>
            <MdPayments className='myIcon' style={{color: '#4b48ac'}}/>
            <p style={{marginTop: '-2px'}} className='Setup Block'>No Setup Feee</p>
        </div>
        <div className="left-icons" style={{display: 'flex'}}>
            <MdPayments className='myIcon'  style={{color: '#4b48ac'}}/>
            <p style={{marginTop: '-2px'}} className='Setup Block'>No Monthly Fee</p>
        </div>
        <div className="left-icons" style={{display: 'flex'}}>
            <MdPayments className='myIcon'  style={{color: '#4b48ac'}}/>
            <p style={{marginTop: '-2px'}} className='Setup   Block'>No Contract</p>
        </div>
        </div>
        <p className='Every-Feature Block' style={{marginBottom: '50px'}}>Every Feature listed below is included in your <br></br> <span className='span-Feature'>Appartment account at absolutely no cost to you.</span></p>
        </div> <br />
       {/* Dropdown-Pricing */}
       {/* FAQ */}
       <div className="faq-container">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
    <Popup/>    
    <Reviews/>
    <Footer/>
        </>
    )
}
export default Pricing