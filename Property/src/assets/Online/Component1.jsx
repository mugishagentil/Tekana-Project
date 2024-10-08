
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImg from '../imagess/beautiful-home.png';
import Img from '../imagess/Hotel2.png';
import { MdVerified } from "react-icons/md";
import './Component.css'

function Component1() {
  return (
    <>
   <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>ONLINE RENTAL PAYMENTS</h3>
      <h1>Receive your <br /> 
      <span style={{fontWeight: '700'}}>Money Faster</span></h1>
      <p>No more knocking on doors, running to the bank, and waiting on your funds to arrive. Innago brings your rental collection into the 21st century.</p>
      <h4><MdVerified /> <span>On-time collection</span></h4>
      <h4><MdVerified /> <span>On-time collection</span></h4>
      <h4><MdVerified /> <span>On-time collection</span></h4>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>
    </>
  );
}

export default Component1;