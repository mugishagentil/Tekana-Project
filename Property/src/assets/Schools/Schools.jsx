import React from 'react'
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { BsAward } from "react-icons/bs";
import { FcAutomatic } from "react-icons/fc";
import { GiTelepathy } from "react-icons/gi";
// Popup
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Student() {
  return (
    <> <Header/> 
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>SCHOOLS PROPERTIES</h3>
      <h1>Simplify School <br /> 
      <span style={{fontWeight: '700'}}>Hostel Property Management</span></h1>
      <p>Managing schools and hostel properties just got easier with Tekana. Our platform provides a streamlined solution for property owners and managers to oversee student accommodations efficiently, ensuring a seamless experience for students, parents, and administrators.</p>
      <h4><BsAward /> <span>Hassle-free Management</span></h4>
      <h4><FcAutomatic /> <span>Automated Payments</span></h4>
      <h4><GiTelepathy /> <span>Efficient Communication</span></h4>
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
    {/* <Popup/> */}

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

export default Student