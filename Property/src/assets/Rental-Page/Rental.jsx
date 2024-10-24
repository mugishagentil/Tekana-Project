
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx';
import Reviews from '../Reviewss/Review.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/beautiful-home.png';
import collection from '../imagess/collection.jpg';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoDocumentsOutline } from "react-icons/io5";
import './Rental.css'
// Popup
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Component1() {
  return (
    <>
    <Header/>
   
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>RENTER'S INSURANCE</h3>
      <h1>Safeguard Your Property, <br /> 
      <span style={{fontWeight: '700'}}>Secure Your Business</span></h1>
      <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Renter’s insurance offers cost-effective coverage, providing protection for tenants and landlords against property damage and potential legal issues. It's a smart choice for everyone in the rental process.</p>
      <h4 style={{fontSize: '20px'}}><TbDoorEnter /> <span>Set renter’s insurance requirements</span></h4>
      <h4 style={{fontSize: '20px'}}>< BiSolidPurchaseTag /> <span>Purchase or upload policies</span></h4>
      <h4 style={{fontSize: '20px'}}><IoDocumentsOutline /> <span>Track documents and status</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

    <div className="contant-container">
        <h2 className='Block'>Why Does Renter’s  <br></br>
        <span>Insurance Matter?</span>
        </h2>
        <p className='Block' style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>For a surprisingly low cost, renter’s insurance protects your valuable belongings, including electronics, furniture, and personal items. Plus, it provides coverage if your possessions accidentally cause damage to others.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
       {/* <Popup/> */}

    {/* Image-complex-part */}
    <div className="comolex" style={{textAlign: 'center'}}>
    <h2 className='Block'><span style={{fontWeight: '900'}}>Coverage</span> Details</h2>
    <img src={collection} alt="" className='collectionImg Block'/>
    </div>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default Component1;