
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdFreeCancellation } from "react-icons/md";
import './Component.css'

function Component1() {
  return (
    <>
   <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>ONLINE RENTAL PAYMENTS</h3>
      <h1>Get Your <br /> 
      <span style={{fontWeight: '700'}}>Payments Sooner</span></h1>
      <p style={{fontSize: "17px", color: '##000000ef', fontWeight: '300'}}>Say goodbye to door-to-door collections, bank trips, and delays. Tekana modernizes your rental payments, making collection quick and hassle-free in the digital age."</p>
      <h4 style={{fontSize: '20px'}}><AiOutlineTransaction /> <span>Instant Transactions</span></h4>
      <h4 style={{fontSize: '20px'}}><RiSecurePaymentLine /> <span>Secure Payments</span></h4>
      <h4 style={{fontSize: '20px'}}><MdFreeCancellation /> <span>Hassle-Free Billing</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>
    </>
  );
}

export default Component1;