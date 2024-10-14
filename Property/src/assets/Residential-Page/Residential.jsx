
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/Commercial.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import './Residential.css'
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';


function Commercial() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>RESIDENTIAL PROPERTIES</h3>
      <h1> <span style={{fontWeight: '700'}}>Why Choose Tekana </span> is for Your Residential Properties? </h1>
      <p>Experience stress-free management of your residential properties with Tekana. Whether you own single-family homes or multifamily units, we ensure that every aspect of your property is handled with care. From streamlined tenant communication to efficient rent collection and maintenance tracking, Tekana makes managing residential properties a breeze. Let us handle the details so you can focus on growing your investment.</p>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Simplified <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>Tenant Communication</span></h2>
        <p className='Block'>At Tekana, we know that clear and effective communication is key to maintaining positive tenant relationships.</p>
        <p className='Block'>Our platform keeps you connected with your tenants through direct chat, announcements, and automated reminders. Say goodbye to missed messages and ensure that your tenants always feel heard and valued.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    {/* <Popup/> */}

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Multiple <span style={{fontWeight: '800'}} className='Block'> Hassle-Free <br /> Rent Collection</span></h2>
        <p className='Block'>Tired of chasing down late payments or dealing with complicated payment processes? Tekana offers a streamlined solution for rent collection. With automated payment reminders and multiple payment options, your tenants can easily pay their rent on time, every time. Plus, you can track all payments in real-time from a single, easy-to-use dashboard.</p>
    </div>
    <div className="right-Customer">
    <Col><img src={HomeImg} alt="" className='HomeImg Block' id='myImage'/></Col>
    </div>
   </div>

   <div className="online-container" style={{marginBottom: '150px'}}>
   <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
    <div className="leftside-container">
      <h1>  Efficient <span style={{fontWeight: '700'}}>Maintenance Management</span> </h1>
      <p>Keep your properties in top condition without the headache of managing maintenance requests. Tenants can submit maintenance tickets with photos, videos, and detailed descriptions, making it easier for you to understand the issue. Tekana allows you to assign tasks to your maintenance team quickly and keep track of progress, ensuring that repairs are completed promptly and efficiently.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial;