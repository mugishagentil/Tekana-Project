
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
      <h1>Innago Makes <br /> 
      <span style={{fontWeight: '700', color: '#4B48AC'}}>Tenant 
      Communication</span> Matter</h1>
      <p>Chat directly, post community announcements, leverage
      automation, and manage multiple communication channels
      from a single, seamlessly connected interface.</p>
    </div>
    <div className="rightside-container">
      <img src={HomeImg} alt="" className='OnlineHomeImg'/>
    </div>
   </div>

    <div className="contant-container">
    <h2 className='long-term Block'>CHAT & ANNOUNCEMENTS</h2>
        <h2 className='Block'>Build A Community Around Conversation</h2>
        <p style={{fontSize: '20px', color: '#616161'}} className='Block'>Innago makes it easy to share announcements with your tenants. Got an upcoming
        community barbecue? Let everyone know with just a few clicks. Encourage engagement with
        likes and comments, and chat directly when the conversation needs to go private.</p>
        <img src={Img} alt="" className='HomeImgTwo Block'/>
       </div>
   {/* Legal/Organization */}
   <div className='Legal-Organization'>
    <div className='Left-Organization'>
    <h2 className='online-rental Block'>LEGAL/ORGANIZATION</h2>
    <h2 className='Block'>Know Where Your <br />Records Are When You <br />Need Them</h2>
    <p>Innago stores all communication records between you and
    your tenant so you can easily get to the bottom of a dispute.
    Signed documents, files, insurance policies and anything else
    you need are all accessible for you on a single platform.</p>
    </div>
    <div className='Right-Organization'>
    <img src={HomeImg} alt="" className='HomeImgs Block'/>
    </div>
   </div>
   <Popup/>

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