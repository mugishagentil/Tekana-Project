
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
      <h1>Protect Your Property, <br /> 
      <span style={{fontWeight: '700'}}>Protect Your Business</span></h1>
      <p>Renter’s insurance is affordable coverage that protects tenants and landlords from both property damage and legal trouble. It’s a no-brainer for everyone involved in the rental process.</p>
      <h4><MdVerified /> <span>Set renter’s insurance requirements</span></h4>
      <h4><MdVerified /> <span>Purchase or upload policies</span></h4>
      <h4><MdVerified /> <span>Track documents and status</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

    <div className="contant-container">
        <h2 className='Block'>Why Care About Renter’s <br></br>
        <span>Insurance?</span>
        </h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>For an incredibly low premium, renter’s insurance covers the things you care about. From TVs and computers to sofas and plants. What’s more, if you or anything you own causes damage to someone else, renter’s insurance can cover you there, too.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
       <Popup/>

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