import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import video from "../imagess/digital.mp4";
import Reviews from '../Reviewss/Review.jsx';
import Popup from "../Popup/Popup.jsx";
import { HiOutlineCube } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

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
        <h1 className="myTitle" style={{fontSize: '50px'}}>About Us</h1>
        <p style={{ fontSize: "18px", fontWeight: '300' }} id="myParagraph">
        At Tekana, we understand that managing properties can be complex and time-consuming. That’s why we’ve created a seamless solution for landlords, property managers, and tenants to easily manage properties, rentals, and communication—all in one place.
        </p>
      </div>
      {/* <div className="link">
        <Link to="/" className="myLink">
          Home
        </Link>
        <p style={{ margin: "0 10px 0 10px" }}>/</p>
        <p className="myAbout">About</p>
      </div> */}
      {/* About Content */}
      <div className="myAbout-Content">
        {/* LeftmyAbout */}
        <div className="LeftmyAbout">
          {/* Background */}
          <h1 className="About-Tekana" style={{ color: "#4b48ac" }}>
            Our Background
          </h1>
          <p style={{ fontSize: "18px", color: '##000000ef', fontWeight: '300' }}>
          Tekana is a complete property management solution designed to simplify landlord-tenant interactions. It addresses the need for a more efficient and transparent system by automating tasks like rent collection, maintenance requests, and communication. Whether managing one or multiple properties, Tekana ensures smooth operations with real-time data and updates, providing both landlords and tenants a seamless, modern experience in property management.
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
          <p style={{ fontSize: "18px", color: '##000000ef', fontWeight: '300' }}>
          Tekana is committed to saving time, reducing paperwork, and improving communication between landlords and tenants through our easy-to-use platform. We simplify property management with innovative digital solutions, automating tasks and ensuring transparency. Our goal is to streamline the process, making it efficient and convenient for both landlords and tenants to manage properties effortlessly.
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
     <div className="Our-Team-Div">
      <div className="Upper-Content">
        <h4>Meet The Team</h4>
        <div className="Complex-Line">
        <HiArrowLongRight />
          <HiOutlineCube /> 
          <HiArrowLongLeft />
        </div>
        <div className="Our-Team-Descriotion">
          <p style={{fontSize: "18px", color: '##000000ef', fontWeight: '300'}}>our strength lies in the expertise and dedication of our talented professionals. Meet the team that drives our mission to provide exceptional services across in Tekana System</p>
        </div>
        <div className="Down-Content">
        <Card style={{ width: '15rem'}} id="Card">
      <Card.Img variant="top" src={Member1} id="Card-Image"/>
      <Card.Body>
        <Card.Title id="Card-Title">Lewis Bosco</Card.Title>
        <Card.Text>
          IT Manager
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '15rem'}} id="Card">
      <Card.Img variant="top" src={Member2} id="Card-Image"/>
      <Card.Body>
        <Card.Title id="Card-Title">Byiringiro Urban</Card.Title>
        <Card.Text>
          Software Developer
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '15rem'}} id="Card">
      <Card.Img variant="top" src={Member3} id="Card-Image"/>
      <Card.Body>
        <Card.Title id="Card-Title">Cyussa Stessy</Card.Title>
        <Card.Text>
          Engeenier
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '15rem'}} id="Card">
      <Card.Img variant="top" src={Member4} id="Card-Image"/>
      <Card.Body>
        <Card.Title id="Card-Title">Ishimwe Jean Paul</Card.Title>
        <Card.Text>
          Sale Manager
        </Card.Text>
      </Card.Body>
      </Card>
        </div>
      </div>
     </div>
      {/* < Popup/> */}
      <Reviews/>
      <Footer/>
    </>
  );
}

export default Aboutus;
