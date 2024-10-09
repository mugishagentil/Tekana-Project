
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
      <h1> <span style={{fontWeight: '700'}}>Residential housing</span> is <br /> the bedrock of the US <br /> real estate market. </h1>
      <p>From multi-family apartments to single-family residentials, residential housing is the bedrock of the US real estate market. As you grow your portfolio for passive income, a retirement fund, or just for the challenge, you need tools that grow with you. Innago makes managing your rentals simpler than ever.</p>
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
        <h2 style={{color: '#242424', paddingBottom: '10px'}} className='Block'>Fast <span style={{fontSize: '40px', color: 'black', paddingTop: '5px', fontWeight: '800'}}>Funds Delivery</span></h2>
        <p style={{fontSize: '16px', color: '#4f4f4f',}} className='Block'>We deliver your funds fast. Whether the tenant pays by eCheck, or Credit / Debit Card, you’ll receive your money after just one business day.*</p>
        <p style={{fontSize: '14px', color: '#4f4f4f',}} className='Block'>*First time rental submissions are held for two extra days to help verify the funds are available and the tenant is not fraudulent.</p>
        </Col>
      </Row>
      {/* Component-Two */}
      {/* Component-Three */}
    </Container>
    <Popup/>

   <div className='Custom-Leases'>
    <div className="left-Customer">
        <h2>Multiple <span style={{fontWeight: '800'}} className='Block'> Bank <br /> Accounts and LLCs</span></h2>
        <p style={{fontSize: '18px'}} className='Block'>Many landlords use multiple bank accounts and formulate more than one LLC. Innago allows you to add as many accounts as you need and assign them on a property-by-property basis.</p>
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
      <h1> Screen, Sign, <span style={{fontWeight: '700'}}>Rent</span> </h1>
      <p>The entire rental process is in one simple to use and easily accessible place. Create your custom application and screen tenants. Upload your lease and sign it digitally. Generate invoices and collect rent. Managing your residential properties has never been easier, from start to finish.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial;