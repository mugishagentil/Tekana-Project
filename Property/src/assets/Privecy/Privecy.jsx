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
          BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION, TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR INFORMATION (COLLECTIVELY, “USE OF YOUR INFORMATION”) AS DESCRIBED IN THIS PRIVACY POLICY AND OUR TERMS OF USE WHICH MAY BE ACCESSED HERE: <Link style={{color: '#4b48ac', textDecoration: 'none'}}>https://www.tekana.com/</Link> IF YOU DO NOT, OR NO LONGER, AGREE WITH OR CONSENT TO THIS PRIVACY POLICY AND OUR TERMS OF USE YOU MAY NOT ACCESS OR USE OUR SERVICES. FURTHERMORE, FOR USERS OF OUR SERVICES, WE RELY UPON THE LEGAL GROUNDS FOUND IN THE SECTION ENTITLED “THE LEGAL BASIS AND REASONS FOR COLLECTION AND PROCESSING YOUR PERSONAL INFORMATION” FOUND HEREINAFTER IN THIS PRIVACY POLICY
          </h5>
          <hr />
          <p style={{marginBottom: '200px'}}>
            "We at Tekana, LLC, the owner and operator of www.tekana.com and my.tekana.com (the “Website(s)” or “Site(s)”), and our mobile application Tekana (the App), hereafter collectively referred to in this Privacy Policy as “Tekana”, “us”, “our” or “we”, respect the privacy of your personal information and, as such, make every effort to ensure your information is protected and remains private. We have provided this Privacy Policy to explain how we collect, use, share, and protect information about the users of our Website or our App (hereafter referred to as “user”, “you” or “your”). We will not use or share your personal information with anyone except as described in this Privacy Policy. This Privacy Policy will inform you about the types of personal data we collect, the purposes for which we use the data, the ways in which the data is handled, and your rights with regard to your personal data. Tekana collects information about you when you use our Website or App to access our services, and other online products and services (collectively, the “Services”) and through other interactions and communications you have with us. The term Services includes, collectively, various applications, websites, widgets, email notifications, and other mediums, or portions of such mediums, through which you have accessed this Privacy Policy. For purposes of this Privacy Policy, “Your Information” or “Personal Data” means information about you, which may be of a confidential or sensitive nature and may include personally identifiable information (“PII”) and/or financial information. PII means individually identifiable information that would allow us to determine the actual identity of a specific living person, while sensitive data may include information, comments, content, and other information that you voluntarily provide. A Data Controller is the company or natural person who (either alone or jointly with other parties) determines the purposes for which and the manner in which any personal information is, or will be, processed. The Data Controller for Tekana is Tekana, LLC, and our contact details are set out in the Contact section at the end of this Privacy Policy. We may change this Privacy Policy from time to time. If we decide to change this Privacy Policy, we will inform you by posting the revised Privacy Policy on the Website and in our App. If the changes to the Privacy Policy are significant, we will send an email notice to you and may request that you accept the revised Privacy Policy terms. Changes will go into effect on the “Last updated” date shown at the end of this Privacy Policy. By continuing to use the Website, App, or our Services, you consent to the revised Privacy Policy. We encourage you to periodically review the Privacy Policy for the latest information on our privacy practices."
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Privecy;
