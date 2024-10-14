
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

function Apartment() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>APARTMENT PROPERTIES</h3>
      <h1> Your Trusted Solution for Apartment <span style={{fontWeight: '700'}}> Complex Management <br /> Renting</span> </h1>
      <p>Managing apartment complexes can be demanding, whether you oversee a small number of units or an entire high-rise building. Tekana is here to simplify your operations, offering a user-friendly platform that keeps everything you need in one place.</p>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Automated Reminders <br /> <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>& Notifications:</span></h2>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>Keep your tenants informed with automated reminders for rent due dates, lease renewals, and community updates. This helps you maintain a positive relationship with your tenants by ensuring they always know what’s going on.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Streamlined Lease<span style={{fontWeight: '800'}} className='Block'>  Management:</span></h2>
        <p style={{fontSize: '18px'}} className='Block'>Manage lease agreements and track renewals without the hassle of paperwork. Tekana’s digital lease management tools make it easy to keep track of important dates, terms, and tenant responsibilities, ensuring that everything is in order.</p>

        {/* <p style={{fontSize: '18px'}} className='Block'>Fortunately, Tekana allows you to add any number of custom lease agreements to be signed in digitally. And any leases signed offline can be uploaded into the system so your contract is never far from reach.</p> */}
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
      <h1> Ready to Enhance Your <span style={{fontWeight: '700'}}> Apartment Management?</span> </h1>
      <p>Start your journey with Tekana today and discover how our platform can transform your management experience. Our dedicated team is here to support you every step of the way, ensuring that you and your tenants enjoy a stress-free, connected living environment.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Apartment;