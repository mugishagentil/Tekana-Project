import React from "react";
import Header from "../Header/Header.jsx";
import HomeImg from "../imagess/beautiful-home.png";
import "./Property.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Footer from "../Footer/Footer.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Img from "../imagess/Makuza.jpeg";
import { Link } from "react-router-dom";
// Imagess
import Img2 from "../imagess/modern.jpg";
import Apartment1 from "../imagess/Apartiment1.webp";
import Apartment2 from "../imagess/Apartment2.webp";
import Apartment3 from "../imagess/Apartment3.webp";
import Apartment4 from "../imagess/Apartment4.webp";
import Residential from "../imagess/Residential.webp";
import Residential2 from "../imagess/Residential2.webp";
import Residential3 from "../imagess/Residential3.webp";
import Residential4 from "../imagess/Residential4.webp";
import Commercial1 from "../imagess/Commercial1.jpg";
import Commercial2 from "../imagess/Commercial2.jpg";
import Commercial3 from "../imagess/Commercial4.jpg";
// Popup
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Property() {
  return (
    <>
      <Header />
      <div className="online-container">
        <div className="leftside-container">
          <h3 className="online-rental1">PROPERTIES WE HAVE</h3>
          <h1>
            Explore Our <br />
            <span style={{ fontWeight: "700" }}> Property We Manage</span>
          </h1>
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>
          "Browse Our Managed Properties "Explore a diverse selection of properties we manage with dedication and professionalism, ensuring a comfortable experience for landlords and tenants alike. Whether residential or commercial, our tailored management services guarantee a smooth experience."
          </p>
        </div>
        <div className="rightside-container">
          <img src={HomeImg} alt="" className="OnlineHomeImg" />
        </div>
      </div>
      <div className="Properties-down-div">
        <h1>What You Are Looking For?</h1>
        {/* Select Propety You Want */}
        <Tabs
          defaultActiveKey="apartment"
          id="justify-tab-example"
          className="mb-3 mb"
          justify
        >
          {/* Apartment Tab Start Here */}
          <Tab eventKey="apartment" title="Apartment">
          <div className="div-paragraph">
          <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '18px', fontWeight: '500'}}>Apartment:</span> Offering well-maintained and modern apartments, Tekana ensures a comfortable living experience with streamlined rent payments and fast response to maintenance requests.</p></div>
            {/* Card */}
            <Container
              className="Card-Conatiner"
              style={{ gap: "1px", marginTop: "80px" }}
            >
              <Row id="Row">
                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card  className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Apartment1} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Apartment Grazia Apartment Hotel
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Apartment2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        IZA Serene city centre{" "}
                      </Card.Title>
                      
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Apartment3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kigali Wings Apartment{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Apartment4} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        MAYA Apartments{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              </Row>
            </Container>

            {/* Card */}
          </Tab>
          {/* Apartment Tab Ends Here */}

          {/* Commercail Tab Start Here */}
          <Tab eventKey="Commercial" title="Commercial">
            {/* Card */}
            <div className="div-paragraph">
            <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Commercial:</span> We manage prime commercial spaces that cater to businesses of all sizes, providing a hassle-free leasing process and comprehensive property management services.</p></div>
            <Container
              className="Card-Conatiner"
              style={{ gap: "5px", marginTop: "80px" }}
            >
              <Row>
                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Commercial1} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Office In Remera{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Commercial2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Commercial House Nyabugogo{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Commercial3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Silverback Mall{" "}
                      </Card.Title>
                      
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Makuza Peace Plaza{" "}
                      </Card.Title>
                      
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              </Row>
            </Container>

            {/* Card */}
          </Tab>
          {/* Commercail Tab Ends Here */}

          {/* Residential Tab Start Here */}
          <Tab eventKey="Residential" title="Residential">
            {/* Card */}
            <div className="div-paragraph">
            <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Residential:</span> Tekana makes it easy to find and manage your ideal residential property, whether it's a family home or a cozy rental. Our platform simplifies every aspect of your tenancy.</p></div>
            <Container
              className="Card-Conatiner"
              style={{ gap: "5px", marginTop: "80px" }}
            >
              <Row>
                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kacyiru House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >Kabeza House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Rebero House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential4} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kabuga House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              </Row>
            </Container>

            {/* Card */}
          </Tab>
          {/* Student Tab Ends Here */}

          <Tab eventKey="Student" title="Student">
            {/* Card */}
            <div className="div-paragraph">
            <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Schools:</span> Our Academic Stay Properties housing options are designed with convenience in mind, offering affordable and accessible accommodations close to academic institutions.</p></div>
            <Container
              className="Card-Conatiner"
              style={{ gap: "5px", marginTop: "80px" }}
            >
              <Row>
                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kacyiru House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >Kabeza House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Rebero House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential4} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kabuga House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              </Row>
            </Container>

            {/* Card */}
          </Tab>
          {/* Parking Tab Ends Here */}

          <Tab eventKey="Parking" title="Parking ">
            {/* Card */}
            <div className="div-paragraph">
            <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}><span style={{color: '#4B48AC', fontSize: '20px', fontWeight: '500'}}>Parking:</span> We provide secure, well-located parking spaces, making vehicle management convenient and accessible for tenants and property owners alike.</p></div>
            <Container
              className="Card-Conatiner"
              style={{ gap: "5px", marginTop: "80px" }}
            >
              <Row>
                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kacyiru House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential2} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >Kabeza House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential3} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Rebero House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>

                <Col id="my-col">
                <Link style={{textDecoration: 'none'}}>
                  <Card className="Card-Col Apartment-Card">
                    <Card.Img variant="top" src={Residential4} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title
                        style={{ fontSize: "19px", fontWeight: "300" }}
                      >
                        Kabuga House{" "}
                      </Card.Title>
                     
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              </Row>
            </Container>

            {/* Card */}
          </Tab>
          {/* Parking Tab Ends Here */}
        </Tabs>
      </div>
      {/* <Popup/> */}

      {/* The Perfect Place to Manage Your Property-Part */}
      <div className="Perfect-Place">
        <h2 className="Manage-Your-Property">
          The Perfect Place to Manage Your Property
        </h2>
        <p className="the-market" style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>
          Work with the best suite of property management tools on the market.
        </p>

        {/* Image Mix With Words Division */}
        <div className="myContainer">
          <div className="Up-container">
            <div className="myContent">
              <h4 className="Header-Four">Advertise Your Rental</h4>
              <p
                style={{ color: "#4a4a4a", fontWeight: "100" }}
                className="MyParagraph"
              >
                Connect with more than 1.2 million renters looking for new homes
                using our comprehensive marketing platform.
              </p>
              <Link to="/login" className="myLink">
                Stay Informed
              </Link>
            </div>
            <div className="myImage2">
              <img src={Img2} alt="" className="Property-Image" />
            </div>
          </div>
          <div className="Down-container">
            {" "}
            <div className="myImage2">
              <img src={Img2} alt="" className="Property-Image" />
            </div>
            <div className="myContent">
              <h4 className="Header-Four">Lease 100% Online</h4>
              <p
                style={{ color: "#4a4a4a", fontWeight: "100" }}
                className="MyParagraph"
              >
                Accept applications, process rent payments online, and sign
                digital leases all powered on a single platform.
              </p>
              <Link to="/login" className="myLink">
                Manage Your Property
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <Footer />
    </>
  );
}

export default Property;
