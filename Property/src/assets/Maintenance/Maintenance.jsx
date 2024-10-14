
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
import './Maintenance.css'

function Commercial2() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>MAINTENANCE REQUESTS</h3>
      <h1><span style={{fontWeight: '700'}}>
      Stay Organized, </span> <br /> Achieve More</h1>
      <p>Promptly receive and address maintenance requests to ensure peace of mind for both you and your tenants.</p>
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
      <Row id='Create-Dev'>
      <Col><img src={Img} alt="" className='HomeImg Block'  /></Col>
        <Col className='Left-Row'>
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>
        Generating <br /> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>Work Orders</span></h2>
        <h3>Upload Images and Video</h3>
        <p className='Block'>When addressing maintenance concerns, a picture can convey a lot, but a video can eliminate unnecessary trips to the workshop. Tenants can submit their maintenance requests, including a category, detailed description, images, and videos.</p>

        <h3>Sometimes, Community Support Makes All the Difference.</h3>
        <p className='Block'>Information is readily shared with you and any necessary maintenance staff. It’s organized for easy access and future reference, allowing your entire team to collaborate and resolve tickets efficiently.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    {/* <Popup/> */}

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Provide Your Renters <br /> <span style={{fontWeight: '800'}} className='Block'>  Peace of Mind </span></h2>
        <h2>Status Updates</h2>
        <p className='Block'>For tenants, the distinction between a great landlord and a poor one often boils down to response times. Even if issues are resolved swiftly, lack of communication can leave renters feeling neglected, negatively impacting their overall experience.</p>
         
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
      <h1> 
      Efficiently Handle Work <br /> Orders with Expertise </h1>
      <h2>Maintenance Assignment</h2>
      <p>As a real estate investor, you understand that a property involves much more than just its surface. As you or your maintenance team investigate an issue, it can evolve in unexpected ways. Stay organized and monitor your work orders and tasks seamlessly within Innago.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial2;