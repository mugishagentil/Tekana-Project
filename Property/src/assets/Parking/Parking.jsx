import React from 'react'
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Parking() {
  return (
    <> <Header/> 
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>PARKING PROPERTIES</h3>
      <h1>Receive your <br /> 
      <span style={{fontWeight: '700'}}>Money Faster</span></h1>
      <p>No more knocking on doors, running to the bank, and waiting on your funds to arrive. Innago brings your rental collection into the 21st century.</p>
      <h4><MdVerified /> <span>On-time collection</span></h4>
      <h4><MdVerified /> <span>On-time collection</span></h4>
      <h4><MdVerified /> <span>On-time collection</span></h4>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Never Miss a <br></br> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px'}}>Payment Again</span></h2>
        <h2 className='Block'>Automated Payments</h2>
        <p style={{fontSize: '18px', color: '#4f4f4f'}} className='Block'>Tenants love signing up for automated rent payment, and you’ll love it when they do too. Fewer tenants will forget to pay and more rental payments will come in on time.</p>
        <h2 className='Block'>Payment Reminder Alerts</h2>
        <p className='Block'>Tenants receive automatic reminders and notifications when rent is due. A convenient pay now button within the email makes submitting payments on time easy, all it takes is a simple click.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */} 
    </Container>
    <Popup/>

    <div className="contant-container" style={{marginBottom: '150px'}}>
        <h2 className='Block'>Simple, Automated Billing <br></br>
        <span>Recurring & Custom Invoices</span>
        </h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>Prorate, credit, and quickly charge extra if needed. Customize the frequency for automated <br></br> invoices. Charge your tenants monthly, weekly, or any other payment interval you can dream up.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
   <Footer />
   </>
  )
}

export default Parking