
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/Commercial.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import '../Commercial/Commercial.css'
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Commercial2() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>MAINTENANCE REQUESTS</h3>
      <h1><span style={{fontWeight: '700'}}>Stay Organized,</span> <br /> Get More Done</h1>
      <p>Receive and respond to maintenance tickets as soon as they come through to provide peace of mind to you and your tenants</p>
      <h4><MdVerified /> <span>Say goodbye to printed work orders</span></h4>
      <h4><MdVerified /> <span>Complete more requests, more quickly</span></h4>
      <h4><MdVerified /> <span>Give tenants professional, fast response times</span></h4>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Creating <br /> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>Work Orders</span></h2>
        <h3>Upload Images and Video</h3>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>When it comes to maintenance issues, a picture is worth a thousand words. But a video? That’s worth one less trip to the workshop. Tenants can submit their maintenance tickets with a category, description, images, and video.</p>

        <h3>Sometimes It Takes a Village</h3>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Info is shared with you and any maintenance personnel required. It’s stored for easy access and future reference so your entire team can coordinate and knock out tickets quickly and effectively.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    <Popup/>

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Provide Your Renters <br /> <span style={{fontWeight: '800'}} className='Block'>  Peace of Mind </span></h2>
        <h2>Status Updates</h2>
        <p style={{fontSize: '18px'}} className='Block'>Often, for tenants, the difference between a great landlord and a bad one is as simple as response times. Even if you fix a problem quickly, if you leave your renter in the dark the whole time, they won’t have a great experience.</p>
         
    </div>
    <div className="right-Customer">
    <Col><img src={HomeImg} alt="" className='HomeImg Block'/></Col>
    </div>
   </div>

   <div className="online-container" style={{marginBottom: '150px'}}>
   <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
    <div className="leftside-container">
      <h1> Manage Work <br /> Orders Like a Pro </h1>
      <h2>Maintenance Assignment</h2>
      <p>As a real estate investor, you know that a house is more than drywall deep. As you or your maintenance team looks into a problem, that problem often changes. Keep track of your work orders and tasks right in Innago.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial2;