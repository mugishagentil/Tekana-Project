
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
      <h1> Tekana easy to use <br />platform helps you <br /> conquer <span style={{fontWeight: '700'}}> Commercial <br /> Renting</span> </h1>
      <p> No unnecessary features or fillers to slow you down, just a sleek and effective way to enhance your commercial portfolio. Check out how Tekana can boost your efficiency and professionalism.</p>
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
        <h2>Custom <span style={{fontWeight: '800'}} className='Block'>  Leases </span></h2>
        <p style={{fontSize: '18px'}} className='Block'>Commerical leases are often significantly more complex than their residential counterparts, and for good reason. There is simply a lot more to negotiate.</p>

        <p style={{fontSize: '18px'}} className='Block'>Fortunately, Tekana allows you to add any number of custom lease agreements to be signed in digitally. And any leases signed offline can be uploaded into the system so your contract is never far from reach.</p>
    </div>
    <Popup/>
    <div className="right-Customer">
    <Col><img src={HomeImg} alt="" className='HomeImg Block' id='myImage'/></Col>
    </div>
   </div>

   <div className="online-container" style={{marginBottom: '150px'}}>
   <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
    <div className="leftside-container">
      <h1> Variable <span style={{fontWeight: '700'}}>Rent</span> </h1>
      <p>The entire rental process is in one simple to use and easily accessible place. Create your custom application and screen tenants. Upload your lease and sign it digitally. Generate invoices and collect rent. Managing your residential properties has never been easier, from start to finish.</p>
    </div>
   </div>
    <Footer/>
    </>
  );
}

export default Commercial2;