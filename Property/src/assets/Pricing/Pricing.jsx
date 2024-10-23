
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricing.css';
import Footer from '../Footer/Footer.jsx';
import FAQ from '../FAQ/Faq.jsx'
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const [isExpandedThree, setIsExpandedThree] = useState(false);
  const [isExpandedFour, setIsExpandedFour] = useState(false);
  const [isExpandedFive, setIsExpandedFive] = useState(false);
  const [isExpandedSix, setIsExpandedSix] = useState(false);

  // Dropdown for pricing one
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
    // Dropdown for pricing Two
  const toggleExpandTwo= () => {
    setIsExpandedTwo(!isExpandedTwo);
  };
    // Dropdown for pricing Three
  const toggleExpandThree = () => {
    setIsExpandedThree(!isExpandedThree);
  };
    // Dropdown for pricing Four
  const toggleExpandFour = () => {
    setIsExpandedFour(!isExpandedFour);
  };
    // Dropdown for pricing Five
  const toggleExpandFive = () => {
    setIsExpandedFive(!isExpandedFive);
  };
    // Dropdown for pricing Five
    const toggleExpandSix = () => {
      setIsExpandedSix(!isExpandedSix);
    };
    return(
        <>
        <Header/>
        <div className="Price-Content">
        <h2><span style={{color: '#4b48ac'}}>Reduce Cost</span> With Pre- <br></br>negotiated, transparent pricing</h2>
        <div className="Price-Content-Par">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>We don't charge setup, montly, platform, or MID Fees. There's no need for you  to make an minimum commitments, and we don't spring any suprises</p>
        </div>
        </div> 
       {/* Dropdown-Pricing */}
       {/* Dropdown Title */}
       <div id="support-container">
      <div id="support-header" >
        <div id="support-costs">
          <p id='Free-One'>Your Cost</p>
          <p id='Free-Two'>Your Tenant’s Cost</p>
        </div>
      </div>
    </div>

       {/* Dropdown-One */}
       <div className="support-container" >
      <div className="support-header" onClick={toggleExpand}>
        <h2>Direct, Personal Support</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="support-details">
          <div className="support-item">
            <p>Dedicated Account Representative</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Phone and Email Support</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Convenient In-App Help Resources</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>
    
    {/* Dropdown-Two */}
    <div className="support-container" >
      <div className="support-header" onClick={toggleExpandTwo}>
        <h2>Late Fees & Invoice Automation</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpandedTwo && (
        <div className="support-details">
          <div className="support-item">
            <p>Custom, Recurring Invoices</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Automated Late Fee Settings</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Receipt and Image Storing</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>

    {/* Dropdown-Three */}
    <div className="support-container" >
      <div className="support-header" onClick={toggleExpandThree}>
        <h2>Online Leasing & Document Storage</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpandedThree && (
        <div className="support-details">
          <div className="support-item">
            <p>Digital Signatures</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Unlimited File Storage and Sharing</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Online / Mobile Signing</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>

      {/* Dropdown-Four */}
      <div className="support-container" >
      <div className="support-header" onClick={toggleExpandFour}>
        <h2>Financial Tracking & Reportingt</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpandedFour && (
        <div className="support-details">
          <div className="support-item">
            <p>Bank Deposit History</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Dynamic Reporting</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Exportable Data</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>

       {/* Dropdown-Five */}
       <div className="support-container" >
      <div className="support-header" onClick={toggleExpandFive}>
        <h2>Communication & Messaging</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpandedFive && (
        <div className="support-details">
          <div className="support-item">
            <p>Tenant Communication Tools</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Automated Payment Reminders</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Email Templates and Archive</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>

      {/* Dropdown-Six */}
      <div className="support-container" >
      <div className="support-header" onClick={toggleExpandSix}>
        <h2>Work Order Tracking</h2>
        <div className="support-costs">
          <p>FREE</p>
          <p>FREE</p>
          <span>{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpandedSix && (
        <div className="support-details">
          <div className="support-item">
            <p>Tenant Maintenance Request Portal</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Picture / Video Upload</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
          <div className="support-item">
            <p>Ticket Forwarding</p>
            <span>&#10003;</span>
            <span>&#10003;</span>
          </div>
        </div>
      )}
    </div>
    {/* <Popup/>     */}
    {/* Asked Frequent Question */}
    <div className="Price-Content">
        <h2><span style={{color: '#4b48ac'}}>We're here to answer all </span> <br></br>your questions.</h2>
        <div className="Price-Content-Par">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>If you're new to Tekana or looking for property managment company, this section will help you learn more the platform, pricing and it features</p>
        </div>
        </div> 
    <FAQ />
    <Reviews/>
    <Footer/>
        </>
    )
}
export default Pricing