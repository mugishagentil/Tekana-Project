
import { LuTableProperties } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Popup from "../Popup/Popup.jsx";
// images
import Img from '../imagess/Makuza.jpeg';
import Chic from '../imagess/Chic.jpeg';
import Phonex from '../imagess/Phonex.webp';
import House from '../imagess/House.jpg';
// icons
import { GiFamilyHouse } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { PiWarehouseBold } from "react-icons/pi";
// icons ends here
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Box.css'
import './LoginPopup.css'
function Box(){
    return(
        <>
    {/* <div className="rental-div" style={{width: '100%', textAlign:'center'}}>
      <h3 className="Block">Explore Rentals in Kigali</h3>
    </div> */}
    {/* Card */}
    {/* <Container className="Card-Conatiner" style={{gap: '5px'}}>
      <Row>
        <Col > <Link style={{textDecoration: 'none'}}><Card style={{ width: '18rem' }} className="Card-Col">
      <Card.Img variant="top" src={Img} style={{height: '23.5vh'}}/>
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title style={{fontSize: '19px', fontWeight: '300'}}>Makuza Peace Plaza </Card.Title>
        <Card.Text>
        KN 48 Street Kigali <br /> 3335+9R Kigali <br /> Office, Appartiment and Commercial
        </Card.Text>
      </Card.Body>
    </Card></Link> </Col>

        <Col><Link style={{textDecoration: 'none'}}><Card style={{ width: '18rem' }} className="Card-Col">
      <Card.Img variant="top" src={Chic} style={{height: '23.5vh'}}/>
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title style={{fontSize: '19px', fontWeight: '300'}}>Chic Building</Card.Title>
        <Card.Text>
        KN 48 Street Kigali <br /> 4879R Kigali <br /> Office, Appartiment and Commercial
        </Card.Text>
      </Card.Body>
    </Card> </Link> </Col>

    <Col> <Link style={{textDecoration: 'none'}}> <Card style={{ width: '18rem' }} className="Card-Col">
      <Card.Img variant="top" src={ Phonex} style={{height: '23.5vh'}}/>
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title style={{fontSize: '19px', fontWeight: '300'}}>Phoenix Apartment </Card.Title>
        <Card.Text>
        KN 48 Street Kigali <br />  KK 18 Ave, Kigali <br /> Office, Appartiment and Commercial
        </Card.Text>
      </Card.Body>
    </Card> </Link></Col>

    <Col> <Link style={{textDecoration: 'none'}}><Card style={{ width: '18rem' }} className="Card-Col">
      <Card.Img variant="top" src={House} style={{height: '23.5vh'}}/>
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title style={{fontSize: '19px', fontWeight: '300'}}>Charming Home </Card.Title>
        <Card.Text>
        KN 48 Street Kigali <br /> 456+9RB Kigali <br /> Office, Appartiment and Commercial
        </Card.Text>
      </Card.Body>
    </Card></Link></Col>
      </Row>
      </Container> */}
      
      <div className="button-div" style={{width: '100%', textAlign: 'center', marginTop: '30px'}}>
      <Button variant="primary" style={{padding: '15px', backgroundColor: '#4b48ac'}} className='Read-Btn Block'><Link to='property' style={{color: '#ffff', textDecoration: 'none'}}>View More</Link></Button>
      </div>
 
    {/* Iconn Part start Here */}
    
    {/* <div className="Image-Box ">

    <div className="left-box Block">
      <h1><FaHouseChimney/><span className='Property'>Residentials</span></h1>
    </div>
    <div className="left-box Block">
      <h1><GiFamilyHouse/><span className='Property'>Appartment</span></h1>
    </div>
    <div className="left-box Block">
      <h1><PiWarehouseBold/><span className='Property '>Commercial</span></h1>
    </div>
  </div> */}

  {/* Pop Login Form */}
  {/* Pop Login Form */}
<Popup/>
    </>
    )
}
export default Box