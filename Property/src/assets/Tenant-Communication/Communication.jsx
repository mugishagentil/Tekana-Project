
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
import { TiTick } from "react-icons/ti";
import './Communication.css'
import { MdVerified } from "react-icons/md";
import Popup from "../Popup/Popup.jsx";
import Form from 'react-bootstrap/Form';

function Component1() {
  return (
    <>
    <Header/>
  
    <div className="online-container">
    <div className="leftside-container">
      <h3 className='online-rental1'>TENANT COMMUNICATION</h3>
      <h1>Tekana Enhances <br /> 
      <span style={{fontWeight: '700', color: '#4B48AC'}}>Tenant 
      Communication</span> Effectively.</h1>
      <p>Engage in direct chats, share community announcements, automate messages, and manage various communication channels—all from one streamlined, connected platform.</p>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

    <div className="contant-container">
    <h2 className='long-term Block'>CHAT & ANNOUNCEMENTS</h2>
        <h2 className='Block'>
        Foster a sense of community by keeping tenants informed and engaged</h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>With Tekana, sharing announcements with your tenants is a breeze. Hosting a community event? Spread the word with just a few clicks. Foster engagement with likes and comments, or switch to direct chat for private conversations.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
   {/* Legal/Organization */}
   <div className='Legal-Organization'>
    <div className='Left-Organization'>
    <h2 className='online-rental Block'>LEGAL/ORGANIZATION</h2>
    <h2 className='Block'>Know Where Your <br />Records Are When You <br />Need Them</h2>
    <p>Tekana keeps a detailed record of all communication between you and your tenants, ensuring that you can easily resolve any disputes. Access signed documents, files, insurance policies, and more—all from a single, convenient platform.</p>
    </div>
    <div className='Right-Organization'>
    <img src={HomeImg} alt="" className='HomeImgs Block'/>
    </div>
   </div>
   {/* <Popup/> */}

   <div className="contant-container">
    <h2 className='long-term Block'>AUTOMATION</h2>
        <h2 className='Block'>Just Because It's Important, <br /> Doesn't Mean It Has To Be Hard</h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>Email, fax, text, phone calls - woof. Keeping track of how you sent which information to your
        tenants when can feel more complicated than remodeling your latest property. But it doesn't
        have to be. Let Innago make communication and automation seamless.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default Component1;