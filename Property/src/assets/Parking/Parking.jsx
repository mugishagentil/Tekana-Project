import React from 'react'
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';
import { LuAlignVerticalSpaceBetween } from "react-icons/lu";
import { BsArrowBarRight } from "react-icons/bs";
import { GiTimeBomb } from "react-icons/gi";

function Parking() {
  return (
    <> <Header/> 
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>PARKING PROPERTIES</h3>
      <h1>Simplifying Parking  <br /> 
      <span style={{fontWeight: '700'}}>Property Management</span></h1>
      <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Managing parking properties can be a challenging task, especially when it comes to keeping track of space availability, managing reservations, and ensuring timely payment collection. Tekana is here to transform the way you handle parking spaces, making it easier and more efficient than ever.</p>
      <h4 style={{fontSize: '20px'}}><LuAlignVerticalSpaceBetween /> <span>Space Optimization</span></h4>
      <h4 style={{fontSize: '20px'}}><BsArrowBarRight /> <span>Seamless Reservations</span></h4>
      <h4 style={{fontSize: '20px'}}><GiTimeBomb/> <span>Timely Payments</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

   <Container>
      {/* Component-One */}
      <Row>
      <Col><img src={Img} alt="" className='HomeImg Block'/></Col>
        <Col className='Left-Row'>
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Real-Time<br></br> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Space Tracking</span></h2>
        {/* <h2 className='Block'>Automated Payments</h2> */}
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}} className='Block'>With Tekana, you can monitor the availability of each parking space in real time. Our platform provides a clear overview of occupied and available spaces, helping you optimize space utilization.</p>
        <h2 className='Block'>Payment Reminder Alerts</h2>
        <p className='Block' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Tenants receive automatic reminders and notifications when rent is due. A convenient pay now button within the email makes submitting payments on time easy, all it takes is a simple click.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */} 
    </Container>
    {/* <Popup/> */}

    <div className="contant-container" style={{marginBottom: '150px'}}>
        <h2 className='Block'>Simple, Automated Billing <br></br>
        <span>Recurring & Custom Invoices</span>
        </h2>
        <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}} className='Block'>Prorate, credit, and quickly charge extra if needed. Customize the frequency for automated <br></br> invoices. Charge your tenants monthly, weekly, or any other payment interval you can dream up.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
   <Footer />
   </>
  )
}

export default Parking