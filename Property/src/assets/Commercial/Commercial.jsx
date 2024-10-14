
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/Commercial.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import './Commercial.css'
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Commercial2() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>COMMERCIAL PROPERTIES</h3>
      <h1> Your Comprehensive <br />platform helps you <br /> Solution  <span style={{fontWeight: '700'}}> for Commercial <br /> Property Management</span> </h1>
      <p> Managing commercial properties comes with its own set of challenges, but with Tekana, you can navigate these complexities effortlessly. Our platform is designed to address the specific needs of office spaces, retail locations, and industrial properties, offering a streamlined approach to property management.</p>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>A Professional <br /> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>Experience</span></h2>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Your renters are running a business and they expect a professional experience for their rental. With Tekana clean and modern look and feel, your renters will be impressed with the level of polish you bring to your business.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Tailored Lease<span style={{fontWeight: '800'}} className='Block'>  Management</span></h2>
        <p style={{fontSize: '18px'}} className='Block'>Commercial leases often come with complex terms and conditions, but Tekana makes it easy to manage them all. Our platform allows you to customize lease agreements, track renewal dates, and automate rent adjustments. Stay on top of every lease detail without the paperwork hassle, ensuring that your tenants remain informed and compliant.</p>

        {/* <p style={{fontSize: '18px'}} className='Block'>Fortunately, Tekana allows you to add any number of custom lease agreements to be signed in digitally. And any leases signed offline can be uploaded into the system so your contract is never far from reach.</p> */}
    </div>
    {/* <Popup/> */}
    <div className="right-Customer">
    <Col><img src={HomeImg} alt="" className='HomeImg Block' id='myImage'/></Col>
    </div>
   </div>

   <div className="online-container" style={{marginBottom: '150px'}}>
   <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
    <div className="leftside-container">
      <h1> Financial Tracking <span style={{fontWeight: '700'}}> Made Simple</span> </h1>
      <p>3. Financial Tracking Made Simple
      Managing multiple commercial units means keeping a close eye on your financials. Tekana’s advanced financial tracking tools help you monitor rent payments, expenses, and cash flow effortlessly. Generate detailed reports to gain insights into your property’s performance and ensure that you’re always making informed business decisions.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial2;