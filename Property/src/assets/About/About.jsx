import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../imagess/Makuza.jpeg";
import { Link } from "react-router-dom";
// Images
import Apartment1 from "../imagess/Apartiment1.webp";
import Apartment2 from "../imagess/Apartment2.webp";
import Commercial1 from "../imagess/Commercial1.jpg";
import Commercial2 from "../imagess/Commercial2.jpg";
import Residential from "../imagess/Residential.webp";
import Residential2 from "../imagess/Residential2.webp";

function About() {
  return (
    <Container className='About-Container' id='About-Container'>
    <Row id='Row'>
      <Col className='Left-About' id='Left-About'>
      {/* About Content */}
      <h1 className='About-Tekana' style={{color: '#4b48ac', }}>About Tekana System</h1>
      <p className='Tekana-Paragraph' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Tekana, your trusted solution for seamless property management. We understand the challenges that come with managing properties, whether you’re a landlord handling multiple tenants or a renter trying to navigate lease agreements and maintenance requests. Our mission is to simplify and automate the entire rental process, making it stress-free and efficient for both property owners and tenants.</p>
      <h1 className='About-Tekana' id='Tekana-Paragraph'style={{color: '#4b48ac'}}>Who We Are</h1>
      <p className='Tekana-Paragraph' id='Tekana-Paragraph' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>We are committed to helping you save time, reduce paperwork, and streamline communication between landlords and tenants, all while offering transparency and convenience through our user-friendly platform.</p>
      </Col>
      <Col className='Rigth-About'>
      <h1 className='About-Tekana' style={{color: '#4b48ac'}}>What You Are Looking For??</h1>
      <Tabs
      defaultActiveKey="apartment"
      id="uncontrolled-tab-example"
      className="mb-4 mb3"
    >
        
        {/* Apartment-Part */}
      <Tab eventKey="apartment" title="Apartment">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '18px', fontWeight: '500'}}>Apartment:</span> Offering well-maintained and modern apartments, Tekana ensures a comfortable living experience with streamlined rent payments and fast response to maintenance requests.</p>
        <div class=" text-center">
        <div class="row-1">
            {/* Apartment-part */}
        <div class="col-1">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{ width: "16rem" }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment1} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      > 
                        Apartment Grazia 
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        <div class="col-2">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment2} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        IZA Serene city centre
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        </div>
        </div>
      </Tab>
        {/* Commercial-Part */}
      <Tab eventKey="commercial" title="Commercial">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Commercial:</span> We manage prime commercial spaces that cater to businesses of all sizes, providing a hassle-free leasing process and comprehensive property management services.</p>

        <div class="text-center">
        <div id="myrow">
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Commercial1} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Office In Remera Rwanda
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Commercial2} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Commercial House Nyabugogo
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        </div>
        </div>
      </Tab>
      {/* Residential-Part */}
      <Tab eventKey="residential" title="Residential">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Residential:</span> Tekana makes it easy to find and manage your ideal residential property, whether it's a family home or a cozy rental. Our platform simplifies every aspect of your tenancy.</p>

        <div class="text-center">
        <div id="myrow">
            {/* Apartment-part */}
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Residential} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kacyiru House 
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Residential2} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >x
                        Kabeza House
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        </div>
        </div>
      </Tab>
      {/*   Student-Part */}
      <Tab eventKey="schools" title="Schools">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Schools: </span> Our Academic Stay Properties housing options are designed with convenience in mind, offering affordable and accessible accommodations close to academic institutions.</p>

        <div class="text-center">
        <div id="myrow">
            {/* Apartment-part */}
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment1} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Apartment Grazia 
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment2} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        IZA Serene city centre
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        </div>
        </div>
      </Tab>
      {/* Parking-Part */}
      <Tab eventKey="parking" title="Parking">
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Parking:</span> We provide secure, well-located parking spaces, making vehicle management convenient and accessible for tenants and property owners alike.</p>

        <div class="text-center">
        <div id="myrow">
            {/* Apartment-part */}
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment1} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Apartment Grazia 
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        <div class="col">
        <Link style={{textDecoration: 'none'}}>
            <Card style={{  width: "16rem"  }} className="Card-Col">
                    <Card.Img variant="top" src={Apartment2} style={{height: '20vh'}}/>
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        IZA Serene city centre
                      </Card.Title>
                </Card.Body>
            </Card>
        </Link>
        </div>
        </div>
        </div>
      </Tab>
    </Tabs>
      </Col>
    </Row>
  </Container>
  )
}

export default About


