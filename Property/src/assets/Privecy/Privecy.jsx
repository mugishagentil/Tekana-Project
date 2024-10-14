import React, { useEffect } from "react";
import "./Privecy.css";
import { Link } from "react-router-dom";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function Privecy() {
  useEffect(() => {
    const privecyElement = document.querySelector(".privecy-content");
    privecyElement.classList.add("fade-in");
  }, []);

  return (
    <>
    <Header/>
      <div className="privecy">
        <Link to="/" className="logo-link">
          <h1 className="logo">TEKANA</h1>
        </Link>
        <h2 className="privacy-header">Privacy Policy</h2>
        <hr />
        <div className="privecy-content">
          <h5 className="HeaderOne">
          BY ACCESSING OR USING TEKANA SYSTEM, YOU AGREE TO THE COLLECTION, TRANSFER, MANAGEMENT, STORAGE, DISCLOSURE, AND OTHER USES OF YOUR INFORMATION (COLLECTIVELY REFERRED TO AS “USE OF YOUR INFORMATION”) AS OUTLINED IN THIS PRIVACY POLICY AND OUR TERMS OF USE, ACCESSIBLE HERE: <Link style={{color: '#4b48ac', textDecoration: 'none'}}>https://www.tekana.com/</Link>  IF YOU DO NOT, OR NO LONGER, AGREE WITH THIS PRIVACY POLICY OR OUR TERMS OF USE, YOU MAY NOT ACCESS OR USE OUR SERVICES. FOR USERS OF OUR PLATFORM, WE PROCESS PERSONAL DATA BASED ON THE LEGAL GROUNDS DETAILED IN THE SECTION TITLED “LEGAL BASIS FOR COLLECTION AND PROCESSING OF YOUR PERSONAL INFORMATION,” WHICH CAN BE FOUND IN THIS PRIVACY POLICY.
          </h5>
          <hr />
          <p style={{marginBottom: '200px'}}>
          At Tekana, the owner and operator of the Tekana System websites <Link style={{color: '#4b48ac', textDecoration: 'none'}}>https://www.tekana.com/</Link>  and the Tekana mobile application (the “App”), collectively referred to in this Privacy Policy as “Tekana,” “we,” “us,” or “our,” we prioritize the privacy and security of your personal information. We have implemented this Privacy Policy to describe how we collect, use, share, and safeguard information related to the users of our website and app (referred to as “user,” “you,” or “your”).

          We are committed to protecting your personal data and will not use or share it except as described in this Privacy Policy. This document explains the types of personal data we collect, the purposes for which we use the data, how we handle this information, and your rights concerning your personal data.

          Information Collection & Usage

          Tekana collects data when you use our websites or app to access our services, including property management tools for landlords, property managers, and tenants. This data collection extends to other interactions and communications you have with us. The term “Services” encompasses all our online products, tools, applications, email notifications, and other channels through which you interact with Tekana.

          Your Information & Data Handling

          For the purposes of this Privacy Policy, “Your Information” or “Personal Data” refers to any information that may identify you personally, including confidential or sensitive data, such as personally identifiable information (“PII”) and financial information. PII allows us to determine the identity of a specific person, while sensitive data may include comments, content, and other information you provide voluntarily through the Tekana platform.

          Data Controller

          Tekana is the Data Controller responsible for determining the purposes and means of processing your personal information. You can find our contact details in the "Contact" section at the end of this Privacy Policy.

          Policy Updates & User Consent

          We may update this Privacy Policy periodically to reflect changes in our practices or services. Any revisions will be posted on our websites and app, with significant changes communicated via email notification. The effective date of any changes will be noted under the “Last updated” section of this Privacy Policy. By continuing to use our websites, app, or services after such updates, you consent to the revised terms. We encourage you to review this Privacy Policy regularly for the latest information on our privacy practices.

           </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Privecy;
