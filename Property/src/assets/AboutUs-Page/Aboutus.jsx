import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import video from "../imagess/digital.mp4";
import Reviews from '../Reviewss/Review.jsx';
import Popup from "../Popup/Popup.jsx";

// members-Images
import Member1 from "../imagess/Thiery.jpg";
import Member2 from "../imagess/Byiringiro.jpg";
import Member3 from "../imagess/Yannick.jpg";
import Member4 from "../imagess/Bissa.jpg";
import "./Aboutus.css";

function Aboutus() {
  return (
    <>
      <Header />
      <div className="About">
        <h1 className="myTitle" style={{fontSize: '60px'}}>About</h1>
        <p style={{ fontSize: "18px" }} id="myParagraph">
          Tekana, your trusted solution for seamless property management. We
          understand the challenges that come with managing properties, whether
          you’re a landlord handling multiple tenants or a renter trying to
          navigate lease agreements and maintenance requests. Our mission is to
          simplify and automate the entire rental process, making it stress-free
          and efficient for both property owners and tenants.
        </p>
      </div>
      <div className="link">
        <Link to="/" className="myLink">
          Home
        </Link>
        <p style={{ margin: "0 10px 0 10px" }}>/</p>
        <p className="myAbout">About</p>
      </div>
      {/* About Content */}
      <div className="myAbout-Content">
        {/* LeftmyAbout */}
        <div className="LeftmyAbout">
          <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            Who We Are
          </h1>
          <p style={{ fontSize: "18px" }}>
            We are committed to helping you save time, reduce paperwork, and
            streamline communication between landlords and tenants, all while
            offering transparency and convenience through our user-friendly
            platform.
          </p>
          {/* Background */}
          <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            Our Background
          </h1>
          <p style={{ fontSize: "18px" }}>
            Tekana is a comprehensive property management solution designed to
            streamline the relationship between landlords and tenants. Born out
            of the need for a more efficient, transparent, and simplified
            property management system, Tekana leverages modern technology to
            automate various tasks such as rent collection, maintenance
            requests, and communication between landlords and tenants. Whether
            managing a single property or multiple units, Tekana ensures
            seamless operations and empowers both parties with real-time data
            and updates, enhancing the property management experience for all.
          </p>
          {/* Vision */}
          {/* <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            Vision
          </h1>
          <p style={{ fontSize: "18px" }}>
            To be the leading property management platform that revolutionizes
            how landlords and tenants interact, providing a fully digital,
            hassle-free experience for property management in Rwanda and beyond.
          </p> */}
          {/* Mission */}
          <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            Vision
          </h1>
          <p style={{ fontSize: "18px" }}>
            Our mission is to provide a cutting-edge platform that simplifies
            property management through innovative digital solutions. Tekana
            aims to automate time-consuming tasks, foster better communication,
            and ensure transparency, making it easier for landlords and tenants
            to manage their properties effectively and efficiently.
          </p>
        </div>
        {/* LeftmyAbout */}
        <div className="RightmyAbout">
          <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            How It Work?
          </h1>
          <video src={video} autoPlay loop muted className="myVideo-about" />
        </div>
      </div>
      {/* Our Team */}
      <div className="About About2">
        <h1 className="myTitle Title">Our Team</h1>
        <p style={{ fontSize: "18px" }} className="myParagraph Paragraph">
          Tekana, your trusted solution for seamless property management. We
          understand the challenges that come with managing properties, whether
        </p>
      </div>
      <div className="OurTeam">
       <div id="Card">
        <img src={Member1} alt="" className="Member-Image"/>
        <h4 className="about-head">Thierry</h4>
        <p>Content Creator</p>
       </div>
       <div id="Card">
        <img src={Member2} alt="" className="Member-Image"/>
        <h4 className="about-head">Byiringiro</h4>
        <p>Web Developer</p>
       </div>
       <div id="Card">
        <img src={Member3} alt="" className="Member-Image"/>
        <h4 className="about-head">Yannick</h4>
        <p>Sales Manager</p>
       </div>
       <div id="Card">
        <img src={Member4} alt="" className="Member-Image"/>
        <h4 className="about-head">Bisos</h4>
        <p>Investor</p>
       </div>
      </div>
      {/* < Popup/> */}
      <Reviews/>
      <Footer/>
    </>
  );
}

export default Aboutus;
